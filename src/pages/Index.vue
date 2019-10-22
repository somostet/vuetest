<template>
  <div>
    <v-carousel height="450" :hide-delimiters="true">
      <v-carousel-item
        v-for="img in images"
        :key="img"
      >
        <v-img :src="img" />
      </v-carousel-item>
    </v-carousel>
    <v-row class="text-center">
      <v-col
        v-for="logo in logos"
        :key="logo.img"
        class="black"
      >
        <v-img height="150" contain :src="logo.img" />
        <div class="display-1 white--text" v-text="logo.name" />
      </v-col>
    </v-row>
    <v-btn rounded outlined class="red--text">
      <v-icon left>mdi-youtube</v-icon>
      <div>Youtube</div>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => {
    return {
      images: [
        'https://t-e-t.github.io/images/Bannertet.png',
        'https://t-e-t.github.io/images/BannerFb.png'
      ],
      logos: [
        { img: 'https://t-e-t.github.io/images/ico_tecno.png', name: 'Publicaciones' },
        { img: 'https://t-e-t.github.io/images/ico_curio.png', name: 'Curiosidades' },
        { img: 'https://t-e-t.github.io/images/ico_proyectos.png', name: 'Proyectos' }
      ]
    }
  }
}
</script>
