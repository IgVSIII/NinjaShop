<template>
    <header>
        <section class="logo-wrap">
            <span class="logo">
                <router-link :to="{name: 'Main'}">
                    <img src="/img/ninja_PNG22.png" width="36">  
                </router-link>
                <b>NINJA SHOP </b>
            </span>        
        </section>
        <section class="user-wrap">
            <span class="user-block">
                <span v-on:click="exit" class="exitF"> - Скрыться -</span>
                <span class="user-name">
                    | Ниндзя - {{ userName }}
                </span>
                <span class="basket">
                    <router-link :to="{name: 'Order'}">
                        <img src="/img/backet-2.png" width="36"> 
                    </router-link>
                    <b>{{ colBuy }}</b>
                </span>
            </span>            
        </section>

    </header>
</template>

<script>
export default {
    data() {
        return {
            sitename: "",
        }
    },
    props: ['colBuy', 'userName'],
    methods: {
        exit: function() {
            localStorage.removeItem('token');
            this.$router.push('./');
        }
    }

}
</script>

<style scoped>

</style>