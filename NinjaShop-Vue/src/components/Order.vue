<template>
<div>
    <my-header :colBuy="colBuy" :userName="userName"></my-header>

    <main>    
        <section class="flex-center-wrap">
            <h2>Список покупок</h2>
            <p>Все покупки будут доставлены в ваше секретное убежище</p>
            <p>Что, бы вычеркнуть товар из списка покупок просто кликлинет на него</p>
            <hr>
            <div v-for = "(buy,n) in listBuy" :key= "n">
            <article >
                <h3>Товар {{ buy.title }} | Цена | {{ buy.price }}</h3>
            </article >

            </div>

            <section class="flex-container-content" v-if="colBuy !== 0">
                <div class="enter-button" v-on:click = "$emit('clearBuy')"><b>Отменить</b></div>   
                <div class="enter-button-green" v-on:click = "$emit('clearBuy')"><b>Заказать</b></div> 
            </section>

                                  
        </section>
    </main>

    <my-footer></my-footer>
    
</div>
</template>

<script>
import MyHeader from './Header';
import MyFooter from './Footer';
export default {
    name: 'iMain',
    data() {
        return {
 //           colBuy: 0,
            userName: 'Yoshi@yandex.ru',
        };
    },
    props: ['colBuy', 'listBuy'],
    components: { MyHeader , MyFooter},   
}
</script>