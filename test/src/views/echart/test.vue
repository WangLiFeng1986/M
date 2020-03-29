<template>
  <div class="barChart">
    <div class="chart">1111111111111
      <div id="myChart" ref="myChart">
      </div>
    </div>
  </div>
</template>
<script>
import echarts from '@/utils/echarts'
export default {
  name: 'test',
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  updated() {
    // 获取考勤数据
    // this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      let option = {
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }

      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>
<style lang='less' scoped>
.barChart {
  #myChart {
    margin: 0 auto;
    width: 355px;
    height: 691px;
    background: rgba(0, 0, 0, 0.2);
  }
}
// .text {
//   position: absolute;
//   left: 45%;
//   top: 40%;
// }
</style>
