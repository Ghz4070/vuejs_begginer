<template>
  <div class="navheader" :class="{'theme-dark': nightMode}">
    <b-navbar toggleable variant="success" type="light" fixed="top">
      <b-icon icon="list-ul" font-scale="2.5" v-b-toggle.sidebar-variant class="cursor"></b-icon>

      <b-icon
        class="i"
        icon="sun"
        font-scale="1.5"
        v-if="nightMode"
        @click="nightMode = !nightMode"
      ></b-icon>
      <b-icon class="i" icon="moon" font-scale="1.5" v-else @click="nightMode = !nightMode"></b-icon>
    </b-navbar>

    <b-sidebar
      id="sidebar-variant"
      width="15rem"
      aria-labelledby="sidebar-variant-title"
      variant
      shadow
    >
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <nav class="mb-3">
            <b-nav vertical>
              <router-link to="/" @click="hide">Home</router-link>
              <router-link to="/profile" @click="hide">Profile</router-link>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data: () => {
    return {
      nightMode: false
    };
  }
};
</script>

<style scoped>
.i {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.cursor {
  cursor: pointer;
  outline: none;
}

a {
  color: black;
}

a:hover {
  color: rgb(75, 125, 218);
  text-decoration: none;
}

.theme-dark {
  color: #efefef;
  background-color: #333333;
}
</style>