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

      <ion-card v-for="post in posts" :key="post.data.id">
          <ion-img :src="post.data.thumbnail"  v-if="post.data.thumbnail.startsWith('https://')"/>
        <ion-card-header>
          <ion-card-subtitle>{{ post.data.author_fullname }}</ion-card-subtitle>
          <ion-card-title>{{ post.data.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <!-- <ion-label>{{ post.data.selftext }}</ion-label> -->
          <ion-button color="tertiary" expand="full" @click="viewMore(post.data)">
            View More
          </ion-button>
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
.listaItem {
  border: 1px solid blue;
}
/* .thumb {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
} */
</style>
