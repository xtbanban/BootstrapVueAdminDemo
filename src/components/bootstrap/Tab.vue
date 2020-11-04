<template>
  <div class="tab-container">
     <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" :class="{active:active==index}" v-for="(item,index) in bTab" @click="toggle(index)"><a role="tab">{{item}}</a></li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <!-- <transition name="fade" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" v-for="(item,index)  in bTab"> -->
      <div v-show="active==index" v-for="(item,index)  in bTab">
        <slot :name="item"></slot>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    	active:this.bActive||0
    }
  },
  props: {
    bTab: Array,
    bActive: Number
  },
  methods: {
    toggle: function(index) {
      this.active = index;
      this.$emit('change',index);
    }
  }
}

</script>
