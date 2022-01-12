<template>
    <div>
        <article class="card" v-for="(product, idx) in products" :key="product.id">
            <a @click.prevent="handleDetail(idx)">
                <img :src="product.image" alt="" class="room-img">
                <h1>{{ product.title }}</h1>
                <p>{{ product.price }}</p>
            </a>
        </article>
    </div>
</template>
<script>
export default {
    name : 'Modal',
    props : {
        products : Array
    },
    methods: {
        handleDetail(i){
            this.$emit("@click",i)
        }
    },
}
</script>
