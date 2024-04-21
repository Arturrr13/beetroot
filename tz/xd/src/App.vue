<template>
  <div>
    <site-header />
    <router-view />
    <site-footer />
  </div>
</template>

<script>
  import SiteHeader from './components/SiteHeader.vue';
  import SiteFooter from './components/SiteFooter.vue';
  
  export default {
    components: {
        SiteHeader,
        SiteFooter
    }
  }
</script>
<style>
  main{
    min-height: calc(100vh - 220px);
  }

  /* @media  screen and (max-width:600px){
    main{
      min-height: calc(100vh - 250px);
    }
    } */
</style>
