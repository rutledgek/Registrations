<template>
  <div class="hello">
    <div class="rows">
          <div v-if="this.$store.state.groupType != ''" style="width: 100%">
            <h2><strong>Unassigned Registrants:</strong> ({{ filteredCount }})</h2>
            <div class="btn btn-primary" @click="SortOrder('FirstName')">Name</div>
            <div class="btn btn-primary" @click="SortOrder('Age')">Age</div>
            <div class="btn btn-primary" @click="SortOrder('Grade')">Grade</div>
            <div class="btn btn-primary" @click="SortOrder('Gender')">Gender</div>
            <!-- <draggable class="dragArea"  style="min-height: 80px; width:100%" :options="{sort:false}"> -->
              <div class="registrations well" v-for="Registration in Registrations"
                draggable="true"
                @dragstart="drag_Start({
                    'AliasId': Registration.AliasId,
                    'gender': Registration.Gender,
                    'grade': Registration.Grade,
                    'age': Registration.Age})"
                @dragend="drag_End()" >
                <div class="rows">
                  <div>
                    <h5>{{ Registration.FirstName }} {{  Registration.LastName }}</h5>
                  </div>
                </div>
                <div class="rows">
                  <div class="attributes">
                    Age: {{  Registration.Age }}
                  </div>
                  <div class="attributes" v-if="(Registration.Grade >= 0)">
                    {{ Registration.GradeFormatted }}
                  </div>
                  <div class="attributes">
                    Gender: {{ Registration.Gender }}
                  </div>
                </div>
              </div>
            <!-- </draggable> -->
          </div>
          <div v-else  style="width: 100%">
              <h3>Please Choose a Group Type.</h3>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
import draggable from 'vuedraggable';
import { state } from '../vuex/store/store';




export default {
  name: 'unassaigned',
  components: {
    draggable
  },
  computed: {
    Registrations() {
      return this.$store.getters.unassignedRegistrants;
    },
    filteredCount() {
      if( this.$store.state.Groups.length == 0 ) {
        return this.$store.state.Registrations.length;
      } else {
        return this.$store.getters.unassignedRegistrants.length;
      }
    },
    allRegistrations() {
      return this.$store.getters.allRegistrations;
    }
  },
  methods: {
    SortOrder(val) {
        this.$store.commit('updateSort',val);
    },
    drag_Start(obj){
        this.$store.commit('moveStart',obj)
    },
    addMember(val, val2){
      var oldArr = this.$store.state.Groups.find(grp => grp.Id === val2);
      console.log(val2);
      var index = this.$store.state.Groups.indexOf(oldArr);
      console.log(index);
      var Arr = _.cloneDeep(oldArr.members);
      if(Arr[0]==0){
        Arr.splice(0,1);
      }
      Arr.push(val);
      this.$store.dispatch('updateMembers', { val, Arr, val2 });
    },
    drag_End() {
      this.$store.commit('dragEnd');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3,h4,h5,h6{
  /*font-weight: normal;*/
  font-size:1.5em;
  /*margin-bottom:30px;*/

}
.rows>div {
  height: 20px;
  padding: 0;
  /*width: 100%;*/
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
  color: #42b983;
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
  width: 100%;
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
.attributes{
  font-size: 1.3em;
}
.btn {
  margin-bottom: 5px;
}
</style>
