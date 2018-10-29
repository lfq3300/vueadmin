<template>
  <div>
    <el-form class="formbox" ref="form" :model="pushData" label-width="180px">
      <el-form-item v-for="(item, index) in formData" :key="index" :label="item.name" >
        <el-input v-if="item.type == 'input'" v-model="pushData[item.modelname]" :placeholder='item.placeholder'></el-input>
        <el-select v-if="item.type == 'select'" v-model="pushData[item.modelname]" :placeholder="item.placeholder">
          <el-option v-for="sItem in item.childen" :key="sItem.value"  :label="sItem.label" :value="sItem.value"></el-option>
        </el-select>
        <el-date-picker v-if="item.type == 'date'" type="date" placeholder="选择日期" v-model="pushData.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submit" >确定</el-button>
      </el-form-item>
    </el-form> 
  </div>
</template>
<script>
export default {
  props: {
    formData: {
      type: Array,
      default: () => []
    }
  },
  created () {
    for (let i = 0; i < this.formData.length; i++) {
      const e = this.formData[i];
      // this.pushData[e.modelname] = ''
      this.$set(this.pushData, e.modelname, '')
    }
  },
  computed: {
    
  },
  data () {
    return {
      type: '',
      pushData: {
        // selectName: ''
      }
    }
  },
  methods: {
    submit () {}
  }
}
</script>
<style lang="scss" scoped>
.formbox{
  margin: 25px 0;
}
.el-input{
  width: 300px;
}
</style>


