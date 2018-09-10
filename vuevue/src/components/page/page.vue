<template>
  <div>
    <div v-show= "total>10" id="page" class="page">
      <span v-show = "pageItem>1" class="pageItem disabled">
        上一页
      </span>
      <span v-show= "pageItem>1" class="pageItem current " v-on:click="jump(clonePage-2)">{{clonePage-2}}</span>
      <span v-show= "pageItem>=2" class="pageItem  " v-on:click="jump(clonePage-1)">{{clonePage-1}}</span>
      <span v-show= "pageItem>=3" class="pageItem  " v-on:click="jump(clonePage)">{{clonePage}}</span>
      <span v-show= "pageItem>=4" class="pageItem  " v-on:click="jump(clonePage+1)">{{clonePage+1}}</span>
      <span v-show= "pageItem>=5" class="pageItem  " v-on:click="jump(clonePage+2)">{{clonePage+2}}</span>
      <span v-show= "pageItem>1" class="pageItem disabled">下一页</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "page",
    computed: {
      total() {
        return this.$store.getters.total
      },
      display() {
        return this.$store.state.display
      },
      currentPage:{
        get(){
          return this.$store.state.currentPage
        },
        set(newDate){
          this.$store.state.currentPage=newDate
        }
      },
      clonePage(){
        if (this.currentPage===1){
          return this.currentPage+2
        }
        if (this.currentPage===2){
          return this.currentPage+1
        }
        if (this.currentPage===pageItem){
          return this.currentPage-2
        }
        if (this.currentPage===pageItem-1){
          return this.currentPage-1
        }
        else {
          return this.currentPage
        }
      },
      pageItem(){
        return this.$store.state.pageItem
      },

    },
    methods:{
      jump(currentPage){
        this.currentPage=currentPage
      }
    },

  }
</script>

<style scoped>

</style>
