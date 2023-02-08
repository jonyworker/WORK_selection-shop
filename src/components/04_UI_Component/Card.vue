<!-- 模板用 script -->
<script>
  
</script>


<!-- Html 模板 -->
<template>
  <div class="card-content col-12 col-sm-6 col-xl-4">
    <a href="#" class="card po-relative">
      <div class="card-img" style="position:relative;">
        <img src="~@/assets/image/portfolio/port1.jpg" alt="">
        <!-- 有折數回傳顯示 -->
        <div class="po-absolute tag discont text-500" style="right: 24px;bottom: 24px;">25</div>
      </div>
      <div class="card-body">
        <p class="card-tag-text text-bold">珠寶首飾 JEWELRY</p>
        <h3 class="card-title mb-16">GIA證書 1.09克拉 F/VS1 3EX 無螢光 鑽石 女用鑽戒 PS426</h3>
        <p class="card-text multiline-ellipsis">
          GIA證書  1.09克拉 F/VS1 3EX 鑽石 白金臺 女用鑽戒 戒圍10號
        </p>
      </div>
      <div class="card-footer">
        <!-- card - 文字 -->
        <div class="d-flex justify-content-between align-items-end">
          <div class="card-text-icon-wrap">
            <span class="material-symbols-outlined">
              sell
            </span>
            <p class="card-text line-thought">$125,000</p>
          </div>
          <p class="text-2xl text-bold">NT$100,000</p>
        </div>
      </div>
    </a>
  </div>
</template>


<!-- 模板用 style -->
<style lang="scss">


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
  overflow: hidden
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