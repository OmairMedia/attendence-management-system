<template>
  <div class="contact">
    <nav-bar />
    <div class="container mt-4">
      <h1>Contact Us</h1>

      <b-card
        no-body
        class="overflow-hidden rounded-lg shadow p-4 mt-5 mx-auto"
        style="max-width: 1000px"
      >
        <b-row no-gutters>
          <b-col
            md="6"
            class="
              d-flex
              flex-row
              justify-content-center
              align-items-center
              px-5
            "
          >
            <b-card-img
              src="@/assets/images/contact-us.svg"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Message Us !">
              <b-card-text>
                <b-form>
                  <b-form-group label="Username">
                    <b-form-input type="text"></b-form-input>
                    <b-form-valid-feedback>Perfect !</b-form-valid-feedback>
                    <b-form-invalid-feedback
                      >Not Valid !</b-form-invalid-feedback
                    >
                  </b-form-group>
                  <b-form-group label="Email">
                    <b-form-input type="text"></b-form-input>
                    <b-form-valid-feedback>Perfect !</b-form-valid-feedback>
                    <b-form-invalid-feedback
                      >Not Valid !</b-form-invalid-feedback
                    > </b-form-group
                  ><b-form-group label="Message">
                    <b-form-textarea rows="10" max-rows="10"></b-form-textarea>
                    <b-form-valid-feedback>Perfect !</b-form-valid-feedback>
                    <b-form-invalid-feedback
                      >Not Valid !</b-form-invalid-feedback
                    >
                  </b-form-group>
                  <b-form-group class="float-right">
                    <b-button variant="primary">Submit</b-button>
                  </b-form-group>
                </b-form>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <!-- Contact Map  -->
      <!-- <b-card
        no-body
        class="overflow-hidden rounded-lg shadow p-4 mt-5 mx-auto"
        style="max-width: 1000px"
      >
        <b-row no-gutters>
          <b-col
            md="6"
            class="
              d-flex
              flex-row
              justify-content-center
              align-items-center
              px-5
            "
          >
            <b-card-img
              src="@/assets/images/contact-us.svg"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Message Us !">
              <b-card-text>
                <b-form>
                  <b-form-group label="Username">
                    <b-form-input type="text"></b-form-input>
                    <b-form-valid-feedback>Perfect !</b-form-valid-feedback>
                    <b-form-invalid-feedback
                      >Not Valid !</b-form-invalid-feedback
                    >
                  </b-form-group>
                  <b-form-group label="Email">
                    <b-form-input type="text"></b-form-input>
                    <b-form-valid-feedback>Perfect !</b-form-valid-feedback>
                    <b-form-invalid-feedback
                      >Not Valid !</b-form-invalid-feedback
                    > </b-form-group
                  ><b-form-group label="Message">
                    <b-form-textarea rows="10" max-rows="10"></b-form-textarea>
                    <b-form-valid-feedback>Perfect !</b-form-valid-feedback>
                    <b-form-invalid-feedback
                      >Not Valid !</b-form-invalid-feedback
                    >
                  </b-form-group>
                  <b-form-group class="float-right">
                    <b-button variant="primary">Submit</b-button>
                  </b-form-group>
                </b-form>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card> -->
    </div>
    <foo-ter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '../components/navBar.vue'
import fooTer from '../components/fooTer.vue'

export default Vue.extend({
  components: {
    navBar,
    fooTer,
  },
})
</script>

<style></style>
