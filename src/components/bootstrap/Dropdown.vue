<template>
    <div :class="{open:isOpen}" @click="toggle">
        <button class="btn" type="button" :class="bClass||'btn-default'" v-if="!bDivision">
            <slot name="title"></slot>
            <span class="caret"></span>
        </button>
        <button type="button" class="btn" :class="bClass||'btn-default'" v-if="bDivision"><slot name="title"></slot></button>
        <button type="button" class="btn dropdown-toggle" :class="bClass||'btn-default'" v-if="bDivision"><span class="caret"></span></button>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isOpen:false
        }
    },
    props:{
        bClass:String,
        bDivision:String
    },
    created() {
       document.addEventListener('click', (e) => {
           if (!this.$el.contains(e.target)) this.isOpen = false
       })
    },
    methods:{
        toggle:function(){
            this.isOpen=!this.isOpen
        }
    }
}    
</script>
