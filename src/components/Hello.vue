<template>
  <div class="hello">
    <button @click="myGo">点击进入我的个人世界吧</button>
    <div @click="add">add</div>
    <P>{{count}}</P>
    <myp ref="myp"></myp>
    <router-view></router-view>
  </div>
</template>

<script>
import myp from '@/components/myp'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
  data() {
    return {
      id:"122344",
      count: 1
    }
  },
  created() {
    this._getRecommend()
    console.log(2)
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if(res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
    },
    myGo () {
      this.$router.push("/index/"+this.id) 
      this.$refs.myp.show()
    },
    add () {
      this.count++;
    }
  },
  beforeCreate() {
    console.log(1)
  },
  beforeMount() {
console.log(3)
  },
  mounted() {
console.log(4)
  },

  beforeUpdate() {
console.log(5)
  },
  updated() {
console.log(6)
  },
  activated() {
console.log(7)
  },
  deactivated() {
console.log(8)
  },
  beforeDestroy() {
console.log(9)
  },
  destroyed() {
console.log(10)
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
