<!-- 模板用 script -->
<script>
  import Card from '@/components/04_UI_Component/Card.vue';
  
  export default {
    components: {
      Card
    },
  };
</script>


<!-- Html 模板 -->
<template>
  <section class="project-list_section">
    <div class="container">
      <div class="project-list_content">

        <!-- card-content -->
        <div class="row">
          <!-- card -1 -->
          <Card />
          <!-- card -2 -->
          <Card />
          
          
        </div>
      </div>
    </div>
  </section>
</template>


<!-- 模板用 style -->
<style lang="scss">
  .project-list_content .card-content:not(:nth-of-type(-1n+3)) {
  margin-top: 24px;
  }

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
    margin-bottom: 16px;
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
  .project-list_content .card-footer div+.card-text {
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
</style>