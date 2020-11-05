<template>
  <!-- 顶部导航条，从左到右，左边要注意和左侧导航颜色一致 -->
  <div class="app-header navbar">

    <!-- navbar header 左边logo，要和下方导航(app-aside)颜色一致 -->
    <div class="navbar-header" :class="settings.navbarHeaderColor">
      <!-- 两个按钮， 当小屏幕时出现最右边，一个集成，一个设置，具体事件未完成 (i标签应为旧版本字体图标，可以改为span)-->
      <button class="pull-right visible-xs dk">
        <span class="glyphicon glyphicon-cog"></span>
      </button>
      <button class="pull-right visible-xs">
        <i class="glyphicon glyphicon-align-justify"></i>
      </button>

      <!-- brand 公司徽章：一个B图标，导航缩小时，只显示它，改为home图标 fa fa-btc-->
      <a href="#/" class="navbar-brand text-lt">
        <i class="glyphicon glyphicon-home"></i>
        <span class="hidden-folded m-l-xs">Radius Dev</span>
      </a>
      <!-- / brand -->
    </div>
    <!-- / navbar header -->

    <!-- navbar collapse -->
    <div
      class="collapse pos-rlt navbar-collapse box-shadow"
      :class="settings.navbarCollapseColor"
    >
      <!-- buttons -->
      <div class="nav navbar-nav hidden-xs">
        <a class="btn no-shadow navbar-btn" @click="toggleSidebar()">
          <i
            class="fa fa-dedent fa-fw"
            :class="{ 'fa-dedent': sidebar, 'fa-indent': !sidebar }"
          ></i>
        </a>
        <a class="btn no-shadow navbar-btn">
          <i class="icon-user fa-fw"></i>
        </a>
      </div>
      <!-- / buttons -->

      <!-- link and dropdown -->
      <ul class="nav navbar-nav hidden-sm">
        <li
          class="dropdown pos-stc"
          v-toggleClass="{ class: 'open', close: true }"
        >
          <a class="dropdown-toggle">
            <span>Mega</span>
            <span class="caret"></span>
          </a>
          <div class="dropdown-menu wrapper w-full bg-white">
            <div class="row">
              <div class="col-sm-4">
                <div class="m-l-xs m-t-xs m-b-xs font-bold">
                  Pages
                  <span class="badge badge-sm bg-success">10</span>
                </div>
                <div class="row">
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Post
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Search
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Price
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Lock screen
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Sign in
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 b-l b-light">
                <div class="m-l-xs m-t-xs m-b-xs font-bold">
                  UI Kits
                  <span class="label label-sm bg-primary">12</span>
                </div>
                <div class="row">
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Icons
                          <span class="badge badge-sm bg-warning">1000+</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Grid
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Widgets
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Bootstap
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Sortable
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Portlet
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i
                            class="fa fa-fw fa-angle-right text-muted m-r-xs"
                          ></i>
                          Timeline
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 b-l b-light">
                <div class="m-l-xs m-t-xs m-b-sm font-bold">Analysis</div>
                <div class="text-center">
                  <div class="inline">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown" v-toggleClass="{ class: 'open', close: true }">
          <a class="dropdown-toggle">
            <i class="fa fa-fw fa-plus visible-xs-inline-block"></i>
            <span>New</span>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="javascript:alert(2)">Projects</a>
            </li>
            <li>
              <a href>
                <span class="badge bg-info pull-right">5</span>
                <span>Task</span>
              </a>
            </li>
            <li>
              <a href>User</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href>
                <span class="badge bg-danger pull-right">4</span>
                <span>Email</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- / link and dropdown -->

      <!-- search form -->
      <form class="navbar-form navbar-form-sm navbar-left shift">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control input-sm bg-light no-border rounded padder"
              placeholder="Search projects..."
            />
            <span class="input-group-btn">
              <button type="submit" class="btn btn-sm bg-light rounded">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </form>
      <!-- / search form -->

      <!-- nabar right -->
      <ul class="nav navbar-nav navbar-right">
        <li class="hidden-xs">
          <v-fullscreen></v-fullscreen>
        </li>
        <li class="dropdown" v-toggleClass="{ class: 'open', close: true }">
          <a class="dropdown-toggle">
            <i class="icon-bell fa-fw"></i>
            <span class="visible-xs-inline">Notifications</span>
            <span class="badge badge-sm up bg-danger pull-right-xs">2</span>
          </a>
          <!-- dropdown -->
          <div class="dropdown-menu w-xl animated fadeInUp">
            <div class="panel bg-white">
              <div class="panel-heading b-light bg-light">
                <strong
                  >You have
                  <span>2</span>
                  notifications</strong
                >
              </div>
              <div class="list-group">
                <a class="media list-group-item">
                  <span class="pull-left thumb-sm">
                    <img src="../../assets/app/img/a0.jpg" class="img-circle" />
                  </span>
                  <span class="media-body block m-b-none">
                    Use awesome animate.css
                    <br />
                    <small class="text-muted">10 minutes ago</small>
                  </span>
                </a>
                <a class="media list-group-item">
                  <span class="media-body block m-b-none">
                    1.0 initial released
                    <br />
                    <small class="text-muted">1 hour ago</small>
                  </span>
                </a>
              </div>
              <div class="panel-footer text-sm">
                <a class="pull-right">
                  <i class="fa fa-cog"></i>
                </a>
                <a href="#notes">See all the notifications</a>
              </div>
            </div>
          </div>
          <!-- / dropdown -->
        </li>
        <li class="dropdown" v-toggleClass="{ class: 'open', close: true }">
          <a class="dropdown-toggle clear">
            <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
              <img src="../../assets/app/img/a0.jpg" alt="..." />
              <i class="on md b-white bottom"></i>
            </span>
            <span class="hidden-sm hidden-md">John.Smith</span>
            <b class="caret"></b>
          </a>
          <!-- dropdown -->
          <ul class="dropdown-menu animated fadeInRight w">
            <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">
              <div>
                <p>300mb of 500mb used</p>
              </div>
            </li>
            <li>
              <a href>
                <span class="badge bg-danger pull-right">30%</span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>
                <span class="label bg-info pull-right">new</span>
                Help
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
          <!-- / dropdown -->
        </li>
      </ul>
      <!-- / navbar right -->
    </div>
    <!-- / navbar collapse -->
  </div>
</template>

<script>
import fullscreen from "./Header-fullscreen";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "header",
  data() {
    return {
      msg: "Nav",
    };
  },
  computed: {
    ...mapGetters(["sidebar", "settings"]),
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
  components: {
    "v-fullscreen": fullscreen,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
