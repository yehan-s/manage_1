<template>
    <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545C64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{isCollapse ? '后台' : '通用后台管理'}}</h3>
    <!-- 没有二级菜单 -->
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 有二级菜单 -->
    <el-submenu v-for="item in hasChildren" :index="item.path + ''" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <!-- <span slot="title">分组一</span> -->
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex.toString()">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
      menu: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit('selectMenu', item)
    },
  },
  computed: {
    noChildren() {
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  },
};
</script>

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  // height: 100vh;
}
.el-menu{
  height: 100%;
  border: none;
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}

</style>