<template>
  <Layer :layer="layer" @confirm="submit">
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          fixed="left"
          label="订单id"
          prop="id"
          width="80">
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          width="120">
      </el-table-column>
      <el-table-column
          prop="dishId"
          label="菜品Id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="dishName"
          label="菜品名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="dishFlavor"
          label="口味"
          width="180">
      </el-table-column>
      <el-table-column
          prop="businessId"
          label="商家Id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="businessName"
          label="商家名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="number"
          label="数量"
          width="60">
      </el-table-column>
      <el-table-column
          fixed="right"
          prop="amount"
          label="金额"
          width="80">
      </el-table-column>
    </el-table>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Layer from '@/components/layer/index.vue'
import { add, update } from '@/api/system/user'
import {getData} from "@/api/work";
import {getDataByBusiness} from "@/api/system/user";
import {AxiosResponse} from "axios";
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup(props, ctx) {
    let tableData
    let hasData = false
    console.log(props.layer.row)
    if (props.layer.row){
      console.log(1)
      hasData = true
      tableData = props.layer.row.orderDetails
      console.log(tableData)
    }


    // console.log(props.layer.row.employee)
    return {
      hasData,
      tableData,
    }
  },
  methods: {
    submit() {
      this.layer.show = false
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>