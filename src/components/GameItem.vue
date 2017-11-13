<template>
<transition enter-active-class="zoomIn" leave-active-class="zoomOut">
        <div class="root animated" >
            <img :src="game.game_icon" alt="">
            <br>
            <span>{{game.game_name}}</span>
        </div>
</transition>
</template>
<script>
export default {
  name:'gameItem',
  props:['game']
}
</script>
<style scoped>
.root{
    box-sizing: border-box;
    display: inline-block;
    width: 33%;
    border: 1px solid gray;
    text-align: center
}

img{
    max-width: 80px;
    border-radius: 50%;
    margin: 10px;
}

span{
    color: darkgray
}
</style>
