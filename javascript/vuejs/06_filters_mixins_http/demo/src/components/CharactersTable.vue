<template>
  <div>
    <el-table :data="characters" v-loading="loading">
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="status" label="Status"> </el-table-column>
      <el-table-column prop="gender" label="Gender"> </el-table-column>
      <el-table-column prop="created" label="Created"> </el-table-column>
    </el-table>
    <el-pagination
      v-if="pagination"
      background
      layout="prev, pager, next"
      :page-count="pagination.pages"
      :current-page="page"
      @current-change="onCurrentChange"
      @prev-click="onPrev"
      @next-click="onNext"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      characters: [],
      pagination: null,
      page: 1,
    };
  },
  methods: {
    async fetchCharacters() {
      const url = `https://rickandmortyapi.com/api/character?page=${this.page}`;
      try {
        const { data } = await axios.get(url);
        this.characters = data.results;
        this.pagination = data.info;
      } catch (error) {
        console.error("Error when loading characters!", error);
      }
    },
    onCurrentChange(page) {
      this.page = page;
      this.loading = true;
      this.fetchCharacters(page);
      this.loading = false;
    },
    onPrev(data) {},
    onNext(data) {},
  },
  async created() {
    await this.fetchCharacters();
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped></style>
