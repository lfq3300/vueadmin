<template>
    <div class="admin">
        <BuilderList :builder='builder'></BuilderList>
    </div>
</template>
<script>
import BuilderList from "@/components/list";
// import TableMain from '@/components/TableMain'
export default {
  components: { BuilderList },
  name: "admin",
  data() {
    return {
      builder: [
        {
          type: "button",
          dom: [
            {
              type: "success",
              text: "新增",
              action: {
                type: 1,
                path: "/addClassify"
              }
            },
            {
              type: "danger",
              text: "删除"
            }
          ]
        },
        {
          type: "table",
          dom: [
            {
              title: "ID",
              name: "id"
            },
            {
              title: "姓名",
              name: "name"
            },
            {
              title: "电话",
              name: "tel"
            }
          ],
          data: [
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            },
            {
              id: "1",
              name: "user1",
              tel: "18318028414"
            },
            {
              id: "2",
              name: "user5",
              tel: "18318028414"
            }
          ],
          operation: [
            {
              type: "primary",
              text: "修改",
              action: {
                type: "edit",
                path: "/log"
              }
            },
            {
              type: "danger",
              text: "删除",
              action: {
                type: "del",
                path: "/log"
              }
            }
          ]
        },
        {
          type: "page",
          data: {
            total: 100
          }
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>

