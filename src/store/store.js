import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      "sortBy": "AliasId",
      "groupType": "",
      "Registrations": [{
	"AliasId": 82,
	"FirstName": "Ellie",
	"LastName": "Gallegos",
	"Gender": "Female",
	"Age": 4
}, {
	"AliasId": 85,
	"FirstName": "Emma",
	"LastName": "Kurtis",
	"Gender": "Female",
	"Age": 6,
	"Grade": 2,
	"GradeFormatted": "2nd Grade"
}, {
	"AliasId": 86,
	"FirstName": "Sophie",
	"LastName": "Kurtis",
	"Gender": "Female",
	"Age": 9,
	"Grade": 6,
	"GradeFormatted": "6th Grade"
}, {
	"AliasId": 92,
	"FirstName": "Natalie",
	"LastName": "Coyle",
	"Gender": "Female",
	"Age": 7,
	"Grade": 4,
	"GradeFormatted": "4th Grade"
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
	"Grade": 1,
	"GradeFormatted": "1st Grade"
}, {
	"AliasId": 108,
	"FirstName": "AnnaLisa",
	"LastName": "DiRocco",
	"Gender": "Unknown",
	"Age": 4,
	"Grade": 1,
	"GradeFormatted": "1st Grade"
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
	"Grade": 5,
	"GradeFormatted": "5th Grade"
}, {
	"AliasId": 114,
	"FirstName": "William",
	"LastName": "Spector",
	"Gender": "Unknown",
	"Age": 6,
	"Grade": 2,
	"GradeFormatted": "2nd Grade"
}, {
	"AliasId": 119,
	"FirstName": "Bryce",
	"LastName": "Munce",
	"Gender": "Male",
	"Age": 8,
	"Grade": 4,
	"GradeFormatted": "4th Grade"
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
	"Grade": 1,
	"GradeFormatted": "1st Grade"
}, {
	"AliasId": 126,
	"FirstName": "Kylie",
	"LastName": "Groux",
	"Gender": "Unknown",
	"Age": 9,
	"Grade": 6,
	"GradeFormatted": "6th Grade"
}, {
	"AliasId": 128,
	"FirstName": "Dylan",
	"LastName": "Hummel",
	"Gender": "Unknown",
	"Age": 5,
	"Grade": 2,
	"GradeFormatted": "2nd Grade"
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
	"Grade": 1,
	"GradeFormatted": "1st Grade"
}, {
	"AliasId": 14,
	"FirstName": "Eliana",
	"LastName": "Rutledge",
	"Gender": "Female",
	"Age": 3
}, {
	"AliasId": 131,
	"FirstName": "Jake",
	"LastName": "Rush",
	"Gender": "Male",
	"Age": 1
}, {
	"AliasId": 141,
	"FirstName": "Shane",
	"LastName": "Schonleber",
	"Gender": "Male",
	"Age": 6,
	"Grade": 1,
	"GradeFormatted": "1st Grade"
}, {
	"AliasId": 138,
	"FirstName": "Ariana",
	"LastName": "Mace",
	"Gender": "Female",
	"Age": 4
}, {
	"AliasId": 139,
	"FirstName": "Ethan",
	"LastName": "Mace",
	"Gender": "Male",
	"Age": 4
}, {
	"AliasId": 136,
	"FirstName": "Ellie",
	"LastName": "Whittington",
	"Gender": "Female",
	"Age": 3
}, {
	"AliasId": 144,
	"FirstName": "Madelyn",
	"LastName": "Purse",
	"Gender": "Unknown",
	"Age": 4
}, {
	"AliasId": 146,
	"FirstName": "Julia",
	"LastName": "Colonna",
	"Gender": "Unknown",
	"Age": 7,
	"Grade": 3,
	"GradeFormatted": "3rd Grade"
}, {
	"AliasId": 147,
	"FirstName": "Izzie",
	"LastName": "Colonna",
	"Gender": "Unknown",
	"Age": 5,
	"Grade": 1,
	"GradeFormatted": "1st Grade"
}, {
	"AliasId": 149,
	"FirstName": "Vivianna",
	"LastName": "Conaron",
	"Gender": "Unknown",
	"Age": 7,
	"Grade": 4,
	"GradeFormatted": "4th Grade"
}, {
	"AliasId": 150,
	"FirstName": "Dominick",
	"LastName": "Conaron",
	"Gender": "Unknown",
	"Age": 3
}],
        "Groups":[
          {
          "Id": 1,
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
          "Id": 2,
          "RegistrationInstanceId":3,
          "type": "Van",
          "name":"Van 1",
          "capacity": 30,
          "gradeStart": 9,
          "gradeEnd": 12,
          "gender":"Female",
          "members": [82,85,86,92,101,128,],
          "fontAwesome":"fa-car"
          },
          {
          "Id": 3,
          "RegistrationInstanceId":3,
          "type": "Van",
          "name":"Van 2",
          "capacity": 12,
          "gradeStart": 5,
          "gradeEnd": 9,
          "gender":"Female",
          "members": [129,13,123],
          "fontAwesome":"fa-car"
        },{
          "Id": 4,
          "RegistrationInstanceId":3,
          "type": "Van",
          "name":"Van 3",
          "capacity": 12,
          "gradeStart": 5,
          "gradeEnd": 9,
          "gender":"Female",
          "members": [14],
          "fontAwesome":"fa-car"
        },
        ],
  },
  getters: {
    filteredGroups(state) {
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
    allRegistrations(state) {
      return state.Registrations
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
},
  mutations: {
    updateFilter(state, val){
      // console.log(val);
      state.groupType = val;
  },
    updateSort(state, val){
      state.sortBy = val;
    },
    removeItem(state, val, val2){
      console.log(state.Groups.find(Group => Group.Id === val));
    },
    REMOVE_GROUP(state, obj) {
      // console.log(obj.val, obj.val2)
      var Arr = state.Groups.find(grp => grp.Id === obj.val2);
      // var Arr = Arr.members;
      var indexVal = Arr.members.indexOf(obj.val);
      var removed = Arr.members.splice(indexVal,1);
      // console.log(Arr);
    }
},
actions:{

    removeItem({ commit }, obj) {
      commit('REMOVE_GROUP', obj)
      }
    }
});
