import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sequence: '',
  },
  mutations: {
    updateSequence(state, newSequence) {
      state.sequence = newSequence;
    },
  },
  getters: {
    getSequence: state => state.sequence,
  },
});
