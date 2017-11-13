<template>
  <div>
    <back-header>{{$route.params.gameid}}</back-header>
    <div>
        <category-game-item v-for="r in roomList" :room="r" :key="r.cate_id"></category-game-item>
    </div>
  </div>
</template>
<script>
import BackHeader from '../components/BackHeader'
import CategoryGameItem from '../components/CategoryGameItem'

export default {
  components:{
      "back-header":BackHeader,
      "category-game-item":CategoryGameItem
  },
  data() {
    return {
      roomList: []
    };
  },
  created() {
    this.$http
      .get("/douyuapi/api/RoomApi/live/" + this.$route.params.categoryid)
      .then(function(res) {
          console.log(res)
        this.roomList=res.body.data
      });
  }
};
</script>
<style scoped>
div {
  margin-top: 44px;
}
</style>
