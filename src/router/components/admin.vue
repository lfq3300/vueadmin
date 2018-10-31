<template>
    <div class="admin">
      <search v-if="!hidden" :cancel-click='hideModel'></search>
      <BuilderList :builder='builder' :btn-click='btnClick'></BuilderList>
    </div>
</template>
<script>
import BuilderList from "@/components/list";
import Search from "@/components/Builder/Search";
// import TableMain from '@/components/TableMain'
export default {
  components: { BuilderList, Search },
  name: "admin",
  data() {
    return {
      builder: [
        {
          type: "button",
          dom: [
            {
              type: "primary",
              text: "新增",
              action: {
                type: 1,
                path: "/addClassify"
              }
            },
            {
              type: "success",
              text: "搜索",
              action: {
                type: 2
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
      ],
      hidden: true
    };
  },
  methods: {
    btnClick(action) {
      if (action.type == 1) {
        console.log(action);
        this.$router.push({ path: `/components${action.path}` });
      }
      if (action.type == 2) {
        this.hidden = false
      }
    },
    hideModel () {
      this.hidden = true
    }
  }
};
</script>
<style lang="less" scoped>
</style>

