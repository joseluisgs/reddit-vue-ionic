<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Post</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Post</ion-title>
        </ion-toolbar>
      </ion-header>
     <ion-card>
        <ion-img :src="thumbnail" v-if="thumbnail.startsWith('https://')"/>
        <ion-card-header>
          <ion-card-subtitle>{{ author }}</ion-card-subtitle>
          <ion-card-title>{{ title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ selftext }}
          <ion-button color="tertiary" expand="full" @click="back()">
            Go back
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/vue';

export default defineComponent({
  name: 'Post',
  props: ['author', 'title', 'thumbnail', 'selftext'],
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonImg,
    IonButton,
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
  },

});
</script>
