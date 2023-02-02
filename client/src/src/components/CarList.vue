<template>
  <div class="vehicules-container">
    <div class="title-container">
      <h2 class="title">Nos véhicules</h2>
      <p>Choisissez un véhicule pour consulter les détails du modèle et les tarifs.</p>
    </div>

    <div class="vehicules-list">
      <div @click="openInfos(car)" class="vehicule-card" v-for="car in cars">
        <div class="vehicule-card-image" :style="`background-image: url(${car.image})`"></div>
        <div class="vehicule-card-content">
          <h3 class="vehicule-card-title">{{ car.name }}</h3>
          <p class="vehicule-card-price">à partir de <span>{{ car.price }}€</span></p>
        </div>
      </div>
    </div>

    <CarInfos v-if="selectedCar" class="carInfos" :class="showCarInfos ? 'visible' : ''" :car="selectedCar" :close="closeInfos" />
  </div>
</template>

<script>
import CarInfos from './CarInfos.vue'
import { ref } from 'vue';
export default {
  components: {
    CarInfos
  },  
  setup() {
    const selectedCar = ref(null)
    const showCarInfos = ref(false)
    const cars = ref([
        {
            "id": 6,
            "image": "https://www.caroom.fr/guide/wp-content/uploads/2021/09/essai-mclaren-gt.jpg",
            "name": "MacccLareine",
            "model": "Flibut",
            "description": "MaccLaraine c'est super sauf Ricardo il est nul",
            "price": 13469.3
        },
        {
            "id": 7,
            "image": "https://www.automobile-magazine.fr/img/f1/ecurie/haas.jpg",
            "name": "Hass-a suffit",
            "model" : "Deus Hass",
            "description" : "Je suis le chouchou de Shumi",
            "price": 948.54
        },
        {
            "id": 8,
            "image": "https://www.turbo.fr/sites/default/files/2021-04/607867124bb15.jpg",
            "name": "Mercedes",
            "model" : "Hamilcedes",
            "description" : "Construite par le grand Hamilton en personne, sympa non ?",
            "price": 13469.3
        },
        {
            "id": 9,
            "image": "https://mclaren.scene7.com/is/image/mclaren/GT%20Front34%20Dynamic5_Defy%20the%20Limits:crop-16x9?wid=1536&hei=864",
            "name": "MacLaren de ton coeur",
            "model": "Flamaclen",
            "description": "Voiture dernier cris, et rouge en plus",
            "price": 948.54
        },
        {
            "id": 10,
            "image": "https://media.gqmagazine.fr/photos/5e2714c2fa3cdc000841e858/16:9/w_2560%2Cc_limit/https___hypebeast.com_image_2020_01_2015-lamborghini-veneno-roadster-rm-sothebys-auction-info-01.jpg",
            "name": "Lamboo",
            "model":"plasticLambo",
            "description":"la voiture idéale si t'as la flemme",
            "price": 948.54
        }
    ]);

    const closeInfos = () => {
      console.log("close")
      showCarInfos.value = false
    }

    const openInfos = (infos) => {
      if(selectedCar.value != infos) {
        showCarInfos.value = false
      }
      selectedCar.value = infos
      showCarInfos.value = !showCarInfos.value
    }


    return {
      cars,
      openInfos,
      showCarInfos,
      selectedCar,
      closeInfos
    }
  }
}
</script>

