<!-- 模板用 script -->
<script>
import { onMounted } from 'vue';
import axios from 'axios';

const runkey = 'c911c55c8e4f22c1ef5066573f7f0585';
export default {
  setup() {
    onMounted(() => {
      axios.get('api/productindex',{
        headers: {
          runkey: runkey,
        },
        params: {
          category: null,
          count: 10,
          page: 1
        }
      })
        .then(response =>{
          console.log(response.data);
        })
    });
    
    return {};
  }
}
</script>


<!-- Html 模板 -->
<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-content my-lg-80 my-md-40 my-20">
        
        <a href="#" class="d-block">
          <div class="main-banner ratio-16x9">
            <img src="~@/assets/image/bg/2011.i121.013_isometric.jpg" alt="">
          </div>
        </a>

      </div>
    </div>
  </section>
</template>


<!-- 模板用 style -->
<style>
  
</style>