<template>
  <div class="navheader">
    <b-navbar oggleable variant="success" type="light" fixed="top">
      <b-icon icon="list-ul" font-scale="2.5" v-b-toggle.sidebar-no-header class="cursor"></b-icon>
    </b-navbar>

    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <router-link to="/" @click="hide">Home</router-link> 
              <router-link to="/profile" @click="hide">Profile</router-link> 
            </b-nav>
          </nav>
          <b-button pill variant="outline-info" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
  border: none;
}
</style>