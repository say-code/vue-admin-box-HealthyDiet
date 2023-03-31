<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>健康饮食后台管理系统</span>
<!--        <el-link type="primary" href="http://www.github.com/cmdparkour/vue-admin-box-template" target="_blank" style="margin-left: 20px;">github地址</el-link>-->
      </div>
    </template>
      <div class="box">
        <span>康莱——您的健康饮食管家！</span>
<!--        <div class="item">-->
<!--          <h4>ts</h4>-->
<!--          <p>ts版本的基础模板，无国际化</p>-->
<!--          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/ts" target="_blank">demo</el-link>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <h4>ts-i18n</h4>-->
<!--          <p>ts版本的基础模板，含国际化功能</p>-->
<!--          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/ts-i18n" target="_blank">demo</el-link>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <h4>js</h4>-->
<!--          <p>js版本的基础模板，无国际化</p>-->
<!--          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/js" target="_blank">demo</el-link>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <h4>js-i18n</h4>-->
<!--          <p>js版本的基础模板，含国际化功能</p>-->
<!--          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/js-i18n" target="_blank">demo</el-link>-->
<!--        </div>-->
      </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .box-card {
    .card-header{
      text-align: left;
    }
    .box {
      .item {
        display: flex;
        align-items: center;
        * {
          margin-right: 20px;
        }
      }
    }
  }
</style>