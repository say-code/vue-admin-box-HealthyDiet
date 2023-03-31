<template>
  <div class="card-list">
    <Row v-for="row in list" :key="row.id" :row="row" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Row from './row.vue'
export default defineComponent({
  components: {
    Row
  },
  setup() {
    const list = [
      { id: 1, name: '入驻商家数', data: '105', color: '#4e73df', icon: 'sfont system-jindutiaoshouyidaozhang' },
      { id: 2, name: '菜品数', data: '2010', color: '#1cc88a', icon: 'sfont system-xiaoxi' },
      { id: 3, name: '订单量', data: '11205', color: '#36b9cc', icon: 'sfont system-shuliang_mianxing' },
      { id: 4, name: '用户数', data: '8999', color: '#f6c23e', icon: 'sfont system-yonghu ' }
    ]
    return {
      list
    }
  }
})
</script>

<style lang="scss" scoped>
  .card-list {
    width: calc(100% + 20px);
    margin-left: -10px;
    display: flex;
    flex-wrap: wrap;
  }
</style>