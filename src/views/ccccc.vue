<template>
  <div class="axios">
    <div class="axios_1">
      <el-form
        :model="ruleform"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="命中" prop="hit">
          <el-input type="number" v-model.number="ruleform.hit"></el-input>
        </el-form-item>
        <el-form-item label="无双" prop="unparalleled">
          <el-input v-model.number="ruleform.unparalleled"></el-input>
        </el-form-item>
        <el-form-item label="会心" prop="critical_strike">
          <el-input v-model.number="ruleform.critical_strike"></el-input>
        </el-form-item>
        <el-form-item label="会效" prop="critical_effect">
          <el-input v-model.number="ruleform.critical_effect"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ccccc",
  data() {
    return {
      ruleform: {
        hit: '',
        unparalleled: "",
        critical_strike: "",
        critical_effect: "",
        ages:"",
      },
      rules: {
        hit: [
          {required: true, message: '请输入命中', trigger: 'blur' },
          {type: 'number', min: 90, max: 120, message:'命中必须大于90', trigger: 'blur' }
        ],
        unparalleled: [
          {required: true, message: '请输入无双', trigger: 'blur' },
          {type: 'number', min:0, max:45, message:'无双45为最大值', trigger: 'blur' }
        ],
        critical_strike: [
           {required: true, message: '请输入会心', trigger: 'blur' },
          {type: 'number', min:0, max:100, message:'会心最大值为100', trigger: 'blur' }
        ],
        critical_effect: [
        {required: true, message: '请输入会效', trigger: 'blur' },
          {type: 'number', min:175, max:300, message:'会效应在175到300之间', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          alert(this.ruleform.hit);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ages(){

    }


  }


};
</script>
<style>
.axios_1 {
  float: left;
}
</style>