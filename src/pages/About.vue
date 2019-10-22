<template>
  <div>
    <v-img :src="logo" />
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => {
    return {
      logo: 'https://t-e-t.github.io/images/Bannertet.png'
    }
  }
}
</script>
