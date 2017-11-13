<template>
  <header class="clearfix">
      <i @click="back" class="icon icon-arrow-left"></i>
      <span class="title">
          <slot></slot>
      </span>
      <span class="icon icon-user  pull-right"></span>
  </header>
</template>
<script>
export default {
  methods: {
    back: function() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #282828;
  top: 0;
  z-index: 9;
  color: #999999;
}
i,
.title {
  margin-left: 10px;
}

.pull-right {
  line-height: 44px;
  margin-right: 20px;
}
</style>
