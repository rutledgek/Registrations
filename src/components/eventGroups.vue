<template>

  <div class="eventgroups" v-if="($store.state.groupType != '')">
    <div v-for="group in eventGroups" class="group" draggable="true" @drop="drag_Drop(droppedItem, group.Id)" @dragover.prevent >
<!-- drag_Drop(droppedItem, group.Id) -->
      <div class="editDelete">
        <div class="deleteGroup">
          <div>
            <i class="fa fa-table noprint" @click="showRoster(group.members)"></i>
            <i class="fa fa-pencil noprint"></i>
            <i class="fa fa-trash-o noprint" @click="deleteGroup(group)"></i>
          </div>
        </div>
      </div>
      <h3>{{ group.name }}</h3><h5>Spots Left: {{ registrationsLeft(group) }} / {{ group.capacity }}</h5>
      <div class="filters">
        <div>
          Type: {{ group.type}}
        </div>
        <div v-if="(group.gender)">
          Gender: {{ group.gender}}
        </div>
        <div v-if="(group.ageStart)">
           Age Range: {{ group.ageStart}}-{{group.ageEnd}}
        </div>
        <div v-if="(group.gradeStart)">
          Grade Range: {{ group.gradeStart}}-{{ group.gradeEnd}}
        </div>
      </div>
      <div class="personList">
        <h5>Members</h5>
        <div v-if="(group.members == 0)" style="display:flex; flex-direction: column, align-items:center; justify-content: center;">
          <div class="emptyGroup well">Drop New Group Members Here.</div>
        </div>
        <div  v-if="(group.members != 0)">
            <div v-for="person in persons(group.members)" class="memberslist well">
              <!-- <draggable class="dragarea"> -->
              <div class="rows">
                <div>
                  <h6>{{  person.FirstName}} {{  person.LastName }}</h6>
                </div>
              </div>
              <div class="rows">
                <div>
                  Age: {{  person.Age }}
                </div>
                <div v-if="(person.Grade != [0])">
                  {{ person.GradeFormatted }}
                </div>
                <div>
                  Gender: {{  person.Gender }}
                </div>
                <div>
                  <a @click="removeMember(person.AliasId, group.Id)" style="cursor:pointer" class="noprint"><i class="fa fa-undo fa-lg fa-flip-horizontal"></i></a>
                </div>
              </div>
              <!-- </draggable> -->
            </div>
      </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Please Choose A Group Type</h2>
    <groupTypeSelector></groupTypeSelector>

  </div>

</template>


<script>

import { state } from '../vuex/store/store';
import Vue2Filters from 'vue2-filters';
import draggable from 'vuedraggable';

import groupTypeSelector from '../components/groupTypeSelector';

// Vue.use(Vue2Filters);

export default {
  name: "eventGroups",
  components: { groupTypeSelector, draggable},
  computed: {
    eventGroups(){
      return this.$store.getters.filteredGroups;
    },
    droppedItem(){
      return this.$store.getters.getDroppedMember;
    },
    isDraggable(id){
      return this.$store.getters.isdissabled(id);
    }
  },

  methods: {
    registrationsLeft(val){
      if(val.members.length == 1 && val.members[0] == 0 ) {
        // var left = val.capacity;
        return val.capacity;
      } else {
        // var left = val.capacity - val.members.length;
        return val.capacity - val.members.length;
      }
    },
    persons(val){
      var lookup = val;
      var len = lookup.length;
      var people =[];
      for (var i=0; i<len; i++){
        people = _.concat(people, _.find(this.$store.state.Registrations, function(o) { return o.AliasId === lookup[i]; }))
      }
      return _.orderBy(people, this.$store.state.sortBy.order, this.$store.state.sortBy.direction);
    },
    removeMember(val, val2){
      var oldArr = this.$store.state.Groups.find(grp => grp.Id === val2);
      var index = this.$store.state.Groups.indexOf(oldArr);
      var Arr = _.cloneDeep(oldArr.members);
      var indexVal = Arr.indexOf(val);
      Arr.splice(indexVal,1);
      this.$store.dispatch('updateMembers', { Arr, oldArr, val2 });
    },
    deleteGroup(groupId){
      this.$store.dispatch('deleteGroup', groupId);
    },
    showRoster(obj){
      this.$store.commit('showRoster',obj);
    },
    drag_Drop(val, val2){
        var oldArr = this.$store.state.Groups.find(grp => grp.Id === val2);
        var index = this.$store.state.Groups.indexOf(oldArr);
        var Arr = _.cloneDeep(oldArr.members);
        if(Arr[0]===0){
          Arr.splice(0,1);
        }
        Arr.push(val);
        this.$store.dispatch('updateMembers', { val, Arr, oldArr, val2 });
      },
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
  /*position: abso;*/
  /*width: 60%;*/
  flex-shring: 2;
}
.eventgroups>div {
  width: 45%;
  box-sizing:border-box;
  margin: 10px;
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
.group{
  display:flex;
  flex-direction:column;
  align-content:center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 15px;
}
.filters>div {
  margin: 5px;
  box-sizing: border-box;
  width:45%;

  /*width: 70%*/
}
.rows>div {
  height: 20px;
  padding: 0;
  /*margin-bottom: 30px;*/
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /*margin: 0 10px;*/
}

a {
  color: red;
}
.rows{
  display:flex;
  flex-diretion:column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  font-size:.75em;
  height: 20px;
}
.registrations{
  width: 90%;
  text-align: left;
  cursor: grab;
}
h6{
  text-align: left;
}
.well{
  /*margin-bottom:2px;*/
  padding: 0 5px;
  margin-bottom: 2px;
  /*padding-left: 5px;*/
  /*height: 50px;*/
}
h6 {
  /*font-weight: normal;*/
  font-size:1.2em;
  margin-bottom:30px;
}
.editDelete{
  position: relative;
}
.deleteGroup {
  position: absolute;
  top: -8px;
  right: -10px;
  color: black;
  font-size: 18px;
}
.deleteGroup i {
  padding-right: 6px;
}
.emptyGroup {
  height: 75px;
  width: 100%;
  padding: 30px;

}
@media print
{
    div {

    }
    .eventgroups{
      width: 100%;
      page-break-inside: avoid;
      page-break-after: always;
    }
    .eventgroups>div {
      width: 100%;

    }


}
</style>
