import Vue from 'vue'
import confirm from 'components/common/tips'

const ConfirmConstructor = Vue.extend(confirm)

const tips = function(text) {
  return new Promise((resolve, reject) => { // promise封装，ok执行resolve，no执行rejectlet
    const confirmDom = new ConfirmConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(confirmDom.$el) // new一个对象，然后插入body里面
    confirmDom.text = text // 为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
    confirmDom.ok = function() {
      resolve('ok')
      confirmDom.text.isShow = false
    }
    confirmDom.close = function() {
      resolve('no')
      confirmDom.text.isShow = false
    }
  })
}

export default tips
