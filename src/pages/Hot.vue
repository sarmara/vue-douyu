<template>
  <div class="root">
     <p v-if="status=='fail'">网络出问题喽。。。。</p>
     <span v-if="status=='loading'" class="icon-refresh icon-spin"></span>
     <div class="room-list" v-if="status=='success'">
         <home-item v-for="room in roomlist" :room="room" :key="room.id"></home-item>
          <div class="justify-fix"></div>
          <div class="justify-fix"></div>
          <div class="justify-fix"></div>
          <div class="justify-fix"></div>
          <div class="justify-fix"></div>
     </div>
     <p v-if="status=='success'" class="loading-icon">
       <span class="icon-refresh icon-spin"></span>
     </p>
  </div>
</template>
<script>
import HomeItem from "../components/HomeItem";

export default {
  name: "Hot",
  data() {
    return {
      roomlist: [],
      status: "loading",
      isLoadingMore: false
    };
  },
  components: {
    "home-item": HomeItem
  },
  created() {
    this.getRoomList();

    window.onscroll = this.didScroll;
  },
  methods: {
    getRoomList() {
      this.$http
        .get("/douyuapi/api/RoomApi/live", {
          emulateHTTP: false
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.body.error != 0) {
              this.status = "fail";
            } else {
              this.status = "success";
              this.roomlist = res.body.data;
            }
          },
          function(err) {
            this.status = "fail";
          }
        );
    },
    didScroll() {
      var scrollHeight = document.documentElement.scrollHeight;
      var scrollTop = document.documentElement.scrollTop;
      var windowHeight = document.documentElement.clientHeight;
      // console.log(scrollHeight);
      // console.log(scrollTop);
      // console.log(windowHeight);
      if (scrollTop + windowHeight >= scrollHeight - 10) {
        if (!this.isLoadingMore) {
          this.loadMore();
        }
      }
    },
    loadMore() {
      this.isLoadingMore = true;
      this.$http
        .get("/douyuapi/api/RoomApi/live", {
          params: { offset: this.roomlist.length / 30, limit: 30 }
        })
        .then(
          function(res) {
            this.roomlist = this.roomlist.concat(res.body.data);
            this.isLoadingMore = false;
          },
          function() {
            this.isLoadingMore = false;
          }
        );
    }
  }
};
</script>
<style scoped>
.root {
  margin-top: 44px;
  /* background: #256545; */
}
.room-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.justify-fix {
  display: inline-block;
  width: 14rem;
  margin: 0 10px;
}

.loading-icon {
  text-align: center;
  font-size: 2rem;
  margin: 0;
}
</style>
