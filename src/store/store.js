import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      "sortBy": "LastName",
      "groupType": "",
      "Registrations": [{
          	"AliasId": 82,
          	"FirstName": "Ellie",
          	"LastName": "Gallegos",
          	"Gender": "Female",
          	"Age": 3
          }, {
          	"AliasId": 85,
          	"FirstName": "Emma",
          	"LastName": "Kurtis",
          	"Gender": "Female",
          	"Age": 6,
          	"Grade": 1,
          	"GradeFormatted": "11"
          }, {
          	"AliasId": 86,
          	"FirstName": "Sophie",
          	"LastName": "Kurtis",
          	"Gender": "Female",
          	"Age": 9,
          	"Grade": 5,
          	"GradeFormatted": "7"
          }, {
          	"AliasId": 92,
          	"FirstName": "Natalie",
          	"LastName": "Coyle",
          	"Gender": "Female",
          	"Age": 7,
          	"Grade": 3,
          	"GradeFormatted": "9"
          }, {
          	"AliasId": 97,
          	"FirstName": "Everett",
          	"LastName": "Buchholz",
          	"Gender": "Male",
          	"Age": 4
          }, {
          	"AliasId": 96,
          	"FirstName": "Finley",
          	"LastName": "Buchholz",
          	"Gender": "Male",
          	"Age": 4
          }, {
          	"AliasId": 101,
          	"FirstName": "Charlotte",
          	"LastName": "Warner",
          	"Gender": "Female",
          	"Age": 5
          }, {
          	"AliasId": 105,
          	"FirstName": "Alexandra",
          	"LastName": "Porche",
          	"Gender": "Unknown",
          	"Age": 3,
          	"Grade": 0,
          	"GradeFormatted": "12"
          }, {
          	"AliasId": 108,
          	"FirstName": "AnnaLisa",
          	"LastName": "DiRocco",
          	"Gender": "Unknown",
          	"Age": 4,
          	"Grade": 0,
          	"GradeFormatted": "12"
          }, {
          	"AliasId": 111,
          	"FirstName": "Ava",
          	"LastName": "Whitney",
          	"Gender": "Unknown",
          	"Age": 4
          }, {
          	"AliasId": 113,
          	"FirstName": "Samantha",
          	"LastName": "Spector",
          	"Gender": "Unknown",
          	"Age": 8,
          	"Grade": 4,
          	"GradeFormatted": "8"
          }, {
          	"AliasId": 114,
          	"FirstName": "William",
          	"LastName": "Spector",
          	"Gender": "Unknown",
          	"Age": 6,
          	"Grade": 1,
          	"GradeFormatted": "11"
          }, {
          	"AliasId": 119,
          	"FirstName": "Bryce",
          	"LastName": "Munce",
          	"Gender": "Male",
          	"Age": 8,
          	"Grade": 3,
          	"GradeFormatted": "9"
          }, {
          	"AliasId": 123,
          	"FirstName": "Gabriel",
          	"LastName": "Signore",
          	"Gender": "Male",
          	"Age": 5
          }, {
          	"AliasId": 125,
          	"FirstName": "Alyssa",
          	"LastName": "Groux",
          	"Gender": "Unknown",
          	"Age": 5,
          	"Grade": 0,
          	"GradeFormatted": "12"
          }, {
          	"AliasId": 126,
          	"FirstName": "Kylie",
          	"LastName": "Groux",
          	"Gender": "Unknown",
          	"Age": 9,
          	"Grade": 5,
          	"GradeFormatted": "7"
          }, {
          	"AliasId": 128,
          	"FirstName": "Dylan",
          	"LastName": "Hummel",
          	"Gender": "Unknown",
          	"Age": 5,
          	"Grade": 1,
          	"GradeFormatted": "11"
          }, {
          	"AliasId": 129,
          	"FirstName": "Katelyn",
          	"LastName": "Hummel",
          	"Gender": "Unknown",
          	"Age": 3
          }, {
          	"AliasId": 13,
          	"FirstName": "Joshua",
          	"LastName": "Rutledge",
          	"Gender": "Male",
          	"Age": 5,
          	"Grade": 0,
          	"GradeFormatted": "12"
          }, {
          	"AliasId": 14,
          	"FirstName": "Eliana",
          	"LastName": "Rutledge",
          	"Gender": "Female",
          	"Age": 3
          }],
        "Groups":[
          {
          "RegistrationInstanceId":3,
          "type": "Cabin",
          "name":"Cabin 1",
          "capacity": 5,
          "gradeStart": 5,
          "gradeEnd": 8,
          "ageStart": 3,
          "ageEnd": 4,
          "gender":"Female",
          "members": [126],
          "fontAwesome":"fa-home"
          },
          {
          "RegistrationInstanceId":3,
          "type": "Van",
          "name":"Van 1",
          "capacity": 30,
          "gradeStart": 9,
          "gradeEnd": 12,
          "gender":"Female",
          "members": [82,85,86,92],
          "fontAwesome":"fa-car"
          },
          {
          "RegistrationInstanceId":3,
          "type": "Van",
          "name":"Van 2",
          "capacity": 12,
          "gradeStart": 5,
          "gradeEnd": 9,
          "gender":"Female",
          "members": [128,129,13],
          "fontAwesome":"fa-car"
          }
        ],
  },
  getters: {
    filteredGroups(state) {
      // var filteredGroupsbyType = state.Groups.Type.filter(isGroupType);
      // return filteredGroupsbyType;
      if(state.groupType == "") {
          var filteredGroupsbyType = state.Groups
      }
      else {
      var filteredGroupsbyType = state.Groups.filter(group => group.type == state.groupType);
      }
      return filteredGroupsbyType;
    },
    unassignedRegistrants(state, getters) {
      var selectedGroups = getters.filteredGroups;
      var len = selectedGroups.length;
      var memberslist = [];
      for (var i=0; i<len; i++){
        memberslist = selectedGroups[i].members + ", " + memberslist;
      }
      var strVale = memberslist;
      var strArr = memberslist.split(',');
      var memberslist = [];
      for(i=0; i < strArr.length; i++)
         memberslist.push(parseInt(strArr[i]));

       var orderedRegistrations=_.orderBy(state.Registrations, state.sortBy).filter(x => !memberslist.includes(x.AliasId))
       return orderedRegistrations;

    },
    uniqueTypes(state) {
      function removeDuplicates(originalArray, prop) {
             var newArray = [];
             var lookupObject  = {};

             for(var i in originalArray) {
                lookupObject[originalArray[i][prop]] = originalArray[i];
             }

             for(i in lookupObject) {
                 newArray.push(lookupObject[i]);
             }
              return newArray;
          }

          var uniqueArray = removeDuplicates(state.Groups, "type");
        return uniqueArray;
    },
    getPersonByAliasId: (state, getters) => (id) => {
  // return state.Registrations.find(Registration => Registration.AliasId === id)
  // console.log(id);
}
},
  mutations: {
    updateFilter(state, val){
      // console.log(val);
      state.groupType = val;
  },
}
});
