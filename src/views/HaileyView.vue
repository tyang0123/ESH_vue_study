<template>
	<div class="hailey">
		<template v-if="true">
			<div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
				<div class="px-4 py-5 sm:px-6">
					<span @click="clickSearch"> SearchBar </span>
				</div>
				<div class="px-4 py-5 sm:p-6">
					<component :is="location" />
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import GoogleSearch from '@/components/hailey/googleSearch.vue'

export default {
	components:{
		GoogleSearch
	},
	data(){
		return{

		}//return
	},//data
	computed:{
		location:{
			set(value){
				return value;
			}
		}
	},
	methods:{
		clickSearch(){
			location.href = "#GoogleSearch"
		}
	},
	mounted(){
		window.addEventListener("changehash", ()=>{
			self.location = window.location.hash;
		})
	}
}
</script>

