module.exports = {
  plugins: {
    autoprefixer: {},
    // 配置计算rem值的插件
    'postcss-pxtorem': {
      // 按照37.5的基准值来换算rem单位
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
