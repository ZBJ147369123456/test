<template>
  <div>
    <h2>首页{{muiscTitle}}</h2>
    <div v-for="item in muiscManList" >
      <img :src="item.avatar"/>
      <span>{{item.artistid}}::{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  import {getHomeInfo} from "request/home";

  export default {
       name: "home",
       data(){
         return {
           muiscManList:[{artistid:'',avatar:'',name:''}],
           muiscTitle:''
         }
       },
       created(){
         getHomeInfo().then(res =>{
           this.muiscManList = res.result[1].channellist
           this.muiscTitle = res.result[1].title
           console.log(this.muiscManList)
         })
       }
    }
</script>

<style scoped>

</style>
