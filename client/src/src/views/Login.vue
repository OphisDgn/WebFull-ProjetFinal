<script>
    import { ref,  inject} from 'vue'
    import axios from 'axios'
import router from '@/router'


    export default {
        setup() {
            const userInfo = ref({
                username: '',
                password: ''
            })

            let errorCodes = [401, 403, 404, 500, 502, 503, 504]

            const loading = ref(false)
            const error = ref(false)

            const errorText = ref("")

            const isLoggedIn = inject('isLoggedIn')

            const setError = (err) => {
                error.value = true
                errorText.value = err
                setTimeout(() => {
                    error.value = false
                    errorText.value = ""
                }, 3000);
            }

            const handleConnect = () => {
                loading.value = true
                axios.post('http://localhost:8000/api/.user/login_check', userInfo.value)
                .then((onfulfilled) => {
                    loading.value = false
                    if(errorCodes.includes(onfulfilled.data.code)) {
                        setError(onfulfilled.data.message)
                    } else {
                        axios.get('http://localhost:8000/api/.user/user', {
                            headers: {
                                'Authorization': `Bearer ${onfulfilled.data.token}`
                            }
                        })
                        .then((onfulfilled) => {
                            loading.value = false
                            if(errorCodes.includes(onfulfilled.data.code)) {
                                setError(onfulfilled.data.message)
                            } else {
                                console.log(onfulfilled.data)
                                isLoggedIn.value = true
                                router.push('/')
                            }
                        })
                        .catch((onrejected) => {
                            loading.value = false
                            console.log("error:", onrejected.response.message)
                            setError( onrejected.response.message)
                        }
                    )}
                })
                .catch((onrejected) => {
                    console.log("error:", onrejected.response.message)
                    loading.value = false
                    setError(onrejected.response.message)  
                })
            }

            return {
                userInfo,
                handleConnect,
                loading,
                error,
                errorText
            }
        }
    }
</script>

<template>
    <header class="login-page_header">
        <div class="login-page_header-icon">
            <img src="assets/images/logo.png" alt="">
            <p>Ride</p>
        </div>
    </header>
    <main>
        <div class="login-page_form-container">
            <h1>Connexion</h1>
            <p>Connectez-vous à l'aide des identifiants réçus dans votre mail d'activation.</p>
            <form @submit.prevent="handleConnect">
                <div class="input-group">                
                    <label for="username">Identifiant</label>
                    <input type="email" name="username" v-model="userInfo.username">
                </div>
                <div class="input-group">                
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" v-model="userInfo.password">
                </div>
                <div v-if="loading" class="loading-container">
                    <span  class="loading material-symbols-outlined">cached</span>
                </div>
                <input v-else :class="error ? 'error' : ''" type="submit" value="Connexion">
            </form>
            <span class="error-text" v-if="errorText" v-html="errorText"></span>
        </div>
    </main>
</template>