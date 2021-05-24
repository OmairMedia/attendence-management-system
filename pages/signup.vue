<template>
  <div class="signup-container">
    <b-card>
      <b-overlay :show="show" rounded="sm">
        <h2>Create Your Account Now !</h2>
        <b-form novalidate>
          <b-form-group
            label="Username:"
            description="Pick A Unique Username !"
          >
            <b-form-input
              v-model="form.username"
              type="text"
              placeholder="Enter Your Name"
              :state="usernameValidation"
            ></b-form-input>
            <b-form-valid-feedback :state="usernameValidation"
              >Perfect !</b-form-valid-feedback
            >
            <b-form-invalid-feedback :state="usernameValidation"
              >Username is not valid !</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label="Email Address:"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              v-model="form.email"
              type="text"
              placeholder="Enter Email"
              :state="emailValidation"
            ></b-form-input>
            <b-form-valid-feedback :state="emailValidation"
              >Perfect !</b-form-valid-feedback
            >
            <b-form-invalid-feedback :state="emailValidation"
              >Email is not valid !</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group label="Password:">
            <b-form-input
              v-model="form.password"
              type="password"
              placeholder="Enter Password"
              :state="passwordValidation"
              required
            ></b-form-input>
            <b-form-valid-feedback :state="passwordValidation"
              >Perfect !</b-form-valid-feedback
            >
            <b-form-invalid-feedback :state="passwordValidation"
              >Password should be more than 6 Characters
              !</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group label="Confirm Password:">
            <b-form-input
              v-model="form.confirmpassword"
              type="password"
              placeholder="Retype Password"
              :state="confirmpasswordValidation"
              required
            ></b-form-input>
            <b-form-valid-feedback :state="confirmpasswordValidation"
              >Perfect !</b-form-valid-feedback
            >
            <b-form-invalid-feedback :state="confirmpasswordValidation"
              >Password doest not match ! !</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group>
            <b-form-checkbox v-model="form.terms" :state="termsValidation">
              I accept the terms and conditions !
            </b-form-checkbox>

            <b-form-valid-feedback :state="termsValidation"
              >Perfect !</b-form-valid-feedback
            >
            <b-form-invalid-feedback :state="termsValidation"
              >You have to agree with the terms and conditions
              !</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group>
            <b-button
              @click.prevent="createUserAccount"
              @keypress.enter="createUserAccount"
              variant="primary"
              >Create Account</b-button
            >
          </b-form-group>
        </b-form>
      </b-overlay>
    </b-card>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      form: {
        id: '',
        email: '',
        username: '',
        password: '',
        confirmpassword: '',
        terms: false,
        profileImage: null,
      },
      show: false,
    }
  },
  methods: {
    createUserAccount() {
      const { email, password } = this.form
      this.show = true
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          //   Updating User's Profile On Firebase
          let user = firebase.auth().currentUser

          if (user) {
            user
              .updateProfile({
                displayName: this.form.username,
              })
              .then(() => {
                // Update successful.
                this.show = false
                this.$router.push('/')
                this.$store.dispatch('AuthenticateUser')
                this.$store.dispatch('addUserProfileData', this.form)
              })
              .catch((err) => {
                console.log(err)
                // An error happened.
              })
          } else {
            console.log('function not working !')
          }
        })
        .catch((err) => console.log(err.message))
    },
  },
  computed: {
    usernameValidation() {
      if (this.form.username.length > 20) {
        return false
      } else if (this.form.username == '') {
        return null
      } else {
        return true
      }
    },
    emailValidation() {
      function validateEmail(email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      }

      if (validateEmail(this.form.email)) {
        return true
      } else if (this.form.email == '') {
        return null
      } else {
        return false
      }
    },
    passwordValidation() {
      if (this.form.password.length < 6) {
        return false
      } else if (this.form.password == '') {
        return null
      } else {
        return true
      }
    },
    confirmpasswordValidation() {
      if (this.form.password === this.form.confirmpassword) {
        return true
      } else if (this.form.confirmpassword == '') {
        return null
      } else {
        return false
      }
    },
    termsValidation() {
      if (this.form.terms == false) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style>
.signup-container {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
