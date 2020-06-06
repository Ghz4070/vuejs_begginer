<template>
  <div id="Home">
    <HelloWorld message="Panier:" :myArray="fruits" @addFruitToBasket="addThisFruit">
      <p slot="footer">Ceci est mon footer</p>
      <p slot="info">Ceci est mon info</p>
    </HelloWorld>
    <p>Total: {{ calculateVTA | displayEuroSign }} euros</p>
    <p @click="increase = price++" class="cursor">Augmenter le prix</p>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    calculateVTA() {
      return (this.price / 100) * this.tva + this.price;
    }
  },
  data() {
    return {
      hello: "world",
      price: 16.5,
      tva: 20,
      fruits: ["Banane", "Kiwis", "Fraises"]
    };
  },
  methods: {
    addThisFruit(fruit) {
      this.fruits.push(fruit);
    }
  }
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>