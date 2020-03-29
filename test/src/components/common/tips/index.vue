<template>
  <transition name="bounce">
    <div class="tips" v-if="text.isShow">
      <div class="text">
        <h6 v-if="text.showTit">{{text.title}}</h6>
        <p :class="text.msgClass">{{text.msg}}</p>
        <div class="btn">
          <span @click="close()" v-if="text.btn.no">{{text.btn.no}}</span>
          <div class="line" v-if="text.btn.no && text.btn.ok"></div>
          <span @click="ok()" v-if="text.btn.ok">{{text.btn.ok}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: {
        isShow: false,
        title: '提示',
        showTit: true,
        msgClass: '',
        msg: '确定删除此条信息？',
        btn: {
          ok: '确定',
          no: '取消'
        }
      }
    }
  },
  methods: {
    addMask() {
      this.$nextTick(() => {
        const that = this
        const elem = document.createElement('div')
        elem.className = 'mask'
        elem.onclick = function() {
          that.text.isShow = false
        }
        elem.style.cssText = 'position:fixed;top: 0;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;transition: all 0.5s'
        document.body.appendChild(elem)
      })
    },
    removeMask() {
      this.$nextTick(() => {
        setTimeout(() => {
          const elem = document.body.getElementsByClassName('mask')
          document.body.removeChild(elem[0])
        }, 200)
      })
    },
    close() {
      console.log('关闭')
    },
    ok() {
      console.log('确定')
    }
  },
  watch: {
    'text.isShow'(val) {
      if (val) {
        this.addMask()
      } else {
        this.removeMask()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
