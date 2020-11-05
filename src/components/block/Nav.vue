<template>
  <div class="app-aside hidden-xs" :class="settings.asideColor">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <!-- list -->
        <nav class="navi">
          <ul class="nav">
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span></span>
            </li>
            <nav-item
              :nav-data="{
                groupName: 'UI套件',
                groupIcon: 'glyphicon glyphicon-briefcase',
                groupActive: curRoute == 'ui',
              }"
            >
              <router-link to="/ui/buttons" tag="li" active-class="active"
                ><a>按钮</a></router-link
              >
              <router-link to="/ui/icons" tag="li" active-class="active"
                ><a>图标</a></router-link
              >
              <router-link to="/ui/grid" tag="li" active-class="active"
                ><a>网格</a></router-link
              >
              <router-link to="/ui/widgets" tag="li" active-class="active"
                ><a>小部件</a></router-link
              >
              <router-link to="/ui/bootstrap" tag="li" active-class="active"
                ><a>Bootstrap</a></router-link
              >
              <router-link to="/ui/portlet" tag="li" active-class="active"
                ><a>Portlet</a></router-link
              >
              <router-link to="/ui/timeline" tag="li" active-class="active"
                ><a>时间线</a></router-link
              >
            </nav-item>
            <nav-item
              :nav-data="{
                groupName: '表格',
                groupIcon: 'glyphicon glyphicon-list',
                groupActive: curRoute == 'table',
              }"
            >
              <router-link to="/table/static" tag="li" active-class="active"
                ><a>静态表格</a></router-link
              >
              <!-- <router-link to="/table/footable" tag="li" active-class="active"><a>Foottable</a></router-link> -->
            </nav-item>
            <nav-item
              :nav-data="{
                groupName: '表单',
                groupIcon: 'glyphicon glyphicon-edit',
                groupActive: curRoute == 'form',
              }"
            >
              <router-link to="/form/elements" tag="li" active-class="active"
                ><a>表单元素</a></router-link
              >
            </nav-item>
            <nav-item
              :nav-data="{
                groupName: 'Echarts',
                groupIcon: 'glyphicon glyphicon-signal',
                groupActive: curRoute == 'echarts',
              }"
            >
              <router-link to="/echart/baidu" tag="li" active-class="active"
                ><a>百度Echarts</a></router-link
              >
            </nav-item>
          </ul>
        </nav>
        <!-- / list -->
      </div>
    </div>
  </div>
</template>

<script>
import navItem from "./Nav-item.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "nav",
  data() {
    return {
      curRoute: "index",
    };
  },
  components: {
    "nav-item": navItem,
  },
  created() {
    this.setCurNav();
  },
  computed: {
    ...mapGetters(["settings"]),
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "setCurNav",
  },
  methods: {
    setCurNav() {
      //取自路由配置里的菜单分组name值
      this.curRoute = this.$route.matched[0].name;
      // console.log(this.curRoute)
      // console.log(this.$route)
    },
  },
};
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style>
</style>
