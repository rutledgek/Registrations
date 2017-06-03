import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      "sortBy": {"order":"AliasId","direction":"asc"},
      "groupType": "",
      "Registrations": [],
        "Groups":[],
  },
  getters,
  mutations,
  actions
});
