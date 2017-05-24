<template>

  <div class="groups">
    <div class="group" v-for="group in selectedGroups" @click="changeFilter(group.type)">
      <div class="groupcontainer">
        <i class="fa fa-2x" :class="group.fontAwesome"></i><br />{{ group.type }}
        </p>
      </div>
    </div>
  </div>

</template>


<script>

import { state } from '../store/store';

export default {
  name: "groupTypeSelector",
  computed: {
    selectedGroups() {
      return this.$store.getters.uniqueTypes;
    }
  },
  methods: {
    changeFilter(val){
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
  .groups{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items:center;
    /*flex-flow: row;*/
    /*box-sizing: border-box;*/
    width:100%;
    /*min-height: 180px;*/
  }
  .group{
    position:relative;
    width: 75px;
    height: 75px;
    /*margin:20px;*/
    /*margin-left: 10px;*/
    /*padding: 10px;*/
    margin-bottom: 10px;
    background-color: Darkblue;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    /*line-height: 50px;*/
  }
  .groupcontainer p {
    font-weight: bold;
  }
  .groupcontainer{
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }


</style>
