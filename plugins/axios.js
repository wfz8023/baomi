export default function ({ $axios, redirect }) {
  $axios.setBaseURL('http://apibm.biaofun.com.cn/')
  $axios.onResponse( response => {
    const code = response.data.code
    if (code === 200) {
      // console.log(response.data.data)
      return response.data.data
    } else if (code === 203) {
      return response.data
    } else {
      redirect('/404.html')
    }
  })
  $axios.onError((error) => {
    console.log(
      '%c 请求失败：' + error.url + '状态码为：' + error.response.status,
      'color:#ff0000;'
    )
  })
}
