<template>

  <v-select :options="selectedGroups" :on-change="changedFilter"></v-select>


</template>


<script>
import { state } from '../store/store';
import vSelect from "vue-select"

export default {
  name: "groupTypeSelector",
  components: {vSelect},
  computed: {
    selectedGroups() {
      return this.$store.getters.uniqueTypes;
    }
  },
  methods: {
    changedFilter(val){
      console.log(val);
      this.$store.commit('updateFilter', val);
  }
}

}

</script>

<style scoped>
  select {
    width: 100%;
  }
  option{
    height: 300px;
  }
</style>
