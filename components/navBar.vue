<template>
  <div>
    <!-- If user not logged in  -->
    <b-navbar
      v-if="!getUserStatus"
      toggleable="sm"
      type="light"
      variant="light"
    >
      <b-navbar-brand to="/">ZEXOR</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <!-- <b-nav-item>
            <nuxt-link to="/attendence">Attendence</nuxt-link></b-nav-item
          > -->

          <!-- <b-nav-item href="#">Tasks</b-nav-item>
          <b-nav-item href="#">Projects</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Login/Signup</em>
            </template>
            <b-dropdown-item to="/login">Login</b-dropdown-item>
            <b-dropdown-item to="/signup">SignUp</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- if user logged in -->
    <b-navbar v-if="getUserStatus" toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">ZEXOR</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/attendence"> Attendence</b-nav-item>
          <b-nav-item to="/tasks">Tasks</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-if="getUserProfile">{{ getUserProfile.username }}</em>
              <!-- <em v-if="!getUserProfile">{{ getUserProfile.username }}</em> -->
            </template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="signOutUser"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default Vue.extend({
  name: 'navBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getUserStatus', 'getUserProfile']),
  },
  methods: {
    signOutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login')
          this.$store.dispatch('DeAuthenticateUser')
          this.$store.dispatch('destroyProfile')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
</script>

<style></style>
