<template>
  <div>
    <v-select
    label="type"
    :options="selectedGroups"
    >
    </v-select>
  </div>
</template>
<script>
import vSelect from "vue-select"
import { state } from '../vuex/store/store';




export default {
  name: "addGroup",
  components: {vSelect},

  computed: {
    selectedGroups() {
      return this.$store.getters.uniqueTypes;
    }

  }
}

</script>
<style>

</style>
