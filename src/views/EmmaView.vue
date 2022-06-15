<template>
  <div class="emma">
    <h1>This is an emma page</h1>
    {{ test }}
    
    <myCompo 
      @click="haha"
      @emma="emmaTest"
      :a="test"
      :b="5"
    />
  
  </div>
</template>

<script>
import myCompo from '@/components/emma/myCompo.vue'



export default {
	props:{

	},
	methods:{
    haha(){
      this.$data.test = " haha ";
    },
    emmaTest(){
      console.log("  에밋 마운트하자마자 발생됨 ")
    }
	},
  data(){
    return{
      test: "hihi",
    }
  },
	components:{
    myCompo
	},
	mounted(){
		
	}
}
</script>
