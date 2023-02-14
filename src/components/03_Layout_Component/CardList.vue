<!-- 模板用 script -->
<script>
  import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';


const runkey = 'c911c55c8e4f22c1ef5066573f7f0585';
export default {
  setup() {
    const cardList = reactive({data:[]});
    
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
          cardList.data = response.data.product;
          console.log(cardList.data);
        })
        .catch (error => {
          console.log(error);
        })
    });
    return {cardList};
  }
}
</script>


<!-- Html 模板 -->
<template>
  <section class="project-list_section">
    <div class="container">
      <div class="project-list_content">
        <!-- <h2>{{ cardList.data }}</h2> -->
        <!-- card-content -->
        <div class="row">

          <div class="card-content col-12 col-sm-6 col-xl-4" v-for="item in cardList.data" :key="item.id">
            <a href="#" class="card po-relative" >
              <div class="card-img" style="position:relative;">
                <img src="~@/assets/image/portfolio/port1.jpg" alt="">
                <!-- 有折數回傳顯示 -->
                <div class="po-absolute tag discont text-500" style="right: 24px;bottom: 24px;">25</div>
              </div>
              <div class="card-body">
                <p class="card-tag-text text-bold">珠寶首飾 JEWELRY</p>
                <h3 class="card-title mb-16">{{ item.name }}</h3>
                <p class="card-text multiline-ellipsis">
                  {{ item.description }}
                </p>
              </div>
              <div class="card-footer">
                <!-- card - 文字 -->
                <div class="d-flex justify-content-between align-items-end">
                  <div class="card-text-icon-wrap">
                    <span class="material-symbols-outlined">
                      sell
                    </span>
                    <p class="card-text line-thought">{{ item.market_price }}</p>
                  </div>
                  <p class="text-2xl text-bold">{{ item.price }}</p>
                </div>
              </div>
            </a>
          </div>
          
          
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