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
    </div>
    <a href="/login"
      ><button class="btnn">
        <i
          style="margin-right: 5px; color: silver"
          class="fa fa-sign-out"
        ></i></button
      ><br
    /></a>
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
          <div class="tu">
            <h1 style="text-align: center">
              Selamat Datang di <br />
              <span><b>~ PT.ASTRA ANDA MOTOR ~</b></span>
            </h1>
          </div>
        </div>

        <div class="pr">
          <div class="border1 row">
            <h1>Form Motor</h1>
            <form @submit.prevent="add">
              <input type="hidden" v-model="form.id" />
              <label for=""><b>Nama Motor:</b></label
              ><br />
              <input
                type="text"
                v-model="form.motor"
                placeholder=" Masukan Merk Motor"
                required
              /><br />
              <label for=""><b>CC:</b></label
              ><br />
              <input
                type="text"
                v-model="form.cc"
                placeholder="Masukan CC Motor"
                required
              /><br />
              <label for=""><b>Tahun Produksi:</b></label
              ><br />
              <input
                type="text"
                v-model="form.tahun"
                placeholder="Masukan Tahun Produksi Motor"
                required
              /><br />
              <label for=""><b>Gambar:</b></label
              ><br />
              <input
                type="text"
                v-model="form.gambar"
                placeholder="Masukan Link Gambar Motor"
                required
              /><br />
              <label for=""><b>Harga</b></label
              ><br />
              <input
                type="text"
                v-model="form.harga"
                placeholder="Masukan Harga Motor"
                required
              /><br />
              <button type="submit" v-show="!updateSubmit" style="margin: auto">
                <b> Lihat Motor </b>
              </button>
              <button type="button" v-show="updateSubmit" @click="update(form)">
                <b> Update </b>
              </button>
            </form>
            <br />
          </div>

          <div class="border2">
            <h1>Tabel Motor</h1>
            <div id="app1" class="row">
              <b
                ><label for="quantity">No:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                />
              </b>
            </div>

            <div id="app2">
              <b><label for="quantity">Nama:</label> <input type="text" /></b>
            </div>

            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th style="width: 100px">Nama Motor</th>
                  <th style="width: 50px">CC</th>
                  <th style="width: 100px">Tahun Produksi</th>
                  <th>Gambar</th>
                  <th>Harga</th>
                  <th style="width: 100px">Aksi</th>
                </tr>
              </thead>
              <tbody v-for="user in users" :key="user.id">
                <tr>
                  <td>{{ user.id }}</td>
                  <td>{{ user.motor }}</td>
                  <td>{{ user.cc }}</td>
                  <td>{{ user.tahun }}</td>
                  <td>
                    <img :src="user.gambar" width="140px" height="100px" />
                  </td>
                  <td>
                    Rp. {{ user.harga.replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                  </td>
                  <td>
                    <button
                      style="
                        background-color: rgb(117, 6, 6);
                        color: white;
                        padding: 5px;
                        border: 1px solid white;
                      "
                      @click="perpanjang(user)"
                    >
                      edit</button
                    ><br />
                    <button
                      style="
                        background-color: rgb(236, 43, 43);
                        color: white;
                        width: 80px;
                        padding: 5px;
                        border: 1px solid white;
                      "
                      @click="kembali(user)"
                    >
                      hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
        motor: "",
        cc: "",
        tahun: "",
        gambar: "",
        harga: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.motor = ""),
          (this.form.cc = ""),
          (this.form.tahun = ""),
          (this.form.gambar = "");
        this.form.harga = "";
      });
    },
    perpanjang(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.motor = user.motor;
      this.form.cc = user.cc;
      this.form.tahun = user.tahun;
      this.form.gambar = user.gambar;
      this.form.harga = user.harga;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          motor: this.form.motor,
          cc: this.form.cc,
          tahun: this.form.tahun,
          gambar: this.form.gambar,
          harga: this.form.harga,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.motor = "";
          this.form.cc = "";
          this.form.tahun = "";
          this.form.gambar = "";
          this.form.harga = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    kembali(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then((res) => {
        this.load();
        let index = this.users.indexOf(form.motor);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.app {
  border: 1px solid none;
  background-color: rgb(236, 43, 43);
  padding: 10px;
  margin: 10px;
  font-family: initial;
}
.up {
  margin-top: 0px;
}
.snia {
  display: flex;
}
.pr {
  display: flex;
}
h1 {
  font-family: serif;
}

.border1 {
  width: 30%;
  padding: 30px;
  background-color: none;
}

.border2 {
  width: 40%;
  padding: 30px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

table {
  border: 1px solid white;
  padding: 20px;
  width: 700px;
  border-collapse: collapse;
  background-color: white;
}

th {
  border: 1px solid none;
  height: 70px;
  font-family: sans-serif;
  color: black;
  background-color: white;
}

td {
  border: 1px solid black none;
  text-align: center;
}

#app1 {
  float: left;
  width: 30%;
  padding: 10px;
}

#app2 {
  float: right;
  width: 40%;
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
  background-color: rgb(117, 6, 6);
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
.tu {
  margin-left: 160px;
}
span {
  background-color: white;
}
</style>