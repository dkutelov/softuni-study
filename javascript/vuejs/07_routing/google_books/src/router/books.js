import BooksList from "@/views/BooksList.vue";
import BookDetails from "@/views/BookDetails.vue";
import { getUser, isUserAuth } from "../utils/auth";

const booksRoutes = [
  { path: "/magic-books", name: "magicBooks", component: BooksList },
  {
    path: "/book-details/:bookId",
    name: "bookDetails",
    component: BookDetails,
  },
  {
    path: "/book-shelves",
    name: "bookshelves",
    beforeEnter: (to, from, next) => {
      const user = getUser();
      if (isUserAuth(user)) {
        next();
      } else {
        next({ name: "home" });
      }
    },
    redirect: {
      name: "bookshelves.favourites",
    },
    component: () =>
      import(
        /* webpackChunkName: "book-shelves" */ "@/views/BookShelves/BookShelves.vue"
      ),
    children: [
      {
        path: "favourites",
        name: "bookshelves.favourites",
        component: () =>
          import(
            /* webpackChunkName: "book-shelves" */ "@/views/BookShelves/components/Favourites.vue"
          ),
      },
      {
        path: "reading",
        name: "bookshelves.reading",
        component: () =>
          import(
            /* webpackChunkName: "book-shelves" */ "@/views/BookShelves/components/ReadingNow.vue"
          ),
      },
    ],
  },
];
export default booksRoutes;
