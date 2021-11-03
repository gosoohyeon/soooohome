
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
	const projectData=
		[
			{
				top : 'card--top',
				type:"pc",
				subject:"[제로페이] 통합 플랫폼 구축",
				desc : "",
				part : "100",
				date : "2021.04 ~ 2021.09",
				link : false,
				url : "",
				imgsrc : 'zeropay.png'
			},
			{
				top : 'card--top',
				type : "pc",
				subject : "[유니스터디] 리뉴얼",
				desc : "",
				part : "100",
				date : "2020.11 ~ 2020.12",
				link : true,
				url : "https://www.unistudy.co.kr/",
				imgsrc : 'unistudy.png'
			},
			{
				top : 'card--top',
				type : "pc",
				subject : "[인터엠디] 의사전용 지식공유 서비스 운영",
				desc : "",
				part : "100",
				date : "2018.06 ~ 2021.04",
				link : true,
				url : "https://www.intermd.co.kr/",
				imgsrc : 'intermd_pc.png'
			},
			{
				top : 'card--top',
				type : "mobile",
				subject : "[인터엠디] 의사전용 지식공유 서비스 구축.운영",
				desc : "",
				part : "100",
				date : "2018.06 ~ 2021.04",
				link : false,
				url : "",
				imgsrc : 'intermd_m.png'
			},
			{
				type:"rwd",
				subject:"[웨비나] 웹 세미나 제공 페이지 구축",
				part:"100",
				date:"2020.02",
				link:false,
				url:"",
				imgsrc : 'webinar.png'
			},
			{
				type:"mobile",
				subject:"[곰TV] 영화보곰",
				part:"100",
				date:"2018.06",
				link:false,
				url:"http://gosh.dothome.co.kr/pf_src/mvbogom/01_m_mvbogom_list.html",
				imgsrc : 'bogom_m.png'
			},
			{
				type:"pc",
				subject:"[곰TV] 영화보곰",
				part:"100",
				date:"2018.06",
				link:false,
				url:"",
				imgsrc : 'bogom_pc.png'
			},
			{
				type:"pc",
				subject:"[VRiX] 동영상 광고삽입 시스템",
				part:"100",
				date:"2018.06",
				link:false,
				url:"http://gosh.dothome.co.kr/pf_src/vrix/html/00_index.html",
				imgsrc : 'vrix.jpg'
			},
			{
				type:"etc",
				subject:"[도미네이션 게임 시뮬레이터] 커스터마이징",
				part:"100",
				date:"2015.10",
				link:true,
				url:"http://gosh.dothome.co.kr/pf_src/domi/builder.html",
				imgsrc : 'domi.jpg'
			},
			{
				type:"mobile",
				subject:"[purple] 커플 채팅 하이브리드 앱 구축",
				part:"100",
				date:"2015.11",
				link:false,
				url:"",
				imgsrc : 'purple.png'
			},
			{
				type:"pc",
				subject:"[곰 오디오] 싱크가사 구현",
				part:"100",
				date:"2015.11",
				link:false,
				url:"",
				imgsrc : 'gomaudio.png'
			},
			{
				type:"rwd",
				subject:"[KOCOWA] 글로벌 한류 컨텐츠 서비스 구축",
				part:"100",
				date:"2016.09",
				link:true,
				url:"http://www.kocowa.jp/",
				imgsrc : 'kocowa.jpg'
			},
			{
				type:"promotion",
				subject:"[베네피트 BigEasy] BigEasy 상품출시 홍보 페이지",
				part:"100",
				date:"2014.03",
				link:true,
				url:"http://gosh.dothome.co.kr/pf_src/bigeasy/201403bigEasy_animation.html",
				imgsrc : 'bigeasy.png'
			},
			{
				type:"pc",
				subject:"[코레일] 웹서비스 개편",
				part:"30",
				date:"2013.10",
				link:true,
				url:"http://www.letskorail.com/",
				imgsrc : 'korail.png'
			},
			{
				type:"pc",
				subject:"[충북나드리] 충청북도 관광정보 웹서비스 구축",
				part:"30",
				date:"2011.08",
				link:true,
				url:"https://tour.chungbuk.go.kr/www/index.do",
				imgsrc : 'nadri.jpg'
			},
		]
	import Menu from "./Menu";
	import Project from "./Project";
	export default {
    
	components: {
		Menu, 
		Project,
		
	},
	data(){
		return {
			contactlist : projectData,
			isProcessing : false
		}
	},
	methods: {
		searchEvent : function(name){
			this.fetchContacts(name)
		},
		fetchContacts : function(name){
			this.contactlist = [];
			this.isProcessing = true;
			var url = projectData;
			
			if (name == 'all'){
				this.contactlist = projectData;	
			}else {
				this.contactlist = url.filter((data) => {
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