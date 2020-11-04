<template>
  <nav aria-label="Page navigation">
    <ul class="pagination m-t-none" :class="{'pagination-sm':bSize=='sm','pagination-md':bSize=='md','pagination-lg':bSize=='lg'}">
      <li @click="first()" v-if="param.boundaryLinks">
        <a aria-label="Previous">
        <span aria-hidden="true">{{param.firstText}}</span>
      </a>
      </li>
      <li @click="prev()" v-if="param.directionLinks">
        <a aria-label="Previous">
        <span aria-hidden="true">{{param.previousText}}</span>
      </a>
      </li>
      <li v-for="item in page" :class="{active:item.num==param.currentPage}" @click="selected(item.num)" :aa="item.num"><a>{{item.txt}}</a></li>
      <li @click="next()" v-if="param.directionLinks">
        <a aria-label="Next">
        <span aria-hidden="true">{{param.nextText}}</span>
      </a>
      </li>
      <li @click="last()" v-if="param.boundaryLinks">
        <a aria-label="Previous">
        <span aria-hidden="true">{{param.lastText}}</span>
      </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      page: [],
      param: {
        currentPage: this.currentPage || 1, //当前页
        itemsPerPage: this.itemsPerPage || 10, // 每页显示的数量.设置值小于1表示显示所有项
        totalItems: this.totalItems||11, //总条数
        maxSize:this.maxSize|| 5,//可选择的页数范围(如果设置为5,当前页为10,总页数为100,那么可选择第8,9,10,11,12页)
        //
        boundaryLinks:this.boundaryLinks || false, //是否显示第一页和最后一页的按钮
        directionLinks:this.directionLinks|| true, //是否显示上一页和下一页的按钮
        //
        previousText: this.previousText||'上一页', //上一页的按钮名称
        nextText: this.nextText||'下一页', //下一页的按钮名称
        firstText:this.firstText|| '开始', //第一页的按钮的名字
        lastText: this.lastText||'末尾', //最后一页的按钮名字
      }
    }
  },
  props:{
    bSize:String,
    currentPage:Number,
    itemsPerPage:Number,
    totalItems:Number,
    maxSize:Number,
    boundaryLinks:Boolean,
    directionLinks:Boolean,
    previousText:String,
    nextText:String,
    firstText:String,
    lastText:String
  },
  created() {
    // alert(typeof this.totalItems)
    this.setPage();
  },
  methods: {
    each(data, callback) {
      for (var x in data) {
        callback(x, data[x])
      }
    },
    setPage() {
      var param = this.param,
        n = param.currentPage,
        total = Math.ceil(param.totalItems / param.itemsPerPage), //总页数
        pag = []; //分页数据变量
      if (n <= param.maxSize) { //如果当前的激活的项 小于要显示的条数
        var i = Math.min(total, param.maxSize)
        while (i--) {
          pag.unshift({
            txt: i + 1,
            num: i + 1,
          });
        }
      } else { //当前页数大于显示页数了
        var i = param.maxSize,
          middle = n - Math.ceil(i / 2); //从哪里开始 
        while (i--) {
          if (middle < total) {
            middle++
            pag.push({
              txt: middle,
              num: middle,
            });
          }
        }
      }
      if (pag[pag.length - 1].num < total) {
          pag.push({
            txt: '...',
            num: pag[pag.length - 1].num + 1,
          });
      }
      this.page = pag;
      this.$emit('change', n); //执行回调
    },
    selected(n) {
      this.param.currentPage = n;
      this.setPage();
    },
    next() {
      if (this.param.currentPage >= (this.param.totalItems / this.param.itemsPerPage)) { return }
      this.param.currentPage++;
      this.setPage();
    },
    prev() {
      if (this.param.currentPage == 1) { return }
      this.param.currentPage--;
      this.setPage();
    },
    first() {
      this.param.currentPage = 1;
      this.setPage();
    },
    last() {
      this.param.currentPage = Math.ceil(this.param.totalItems / this.param.itemsPerPage);
      this.setPage();
    }
  }
}

</script>
