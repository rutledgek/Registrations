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
      "addGroupForm": false,
      "editGroupForm": false,
      "groupToDelete": '',
      "Registrations": [],
      "Groups":[],
      Grades: [
        {"label":"none",
         "value": null
        },
        {
          "label": "Kindergarten",
          "value": 0
        }, {
          "label": "1st Grade",
          "value": 1
        }, {
          "label": "2nd Grade",
          "value": 2
        }, {
          "label": "3rd Grade",
          "value": 3
        }, {
          "label": "4th Grade",
          "value": 4
        }, {
          "label": "5th Grade",
          "value": 5
        }, {
          "label": "6th Grade",
          "value": 6
        }, {
          "label": "7th Grade",
          "value": 7
        }, {
          "label": "8th Grade",
          "value": 8
        }, {
          "label": "9th Grade",
          "value": 9
        }, {
          "label": "10th Grade",
          "value": 10
        }, {
          "label": "11th Grade",
          "value": 11
        }, {
          "label": "12th Grade",
          "value": 12
        }],
  },
  getters,
  mutations,
  actions
});
