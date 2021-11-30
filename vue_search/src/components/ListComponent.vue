<template>
    
    <ul id="list" class="list" v-if="data.length">
        <li 
            v-for="(item, index) in data" 
            :key="index"
        >
            <button type="button" class="list__link" v-on:click="clickTab(item.keyword)">
                {{item.keyword}}
                <span class="date" v-if="historyType">{{item.date}}</span>
            </button>
            <button class="btn-remove" v-if="historyType" v-on:click.stop="removeKeyword(item.keyword)"><span style="font-size:0">삭제</span></button>
        </li>
    </ul>
    <p v-else>
        <span v-if="historyType">최근 검색어가 없습니다.</span>
        <span v-if="keywordType">추천 검색어가 없습니다.</span>
    </p>
</template>
<script>
export default {
    props : ['data', 'type'],
    computed : {
        keywordType(){
            return this.type==='keyowrd'
        },
        historyType(){
            return this.type==='history'
        },
    },
    methods : {
        clickTab(keyword) {
            this.$emit('@click', keyword)
        },
        removeKeyword(keyword){
            this.$emit('@remove', keyword)
        }
    }
}
</script>


<style lang="scss">
.list {
    li {
        position: absolute;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc; 
        position: relative;
        &:last-child {
          border-bottom: none;
        }
        .number{
          margin-right: 15px;
          color: #ccc;
        }
        .date{
          position: absolute;
          right: 50px;
          top: 15px;
          margin-right: 15px;
          color: #ccc;
        }
        .btn-remove{
          position: absolute;
          right: 0px;
          top: 15px;
            margin-right: 15px;
            border-radius: 50%;
            background-color: #ccc;
            color: white;
            border: none;
            padding: 2px 5px;
            transition: background .3s;
            &:hover {
                background: #aaa;
            }
        }
    }
    &__link {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 15px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
