import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  numbers: [1, 2, 3],
  numbersArray: [
    {
      value: 1,
      id: 1
    },
    {
      value: 2,
      id: 2
    },
    {
      value: 3,
      id: 3
    }
  ],
  userArray: []
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbersArray.push(payload);
  },
  REMOVE_NUMBER(state, payload) {
    state.numbersArray = state.numbersArray.filter((el) => el.id !== payload);
  },
  ADD_USERS(state, payload) {
    console.log(payload);
    state.userArray = payload;
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  },
  removeNumber(context, id) {
    context.commit("REMOVE_NUMBER", id);
  },
  addUsers(context, users) {
    context.commit("ADD_USERS", users);
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  },
  getNumbersArray(state) {
    return state.numbersArray;
  },
  getUserArray(state) {
    return state.userArray;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
