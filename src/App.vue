<template>
  <div class="app" :class="{'app-aside-folded':!sidebar,'app-header-fixed':settings.headerFixed,'app-aside-fixed':settings.asideFixed,'app-aside-folded':settings.asideFolded,'app-aside-dock':settings.asideDock,container:settings.container}">
    <!-- navbar -->
    <v-header></v-header>
    <!-- / navbar -->
    
    <!-- nav -->
    <v-nav></v-nav>
    <!-- / nav -->

    <!-- nav -->
    <v-setings></v-setings>
    <!-- / nav -->

    <!-- content -->
    <div class="app-content">
      <div class="app-content-body">
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeInDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <!-- /content -->
  </div>
</template>

<script>
import header from './components/block/Header'
import nav from './components/block/Nav'
import setings from './components/block/Setings'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-setings': setings
  },
  computed: mapGetters([
    'sidebar',
    'settings'
  ])
}
</script>

<style>
</style>
