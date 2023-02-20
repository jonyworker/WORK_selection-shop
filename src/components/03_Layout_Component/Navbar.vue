<!-- 模板用 script -->
<script setup>
import { defineEmits } from "vue";

const props = defineProps({
  catalogs: {
    type: Object,
    default: () => {
      return { 0: "全部" };
    },
  },
});
const emits = defineEmits(["changeCatalogs"]);

const gotoDetail = (index) => {
  console.log("gotoDetail: " + index);
  emits("changeCatalogs", index);
};
</script>


<!-- Html 模板 -->
<template>
  <section class="main-nav-section mb-32">
    <div class="container">
      <div class="main-nav-content">
        <h2 class="main-nav-title">流當品類別</h2>
        <nav class="nav">
          <ul
            class="nav-list-center justify-content-lg-center justify-content-start"
          >
            <a
              href="javascript:;"
              :key="index"
              @click="gotoDetail(index)"
              v-for="(item, index) in props.catalogs"
              class="mainContent nav-item"
              :data-hover="index"
              >{{ item }}</a
            >
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>


<!-- 模板用 style -->
<style lang="scss">
.main-nav-content {
  position: relative;
}
.main-nav-content .main-nav-title {
  @include text-xs;
  display: inline;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 8px;
  background-color: $color-main-bg;
  // color: $color-main-bg;
}
.main-nav-content .nav-list-center {
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  white-space: nowrap;
  overflow: auto;
}
.main-nav-content .nav-item {
  letter-spacing: 0.1rem;
  padding: 24px 24px;
  margin: 0 8px;
}
.main-nav-content .nav-item:hover {
  color: $color-main;
}
</style>