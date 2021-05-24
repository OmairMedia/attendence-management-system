<template>
  <div class="">
    <nav-bar />
    <div class="wrapper">
      <section class="showcase">
        <b-row class="showcase-inner">
          <b-col cols="6"></b-col>
          <b-col
            class="d-flex justify-content-center align-items-center"
            cols="5"
          >
            <div class="showcase-text">
              <h1 class="display-3 text-white showcase-title">ZEXOR AMS</h1>
              <p class="text-white">
                ZEXOR AMS is self hosted Attendence Management Web App that is a
                great fit for almost any company, freelancer or many other uses.
                With its clean and modern design, ZEXOR AMS can help you look
                more professional to your management and help improve business
                performance at the same time.
              </p>
              <b-button size="lg" variant="dark">Learn More...</b-button>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="technologies">
        <b-row> </b-row>
      </section>
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
.container {
  min-height: 100vh;
}

.showcase {
  min-height: 90vh;
  background-image: url('@/assets/images/homepage-showcase.jpg');
  background-size: cover;
}

.wrapper {
  max-width: 100vw;
}

.showcase-inner {
  height: inherit;
}

.showcase-text {
  margin-top: 12rem;
}

.showcase-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-style: italic;
}

.technologies {
  min-height: 12rem;
}
</style>
