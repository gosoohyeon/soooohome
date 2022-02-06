<template>
    <section>
        <article v-for="item in blogList" :key="item.number" class="card w-50" @click="$router.push('/detail/'+item.number)">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-subtitle">{{item.date}}</p>
        </article>
    </section>
</template>
<script>
export default {
    name : 'list',
    props : {
        blogList : Array
    }
}
</script>