<template>
  <Layer :layer="layer" @confirm="submit">
    <el-form :model="ruleForm" :rules="rules" ref="form" label-width="120px" style="margin-right:30px;">
      <el-form-item label="管理员姓名：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="身份证号：" prop="idNumber">
        <el-input v-model="ruleForm.idNumber" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：" prop="phone">
        <el-input v-model="ruleForm.phone" oninput="value=value.replace(/[^\d]/g,'')" placeholder="请输入电话号码"></el-input>
      </el-form-item>
			<el-form-item label="选择商家：" prop="businessId">
			  <el-select v-model="ruleForm.businessId" placeholder="请选择" clearable>
					<el-option
						v-for="item in options"
						:key="item.businessName"
						:label="item.businessName"
						:value="item.businessId">
					</el-option>
				</el-select>
			</el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-radio-group v-model="ruleForm.status">
          <el-radio :label="1">管理员</el-radio>
          <el-radio :label="0">成员</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="性别：" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
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
    let ruleForm = reactive({
      id: props.layer.row ? props.layer.row.employee.id : '',
      name: props.layer.row ? props.layer.row.employee.name : '',
      username:props.layer.row ? props.layer.row.employee.username : '',
      businessId:props.layer.row ? props.layer.row.employee.businessId : '',
      phone:props.layer.row ? props.layer.row.employee.phone : '',
      password:props.layer.row ? props.layer.row.employee.password : '',
      sex: props.layer.row ? props.layer.row.employee.sex == '男'? 0: 1 : 0,
      idNumber:props.layer.row ? props.layer.row.employee.idNumber : '',
      status:props.layer.row ? props.layer.row.employee.status : '',
    })
    // console.log(props.layer.row.employee)
    const rules = {
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      phone: [{ required: true, message: '请输入正确的电话号码', trigger: 'blur' }],
      business: [{ required: true, message: '请选择', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      radio: [{ required: true, message: '请选择', trigger: 'blur' }],
      idNumber:[{required: true, message: '请输入身份证号', trigger: 'blur' }]
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
      add(params)
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
      update(params)
      .then((res) => {
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