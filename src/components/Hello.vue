<template>
  <div class="hello">
    <button @click="myGo">点击进入我的个人世界吧</button>
    <myp ref="myp"></myp>
    <router-view></router-view>
  </div>
</template>

<script>
import myp from '@/components/myp'
export default {
  data() {
    return {
      id:"122344"
    }
  },
  methods: {
    myGo () {
      this.$router.push("/index/"+this.id) 
      this.$refs.myp.show()
    }
  },
  components: { myp }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
