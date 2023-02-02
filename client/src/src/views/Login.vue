<script>
    import { ref,  inject} from 'vue'
    import axios from 'axios'
import router from '@/router'
import parallaxContainer from '../components/parallax-container.vue';
import parallaxElement from '../components/parallax-element.vue';

    export default {
    setup() {
        const userInfo = ref({
            username: "",
            password: ""
        });
        let errorCodes = [401, 403, 404, 500, 502, 503, 504];
        const loading = ref(false);
        const error = ref(false);
        const errorText = ref("");
        const isLoggedIn = inject("isLoggedIn");
        const setError = (err) => {
            loading.value = false;
            error.value = true;
            errorText.value = err;
            setTimeout(() => {
                error.value = false;
                errorText.value = "";
            }, 3000);
        };
        const handleConnect = () => {
            loading.value = true;
            let token = ''
            axios.post("http://localhost:8000/api/.user/login_check", userInfo.value)
                .then((onfulfilled) => {
                if (errorCodes.includes(onfulfilled.data.code)) {
                    setError(onfulfilled.data.message);
                }
                else {
                    token = onfulfilled.data.token
                    axios.get("http://localhost:8000/api/.user/user", {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                        .then((onfulfilled) => {
                        if (errorCodes.includes(onfulfilled.data.code)) {
                            setError(onfulfilled.data.message);
                        }
                        else {
                            console.log(onfulfilled.data);
                            localStorage.setItem("token", token);
                            isLoggedIn.value = true;
                            router.push("/");
                        }
                    })
                        .catch((onrejected) => {
                        console.log("error:", onrejected.response.message);
                        setError(onrejected.response.message);
                    });
                }
            })
                .catch((onrejected) => {
                console.log("error:", onrejected.response.message);
                setError(onrejected.response.message);
            });
        };

        const visible = (e) => {
            e.target.innerHTML == 'visibility' ? e.target.innerHTML = 'visibility_off' : e.target.innerHTML = 'visibility'
            let passwordInput = document.getElementById('password')
            passwordInput.type == 'password' ? passwordInput.type = 'text' : passwordInput.type = 'password'
        }

        return {
            userInfo,
            handleConnect,
            loading,
            error,
            errorText,
            visible
        };
    },
    components: {     
        parallaxContainer,
        parallaxElement,
    }
}
</script>

<template>
    <parallax-container class="parallax-overflow-container">
        <header class="login-page_header">
            <parallax-element :parallaxStrength="-3" :type="'depth'" class="login-page_header-icon">
                <img src="assets/images/logo.png" alt="">
                <p>Ride</p>
            </parallax-element>
        </header>
        <main>
                <parallax-element :parallaxStrength="0" :type="'translation'"  class="login-page_form-container">
                    <h1>Connexion</h1>
                    <p>Connectez-vous à l'aide des identifiants reçus dans votre mail d'activation.</p>
                    <form @submit.prevent="handleConnect">
                        <div class="input-group">                
                            <label for="username">Identifiant</label>
                            <input type="email" name="username" v-model="userInfo.username">
                        </div>
                        <div class="input-group">                
                            <label for="password">Mot de passe</label>
                            <input type="password" name="password" id="password" v-model="userInfo.password">
                            <span class="passwordToggler material-symbols-outlined" @click="visible($event)">visibility</span>
                        </div>
                        <parallax-element :parallaxStrength="10" :type="'depth'">
                            <div v-if="loading" class="loading-container">
                                <span class="loading material-symbols-outlined">cached</span>
                            </div>
                            <input v-else :class="error ? 'error' : ''" type="submit" value="Connexion">
                        </parallax-element>
                    </form>
                    <span class="error-text" v-if="errorText" v-html="errorText"></span>
                </parallax-element>
        </main>
    </parallax-container>
</template>