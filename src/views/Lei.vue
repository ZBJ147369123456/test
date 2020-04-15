<template>
  <div>
    <h2>{{cateSname}}</h2>
    <el-container>
      <el-header>{{cateSname}}</el-header>
      <el-container v-for="item in muiscManList">
        <el-aside width="200px"><img :src="item.thumb"  class="img"/></el-aside>
        <el-main>{{item.name}}</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {getHomeInfo} from "request/home";

  export default {
        name: "Lei",
      data(){
          return {
            muiscManList:[],
            cateSname:''
          }
      },
      created(){
        getHomeInfo().then(res =>{
          this.muiscManList = res.result[0].channellist
          this.cateSname = this.muiscManList[0].cate_sname
          console.log(this.muiscManList)
        })
      }
    }
</script>

<style scoped>
  .img{
    width: 95px;
    height: 95px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
