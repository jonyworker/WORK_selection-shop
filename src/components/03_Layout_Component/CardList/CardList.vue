<!-- 模板用 script -->
<script setup>
import showUtil from "@/utils/showUtil";

const props = defineProps({
  cardList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  catalogs: {
    type: Object,
    default: () => {},
  },
});
const getPrice = (product) => {
  return showUtil.showPercentage(product);
};
const getCatalog = (product) => {
  console.log(product);
  console.log(props.catalogs);
  return props.catalogs?.[product.category] || "-";
};
</script>


<!-- Html 模板 -->
<template>
  <section class="project-list_section">
    <div class="container">
      <div class="project-list_content">
        <!-- <h2>{{ cardList.data }}</h2> -->
        <!-- card-content -->
        <div class="row" style="gap: 24px 0px">
          <router-link
            v-for="item in cardList"
            :key="item.id"
            :to="`/cardlist/${item.id}`"
            class="card-content col-12 col-sm-6 col-xl-4"
          >
            <div class="card po-relative">
              <div class="card-img" style="position: relative">
                <img :src="item.imgname1" alt="" />
                <!-- 有折數回傳顯示 -->
                <div
                  v-if="item.show_price_ind == 1"
                  class="po-absolute tag discont text-500 py-16 px-24"
                  style="right: 24px; bottom: 24px"
                >
                  {{ getPrice(item) }}
                </div>
              </div>
              <div class="card-body">
                <p class="card-tag-text text-bold">{{ getCatalog(item) }}</p>
                <h3 class="card-title mb-16">{{ item.name }}</h3>
                <p class="card-text clamp-2">
                  {{ item.description }}
                </p>
              </div>
              <div class="card-footer">
                <!-- card - 文字 -->
                <div class="d-flex justify-content-between align-items-end">
                  <div class="card-text-icon-wrap">
                    <span class="material-symbols-outlined"> sell </span>
                    <p class="card-text line-thought">
                      市售價 NT${{ (item.market_price).toLocaleString('en-US') }}
                    </p>
                  </div>
                  <p v-if="item.show_price_ind == 1" class="text-2xl text-bold">NT${{ (item.price).toLocaleString('en-US') }}</p>
                  <p v-if="item.show_price_ind == 2" class="text-2xl text-bold">歡迎詢價</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<!-- 模板用 style -->
<style lang="scss">
// .project-list_content .card-content:not(:nth-of-type(-1n + 3)) {
//   margin-top: 24px;
// }

.project-list_content .card-body {
  // background-color: $color-white;
  // padding-top: 16px;
  // padding-left: 16px;
  // padding-right: 16px;
  padding: 24px;
}
.project-list_content .card-footer {
  background-color: $color-white;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
}

.project-list_content .card-tag-text {
  color: $color-primary-default;
  margin-bottom: 4px;
}

.project-list_content .card-text {
  color: $text-color-60;
}
.project-list_content .card-text.line-thought {
  text-decoration-color: $text-color-60;
}
.card-text-icon-wrap .material-symbols-outlined {
  font-size: 15px;
  color: $color-text-main;
}
.project-list_content .card-footer div + .card-text {
  @include text-lg;
}
.title {
  @include text-xl;
}
.subtitle {
  @include text-base;
}
.text {
  @include text-sm;
}
.tag-text {
  @include text-base;
}
/*//////////////////////////
===== component - card =====
//////////////////////////*/

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  border-radius: 8px;
  overflow: hidden;
}
.card-body {
  flex: 1 1 auto;
}
.card-img {
  // aspect-ratio: 1.618 / 1;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.card-img img {
  object-fit: cover;
  object-position: 50% 50%;
}
.card-title {
  @include text-xl;
}
.card-subtitle {
  @include text-base;
}
.card-text {
  @include text-sm;
}
.card-tag-text {
  @include text-base;
}
.card-text-icon-wrap {
  display: flex;
  align-items: center;
}
.line-thought {
  text-decoration-line: line-through;
  text-decoration-color: $color-text-main;
}
</style>