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
          <i
            style="margin-right: 5px; color: silver"
            class="fa fa-sign-out"
          ></i></button
        ><br
      /></a>
    </div>
    <div class="up">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption=""
          text=""
          img-src="https://imgcdn.oto.com/medium/gallery/exterior/73/979/honda-revo-99509.jpg"
        >
          <h1>Honda Revo FI</h1>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide
          img-src="https://www.otomotifo.com/wp-content/uploads/2017/05/Harga-Honda-Beat-2020.jpg"
        >
          <h1>All New Honda Beat</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://dapurpacu.id/wp-content/uploads/2021/04/home-banner-9-16042021-063913.jpg"
        >
          <h1>New Honda Vario 125</h1>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="500"
              height="480"
              src="https://i2.wp.com/warungasep.net/wp-content/uploads/2020/07/honda-cbr250rr-2021.png?ssl=1"
              alt="image slot"
            />
          </template>
          <h1>Honda CBR 250 RR</h1>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide
          img-src="https://imgcdnblog.carbay.com/wp-content/uploads/2021/04/05081854/Honda-Scoopy-Vs-Genio-500x333.jpg"
          width="200"
        >
          <h1>Honda Scoopy Genio</h1>
        </b-carousel-slide>
      </b-carousel>

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
        <!-- 
      <div class="pr">
        <div class="border1 row">
          <h1>Form Motor</h1>
          <input type="hidden" />
          <label for=""><b>Nama Motor:</b></label
          ><br />
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="selected"
          >
            <option
              v-for="(data, index) in listMotor"
              :key="index"
              :value="data.motor"
            >
              {{ data.motor }}
            </option></select
          ><br />
          <label for=""><b>Harga:</b></label
          ><br />
          <input type="text" v-model="total" disabled /><br />
          <p>
            <label><b>DP:</b> </label><br />
            <input
              style="width: 100px"
              placeholder="Tahun Produksi..."
              type="radio"
              value="30"
              v-model="depe"
              required
            />
            <label style="width: 100px"><b>30%</b></label>
          </p>
          <p>
            <label><b>Jangka Waktu:</b></label
            ><br />
            <input
              style="width: 100px"
              placeholder="Masukkan Harga..."
              type="radio"
              v-model="bulan"
              value="12"
              required
            />
            <label style="width: 100px"><b>12 bulan</b></label
            ><br />
            <input
              style="width: 100px"
              placeholder="Masukkan Harga..."
              type="radio"
              v-model="bulan"
              value="24"
            />
            <label style="width: 100px"><b>24 bulan</b></label>
          </p>
          <p>
            <label><b>Angsuran:</b></label
            ><br />
            <input
              style="width: 250px; margin-left: -10px"
              placeholder="Angsuran..."
              type="text"
              v-model="angsuran"
              disabled
            />
          </p>
          <button
            v-if="isCreated"
            type="submit"
            @click="postData"
            style="margin: auto"
          >
            <b> Beli </b>
          </button>
          <button
            v-if="!isCreated"
            type="submit"
            @click="putData"
            style="margin: auto"
          >
            <b> Update </b>
          </button>
          <br />
        </div> -->

        <div class="border2">
          <h1><b>Tabel Beli</b></h1>

          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Motor</th>
                <th>Dp</th>
                <th>Angsuran</th>
                <th>Bulan Angsuran</th>
                <th>Total Harga</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody v-for="user in totalMotor" :key="user.id">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.motor }}</td>
                <td>{{ user.dp }}</td>
                <td>{{ user.angsuran }}</td>
                <td>{{ user.bulanAngsuran }}</td>
                <td>{{ user.totalHarga }}</td>
                <td>
                  <button
                    style="
                      background-color: #b3b3b3;
                      color: white;
                      padding: 5px;
                      border: 1px solid white;
                    "
                    @click="editData(user)"
                  >
                    edit</button
                  ><br />
                  <button
                    v-on:click="deleteData(user.id)"
                    style="
                      background-color: #2e2e2e;
                      color: white;
                      width: 80px;
                      padding: 5px;
                      border: 1px solid white;
                    "
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
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: 0,
      total: "",
      depe: "",
      angsuran: "",
      bulan: "",
      dataVariables: "",
      selected: "",
      isCreated: true,
      options: [
        { value: null, text: "Pilih Kendaraan" },
        { value: "16,000,000", text: "Honda Revo FI" },
        { value: "17,500,000", text: "New Honda Beat" },
        { value: "17,670,000", text: "New Honda Vario" },
        { value: "17,000,000", text: "Scoopy Genio" },
        { value: "72,800,000", text: "CBR250RR" },
      ],
      totalMotor: [],
      listMotor: [],
    };
  },
  watch: {
    selected(v) {
      if (!this.isCreated) {
        const data = this.listMotor.find((item) => item.motor === v);
        this.angsuran =
          (parseInt(data.totalHarga) * parseInt(data.dp)) /
          100 /
          parseInt(data.bulanAngsuran);
        return;
      }
      const data = this.listMotor.find((item) => item.motor === v);
      this.total = data.harga;
    },
    bulan(v) {
      this.depe = this.depe.replace(/\./g, "");
      this.angsuran =
        (parseInt(this.total) * parseInt(this.depe)) / 100 / parseInt(v);
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const beli = await axios.get("http://localhost:3000/beli");
      this.totalMotor = beli.data;
      const listMotor = await axios.get("http://localhost:3000/users");
      this.listMotor = listMotor.data;
    },
    async postData() {
      let payload = {
        motor: this.selected,
        dp: this.depe,
        angsuran: this.angsuran,
        bulanAngsuran: this.bulan,
        totalHarga: this.total,
      };
      await axios.post("http://localhost:3000/beli", payload);
      window.location.reload();
    },
    editData(data) {
      (this.total = data.totalHarga),
        (this.depe = data.dp),
        (this.angsuran = data.angsuran),
        (this.bulan = data.bulanAngsuran),
        (this.selected = data.motor),
        (this.isCreated = false);
    },
    async deleteData(id) {
      await axios.delete("http://localhost:3000/beli/" + id);
      this.getData();
    },
    async putData() {},
  },
};
</script>

<style scoped>
.app {
  border: 1px solid none;
  background-color: #a7a7a7;
  padding: 10px;
  margin: 40px;
  font-family: initial;
  width: 1120px;
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
  text-align: center;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

table {
  border: 1px solid white;
  padding: 20px;
  width: 1000px;
  border-collapse: collapse;
  background-color: white;
  text-align: center;
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
  background-color: #2e2e2e;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="button"] {
  width: 100%;
  background-color: #2e2e2e;
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
.up {
  margin-top: 0px;
}
</style>