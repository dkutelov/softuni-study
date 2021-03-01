<template>
  <div>
    <el-table :data="tableData" v-loading="loading">
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="air-date" label="air-date"> </el-table-column>
      <el-table-column prop="episode" label="Gender"> </el-table-column>
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
import tableMixin from "../mixins/rickMortyMixin";

export default {
  mixins: [tableMixin],
  data() {
    return {
      loading: true,
      endpoint: "episode",
    };
  },
  methods: {
    onCurrentChange(page) {
      this.page = page;
      this.loading = true;
      this.fetchData(page);
      this.loading = false;
    },
    onPrev(data) {},
    onNext(data) {},
  },
};
</script>

<style lang="scss" scoped></style>
