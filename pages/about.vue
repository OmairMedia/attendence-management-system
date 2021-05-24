<template>
  <div class="about">
    <!--Navbar Component  -->
    <nav-bar />
    <div class="about-us-container">
      <div class="container pt-5">
        <b-row>
          <b-col cols="4">
            <h1>About Us</h1>
            <p id="about-us-subtitle" class="text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              sint mollitia earum vel ipsam corrupti deleniti eligendi nemo
              natus quos. Ducimus quam harum placeat dolores eos excepturi
              incidunt, commodi voluptatum quas at rerum doloremque voluptates
              perferendis pariatur dignissimos ab repudiandae aliquam amet
              tempora corrupti unde quibusdam recusandae et? Numquam, labore.
            </p>
          </b-col>
          <b-col cols="6"> </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '../components/navBar.vue'

export default Vue.extend({
  components: {
    navBar,
  },
})
</script>

<style scoped>
.about-us-container {
  min-height: 100vh;
  background-image: url('../assets/images/about-us-showcase.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.about-us-subtitle {
}
</style>
