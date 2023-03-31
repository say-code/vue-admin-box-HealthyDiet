<template>
  <Layer :layer="layer" @confirm="submit">
    <el-form :model="ruleForm" :rules="rules" ref="form" label-width="120px" style="margin-right:30px;">
      <el-form-item label="公司名：" prop="businessName">
        <el-input v-model="ruleForm.businessName" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="公司简介：" prop="businessDesc">
        <el-input v-model="ruleForm.businessDesc" placeholder="请输入描述" type="textarea"></el-input>
      </el-form-item>

    </el-form>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Layer from '@/components/layer/index.vue'
import {add, addBusiness, update, updateBusiness} from '@/api/system/user'
import {getData} from "@/api/work";
import {getDataByBusiness} from "@/api/system/user";
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
          showButton: true,
          row: {
            businessName: '',
            businessId: '',
            businessDesc: ''
          }
        }
      }
    }
  },
  setup(props, ctx) {
    console.log(props.layer.row)
    let ruleForm = reactive({
      businessName: props.layer.row ? props.layer.row.businessName: '',
      businessId: props.layer.row ? props.layer.row.businessId: '',
      businessDesc: props.layer.row ? props.layer.row.businessDesc: ''
    })
    console.log(ruleForm)

    const rules = {
      businessName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      businessDesc: [{ required: true, message: '请输入公司描述', trigger: 'blur' }],
    }
    const options = ref([])
    const getOptions = () => {
      getDataByBusiness().then((res) =>{
        let data = res.data
        options.value = data

      })
    }
    getOptions()
    return {
      ruleForm,
      rules,
      options
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid: boolean) => {
        if (valid) {
          let params = this.ruleForm
          if (this.layer.row) {
            this.updateForm(params)
          } else {
            this.addForm(params)
          }
        } else {
          return false;
        }
      });
    },
    // 新增提交事件
    addForm(params: object) {
      addBusiness(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.layer.show = false
        this.$emit('getTableData', true)
      })
    },
    // 编辑提交事件
    updateForm(params: object) {
      updateBusiness(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        this.layer.show = false
        this.$emit('getTableData', false)
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>