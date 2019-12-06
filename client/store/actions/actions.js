export default {
  updateCountAsync (store,data) {
    /*setTimeout(() => {
      store.commit('updateCount',{num: data.num+5,num2:2})
    },data.time)*/

    setInterval(() => {
      store.commit('updateCount',{
        num: data.num,
        num2: 2
      })
    },data.time)
  }
}
