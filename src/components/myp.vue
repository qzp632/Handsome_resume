<template>
	<transition name="move" >
	  <div class="myp" v-show="isn">
	  <button @click="back">返回吧</button>
	    欢迎来到我的个人世界吧
	    <!-- <router-view></router-view> -->
	  </div>
	</transition>
</template>
<script>
export default {
	data() {
		return {
			isn:false
		}
	},
	methods: {
	    show: function () {
	      this.isn = true
	    },
	    back: function () {
	    	this.isn = false
	    	this.$router.go(-1)
	    }
  	}
}
</script>
<style>
	.myp {
	  width:100%;
	  height:100%;
	  background:#888;
	  position:absolute;
	  top:0;left:0;
	}

	.move-enter-active, .move-leave-active {
	  transition: all .2s linear;
	  transform:translate3d(0,0,0) 
	}
	.move-enter, .move-leave-to{
	  transform:translate3d(100%,0,0) 
	}
</style>

<!-- <template>
  <transition name="move" >
    <div id="box" v-show="shohi">
      <div @click="btnBack()">返回</div>
    </div>
    
  </transition>

</template>

<script>
export default {
  data() {
    return {
      shohi: false
    }
  },
  methods: {
    show() {
      this.shohi = true
    },
    btnBack() {
      this.shohi = false
    }
  }
}
</script>
<style scoped>
#box {
  width:100%;
  height:100%;
  background:#888;
  position:absolute;
  top:0;left:0;
}


.move-enter-active, .move-leave-active {
  transition: all .2s linear;
  transform:translate3d(0,0,0) 
}
.move-enter, .move-leave-to{
  transform:translate3d(100%,0,0) 
}
</style> -->
