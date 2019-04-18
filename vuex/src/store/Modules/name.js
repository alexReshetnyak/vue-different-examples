export const myName = {
  namespaced: true, // * added name space for this module
  state: {
    name: 'Alex',
  },
  getters: {
    showName(state) {
      return state.name;
    }
  },
  mutations: {
    swapName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    swapName(context, payload) {
      setTimeout(() => {
        context.commit('swapName', payload);        
      }, 2000);
    }
  }
};