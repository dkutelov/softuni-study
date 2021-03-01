import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

const tableMixin = {
  data() {
    return {
      tableData: [],
      pagination: null,
      page: 1,
    };
  },
  methods: {
    async fetchData() {
      const url = `https://rickandmortyapi.com/api/${this.endpoint}?page=${this.page}`;
      try {
        const { data } = await axios.get(url);
        this.tableData = data.results;
        this.pagination = data.info;
      } catch (error) {
        console.error("Error when loading characters!", error);
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    await this.fetchData();
  },
};

export default tableMixin;
