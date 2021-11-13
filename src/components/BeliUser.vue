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
          <div class="pr">
            <div class="border1 row">
              <h1>Form Beli</h1>
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
              <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
