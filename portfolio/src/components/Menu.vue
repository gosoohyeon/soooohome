/* eslint-disable */ 
<template id="navContactTemp">
    <nav class="nav">
        <div class="nav__inr">
            <span class="nav__item -pjSubject">PROJECT LIST</span>
            
            <button class="nav__item -pj" @click="clickEvt('all')"><span>All</span></button>
            <button class="nav__item -pj" 
                v-for="nav in this.navItem"
                @click="clickEvt(nav)">
                <span v-if="nav == 'rwd'">반응형 웹</span>
                <span v-else>{{nav}}</span>
            </button>
            
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            name : '',
            navItem : [],
        }
    },
    props: {
        nav: { type: Array, default: () => [] }
    },
    created(){
        this.setNavItem();
    },
    methods : {
        clickEvt:function(e){
            var subject = e;
            this.$emit('search', subject)
        },
        setNavItem(){
            console.log('start')
            let navList = [];
            this.nav.filter((item)=>{
                item.type.filter((type)=> {
                    if(navList.indexOf(type) == -1) {
                        navList.push(type);
                    }
                })
            })
            this.navItem = [...new Set(navList)];
        },
    }
};
</script>

<style scoped>
</style>