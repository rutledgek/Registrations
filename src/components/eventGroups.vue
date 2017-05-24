<template>

  <div class="eventgroups"  v-if="($store.state.groupType != '')">
    <div v-for="group in eventGroups">
      <h3>{{ group.name }}({{ group.capacity}})</h3>
      <div class="filters">
        <div>
          Type: {{ group.type}}
        </div>
        <div>
          Gender: {{ group.gender}}
        </div>
        <div>
           Age Range: {{ group.ageStart}}-{{group.ageEnd}}
        </div>
        <div>
          Grade Range: {{ group.gradeStart}}-{{ group.gradeEnd}}
        </div>
      </div>
      <div>
        <h5>Members</h5>
        <div v-for="person in persons(group.members)">

        </div>{{group.members}}
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Please Choose A Group Type</h2>
  </div>

</template>


<script>

import { state } from '../store/store';
import Vue2Filters from 'vue2-filters';

// Vue.use(Vue2Filters);

export default {
  name: "eventGroups",
  computed: {
    eventGroups(){
      return this.$store.getters.filteredGroups;
    },
    groupMembers(){
      return this.$store.getters.getPersonByAliasId(Group.members);
    },
  },
  methods: {
    persons(val){

      var lookup = val;
      var len = lookup.length;
      var people =[];
      // console.log(lookup), console.log(len);
      for (var i=0; i<len; i++){
        people.push(this.$store.state.Registrations.filter(x => this.$store.state.Registrations.includes(x.AliasId.val)));
      }
      console.log(people);
    },
      // console.log(memberlst);
      // var len = selectedGroups.length;
      // var memberslist = [];
      // for (var i=0; i<len; i++){
      //   memberslist = selectedGroups[i].members + ", " + memberslist;
      // }
      // var strVale = memberslist;
      // var strArr = memberslist.split(',');
      // var memberslist = [];
      // for(i=0; i < strArr.length; i++)
      //    memberslist.push(parseInt(strArr[i]));
      // // console.log(val);
      // var len = val.length;
      // var list = val;
      // var person = [];
      // var i;
      // // console.log(len);
      // for(i=0; i<0; i++){
      //     console.log(list[i]);
      // }
      // // console.log(person);
      // return _.findIndex(this.$store.Registrations, function(o) { return o.AliasId == val; });
      // this.$store.state.Registrations.filter(function(o){return o.AliasId == val[i]})
    },
  }

</script>

<style scoped>
.eventgroups {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /*align-items: center;*/
  /*margin: 10px;*/
  /*box-sizing: border-box;*/
  flex-shring: 2;
}
.eventgroups>div {
  width: 50%;
  box-sizing:border-box;
}
.filters{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*justify-content: space-around;*/
  /*box-sizing: border-box;*/
  width: 100%;
  /*padding: 10px;*/

  /*margin-left: 40px;*/
}
.filters>div {
  margin: 5px;
  box-sizing: border-box;
  width:45%;

  /*width: 70%*/
}

</style>
