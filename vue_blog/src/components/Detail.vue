<template>
    <section>
        <article class="card">
            <h5 class="card-title">{{blog.title}}</h5>
            <p>{{blog.content}}</p>
            <p class="card-subtitle">{{blog.date}}</p>
        </article>
        <router-view></router-view>
    </section>
</template>
<script>
export default {
    name : 'detail',
    props : {
        blogList : Array
    },
    data(){
        return {
            blog : this.blogList[this.$route.params.id]
        }
    }
}
</script>