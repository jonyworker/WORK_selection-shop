<!-- 模板用 script -->
<script>
  
</script>


<!-- Html 模板 -->
<template>
  <section class="main-nav-section mb-32">
    <div class="container">
      <div class="main-nav-content">
        <h2 class="main-nav-title">流當品類別</h2>
        <nav class="nav">
          <ul class="nav-list-center justify-content-lg-center justify-content-start">
            <a href="#" class="mainContent nav-item" data-hover="All">所有類別</a>
            <a href="#" class="mainContent nav-item" data-hover="Jewelry">珠寶首飾</a>
            <a href="#" class="mainContent nav-item" data-hover="Luxury Watches">名錶</a>
            <a href="#" class="mainContent nav-item" data-hover="Exquisite Cars">豪車</a>
            <a href="#" class="mainContent nav-item" data-hover="Brand Handbags">精品包</a>
            <a href="#" class="mainContent nav-item" data-hover="Quality 3C">高價3C</a>
            <a href="#" class="mainContent nav-item" data-hover="Aged Wines">老酒</a>
            <a href="#" class="mainContent nav-item" data-hover="Antique">古董字畫</a>
            <a href="#" class="mainContent nav-item" data-hover="Bonsai">盆栽</a>
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
    letter-spacing: .1rem;
    padding: 24px 24px;
    margin: 0 8px;
  }
  .main-nav-content .nav-item:hover {
    color: $color-main;
  }
</style>