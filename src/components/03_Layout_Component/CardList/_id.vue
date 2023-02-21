<!-- 模板用 script -->
<script setup>
import { onMounted, reactive } from "vue";
// import { useRoute } from 'vue-router';
import http from "@/utils/http";
import { useRoute } from "vue-router";

const product = reactive({ data: {} });
const getPercent = (product) => {
  if (product.market_price > 0) {
    return (product.price * 10) / product.market_price;
  } else {
    return "-";
  }
};
const route = useRoute();
onMounted(() => {
  let id = route.params.id;
  http
    .get("/api/productdesc", {
      params: {
        id: id,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.data.product[0]) {
        product.data = response.data.product[0];
      } else {
        product.data = {};
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
const openUrl = (lineId) => {
  window.open(`https://line.me/R/ti/p/~${lineId}`);
};
</script>


<!-- Html 模板 -->
<template>
  <div class="mt-lg-80 mt-md-40 mt-20">
    <section class="project-intro-section mb-16 mb-lg-32">
      <div class="container">
        <div class="project-intro-content">
          <div class="row">
            <!-- project-intro-img -->
            <div class="col-lg-6 col-12">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item ratio-1x1 active">
                    <img
                      :src="product.data.imgname1"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div
                    class="carousel-item ratio-1x1"
                    v-if="product.data.imgname2"
                  >
                    <img
                      :src="product.data.imgname2"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div
                    class="carousel-item ratio-1x1"
                    v-if="product.data.imgname3"
                  >
                    <img
                      :src="product.data.imgname3"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <!-- <span class="visually-hidden">Previous</span> -->
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <!-- <span class="visually-hidden">Next</span> -->
                </button>
              </div>
            </div>
            <!-- project-intro -->
            <div class="col-lg-6 col-12">
              <div class="project-intro">
                <div class="d-flex mb-16">
                  <!-- 標題 -->
                  <a href="#" class="flex-grow-1">
                    <h2 class="text-3xl text-500">{{ product.data.name }}</h2>
                  </a>
                  <!-- 折價標籤 -->
                  <div
                    class="tag discont text-lg text-500 align-self-start flex-shrink-0"
                    style="right: 24px; bottom: 24px"
                  >
                    {{ getPercent(product.data) }}
                  </div>
                </div>

                <!-- 內文 -->
                <p class="text clamp-3 mb-32">
                  {{ product.data.description }}
                </p>

                <!-- 售價 -->
                <div class="d-flex flex-column mb-16">
                  <p class="text-2xl text-bold">NT${{ product.data.price }}</p>
                  <p class="text-xs">
                    市售價
                    <span class="line-thought"
                      >NT${{ product.data.market_price }}</span
                    >
                  </p>
                </div>
                <!-- 分隔線 -->
                <div class="divider mb-16"></div>

                <!-- 聯絡按鈕 -->
                <div class="col-12">
                  <div class="d-flex flex-md-row flex-column gap-16 mx-auto">
                    <!-- line諮詢按鈕 -->
                    <button
                      class="btn btn-big flex-grow-1 text-lg"
                      type="button"
                      @click="openUrl(product.data.line_id)"
                    >
                      <a class="d-block" ref="">
                        <div class="btn-with-icon">
                          <div class="i-32">
                            <svg
                              fill="#000000"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 236.271 236.271"
                              xml:space="preserve"
                            >
                              <g>
                                <path
                                  d="M118.136,5.265C52.996,5.265,0,49.399,0,103.647c0,52.985,46.003,95.193,107.008,98.178
                                  c4.137,0.189,7.655-2.987,7.858-7.124c0.202-4.137-2.987-7.655-7.125-7.858C54.87,184.256,15,148.49,15,103.647
                                  c0-45.977,46.267-83.383,103.136-83.383s103.136,37.405,103.136,83.383c0,42.787-54.628,89.229-108.59,112.994
                                  c-3.791,1.67-5.511,6.096-3.841,9.886c1.236,2.808,3.985,4.479,6.868,4.479c1.01,0,2.036-0.205,3.019-0.638
                                  c28.936-12.743,57.466-31.556,78.277-51.616c25.689-24.764,39.268-50.734,39.268-75.105
                                  C236.271,49.399,183.276,5.265,118.136,5.265z"
                                />
                                <path
                                  d="M60.082,79.668c-1.19-1.485-2.841-2.276-4.765-2.276c-1.923,0-3.564,0.806-4.747,2.331
                                  c-1.084,1.409-1.609,3.338-1.609,5.902v39.135c0,2.742,0.563,4.741,1.723,6.111c1.232,1.457,3.14,2.196,5.67,2.196h21.267
                                  c2.016,0,3.609-0.595,4.735-1.77c1.114-1.134,1.687-2.626,1.687-4.416c0-1.732-0.587-3.263-1.698-4.427
                                  c-1.119-1.21-2.715-1.835-4.725-1.835H61.758V85.624C61.758,83.006,61.209,81.058,60.082,79.668z"
                                />
                                <path
                                  d="M93.756,77.392c-1.904,0-3.539,0.803-4.729,2.324c-1.083,1.386-1.633,3.374-1.633,5.909v40.041
                                  c0,2.584,0.547,4.528,1.671,5.941c1.181,1.52,2.808,2.331,4.69,2.331c1.922,0,3.575-0.799,4.778-2.312
                                  c1.114-1.413,1.677-3.417,1.677-5.961V85.624c0-2.561-0.567-4.563-1.685-5.951C97.314,78.179,95.666,77.392,93.756,77.392z"
                                />
                                <path
                                  d="M119.625,103.962l12.767,22.89c0.01,0.018,0.02,0.035,0.03,0.053c0.301,0.503,0.603,1.001,0.902,1.493l0.537,0.886
                                  c0.602,0.973,1.195,1.749,1.824,2.392c0.744,0.768,1.535,1.327,2.411,1.704c0.934,0.381,1.881,0.559,2.93,0.559
                                  c2.518,0,6.742-1.129,6.742-8.694v-39.96c0-2.431-0.483-4.268-1.479-5.615c-1.111-1.492-2.703-2.277-4.608-2.277
                                  c-1.858,0-3.424,0.786-4.53,2.272c-0.997,1.375-1.475,3.207-1.475,5.621v22.619l-13.188-23.328l-0.678-1.245l-0.687-1.262
                                  c-0.559-0.988-1.057-1.729-1.54-2.297c-0.574-0.703-1.27-1.275-2.069-1.7c-0.833-0.454-1.811-0.68-2.969-0.68
                                  c-1.463,0-2.821,0.469-4.034,1.395c-1.171,0.875-2.03,2.038-2.539,3.444c-0.006,0.018-0.012,0.035-0.018,0.053
                                  c-0.384,1.161-0.571,2.651-0.571,4.555v39.213c0,2.32,0.502,4.189,1.491,5.556c0.01,0.014,0.02,0.027,0.03,0.04
                                  c1.144,1.499,2.733,2.29,4.597,2.29c1.835,0,3.409-0.783,4.551-2.265c1.044-1.361,1.572-3.251,1.572-5.622V103.962z"
                                />
                                <path
                                  d="M185.284,90.181c1.958,0,3.498-0.572,4.575-1.7c1.046-1.1,1.575-2.538,1.575-4.276c0-1.726-0.532-3.154-1.58-4.245
                                  c-1.059-1.127-2.601-1.707-4.57-1.707h-23.262c-1.556,0-2.903,0.294-4.005,0.875c-1.221,0.659-2.117,1.686-2.68,3.061
                                  c-0.478,1.162-0.71,2.595-0.71,4.378v38.193c0,2.745,0.57,4.746,1.743,6.118c1.215,1.448,3.121,2.189,5.653,2.189h23.941
                                  c1.96,0,3.507-0.591,4.601-1.757c1.051-1.136,1.579-2.575,1.579-4.288c0-1.769-0.528-3.237-1.568-4.363
                                  c-1.122-1.18-2.667-1.767-4.611-1.767h-18.524v-10.467h16.262c1.962,0,3.482-0.586,4.52-1.743c0.989-1.111,1.488-2.509,1.488-4.162
                                  c0-1.686-0.518-3.086-1.538-4.163c-1.013-1.109-2.525-1.685-4.469-1.685h-16.262v-8.493H185.284z"
                                />
                              </g>
                            </svg>
                          </div>
                          <p>LINE諮詢</p>
                        </div>
                      </a>
                    </button>
                    <!-- 電話諮詢按鈕 -->
                    <button
                      class="btn btn-big flex-grow-1 text-lg"
                      type="button"
                    >
                      <a class="d-block" :href="'tel:' + product.data.mobile">
                        <div class="btn-with-icon">
                          <div class="i-32">
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink" 
                              viewBox="0 0 220.262 220.262"
                              xml:space="preserve"
                            >
                              <g>
                                <path
                                  d="M110.127,0C50.606,0,2.184,48.424,2.184,107.944c0,23.295,9.455,44.211,13.521,52.123
                                  c1.893,3.685,6.416,5.135,10.099,3.243c3.684-1.893,5.136-6.415,3.243-10.099c-3.566-6.941-11.862-25.247-11.862-45.268
                                  C17.184,56.695,58.878,15,110.127,15c51.254,0,92.951,41.695,92.951,92.944c0,51.251-41.697,92.946-92.951,92.946
                                  c-20.044,0-35.971-6.94-41.889-9.925c-1.755-0.886-3.788-1.046-5.66-0.447l-47.242,15.097c-3.945,1.261-6.122,5.481-4.861,9.427
                                  c1.018,3.187,3.968,5.219,7.142,5.219c0.757,0,1.526-0.115,2.285-0.358l44.391-14.186c9.287,4.311,25.633,10.173,45.834,10.173
                                  c59.524,0,107.951-48.424,107.951-107.946C218.078,48.424,169.651,0,110.127,0z"
                                />
                                <path
                                  d="M88.846,89.537c-3.285,2.523-3.902,7.231-1.38,10.517c2.523,3.285,7.23,3.903,10.517,1.38
                                  c2.299-1.766,8.406-6.456,7.512-14.845c-0.551-4.987-5.417-11.83-9.402-16.691c-5.831-7.114-10.767-11.327-14.643-12.513
                                  c-3.632-1.126-7.354-0.948-11.066,0.53c-7.636,3.052-13.025,8.108-15.585,14.622c-2.493,6.344-2.04,13.443,1.313,20.537
                                  c7.827,16.522,18.288,30.791,31.093,42.413c0.05,0.047,0.101,0.093,0.152,0.139c12.987,11.48,28.352,20.325,45.675,26.293
                                  c3.287,1.129,6.513,1.692,9.611,1.692c3.892,0,7.583-0.888,10.94-2.658c6.191-3.264,10.621-9.177,12.814-17.115
                                  c1.056-3.848,0.82-7.564-0.689-11.024c-1.619-3.745-6.35-8.184-14.064-13.193c-5.269-3.422-12.601-7.5-17.64-7.5
                                  c-0.003,0-0.007,0-0.011,0c-8.406,0.034-12.397,6.621-13.899,9.102c-2.146,3.543-1.014,8.155,2.529,10.301
                                  c3.541,2.146,8.154,1.015,10.301-2.529c0.593-0.98,0.969-1.5,1.205-1.772c4.236,1.23,15.567,8.642,17.889,11.761
                                  c0.038,0.166,0.043,0.417-0.082,0.874c-0.739,2.675-2.268,6.204-5.349,7.828c-2.879,1.516-6.312,0.863-8.677,0.051
                                  c-15.413-5.31-29.053-13.142-40.543-23.279c-0.003-0.003-0.007-0.006-0.01-0.01c-11.377-10.308-20.693-23.023-27.688-37.788
                                  c-1.071-2.268-2.1-5.607-0.91-8.634c1.274-3.242,4.613-5.15,7.183-6.177c0.441-0.176,0.69-0.203,0.871-0.179
                                  c3.358,1.965,11.969,12.402,13.66,16.477C90.229,88.41,89.753,88.84,88.846,89.537z"
                                />
                              </g>
                            </svg>
                          </div>
                          <p>電話諮詢</p>
                        </div>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<!-- 模板用 style -->
<style>
</style>