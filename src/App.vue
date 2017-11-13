<template>
  <div id="app">
    <app-header>首页</app-header>
    <transition name="side-menu-animate">
      <side-menu v-show="showMenu"></side-menu>
    </transition>
    <transition name="view-slide-animate">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import AppHeader from "./components/AppHeader";
import bus from "./Bus.js";

export default {
  name: "app",
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    "side-menu": SideMenu,
    "app-header": AppHeader
  },
  mounted() {
    bus.$on(
      "toggleMenu",
      function(show) {
        this.showMenu = show;
      }.bind(this)
    );
  }
};
</script>

<style scoped>
.side-menu-animate-enter-active,
.side-menu-animate-leave-active {
  transition: all 0.5s ease-in-out;
}

.side-menu-animate-enter,.side-menu-animate-leave-active{
  opacity: 0;
  transform: translateX(-100%);
}

</style>

