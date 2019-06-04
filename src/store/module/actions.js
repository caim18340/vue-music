import axios from 'axios'
export default{
  getBanner ({commit}, data) {
    axios.get('http://localhost:3000/banner')
      .then(function (res) {
        commit('setBanner', res.data.banners)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getRecommend ({commit}, data) {
    axios.get('http://localhost:3000/personalized')
      .then(function (res) {
        var arr = []
        for (var i = 0, len = res.data.result.length; i < len; i += 6) {
          arr.push(res.data.result.slice(i, i + 6))
        }
        commit('setRecommend', arr)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
}
