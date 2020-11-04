<template>
  <div class="settings panel panel-default" :class="{active:isopen}">
    <!-- settings -->
    <button class="btn btn-default no-shadow pos-abt" @click="toggle">
      <i class="fa fa-spin fa-gear"></i>
    </button>
    <div class="panel-heading">
      Settings
    </div>
<!--     {{setting.navbarHeaderColor}}<br>
    {{setting.navbarCollapseColor}}<br>
    {{ setting.asideColor}}<br> -->
    <div class="panel-body">
      <div class="m-b-sm">
        <label class="i-switch bg-info pull-right">
          <input type="checkbox" v-model="setting.headerFixed">
          <i></i>
        </label>
        Fixed header
      </div>
      <div class="m-b-sm">
        <label class="i-switch bg-info pull-right">
          <input type="checkbox" v-model="setting.asideFixed">
          <i></i>
        </label>
        Fixed aside
      </div>
      <div class="m-b-sm">
        <label class="i-switch bg-info pull-right">
          <input type="checkbox" v-model="setting.asideFolded">
          <i></i>
        </label>
        Folded aside
      </div>
      <div class="m-b-sm">
        <label class="i-switch bg-info pull-right">
          <input type="checkbox" v-model="setting.asideDock">
          <i></i>
        </label>
        Dock aside
      </div>
      <div>
        <label class="i-switch bg-info pull-right">
          <input type="checkbox" v-model="setting.container">
          <i></i>
        </label>
        Boxed layout
      </div>
    </div>
    <div class="wrapper b-t b-light bg-light lter r-b">
      <div class="row row-sm">
        <div class="col-xs-6">
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-black'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-black';
         ">
            <input type="radio" name="a" v-model="setting.themeID" value="1">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-black header"></b>
            <b class="bg-white header"></b>
            <b class="bg-black"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-dark'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-dark';
         ">
            <input type="radio" name="a" v-model="setting.themeID" value="13">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-dark header"></b>
            <b class="bg-white header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-white-only'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-black';
         ">
            <input type="radio" v-model="setting.themeID" value="2">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-white header"></b>
            <b class="bg-white header"></b>
            <b class="bg-black"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-primary'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-dark';
         ">
            <input type="radio" v-model="setting.themeID" value="3">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-primary header"></b>
            <b class="bg-white header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-info'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-black';
         ">
            <input type="radio" v-model="setting.themeID" value="4">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-info header"></b>
            <b class="bg-white header"></b>
            <b class="bg-black"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-success'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-dark';
         ">
            <input type="radio" v-model="setting.themeID" value="5">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-success header"></b>
            <b class="bg-white header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
          <label class="i-checks block" @click="
          setting.navbarHeaderColor='bg-danger'; 
          setting.navbarCollapseColor='bg-white-only'; 
          setting.asideColor='bg-dark';
         ">
            <input type="radio" v-model="setting.themeID" value="6">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-danger header"></b>
            <b class="bg-white header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
        </div>
        <div class="col-xs-6">
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-black'; 
          setting.navbarCollapseColor='bg-black'; 
          setting.asideColor='bg-white b-r';
         ">
            <input type="radio" v-model="setting.themeID" value="7">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-black header"></b>
            <b class="bg-black header"></b>
            <b class="bg-white"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-dark'; 
          setting.navbarCollapseColor='bg-dark'; 
          setting.asideColor='bg-light';
         ">
            <input type="radio" name="a" v-model="setting.themeID" value="14">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-dark header"></b>
            <b class="bg-dark header"></b>
            <b class="bg-light"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-info dker'; 
          setting.navbarCollapseColor='bg-info dker'; 
          setting.asideColor='bg-light dker b-r';
         ">
            <input type="radio" v-model="setting.themeID" value="8">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-info dker header"></b>
            <b class="bg-info dker header"></b>
            <b class="bg-light dker"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-primary'; 
          setting.navbarCollapseColor='bg-primary'; 
          setting.asideColor='bg-dark';
         ">
            <input type="radio" v-model="setting.themeID" value="9">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-primary header"></b>
            <b class="bg-primary header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-info dker'; 
          setting.navbarCollapseColor='bg-info dk'; 
          setting.asideColor='bg-black';
         ">
            <input type="radio" v-model="setting.themeID" value="10">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-info dker header"></b>
            <b class="bg-info dk header"></b>
            <b class="bg-black"></b>
            </span>
          </label>
          <label class="i-checks block m-b" @click="
          setting.navbarHeaderColor='bg-success'; 
          setting.navbarCollapseColor='bg-success';
          setting.asideColor='bg-dark';
          ">
            <input type="radio" v-model="setting.themeID" value="11">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-success header"></b>
            <b class="bg-success header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
          <label class="i-checks block" @click="
          setting.navbarHeaderColor='bg-danger dker bg-gd'; 
          setting.navbarCollapseColor='bg-danger dker bg-gd'; 
          setting.asideColor='bg-dark';
         ">
            <input type="radio" v-model="setting.themeID" value="12">
            <span class="block bg-light clearfix pos-rlt">
            <span class="active pos-abt w-full h-full bg-black-opacity text-center">
              <i class="glyphicon glyphicon-ok text-white m-t-xs"></i>
            </span>
            <b class="bg-danger dker header"></b>
            <b class="bg-danger dker header"></b>
            <b class="bg-dark"></b>
            </span>
          </label>
        </div>
      </div>
    </div>
    <!-- /settings -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      isopen: false,
      setting: {
        themeID: 1,
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: false,
        asideFolded: false,
        asideDock: false,
        container: false
      }
    }
  },
  watch: {
    setting:{
        handler: function (val, oldVal) { 
            this.settings(val)
        },
        deep: true
    }
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen;
    },
    ...mapActions([
      'settings'
    ])
  }
}

</script>
