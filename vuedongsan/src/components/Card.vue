<template>
    <div>
        <article class="card" v-for="(product) in products" :key="product.id" ref="card">
            <a @click.prevent="openDetail(product.id)">
                <span class="room-img" :style="{ backgroundImage: `url( ${require('@/assets/' + product.image)} )` }"></span>
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
        openDetail(id){
            this.$router.push('/detail/'+id);

            const elPos = this.$refs.card[id].offsetTop;
            this.$store.commit('setModalPos', elPos);

            const curPos = window.scrollY;
            this.$store.commit('setListBefPos', curPos);
        }
    },
}
</script>
<style lang="scss" scoped>
</style>