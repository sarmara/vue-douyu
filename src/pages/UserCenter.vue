<template>
  <div>
      <app-header>个人中心</app-header>
        <div>
            个人中心正在开发.........
        </div>
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";

export default {
  name: "userCenter",

  components: {
    "app-header": AppHeader,
  },

};
</script>
<style scoped>
div{
    margin-top: 44px;
}
</style>
