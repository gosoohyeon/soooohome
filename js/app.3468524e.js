(function(t){function e(e){for(var r,a,i=e[0],o=e[1],l=e[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/soooohome/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("Content")],1)},c=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__inr"},[n("div",{staticClass:"header__cont"},[n("h1",[n("span",{staticClass:"header__cont--text1"},[t._v("GO-SOOHYEON")]),t._v(" \n                UI developer\n            ")]),n("br"),n("a",{staticClass:"header__link--notion",attrs:{href:"https://gosoooo.notion.site/gosh-portfolio-373d0993b5cd4f349ef70d9f1d9fc24e"}},[n("span",[t._v("경력 기술서")])])])])])}],o={},l=o,p=n("2877"),u=Object(p["a"])(l,a,i,!1,null,"3b4e7d6c",null),d=u.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Menu",{on:{search:t.searchEvent}}),n("section",{staticClass:"main"},[n("div",{staticClass:"main__inr"},[n("Project",{attrs:{items:t.contactlist}})],1)])],1)},m=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("div",{staticClass:"nav__inr"},[n("span",{staticClass:"nav__item -pjSubject"},[t._v("PROJECT LIST")]),n("button",{staticClass:"nav__item -pj",on:{click:function(e){return t.clickEvt("all")}}},[n("span",[t._v("All")])]),n("button",{staticClass:"nav__item -pj",on:{click:function(e){return t.clickEvt("mobile")}}},[n("span",[t._v("MOBILE WEB")])]),n("button",{staticClass:"nav__item -pj",on:{click:function(e){return t.clickEvt("pc")}}},[n("span",[t._v("PC WEB")])]),n("button",{staticClass:"nav__item -pj",on:{click:function(e){return t.clickEvt("promotion")}}},[n("span",[t._v("PROMOTION")])]),n("button",{staticClass:"nav__item -pj",on:{click:function(e){return t.clickEvt("rwd")}}},[n("span",[t._v("RWD")])]),n("button",{staticClass:"nav__item -pj",on:{click:function(e){return t.clickEvt("etc")}}},[n("span",[t._v("etc")])])])])},v=[],b={data:function(){return{name:""}},methods:{clickEvt:function(t){var e=t;this.$emit("search",e)}}},h=b,g=Object(p["a"])(h,f,v,!1,null,"e7a0c3b2",null),k=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cardList"},t._l(t.items,(function(e,r){return n("article",{key:r,class:["card"]},[n("span",{staticClass:"card__img",style:{backgroundImage:"url('/src/assets/images/"+e.imgsrc+"')"}}),n("div",{staticClass:"card__text"},[n("div",{staticClass:"card__badgeBox"},[n("i",{class:["badge",e.type]},["rwd"==e.type?n("span",[t._v("반응형웹")]):n("span",[t._v(t._s(e.type))])])]),n("h1",{staticClass:"card__subject"},[n("span",[t._v(t._s(e.subject))])]),n("p",{staticClass:"card__desc"},[t._v(t._s(e.desc))]),n("div",{staticClass:"card__subinfo"},[n("span",{staticClass:"card__part"},[t._v("참여도 "),n("b",[t._v(t._s(e.part)+"%")])]),n("span",{staticClass:"card__date"},[t._v(t._s(e.date))])])]),e.link?n("a",{staticClass:"card__link",attrs:{href:e.url,target:"_blank"}},[e.link?n("span",{staticClass:"card__btn"},[t._v("Link")]):t._e()]):0==e.link?n("span",{staticClass:"card__link card__textNolink"},[t._v("no link")]):t._e()])})),0)},j=[],C={props:{items:{type:Array,default:function(){return[]}}}},w=C,O=Object(p["a"])(w,y,j,!1,null,null,null),E=O.exports,x=[{top:"card--top",type:"pc",subject:"[제로페이] 통합 플랫폼 구축",desc:"",part:"100",date:"2021.04 ~ 2021.09",link:!1,url:"",imgsrc:"zeropay.png"},{top:"card--top",type:"pc",subject:"[유니스터디] 리뉴얼",desc:"",part:"100",date:"2020.11 ~ 2020.12",link:!0,url:"https://www.unistudy.co.kr/",imgsrc:"unistudy.png"},{top:"card--top",type:"pc",subject:"[인터엠디] 의사전용 지식공유 서비스 운영",desc:"",part:"100",date:"2018.06 ~ 2021.04",link:!0,url:"https://www.intermd.co.kr/",imgsrc:"intermd_pc.png"},{top:"card--top",type:"mobile",subject:"[인터엠디] 의사전용 지식공유 서비스 구축.운영",desc:"",part:"100",date:"2018.06 ~ 2021.04",link:!1,url:"",imgsrc:"intermd_m.png"},{type:"rwd",subject:"[웨비나] 웹 세미나 제공 페이지 구축",part:"100",date:"2020.02",link:!1,url:"",imgsrc:"webinar.png"},{type:"mobile",subject:"[곰TV] 영화보곰",part:"100",date:"2018.06",link:!1,url:"http://gosh.dothome.co.kr/pf_src/mvbogom/01_m_mvbogom_list.html",imgsrc:"bogom_m.png"},{type:"pc",subject:"[곰TV] 영화보곰",part:"100",date:"2018.06",link:!1,url:"",imgsrc:"bogom_pc.png"},{type:"pc",subject:"[VRiX] 동영상 광고삽입 시스템",part:"100",date:"2018.06",link:!1,url:"http://gosh.dothome.co.kr/pf_src/vrix/html/00_index.html",imgsrc:"vrix.jpg"},{type:"etc",subject:"[도미네이션 게임 시뮬레이터] 커스터마이징",part:"100",date:"2015.10",link:!0,url:"http://gosh.dothome.co.kr/pf_src/domi/builder.html",imgsrc:"domi.jpg"},{type:"mobile",subject:"[purple] 커플 채팅 하이브리드 앱 구축",part:"100",date:"2015.11",link:!1,url:"",imgsrc:"purple.png"},{type:"pc",subject:"[곰 오디오] 싱크가사 구현",part:"100",date:"2015.11",link:!1,url:"",imgsrc:"gomaudio.png"},{type:"rwd",subject:"[KOCOWA] 글로벌 한류 컨텐츠 서비스 구축",part:"100",date:"2016.09",link:!0,url:"http://www.kocowa.jp/",imgsrc:"kocowa.jpg"},{type:"promotion",subject:"[베네피트 BigEasy] BigEasy 상품출시 홍보 페이지",part:"100",date:"2014.03",link:!0,url:"http://gosh.dothome.co.kr/pf_src/bigeasy/201403bigEasy_animation.html",imgsrc:"bigeasy.png"},{type:"pc",subject:"[코레일] 웹서비스 개편",part:"30",date:"2013.10",link:!0,url:"http://www.letskorail.com/",imgsrc:"korail.png"},{type:"pc",subject:"[충북나드리] 충청북도 관광정보 웹서비스 구축",part:"30",date:"2011.08",link:!0,url:"https://tour.chungbuk.go.kr/www/index.do",imgsrc:"nadri.jpg"}],P={components:{Menu:k,Project:E},data:function(){return{contactlist:x,isProcessing:!1}},methods:{searchEvent:function(t){this.fetchContacts(t)},fetchContacts:function(t){this.contactlist=[],this.isProcessing=!0;var e=x;this.contactlist="all"==t?x:e.filter((function(e){return e.type==t}))}}},M=P,S=Object(p["a"])(M,_,m,!1,null,"656c4e18",null),T=S.exports;document.title="UI developer :: 고수현";var $={name:"app",components:{Header:d,Content:T}},B=$,I=(n("5c0b"),Object(p["a"])(B,s,c,!1,null,null,null)),L=I.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("e332")},e332:function(t,e,n){}});
//# sourceMappingURL=app.3468524e.js.map