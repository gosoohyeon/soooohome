<template id="navContactTemp">
    <nav class="nav">
        <div class="nav__inr">
            <span class="nav__item -pjSubject">PROJECT LIST</span>
            <button class="nav__item -pj" @click="clickEvt('all')"><span>All</span></button>
            <button class="nav__item -pj" @click="clickEvt('mobile')"><span>MOBILE WEB</span></button>
            <button class="nav__item -pj" @click="clickEvt('pc')"><span>PC WEB</span></button>
            <button class="nav__item -pj" @click="clickEvt('promotion')"><span>PROMOTION</span></button>
            <button class="nav__item -pj" @click="clickEvt('rwd')"><span>RWD</span></button>
            <button class="nav__item -pj" @click="clickEvt('etc')"><span>etc</span></button>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {name : ''}
    },
    methods : {
        clickEvt:function(e){
            var subject = e;
            this.$emit('search', subject)
        }
    }
};
</script>

<style scoped>
</style>