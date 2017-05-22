import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      "sortBy": "Grade",
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
          "Type": "Cabin",
          "name":"Cabin1",
          "capcity": 5,
          "GradeStart": 5,
          "GradeEnd": 8,
          "AgeStart": 3,
          "AgeEnd:": 4,
          "Gender":"Female",
          "Members": "13, 14, 82, 85, 86, 92, 96, 97, 101, 105, 108",
          },
          {
          "RegistrationInstanceId":3,
          "Type": "Cabin",
          "name":"Cabin2",
          "capacity": 30,
          "GradeStart": 9,
          "GradeEnd": 12,
          "Gender":"Female",
          "Members": "",
          }
        ],
  },
  getters: {

    allAssignedRegistrations(state) {
      var len = state.Groups.length;
      var memberslist = [];
      for (var i=0; i<len; i++){
        memberslist = state.Groups[i].Members + ", " + memberslist;
      }
      var strVale = memberslist;
      var strArr = strVale.split(',');
      var intArr = [];
      for(i=0; i < strArr.length; i++)
         intArr.push(parseInt(strArr[i]));

      return intArr;
    },

    allRegistrants(state, sort) {
          var orderedRegistrations=_.orderBy(state.Registrations, state.sortBy)
          var filterGroup = store.getters.allAssignedRegistrations;
          var filtered = orderedRegistrations.filter(x => !filterGroup.includes(x.AliasId));
          return filtered;
        }
  },
});
