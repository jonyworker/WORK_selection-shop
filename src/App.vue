<!-- 模板用 script -->
<script>
  import Footer from "@/components/01_Global_Component/Footer.vue";
  import Header from "@/components/01_Global_Component/Header.vue";
  import HomeView from "@/views/HomeView.vue";

  // import Banner from "@/components/Banner.vue";
  export default {
    name: 'App2',
    components: {
      Header,
      Footer,
      HomeView,
    },
  };
  

</script>


<!-- Html 模板 -->
<template>
  <div>
    <Header/>
    <!-- <DetailView /> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>


<!-- 模板用 style -->
<style>

</style>