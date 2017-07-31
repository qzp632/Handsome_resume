<template>
  <div>
      <div ref="ds" style="background: red">
        <ul>
          <li v-for="item in lisd">{{item.name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lisd:[]
    }
  },
  created(){
    setTimeout( () => {
      this.getS()
    },20)
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll)
  },
  methods:{
    getS() {
      for(var i = 0; i < 30; i++){
        this.lisd.push({name:"ssss"})
      }
    },
    getScroll() {
        var scrollTop = document.body.scrollTop;　　
        var docHeight = this.$refs.ds.clientHeight;
        var windowHeight = window.screen.height; 
        console.log(scrollTop + windowHeight)

        console.log(docHeight - docHeight*0.1)
        if(scrollTop + windowHeight >= (docHeight - docHeight*0.05)) {
          alert(1)
          this.lisd = this.lisd.concat(this.lisd )

        }
        
    }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
li {
  height: 80px;
  border-top: 1px solid #ccc;
}
</style>
