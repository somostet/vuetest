<template>
  <v-app>
    <v-app-bar dark class="black" app>
      <v-toolbar-title>tu espacio tecnológico</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn router to="/about" text>¿Quienes somos?</v-btn>
        <v-btn text>Contenidos</v-btn>
        <v-btn icon>
          <v-icon v-text="'mdi-facebook'" />
        </v-btn>
        <v-btn icon>
          <v-icon v-text="'mdi-twitter'" />
        </v-btn>
        <v-btn icon>
          <v-icon v-text="'mdi-youtube'" />
        </v-btn>
        <v-btn icon>
          <v-icon v-text="'mdi-instagram'" />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>
