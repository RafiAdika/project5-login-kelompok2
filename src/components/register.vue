<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Register</div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Name.."
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email.."
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password.."
                required
              />
              <input
                type="button"
                @click="login()"
                class="tombol_login"
                value="REGISTER"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
      register: [],
    };
  },

  methods: {
    async getUser() {
      const user = await axios.get("http://localhost:3000/register");
      this.register = user.data;
    },

    login() {
      const hasil = this.register.find(
        (data) => data.username === this.form.username
      );
      if (hasil === undefined) {
        alert("You must fill in your email name and password");
      } else {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>