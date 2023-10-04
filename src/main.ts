import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";




import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

const url = process.env.VUE_APP_BACKEND_URL as string
const httpLink = createHttpLink({
  uri: url
});

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});



app.use(store).use(router).mount("#app");
