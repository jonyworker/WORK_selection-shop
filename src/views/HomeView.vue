<!-- 模板用 script -->
<script>
  import Banner from "@/components/03_Layout_Component/Banner.vue";
  import Navbar from "@/components/03_Layout_Component/Navbar.vue";
  import CardList from "@/components/03_Layout_Component/CardList.vue";

  export default {
    name: 'HomeView',
    components: {
      Banner,
      Navbar,
      CardList,
    },
  };

</script>


<!-- Html 模板 -->
<template>
    <div>
      <Banner />
      <Navbar />
      <CardList />
    </div>

</template>


<!-- 模板用 style -->
<style>

</style>