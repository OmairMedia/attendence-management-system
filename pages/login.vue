<template>
  <div class="">
    <navBar />
    <b-row class="login-container">
      <b-card class="login-card">
        <b-overlay :show="show" rounded="sm">
          <h2>Employee Login Form</h2>
          <b-form aria-autocomplete="false">
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
            <b-form-group>
              <b-button
                @click.prevent="loginUser"
                @keypress.enter="loginUser"
                variant="primary"
                >Login</b-button
              >
            </b-form-group>
            <b-form-group>
              <b-link to="/signup">Dont Have Account ?</b-link>
            </b-form-group>
          </b-form>
        </b-overlay>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  components: {
    navBar,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: false,
    }
  },
  computed: {
    ...mapGetters(['getUserStatus']),
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
  },
  methods: {
    loginUser() {
      let { email, password } = this.form
      this.show = true
      let db = firebase.firestore()

      db.collection('Users')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data()
            if (data.type == 'admin') {
              console.log('User is admin')
              if (
                (doc.data().email === email) &
                (doc.data().password === password)
              ) {
                this.$router.push('/admin')
              }
            } else {
              // firebase
              //   .auth()
              //   .signInWithEmailAndPassword(email, password)
              //   .then((userCredential) => {
              //     let id = userCredential.user.uid
              //     let name = userCredential.user.displayName
              //     let photo = userCredential.user.photoURL
              //     this.$store.dispatch('AuthenticateUser')
              //     this.$store.dispatch('addUserProfileData', {
              //       id,
              //       name,
              //       photo,
              //     })
              //     this.$router.push('/')
              //   })
              //   .catch((err) => {
              //     console.log(err)
              //   })
            }
          })
        })
    },
  },
}
</script>

<style scoped>
.login-container {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
}
</style>
