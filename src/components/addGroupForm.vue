<template>
  <div class="background">
    <div class="form">
      <div class="closeform clickable" @click="closeGroup()">
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <h3 style="margin-top:0px;">Add a Group:</h3>
      <p class="required">
        * Required
      </p>
      <hr style="margin-top:0px;" />
      <form>
        <div class="form-group">
          <label :class="{required: !newGroup.name}">Group Name:</label>
          <input type="text" v-model="newGroup.name"><br />
        </div>
        <div class="form-group">
          <label :class="{required: !newGroup.capacity}">Group Capacity: </label><input v-model="newGroup.capacity" style="width: 50px;" type="number"/>
        </div>
        <div class="form-group">
            <label :class="{required: !newGroup.type}">Group Type:</label>
            <select id="test" v-model="groupType">
              <option value="Choose a Group" selected="true" disabled>Choose a Group Type</option>
              <option v-for="type in groupTypes" class="non" :value="[type.type,type.fontAwesome]">{{ type.type }}</option>
              <option class="editable" value="other">New Group Type</option>
            </select>
            <div class="textInput">
            <input type="text" v-show="(groupType == 'other')" v-focus="focused" @focus="focused = true" @blur="focused = false" class="editOption" v-model="groupTypeText"></input>
          </div>
          <div  v-show="(groupType == 'other')">
          <label>FontAwesome Icon:</label><input type="text" v-model="newGroup.fontAwesome"></input><br /><br />
          </div>
        </div>
        <hr/>
        <fieldset>
          <h4>Group Filters</h4>
          <br />
          <label>Group Gender: </label>
            <select  v-model="newGroup.gender">
              <option value="" >None</option>
              <option value="Male" >Male</option>
              <option value="Female">Female</option>
            </select>
          <br />
          <label>Age Range: </label><input v-model="newGroup.ageStart" type="number" style="width: 50px;" />
           - <input v-model="newGroup.ageEnd" type="number" style="width: 50px;" />
          <br /><label>Grade Range: </label>
          <select v-model="newGroup.gradeStart">
              <option v-for="grade in Grades" v-bind:value="grade.value">{{grade.label}}</option>
          </select>
          <select v-model="newGroup.gradeEnd">
              <option v-for="grade in Grades" v-bind:value="grade.value">{{grade.label}}</option>
          </select>
        </fieldset>
        <button @click.prevent="submit(newGroup)" :disabled="(!newGroup.name || !newGroup.type || !newGroup.capacity)">Add Group</button>
      </form>
      <div v-if="this.submitted">
        {{newGroup}}
      </div>
    </div>
  </div>
</template>

<script>
import { state } from '../vuex/store/store';
import { mixin as focusMixin }  from 'vue-focus';

export default {
  name: 'addGroup',
  mixins: [ focusMixin ],
  computed: {
    groupTypes() {
      return this.$store.getters.uniqueTypes;
    },
    Grades() {
      return this.$store.getters.getGrades;
    },
    lastGroup() {
      return this.$store.getters.getlocalgroups;
    }
  },

  methods: {
    submit(obj){
      var data = obj;
      this.$store.dispatch('getGroups');
      var groupId = this.$store.getters.getlocalgroups + 1;
      if(this.$store.getters.getlocalgroups == null) {
        data.Id = 0;
        console.log('yes')
      } else {
        data.Id = groupId;
        console.log('no')
      }
      this.$store.dispatch('addGroup', data);
      this.$store.commit('updateFilter', data.type);
      this.$store.state.addGroupForm = false;
    },
    closeGroup() {
      this.$store.state.addGroupForm = false;
    }
  },
  watch: {
    groupType: function(){
      this.focused = true;
      if(this.groupType == 'other') {
        this.newGroup.type = this.groupTypeText;
        this.newGroup.fontAwesome = 'fa-';
      } else {
        this.newGroup.type = this.groupType[0];
        this.newGroup.fontAwesome = this.groupType[1];
      }
    },
    groupTypeText: function() {
      if(this.groupType == 'other') {
      this.newGroup.type = this.groupTypeText;
      }
    },
  },
  data () {
    return {
      focused: true,
      gradeStart: null,
      gradeEnd: null,
      groupType: '',
      groupTypeText: '',
      fontImage: '',
      enabledSubmit: false,
      submitted: false,
      newGroup: {
        Id:null,
        name: null,
        type: '',
        capacity: null,
        gender: null,
        ageStart: null,
        ageEnd: null,
        gradeStart: null,
        gradeEnd: null,
        members: [0],
        Registrationinstance: 3,
      },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.form {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}
#groupType{
    padding-top: 50px;
    position: relative;
}
#test{
    width: 50%;
    height: 30px;
    position: relative;
}
select{
  margin: 10px 0;
  min-width: 150px;
  background-color: white;
  /*border: none;*/
}
option {
    height: 30px;
    line-height: 30px;
    width: 50%
}
input{
  height: 30px;
  padding-left: 5px;
  margin: 0 5px;
}
.textInput {
  position:relative;
  width: 50%
}
.editOption{
    width: 90%;
    height: 22px;
    position: absolute;
    top: -36px;
    left: 151px;
    background-color: #e8e8e8;
    border: 0;
    padding-left: 5px;
}
.background{
  position:absolute;
  left:0px;
  right:0px;
  bottom:0px;
  top: 0px;
  background-color: rgba(0,0,0,.7)
}
.form{
  background-color: white;
  padding: 30px;
  border-radius: 20px;
}
.required{
  color: red;
  font-weight: bold;
}
.closeform{
  position:absolute;
  right: 15px;
  top: 10px;
  font-size: 25px;
  cursor: pointer;
}
</style>
