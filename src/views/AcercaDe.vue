<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Acerca De</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Acerca De</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Desarrollador</ion-card-subtitle>
          <ion-card-title>José Luis González</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-img src="https://i.imgur.com/DkOD8UL.png"> </ion-img>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-item>
          <ion-icon :icon="logoGithub" slot="start"></ion-icon>
          <ion-label>Mi repositorio de GitHub</ion-label>
          <ion-button
            fill="outline"
            slot="end"
            @click="openWebpage('https://github.com/joseluisgs')"
            >Ver
          </ion-button>
        </ion-item>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
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
} from '@ionic/vue';

import { logoGithub } from 'ionicons/icons';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

export default {
  name: 'AcercaDe',
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
  },

  setup() {
    function openWebpage(url: string) {
      const options: InAppBrowserOptions = {
        zoom: 'no',
      };

      // Opening a URL and returning an InAppBrowserObject
      InAppBrowser.create(url, '_self', options);
    }
    return {
      logoGithub,
      openWebpage,
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
