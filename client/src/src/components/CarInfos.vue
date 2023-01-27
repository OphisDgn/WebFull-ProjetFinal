<template>
    <div v-if="car" class="vehicule-card">
        <div class="loader">
            <span class="loading material-symbols-outlined">cached</span>
        </div>
        <div @click="close" class="button-back">
            Retour à la liste des véhicules
            <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div class="vehicule-card-content">
        <h3 class="vehicule-card-title">{{ car.name }} - {{ car.model }}</h3>
        <p class="vehicule-card-description">{{ car.description }}</p>
          <!-- <p class="vehicule-card-price">à partir de <span>{{ car.price }}€</span></p> -->
        </div>
        <div class="vehicule-card-image" :style="`background-image: url(${car.image})`"></div>
        <table class="vehicule-card-specs">
            <tr v-for="(value, name) in trList">
                <td>{{ name }}</td>
                <td>{{  typeof value === "number" ? `${Math.round(car.price*value)}€` : value  }}</td>
            </tr>
        </table>
      </div>
</template>

<script> 
import { watch, ref } from 'vue'
export default {
    name: 'CarInfos',
    props: {
        car: {
            type: Object,
            required: true
        },
        close: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        console.log(props)

        const trList = ref({
                '1-3 jours': 1.15,
                '4-7 jours': 1.08,
                '+ 8 jours': 1,
                'Extra kms': 0.005,
                'Franchise': 8,
                'Km inclus / jour': '200',
                'Nb de place': '4',
                'Spécifications': 'V8 / 585 ch / 4x4'
            })

        watch(
            () => props.car,
            async newProps => {
                console.log('newProps')
                document.querySelector('.loader').classList.add('show')
                setTimeout(() => {
                    document.querySelector('.loader').classList.remove('show')
                }, 300)
            }
        )

        return {
            trList,
        }
    }
}
</script>