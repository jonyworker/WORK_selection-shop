<!-- 模板用 script -->

<script setup>
const props = defineProps({
  banner: {
    type: Array,
    defult: () => {
      return [];
    },
  },
});
</script>


<!-- Html 模板 -->
<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-content my-lg-56 my-md-40 my-20">
        <!-- project-intro-img -->

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <!-- 指標 -->
          <div class="carousel-indicators">
            <button
              v-for="(item, key) in banner"
              :key="key"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              :class="key == 0 ? 'active' : ''"
              :data-bs-slide-to="key"
              :aria-label="'Slide ' + key + 1"
            ></button>
          </div>
          <!-- 圖片 -->

          <div class="carousel-inner">
            <div
              :class="
                key == 0
                  ? 'carousel-item ratio-2x1 active'
                  : 'carousel-item ratio-2x1'
              "
              v-for="(item, key) in banner"
              :key="key"
            >
              <img :src="item.img_path" class="d-block w-100" alt="" />
            </div>
          </div>
          <!-- 左按鈕 -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <!-- <span class="visually-hidden">Previous</span> -->
          </button>
          <!-- 右按鈕 -->
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
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