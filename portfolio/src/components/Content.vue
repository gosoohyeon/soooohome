
<template id="matchProject">
    <div>
        <Menu v-on:search="searchEvent"/>
            
		<section class="main">
			<div class="main__inr">
				<Project v-bind:items="contactlist"/> 
			</div>
		</section>

    </div>
</template>

<script>
		
	import pjData from '../assets/project.js';
	import Menu from "./Menu";
	import Project from "./Project";
	export default {
    
	components: {
		Menu, 
		Project,
		
	},
	data(){
		return {
			contactlist : pjData,
			projectData : pjData,
			isProcessing : false
		}
	},
	methods: {
		searchEvent : function(name){
			this.fetchContacts(name)
		},
		fetchContacts : function(name){
			this.isProcessing = true;
			
			if (name == 'all'){
				this.contactlist = this.projectData;	
			}else {
				this.contactlist = this.projectData.filter((data) => {
					return data.type == name
				})
			}
		}
	}
	// Vue.components('Content',{
	// 	template:'#matchProject',
	// 	data:function(){
	// 		return {
	// 			contactlist : [],
	// 			isProcessing : false
	// 		}
	// 	},
	// 	method: {
	// 		searchEvent : function(name){
	// 			this.fetchContacts(name)
	// 		},
	// 		fetchContacts : _.debounce(function(name){
	// 			this.contactlist = [];
	// 			this.isProcessing = true;
	// 			var url = projectData;
	// 			var vm = this;
				
	// 			vm.contactlist = url.filter((data) => {
	// 				return data.type = name
	// 			})
	// 		})
	// 	}
	// })
};
</script>

<style scoped>
</style>