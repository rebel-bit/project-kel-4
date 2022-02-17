<template>
  <div>
    <div class="field">
      <label class="label">Peserta Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="pesertaName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Alamat</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="pesertaAlamat"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="savePeserta">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "AddPeserta",
  data() {
    return {
      pesertaName: "",
      pesertaAlamat: "",
    };
  },
  methods: {
    // Create New product
    async savePeserta() {
      try {
        await axios.post("http://localhost:5000/pesertas", {
          peserta_name: this.pesertaName,
          peserta_alamat: this.pesertaAlamat,
        });
        this.pesertaName = "";
        this.pesertaAlamat = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 