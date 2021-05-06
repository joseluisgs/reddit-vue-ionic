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
          <!-- <ion-label>{{ post.data.selftext }}</ion-label> -->
          <ion-button color="tertiary" extend="full" @click="$router.go(-1)">
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
  props: ['author', 'title', 'thumbnail'],
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
  data: () => ({
    image: '',
  }),
  mounted() {
    console.log(this.author, this.title);
    // this.image = this.post.preview.images[0].source.url.replace('&amp;', '&');
    // console.log(this.image);
  },
});
</script>
