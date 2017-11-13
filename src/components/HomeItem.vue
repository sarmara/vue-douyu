<template>
<transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
  <div class="root animated">
      <div class="root-header">
            <a :href="room.url"><img v-show="loaded" @load="imgLoaded"  :src="room.room_src" alt=""></a>
            <img v-show="!loaded" :src="placeholder" alt="">
         <span class="house-name">{{room.nickname}}</span>
         <span class="visited-number">
             <span class="icon icon-user-md"></span>
             {{room.online}}
         </span>
      </div>
      <div class="root-name">
          <span class="icon-desktop icon"></span>
          {{room.room_name}}
      </div>
  </div>
  </transition>
</template>
<script>
import placeholder from "../assets/placeholder.gif";

export default {
  props: ["room"],
  data() {
    return {
      loaded: false,
      placeholder
    };
  },
  methods: {
      imgLoaded(){
          this.loaded=true
      }
  }
};
</script>
<style scoped>
.root{
    display: inline-block;
    width: 14rem;
    margin: 10px
}

.root-header{
    /* border:1px solid blue; */
    height: 10rem;
    position: relative;
    border-radius: 10px;
    color: white;
    background-size: 100% 100%;
    overflow: hidden;
}

.root-header img{
    width: 100%;
    height: 100%;
}

@media(max-width:320px){
    .root{
        width: 80%;
    }
    .root-header{
        height: 50vw;
    }
}

.house-name,.visited-number{
    position: absolute;
}

.house-name{
    left: 10px;
    bottom: 5px;
    /* border: 1px solid red; */
}

.visited-number{
    right: 5px;
    bottom: 5px;
    /* border: 1px solid red; */
}

.root-name{
    padding: 0 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
