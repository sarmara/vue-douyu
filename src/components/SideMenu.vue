<template>
  <div class="root" @click="hideMenu()">
      <div class="bottom">
          <div class="menu">
              <ul>
                  <router-link to="/">
                        <li>
                            首页<span class="icon icon-angle-right"></span>
                        </li>
                    </router-link>
                    <router-link to="/category">
                        <li>
                            全部分类<span class="icon icon-angle-right"></span>
                        </li>
                    </router-link>
                    <router-link to="/recommend">
                        <li>
                            推荐<span class="icon icon-angle-right"></span>
                        </li>
                    </router-link>
                    <router-link to="/usercenter">
                        <li>
                            个人中心<span class="icon icon-angle-right"></span>
                        </li>
                    </router-link>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
import bus from "../Bus.js";

export default {
  name: "sideMenu",
  methods: {
    hideMenu() {
      bus.$emit("toggleMenu", false);
    }
  }
};
</script>
<style scoped>
.root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
}

.bottom {
  position: absolute;
  top: 44px;
  left: 0;
  width: 50%;
  height: 100%;
}

.menu {
  width: calc(100%-200px);
  height: 100%;
  background-color: #282828;
}

ul {
  margin: 0;
  padding: 0;
  border-top: 1px groove black;
}

ul li {
  height: 44px;
  line-height: 44px;
  padding-left: 10px;
  color: #666;
  border-bottom: 0.2px dotted #333;
}

li span {
  float: right;
  line-height: 44px;
  padding-right: 20px;
  font-weight: bold;
}
</style>
