<template>
    <div class="atable">
        <el-table :data="tdata" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" prop='id' >
            </el-table-column>
            <el-table-column v-for="(item,index) in dom" :key="index" :label="item.title" :prop="item.name">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button v-for="(item, index) in operation" :key="index" :type='item.type' size='mini' @click="btnClick(item,scope.$index)">
                    {{item.text}}
                </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  name: "atable",
  props: {
    dom: {
      type: Array,
      default: () => []
    },
    tdata: {
      type: Array,
      default: () => []
    },
    operation: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectId: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.selectId = [];
      val.forEach((item, index) => {
        this.selectId.push(parseInt(item.id));
      });
    },
    btnClick (e,index) {
        // console.log(e.action.type,index)
        const {type} = e.action
        if(type == 'del') {
            this.tdata.splice(index, 1)
        }
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.atable {
}
</style>

