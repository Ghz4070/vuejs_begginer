<template>
  <div class="hello pt-2">
    <h1>{{ message }}</h1>
    <b-button pill variant="outline-danger" class="mb-2" type="button" @click="addFruits">Add Fruits</b-button>
    <div v-if="myArray">
      <p v-for="(element, index) in myArray" :key="index">{{ element }}</p>
    </div>
    <p slot="footer">Ceci est mon SLOT footer</p>
    <h2 slot="info">Cliquez sur "Augmenter le prix"</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    message: String,
    myArray: Array
  },
  methods: {
    addFruits() {
      let fruitsList = ["Pommes", "Poires", "Oranges"];
      this.$emit(
        // permet d'envoyé des données au parent contrairement au props
        "addFruitToBasket",
        fruitsList[Math.floor(Math.random() * fruitsList.length)]
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
