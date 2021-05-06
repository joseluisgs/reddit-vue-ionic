<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Reddit</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reddit</ion-title>
        </ion-toolbar>
      </ion-header>

       <ion-card v-for="post in posts" :key="post.data.id" style="border: 1px solid blue;">
         <ion-card-content>
            <ion-label>{{post.data.title}}</ion-label>
         </ion-card-content>
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
} from '@ionic/vue';

import Reddit from '@/services/Reddit';

export default {
  name: 'Reddit',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },

  data: () => ({
    posts: [],
  }),

  async created() {
    this.posts = await Reddit.fetchAll();
    console.log(this.posts[1]);
  },
};
</script>

<style scoped>

#container a {
  text-decoration: none;
}
</style>
