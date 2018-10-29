<template>
    <div>
        <add :form-data='formdata'></add>
    </div>
</template>
<script>
import Add from "@/components/Builder/Add";
export default {
  components: { Add },
  data() {
    return {
      formdata: [
        {
          name: "分类名称",
          modelname: "className",
          type: "input",
          placeholder: "输入分类名称"
        },
        {
          name: "选项1",
          type: "select",
          modelname: "selectName",
          placeholder: "请选择",
          childen: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶"
            },
            {
              value: "选项3",
              label: "蚵仔煎"
            },
            {
              value: "选项4",
              label: "龙须面"
            },
            {
              value: "选项5",
              label: "北京烤鸭"
            }
          ]
        }
      ]
    };
  }
};
</script>
