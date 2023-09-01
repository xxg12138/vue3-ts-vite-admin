// 导入 Mock.js 库
import Mock from 'mockjs'
// 设置模拟数据的延迟时间（可选）
Mock.setup({
  timeout: 200 // 单位是毫秒
})

// 使用 Mock.mock() 方法来设置接口的模拟返回数据
Mock.mock(/register/, 'post', (res: any) => {
  const { data } = JSON.parse(res.body)
  if (data.email === '1162149834@qq.com' && data.password === '123456aB') {
    return {
      status: 200,
      message: '登录效验通过',
      data: {
        name: '小小怪',
        token: 'lyk-token',
        imgUrl:
          'https://xxg-1313373043.cos.ap-guangzhou.myqcloud.com/uploads/%E7%BE%8A.jpg',
        introduce: '前端开发人员',
        card: '创造者',
        // 作品
        count: 0
      }
    }
  } else {
    return {
      status: 404,
      message: '用户不存在'
    }
  }
})

Mock.mock(/UserExplore/, 'get', (res: any) => {
  const url = new URL(res.url)
  // 获取 token 的值
  const token = url.searchParams.get('token')
  if (token === 'lyk-token') {
    return {
      status: 200,
      message: '获取成功',
      data: {
        list: [
          {
            text: '测试',
            avatar:
              'https://img.js.design/assets/img/6284bbd9ef78de1fbe7294f1.jpg',
            imgUrl:
              'https://xxg-1313373043.cos.ap-guangzhou.myqcloud.com/2.jpg',

            name: '小小怪'
          },
          {
            text: '测试',
            avatar:
              'https://img.js.design/assets/img/6284bbd9ef78de1fbe7294f1.jpg',
            imgUrl:
              'https://xxg-1313373043.cos.ap-guangzhou.myqcloud.com/1.jpg',

            name: '小小怪'
          },
          {
            text: '测试',
            avatar:
              'https://img.js.design/assets/img/6284bbd9ef78de1fbe7294f1.jpg',
            imgUrl:
              'https://xxg-1313373043.cos.ap-guangzhou.myqcloud.com/3.jpg',
            name: '小小怪'
          }
        ]
      }
    }
  } else {
    return {
      status: 404,
      message: 'token失效'
    }
  }
})

export default Mock
