<template>
  <div>
    <router-view :colBuy="colBuy" :listBuy="listBuy" v-on:addBuy = "addBuyProduct" v-on:clearBuy = "clearBuyList" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      listBuy: [],
    }
  },
  computed: {
    colBuy: function() {
      return this.listBuy.length;
    }
  },
  methods: {
    addBuyProduct: function(product) {
      this.listBuy.push(product);
      //console.log(this.listBuy)
    },
    clearBuyList: function() {
      this.listBuy = [];
    }
  }
}
</script>
