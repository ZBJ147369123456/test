<template>
    <div id="my-bar">
      <tab-bar>
        <tar-bar-item link="/home">
          <img src="~assets/tabBar/home.svg" slot="icon" alt="">
          <img src="~assets/tabBar/home_active.svg" slot="active-icon">
          <div slot="text">首页</div>
        </tar-bar-item>
        <tar-bar-item link="/lei">
          <img src="~assets/tabBar/category.svg" slot="icon" alt="">
          <img src="~assets/tabBar/category_active.svg" slot="active-icon">
          <div slot="text">分类</div>
        </tar-bar-item>
        <tar-bar-item link="/shop">
          <img src="~assets/tabBar/shopcart.svg" slot="icon" alt="">
          <img src="~assets/tabBar/shopcart_active.svg" slot="active-icon">
          <div slot="text">购物车</div>
        </tar-bar-item>
        <tar-bar-item link="/profile">
          <img src="~assets/tabBar/profile.svg" slot="icon" alt="">
          <img src="~assets/tabBar/profile_active.svg" slot="active-icon">
          <div slot="text">我的</div>
        </tar-bar-item>
      </tab-bar>
    </div>
</template>
<script>
  import TarBarItem from "components/tabBar/tarBarItem.vue"
  import TabBar from "components/tabBar/tabBar.vue"
  export default {
    name: "myBar",
    components:{
        TabBar,
        TarBarItem
      }

    }
</script>

<style scoped>

</style>
