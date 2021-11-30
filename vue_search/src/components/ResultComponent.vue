<template>
    <ul class="resultList" v-if="data.length">
        <li v-for="(item, index) in data" :key="index">
            <span>{{item.name}}</span>
        </li>
    </ul>
    <p v-else>{{query}} 검색결과가 없습니다.</p>
</template>

<script>
export default {
    props:['data','query']
}
</script>

<style lang="scss">
.resultList {
    li {
        position: absolute;
        padding: 15px;
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
        }
    }
}
</style>