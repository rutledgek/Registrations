<template>
  <table>
    <thead>
      <td>
        Name:
      </td>
      <td>
        Mon.
      </td>
      <td>
        Tues.
      </td>
      <td>
        Wed.
      </td>
      <td>
        Thurs.
      </td>
      <td>
        Fri
      </td>
    </thead>
    <tbody>
      <tr>

      </tr>
    </tbody>

  </table>

</template>
<script>

import { state } from '../vuex/store/store';
import Vue2Filters from 'vue2-filters';
import draggable from 'vuedraggable';

import groupTypeSelector from '../components/groupTypeSelector';

// Vue.use(Vue2Filters);

export default {
  name: "attendanceRoster",
  computed: {
    persons(val){
      this.$store.getters.showRoster;
      var len = lookup.length;
      var people =[];
      for (var i=0; i<len; i++){
        people = _.concat(people, _.find(this.$store.state.Registrations, function(o) { return o.AliasId === lookup[i]; }))
      }
      return _.orderBy(people, this.$store.state.sortBy.order, this.$store.state.sortBy.direction);
    },
  },

  methods: {

  },
}

</script>

<style>
@media print {
  table{
    width: 100%;
    border: 1px solid black;
  }
  td:nth-child(1){
    width: 40%;

  }
  td{
    width: 12%;
    border-left: 1px solid black;
  }
  tr:nth-child(even) {
    background-color: #DCDCDC;
  }
  tr:nth-child(odd) {
    background-color: white;
  }
}
</style>
