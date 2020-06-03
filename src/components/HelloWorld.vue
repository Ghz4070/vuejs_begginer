<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <div v-if="myArray">
      <p v-for="(el, index) in myArray" :key="index">{{ el }}</p>
    </div>
    <button type="button" @click="addFruits">Add Fruits</button>
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
      this.$emit( // permet d'envoyé des données au parent contrairement au props 
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
