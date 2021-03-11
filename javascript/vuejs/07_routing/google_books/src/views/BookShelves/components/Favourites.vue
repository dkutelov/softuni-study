<template>
  <div>
    <h1>Favourite Books</h1>
    <BooksGrid :isLoading="isLoading" :books="books" />
  </div>
</template>

<script>
import BooksGrid from "@/components/BooksGrid.vue";
import { fetchFavouriteBooks } from "@/dataProviders/books";
export default {
  components: {
    BooksGrid,
  },
  data() {
    return {
      isLoading: true,
      books: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("hi");
    next();
  },
  async created() {
    this.books = await fetchFavouriteBooks();
    this.isLoading = false;
  },
};
</script>

<style scoped>
h2 {
  font-size: 18px;
}
</style>
