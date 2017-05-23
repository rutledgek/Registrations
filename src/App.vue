<template>
  <div id="app">
    <div class="container">
      <div>
        Event Registrations:
      </div>
      <div class="flex-layout">
        <div>
          HEre is some information
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

export default {
  name: 'app',
  components: {
    unassigned, draggable, groupTypeSelector,
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
}
</style>
