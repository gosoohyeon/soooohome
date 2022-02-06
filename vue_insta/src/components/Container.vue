<template>
    <div>
        <article v-if="step == 0">
            <Post 
                :post="posts[idx]" 
                v-for="(post, idx) in posts" 
                :key="idx"
            />
        </article>
    
        <article class="uploadFilter" v-if="step == 1">
            <!-- 필터선택페이지 -->
            <div class="upload-image" :style="{backgroundImage:`url(${setNewPost.postImage})`}" :class="setNewPost.filter"></div>
            <div class="filters">
                <FilterBox 
                    v-for="(filter,index) in filters" 
                    :key="index"
                    :thumb="setNewPost.postImage" 
                    :filter="filter"
                >
                <span class="filterNM">{{filter}}</span>
                </FilterBox>
            </div>
        </article>
        <article class="uploadWrite" v-if="step == 2">
            <!-- 글작성페이지 -->
            <div class="upload-image" :style="{backgroundImage:`url(${setNewPost.postImage})`}" :class="setNewPost.filter"></div>
            <div class="write">
                <textarea class="write-box" v-model="newPost.content" @input="newPostWrite">write!</textarea>
            </div>
        </article>
    </div>
</template>
<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'
export default {
    name:'Component',
    components : {
        Post,
        FilterBox
    },
    props : {
        posts : Array,
        step : Number,
        setNewPost : Object,
    },
    data(){
        return {
            newPost : {
                postImage : '',
                content: '',
            },
            filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    methods : {
        newPostWrite(){
            this.$emit('newPostWrite',this.newPost)
        }
    }
    
}
</script>
<style scoped>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
background-position: 50%;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
.filterNM {
    padding: 3px 5px;
    background: rgba(0,0,0,.5);
}
</style>