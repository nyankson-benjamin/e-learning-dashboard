import { createStore } from "vuex";
import { IUsers, IStore } from "@/Types/IUsers";

export default createStore<IStore>({
  state: {
    users: [],
    isReady: true,
    open: false,
    openFile: false,
  },
  getters: {
    getAllUsers: (state) => {
      return state.users;
    },
    toggleButton: (state) => {
      return state.isReady;
    },

    openModal: (state) => {
      return state.open;
    },
    openFileModal: (state) => {
      return state.openFile;
    },
  },
  mutations: {
    allUsers: (state, payload: IUsers) => {
      state.users.push(payload);
    },

    toggleButton: (state, payload) => {
      state.isReady = payload;
    },

    openModal: (state) => {
      state.open = !state.open;
    },
    openFileModal: (state) => {
      state.openFile = !state.openFile;
      
    },
  },
  actions: {
    allUsers: (context, payload) => {
      context.commit("allUsers", payload);
    },

    toggleButton: (context, payload) => {
      context.commit("toggleButton", payload);
    },
    openModal: (context) => {
      context.commit("openModal");
    },

    openFileModal: (context) => {
      context.commit("openFileModal");
    },
  },
  modules: {},
});
