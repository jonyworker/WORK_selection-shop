<!-- 模板用 script -->
<script setup>
import { onMounted, reactive } from "vue";

import http from "@/utils/http";
const footerData = reactive({ info: [] });
onMounted(() => {
  http
    .get("/api/productfoot")
    .then((response) => {
      footerData.info = response.data;
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
  <header class="header_section">
    <div class="container">
      <div class="header_content">
        <!-- header - 漢堡選單控制裝置 -->
        <input type="checkbox" id="burger-func-toggle" />

        <!-- header - logo -->
        <a href="#" class="header_logo_link">
          <h1 class="text-3xl text-500">{{ footerData.info.shop_title }}</h1>
        </a>

        <button
          class="btn flex-shink-0 text-lg"
          type="button"
          @click="openUrl(footerData.info.line_id)"
        >
          <a class="d-block" ref="tel:0285219025">
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
      </div>
    </div>
  </header>
</template>


<!-- 模板用 style -->
<style lang="scss">
/*/////////////////////////
===== layout - header =====
/////////////////////////*/

/*========= header 主題控制裝置 =========*/
#theme-toggle {
  display: none;
  // position: absolute;
  z-index: -1000;
}
#language-toggle {
  display: none;
  // position: absolute;
  z-index: -1000;
}

/*========= header 容器設定 =========*/
.header_section {
  width: 100%;
  padding: 20px 0;
  z-index: 1;
  background-color: $color-white;
  box-shadow: $header-box-shadow;
}
.header_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  // gap: 32px;
}

/*========= header - logo =========*/
.header_section .header_logo {
  flex: 0 0 139px;
  // margin-right: 32px;
}

/*========= header - nav =========*/
.header_nav {
  flex: 1 1 auto;
  // order: 0;
}
.header_section .header_nav-list {
  display: flex;
  // flex-wrap: wrap;
}
.header_section .header_nav-item a {
  display: block;
  padding: 8px 16px;
  @include text-sm;
}

/*========= header 右側 functional-list =========*/
.header_func-list {
  display: flex;
  align-items: center;
  order: 2;
}
.header_func-item {
  padding: 8px 16px;
  background-color: $gray-200;
}
.header_func-item:not(:last-of-type) {
  margin-right: 4px;
}

/*========= header - func-burger =========*/
/*----- func-burger -　控制器-----*/
#burger-func-toggle {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
}
/*----- func-burger -　按鈕樣式-----*/
.burger-func-toggle {
  display: none;
}
.burger-func-toggle .icon-burger {
  width: 40px;
  height: 40px;
  display: flex;
  color: $color-text-main;
}
.burger-func-toggle .icon-burger span {
  margin: auto;
  font-size: 36px;
}
/*----- func-burger -　選單 -----*/
.berger-func-nav {
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: $color-white;
  padding-bottom: 16px;
}
.berger-func-item:hover {
  background-color: $gray-200;
}
.berger-func-item a {
  @include text-sm;
  padding: 16px 0px;
  color: $color-text-main;
}

/*/////////////////////////////
===== Desktop First START =====
/////////////////////////////*/
/*----- max-width 1536 -----*/
@media screen and (max-width: 1535.5px) {
}
/*----- max-width 1200 -----*/
@media screen and (max-width: 1199.5px) {
}
/*----- max-width 992 -----*/
@media screen and (max-width: 991.5px) {
}
/*----- max-width 768 -----*/
@media screen and (max-width: 767.5px) {
  // 隱藏登入註冊頁
  .header_func-list {
    display: none;
  }
  // 出現漢堡選單並可以點擊
  .burger-func-toggle {
    display: block;
  }
  #burger-func-toggle:checked ~ .berger-func-nav {
    display: block;
  }
}
/*----- max-width 576 -----*/
@media screen and (max-width: 575.5px) {
  .header_nav {
    border-top: 1px solid $color-border;
    margin-top: 20px;
    width: 100%;
    order: 9999;
  }
  .header_nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
}

/*----- header nav - 下拉選單 -----*/
.header_nav-item {
  position: relative;
}
.header_nav-item > .language-item-list {
  position: absolute;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 4px;
  display: none;
}
.header_nav-item:hover > .language-item-list {
  display: block;
}
.language-item-list .language-item {
  width: 136px;
  height: 40px;
  padding: 0px 16px;
  border-radius: 11px;
  font-size: 14px;
  line-height: 20px;
  color: #f00;
  display: flex;
  align-items: center;
}
.language-item-list .language-item:hover,
.language-item-list .language-item:hover > a {
  background-color: #f3f4fe;
  color: #5a66f9;
}

/*----- header 登入 icon -----*/
.avatar .icon-avatar {
  width: 48px;
  height: 48px;
}
.avatar .icon-avatar svg {
  width: 100%;
  height: 100%;
}
</style>


