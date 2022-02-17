<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Peserta Name</th>
          <th>alamat</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.peserta_id">
          <td>{{ item.peserta_name }}</td>
          <td>{{ item.peserta_alamat }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.peserta_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletePeserta(item.peserta_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "PesertaList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getPesertas();
  },

  methods: {
    // Get All Products
    async getPesertas() {
      try {
        const response = await axios.get("http://localhost:5000/pesertas");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deletePeserta(_id) {
      try {
        await axios.delete("http://localhost:5000/products/${id}");
        this.getPesertas();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>