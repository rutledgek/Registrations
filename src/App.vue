<template>
  <div id="app">
    <div class="container">
      <div>
        <h2>Event Registrations</h2><h4>Total Registrations: {{ totalCount }}</h4>
      </div>
      <div class="flex-layout" v-if="this.$store.state.groupType == ''">
        <div style="width:100%">
          <eventGroups></eventGroups>
          <!-- <addGroup></addGroup> -->
        </div>

        <!-- <div style="width:25%">
          <groupTypeSelector></groupTypeSelector>
          <unassigned></unassigned>
        </div> -->
      </div>
      <div class="flex-layout" v-else>
        <div style="width:75%" class="print">
          <eventGroups></eventGroups>
        </div>
        <div style="width:25%" class="noprint">
          <groupTypeSelector></groupTypeSelector>
          <unassigned></unassigned>
        </div>
      </div>
    </div>
    <addGroup v-if="(this.$store.state.addGroupForm == true)"></addGroup>
    <attendanceRoster></attendanceRoster>
  </div>
</template>

<script>
import unassigned from './components/unassigned'
import draggable from 'vuedraggable'
import groupTypeSelector from './components/groupTypeSelector'
import { state } from './vuex/store/store'
import eventGroups from './components/eventGroups'
import addGroup from './components/addGroupForm'
import attendanceRoster from './components/attendanceRoster'

export default {
  name: 'app',
  created: function() {
    this.$store.dispatch('getGroups');
    this.$store.dispatch('getRegistrations');

  },
  components: {
    unassigned, draggable, groupTypeSelector, eventGroups, addGroup, attendanceRoster
  },
  computed: {
    totalCount() {
      return this.$store.state.Registrations.length;
    },
  },
  methods: {


  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.flex-layout{
  display:flex;
  flex-diection: rows;
  justify-content:space-between;
  flex-wrap: wrap;
}
@media print {

  .noprint {
    display: none;
  }
  .print {
    width: 100% !important;
  }
}

</style>
