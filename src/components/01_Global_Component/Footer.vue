<!-- 模板用 script -->
<script setup>
import { onMounted, reactive } from "vue";
import http from "@/utils/http";

const now = new Date();
const dateYear = now.getFullYear();
const footerData = reactive({ info: [] });
onMounted(() => {
  http
    .get("/api/productfoot", {
      params: {},
    })
    .then((response) => {
      footerData.info = response.data;
      document.title = footerData.info?.shop_title || "ktpshop";
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>


<!-- Html 模板 -->
<template>
  <div>
    <footer class="footer_section">
      <div class="container">
        <div class="footer_content">
          <div class="row">
            <!-- footer - logo area -->
            <div class="footer_logo-area col-12">
              <router-link to="/" class="mb-16">
                <h2 class="text-3xl text-500" style="text-align: center">
                  {{ footerData.info.shop_title }}
                </h2>
              </router-link>
              <p class="text-base mb-16" style="text-align: center">
                {{ footerData.info.shop_title + footerData.info.second_title }}
              </p>

              <nav class="d-flex flex-column align-items-center gap-4">
                <a class="text-sm"
                  >地址:<span>{{ footerData.info.company_add }}</span></a
                >
                <a class="text-sm"
                  >營業時間:<span>{{ footerData.info.company_time }}</span></a
                >
                <a class="text-sm" href="tel:0225066333"
                  >TEL:<span>{{ footerData.info.company_tel }}</span></a
                >
                <a class="text-sm" href=""
                  >FAX:<span>{{ footerData.info.company_fax }}</span></a
                >
                <a class="text-sm" href="`mailto:${footerData.info.email}`"
                  >E-Mail:<span>{{ footerData.info.email }}</span></a
                >
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- footer copyright -->
      <div class="footer_copyright-section">
        <div class="container">
          <div class="footer_copyright-content">
            <div class="row">
              <div class="col-12">
                <!-- footer copyright -->
                <p class="text-xs" style="text-align: center">
                  {{ footerData.info.copyright_note }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<!-- 模板用 style -->
<style lang="scss">
/*/////////////////////////
===== layout - footer =====
/////////////////////////*/

/*========= footer - 容器基礎設定 =========*/
.footer_content {
  padding: 120px 0 0px;
}

/*========= footer - logo area =========*/
.footer_logo-area .footer_logo {
  display: block;
  width: 139px;
}
.footer_logo-area .footer_text {
  // @include text-sm;
  color: $color-text-main;
}

/*========= footer - nav =========*/
/*----- footer 導覽列 -----*/
.footer_nav-list {
  display: flex;
  justify-content: space-between;
}
.footer_nav-list .footer_nav-item {
  width: 100%;
}
.footer_nav-list .footer_nav-item nav {
  display: flex;
  flex-direction: column;
}
.footer_nav-title {
  // @include text-lg;
  font-weight: 500;
  color: $color-text-main;
  margin-bottom: 16px;
}
.footer_nav-list .footer_nav-item nav a {
  // @include text-sm;
  color: $color-text-main;
  margin-bottom: 8px;
}
.footer_nav-list .footer_nav-item nav a:last-of-type {
  margin-bottom: 0;
}

/*========= footer - Email submit =========*/
.email-sub-content {
  width: 100%;
}
.email-sub-content form {
  width: 100%;
}
.email-sub-content form {
  display: flex;
  background-color: $color-white;
  border: 2px solid $color-alpha-white-20;
  border-radius: 4px 0 0 4px;
}
.email-sub-content input[type="email"] {
  flex: 1;
  border: none;
  background-color: transparent;
  padding-left: 12px;
  // @include text-sm;
}
.email-sub-content button {
  display: block;
  width: 80px;
  border-radius: 0 4px 4px 0;
  padding: 4px 16px;
  border-style: none;
  // @include text-sm;
  color: $color-white;
  background-color: $color-primary-default;
}

/*========= footer - copyright =========*/
.footer_copyright-section {
  border-top: 1px solid $color-border;
  padding: 16px 0;
  margin-top: 16px;
}
.footer_copyright-content .footer_copyright {
  // @include text-xs;
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
  .footer_nav-list {
    margin-top: 24px;
  }
}
/*----- max-width 992 -----*/
@media screen and (max-width: 991.5px) {
}
/*----- max-width 768 -----*/
@media screen and (max-width: 767.5px) {
  .footer_copyright-content .privacy-link-wrap {
    justify-content: center;
  }
  .footer_copyright-content p {
    text-align: center;
  }
}
/*----- max-width 576 -----*/
@media screen and (max-width: 575.5px) {
  .email-sub-wrap {
    margin-top: 24px;
  }
  .email-sub-content button {
    padding: 8px 24px;
  }
}
</style>
