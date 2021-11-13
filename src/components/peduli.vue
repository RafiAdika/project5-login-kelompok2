<template>
  <div>
    <div class="sidebarr">
      <div class="nav"></div>
      <a href="/"
        ><button class="btnn">
          <i
            style="margin-right: 5px; color: yellow"
            class="fa fa-home"
          ></i></button
        ><br
      /></a>
      <a href="/InfoMotorAdmin"
        ><button class="btnn">
          <i
            style="margin-right: 5px; color: silver"
            class="fa fa-motorcycle"
          ></i></button
        ><br
      /></a>
      <a href="/Beli"
        ><button class="btnn">
          <i
            style="margin-right: 5px; color: lightgreen"
            class="fa fa-money"
          ></i></button
        ><br
      /></a>
      <a href="/peduli"
        ><button class="btnn">
          <i
            style="margin-right: 5px; color: red"
            class="fa fa-heart"
          ></i></button
        ><br
      /></a>
      <a href="/login"
        ><button class="btnn">
          <i style="margin-right: 5px; color: silver" class="fa fa-sign-out"></i
          ><br />log out</button
        ><br
      /></a>
    </div>
    <div class="up">
      <div class="app">
        <div class="snia">
          <div class="sa">
            <img
              src="https://cdn.krjogja.com/wp-content/uploads/2016/06/HONDA7-1.png"
              height="125px"
              width="240px"
            />
          </div>
          <div class="up">
            <div class="all">
              <div class="one">
                <h1>
                  Peduli <br /><span>~ PT.ASTRA ANDA HONDA ~</span><br />untuk
                  pengabdian masyarakat
                </h1>
                <div class="border1 row">
                  <h2>Form Peduli</h2>
                  <form @submit.prevent="add">
                    <input type="hidden" v-model="form.id" />
                    <label for=""><b>Judul:</b></label
                    ><br />
                    <input
                      type="text"
                      v-model="form.judul"
                      placeholder="Masukan judul "
                      required
                    /><br />
                    <label for=""><b>Paragraf 1:</b></label
                    ><br />
                    <input
                      type="text"
                      v-model="form.para1"
                      placeholder="Masukan para1  "
                      required
                    /><br />
                    <label for=""><b>Paragraf 2:</b></label
                    ><br />
                    <input
                      type="text"
                      v-model="form.para2"
                      placeholder="Masukan para2 "
                      required
                    /><br />
                    <button
                      type="submit"
                      v-show="!updateSubmit"
                      @click="add(form)"
                    >
                      <b> Add </b>
                    </button>
                    <!-- jika tidak update maka tombol update tidak muncul -->
                    <button
                      type="button"
                      v-show="updateSubmit"
                      @click="update(form)"
                    >
                      <b> Update </b>
                    </button>
                    <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
                  </form>
                  <br />
                </div>

                <div class="border2">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Paragraf 1</th>
                        <th>Paragraf 2</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody v-for="row in data" :key="row.id">
                      <tr>
                        <td>{{ row.id }}</td>
                        <td>{{ row.judul }}</td>
                        <td>{{ row.para1 }}</td>
                        <td>{{ row.para2 }}</td>
                        <td>
                          <button
                            style="
                              background-color: #ec2b2b;
                              color: white;
                              padding: 5px;
                              border: 1px solid white;
                            "
                            @click="perpanjang(row)"
                          >
                            edit</button
                          ><br />
                          <button
                            style="
                              background-color: #750606;
                              color: white;
                              width: 80px;
                              padding: 5px;
                              border: 1px solid white;
                            "
                            @click="kembali(row)"
                          >
                            hapus
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <div class="kontak">
                    <h5>Bagikan ke:</h5>
                    <div class="sa">
                      <a
                        href="https://web.whatsapp.com/"
                        class="fa fa-whatsapp"
                      ></a>
                    </div>
                    <div class="tu">
                      <a
                        href="https://www.facebook.com/login/"
                        class="fa fa-facebook"
                      ></a>
                    </div>
                    <div class="ti">
                      <a
                        href="https://twitter.com/i/flow/login"
                        class="fa fa-twitter"
                      ></a>
                    </div>
                    <div class="ga">
                      <a
                        href="https://www.instagram.com/accounts/login/"
                        class="fa fa-instagram"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        judul: "",
        para1: "",
        para2: "",
      },
      data: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/data")
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/data", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.judul = ""),
          (this.form.para1 = ""),
          (this.form.para2 = "");
      });
    },
    perpanjang(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.judul = user.judul;
      this.form.para1 = user.para1;
      this.form.para2 = user.para2;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/data/" + form.id, {
          judul: this.form.judul,
          para1: this.form.para1,
          para2: this.form.para2,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.judul = "";
          this.form.para1 = "";
          this.form.para2 = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    kembali(user) {
      axios.delete("http://localhost:3000/data/" + user.id).then((res) => {
        this.load();
        let index = this.data.indexOf(form.judul);
        this.data.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.one {
  text-align: center;
}
h1 {
  font-family: initial;
  background-color: #d5d5d5;
}
h2 {
  font-family: initial;
  background-color: #eb0808;
}
span {
  font-size: 45px;
  background-color: #eb0808;
}

.border1 {
  width: 30%;
  padding: 30px;
  background-color: none;
}
.kontak {
  border: 1px solid none;
  margin-left: 920px;
  margin-top: -460px;
}
.sa,
.tu,
.ti,
.ga {
  border: 1px solid none;
  padding: 10px;
}
.border2 {
  width: 40%;
  padding: 30px;
}
table {
  border: 1px solid white;
  padding: 20px;
  width: 900px;
  border-collapse: collapse;
  background-color: white;
}

th {
  border: 1px solid black;
  height: 30px;
  font-family: sans-serif;
  color: black;
  background-color: #fd2828;
}
td {
  border: 1px solid black;
  text-align: left;
  padding: 10px;
}
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  width: 100%;
  background-color: #740606;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="button"] {
  width: 100%;
  background-color: #00bfff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.fa {
  padding: 18px;
  font-size: 25px;
  width: 60px;
  text-align: center;
  text-decoration: none;
  margin: 2px 2px;
  border-radius: 50%;
}
.fa-whatsapp {
  background: #4fc555;
  color: white;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}
.fa-instagram {
  background: linear-gradient(
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d,
    #f56040,
    #f77737,
    #fcaf45,
    #ffdc80
  );
  color: white;
}
.up {
  margin-top: 0px;
  width: 1300px;
}
</style>