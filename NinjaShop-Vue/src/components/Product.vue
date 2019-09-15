<template>
    <article>
        <p>{{ product.title }} - цена - {{ product.price }} $</p>
        <div class="d-img">
            <img src="img/sake1.png" width="280">
        </div>
        <div class="bye-button" v-on:click = "$emit('addBuyItem', product)">Купить</div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            sitename: "",
        }
    },
    props: [ 'product' ],

}
</script>

<style scoped>

</style>