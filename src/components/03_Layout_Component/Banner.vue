<!-- 模板用 script -->

<script>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';


const runkey = 'c911c55c8e4f22c1ef5066573f7f0585';
export default {
  setup() {
    const bannerData = reactive({data:[]});
    
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
          bannerData.data = response.data.top_img;
          console.log(bannerData.data[0].img_path);
        })
        .catch (error => {
          console.log(error);
        })
    });
    return {bannerData};
  }
}
</script>


<!-- Html 模板 -->
<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-content my-lg-80 my-md-40 my-20">
        <!-- project-intro-img -->
  
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <!-- 指標 -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <!-- 圖片 -->
          
          <div class="carousel-inner">
            <div class="carousel-item ratio-16x9 active">
              <img src="~@/assets/image/blue.png" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item ratio-16x9">
              <img src="~@/assets/image/balck.png" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item ratio-16x9">
              <img src="~@/assets/image/blue.png" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item ratio-16x9">
              <img src="~@/assets/image/balck.png" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item ratio-16x9">
              <img src="~@/assets/image/blue.png" class="d-block w-100" alt="">
            </div>
          </div>
          <!-- 左按鈕 -->
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <!-- <span class="visually-hidden">Previous</span> -->
          </button>
          <!-- 右按鈕 -->
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <!-- <span class="visually-hidden">Next</span> -->
          </button>
        </div>


      </div>
    </div>

  </section>
</template>


<!-- 模板用 style -->
<style>
  
</style>