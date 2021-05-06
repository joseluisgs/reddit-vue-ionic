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
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reddit</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card v-for="post in posts" :key="post.data.id">
        <ion-img :src="post.data.thumbnail" v-if="post.data.thumbnail.startsWith('https://')" />
        <ion-card-header>
          <ion-card-subtitle>{{ post.data.author_fullname }}</ion-card-subtitle>
          <ion-card-title>{{ post.data.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button color="tertiary" expand="full" @click="viewMore(post.data)">
            View More
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
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
  IonRefresher,
} from '@ionic/vue';

import Reddit from '@/services/Reddit';

export default defineComponent({
  name: 'Reddit',
  components: {
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
    IonRefresher,
  },

  data: () => ({
    posts: [],
  }),

  async created() {
    this.posts = await Reddit.fetchAll();
  },

  methods: {
    viewMore(post: any) {
      this.$router.push({
        name: 'post',
        params: {
          author: post.author_fullname,
          title: post.title,
          thumbnail: post.thumbnail,
          selftext: post.selftext,
        },
      });
    },
    async doRefresh(event: CustomEvent) {
      this.posts = await Reddit.fetchAll();
      event.detail.complete();
    },
  },
});
</script>

<style scoped>
.listaItem {
  border: 1px solid blue;
}

</style>
