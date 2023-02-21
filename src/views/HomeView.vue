<!-- 模板用 script -->
<script setup>
import Banner from "@/components/03_Layout_Component/Banner.vue";
import Navbar from "@/components/03_Layout_Component/Navbar.vue";
import CardList from "@/components/03_Layout_Component/CardList/CardList.vue";
import { onMounted, ref } from "vue";
import http from "@/utils/http";
const tab_catalogs = ref([]);
const banner = ref([]);
const card_list = ref([]);
onMounted(() => {
  loadData(0);
});
const changeCatalogs = (index) => {
  loadData(index);
};
const loadData = (index) => {
  http
    .get("/api/productindex", {
      params: {
        category: index,
        count: 10,
        page: 1,
      },
    })
    .then((res) => {
      console.log("res", res);
      tab_catalogs.value = res.data.tab_category;
      banner.value = res.data.top_img;
      card_list.value = res.data.product;
    });
};
</script>
<!-- Html 模板 -->
<template>
  <div>
    <Banner :banner="banner" />
    <Navbar :catalogs="tab_catalogs" @changeCatalogs="changeCatalogs" />
    <CardList :cardList="card_list" :catalogs="tab_catalogs" />
  </div>
</template>


<!-- 模板用 style -->
<style>
</style>