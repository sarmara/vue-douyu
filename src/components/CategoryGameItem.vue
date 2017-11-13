<template>
<transition enter-active-class="zoomIn" leave-active-class="zoomOut">
  <div class="animated">
      <a :href="room.url"><img :src="room.room_src" alt=""></a>
      <p>{{room.room_name}}</p>
      <p><span class="icon icon-user">{{room.nickname}}</span></p>
      <p><span class="icon icon-eye-open">{{room.online | formatNumber}}</span></p>
  </div>
  </transition>
</template>
<script>
export default {
  props:['room']
}
</script>
<style scoped>
div{
    border:1px solid gray;
    display: inline-block;
    margin:0  10px 10px 10px;
}
p{
    padding: 0;
    margin: 0;
}
</style>
