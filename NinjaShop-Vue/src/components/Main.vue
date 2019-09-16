<template>
<div>
    <my-header :colBuy="colBuy" :userName="userName"></my-header>

    <main>
        <section class = "control-panel">            
            <div class="control-elem">Тип товара: &emsp;
                <select v-model="currCat" name="typeItem">
                    <option value="все">все</option>
                    <option v-for="(category,i) in categories" :key="i"
                    v-bind:value = "category._id">
                    {{ category.title }}
                    </option>
                </select>
            </div>
            <div class="control-elem">Градус: &emsp; 
                <select v-model="currSubCat" name="attItem">
                    <option value="все">все</option>
                    <option v-for="(subCat,i) in getSubCategory()" :key="i"
                    v-bind:value = "subCat._id">
                    {{ subCat.title }}
                    </option>
                </select>
            </div>                                  
        </section>
        
        <section class="flex-center-wrap">
            <section class = "flex-container-content">
                <div v-for = "(product,n) in getProducts()" :key="n">
                   <my-product :product = "product"  v-on:addBuyItem = "addBuy"></my-product>  
                </div>                                   
            </section>
        </section>
    </main>

    <my-footer></my-footer>
    
</div>
</template>

<script>
import MyHeader from './Header';
import MyFooter from './Footer';
import MyProduct from './Product';
import { config } from '../config';

export default {
    name: 'iMain',
    data() {
        return {
  //          colBuy: 0,
            buyList: [],
            userName: 'Yoshi@yandex.ru',
            uri: '',
            products: [],
            categories: [],
            currCat: 'все',
            currSubCat: 'все',
        };
    },
    props: ['colBuy'],
    components: { MyHeader , MyFooter, MyProduct},  
    computed: {
        
    } ,
    watch: {
        currCat: function() {
            if (this.currCat == 'все') this.currSubCat = 'все';
        }

    },
    methods: {
        getRequest: function() {

        },
        getSubCategory: function() {
            for (var item = 0;  item < this.categories.length; item ++) {
                if (this.categories[item]._id === this.currCat) {
                    return this.categories[item].subcategories
                }
            }
            return [];
        },
        getProducts: function() {
            var productsList = this.products;
            if (this.currCat !== 'все') {
                productsList = productsList.filter(item => item.category === this.currCat);
            }
            if (this.currSubCat !== 'все') {
                productsList = productsList.filter(item => item.subcategory === this.currSubCat);
            }
            return productsList;           
        },
        putProduct: function(product) {
            this.colBuy++;

            this.buyList.pop(product)
            localStorage.products = this.buyList;
        },
        addBuy: function(product) {
            this.$emit('addBuy', product);
        },
        loadBase: function(path) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", this.uri + path + "?token=" + JSON.parse(localStorage.token).token, true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            xhr.send();

            xhr.onloadend = () => {
                if (xhr.status !== 200) {
                    this.$router.push('./');
                } else {
                    this[path] = JSON.parse(xhr.responseText)[path];
                    console.log(this[path]);
                }
            }

        }
    },
    created: function() {

        if (localStorage.token) {
            this.uri = config.uri;
            this.loadBase( "categories");
            this.loadBase("products");
        } else {
            alert("Error authorization");
        }


    }    
}
</script>

