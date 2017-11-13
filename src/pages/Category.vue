<template>
  <div>
      <app-header>全部分类</app-header>
        <div class="game-box">
          <router-link  v-for="g in gameList" :key="g.cate_id" :to="'/categoryRoom/'+g.cate_id+'/'+g.game_name">
            <game-item  :game="g"></game-item>
          </router-link>
        </div>
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import GameItem from "../components/GameItem";

export default {
  name: "category",
  data() {
    return {
      gameList: []
    };
  },
  components: {
    "app-header": AppHeader,
    "game-item": GameItem
  },
  created() {
    this.$http.get("/douyuapi/api/RoomApi/game").then(
      function(res) {
          console.log(res);
        this.gameList=res.body.data
      },
      function(err) {
        console.log(err);
      }
    );
  }
};
</script>
<style scoped>
.game-box{
    padding-top: 44px;
}
</style>
