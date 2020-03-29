<template>
  <div id="app">
    <transition :name="transitionName">
      <!-- <keep-alive :include="['Home']"> -->
      <router-view class="child-view" />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
/* 切页动画 */
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.4s;
  height: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
