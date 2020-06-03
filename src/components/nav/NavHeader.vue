<template>
  <div class="navheader">
    <li
      class="cursor"
      v-for="(element, index) in navList"
      :key="index"
      @click="pushTo(element.link)"
    >{{ element.name }}</li>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      navList: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Profile",
          link: "/profile"
        }
      ]
    };
  },
  methods: {
    pushTo(link) {
      // console.log(this.$route)
      this.$router.push(link);
    }
  }
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>