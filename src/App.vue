<template>
  <div id="app">
    <div class="container">
      <div>
        <h2>Event Registrations</h2><h4>Total Registrations: {{ totalCount }}</h4>
      </div>
      <div class="flex-layout">
        <div style="width:75%">
          <eventGroups></eventGroups>
        </div>
        <div style="width:25%">
          <groupTypeSelector></groupTypeSelector>
          <unassigned></unassigned>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import unassigned from './components/unassigned'
import draggable from 'vuedraggable'
import groupTypeSelector from './components/groupTypeSelector'
import { state } from './store/store';
import eventGroups from './components/eventGroups'

export default {
  name: 'app',
  components: {
    unassigned, draggable, groupTypeSelector, eventGroups,
  },
  computed: {
    totalCount() {
      return this.$store.state.Registrations.length;
    },
  },

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
</style>
