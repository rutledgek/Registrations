import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      "SortOrder": "Last",
      "Registrations": [{
          "AliasId": "82",
          "FirstName": "Ellie",
          "LastName": "Gallegos",
          "Gender": "Female",
          "Age": "3",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "85",
          "FirstName": "Emma",
          "LastName": "Kurtis",
          "Gender": "Female",
          "Age": "6",
          "Grade": "1",
          "GradeFormatted": "1st Grade"
        }, {
          "AliasId": "86",
          "FirstName": "Sophie",
          "LastName": "Kurtis",
          "Gender": "Female",
          "Age": "9",
          "Grade": "5",
          "GradeFormatted": "5th Grade"
        }, {
          "AliasId": "92",
          "FirstName": "Natalie",
          "LastName": "Coyle",
          "Gender": "Female",
          "Age": "7",
          "Grade": "3",
          "GradeFormatted": "3rd Grade"
        }, {
          "AliasId": "97",
          "FirstName": "Everett",
          "LastName": "Buchholz",
          "Gender": "Male",
          "Age": "4",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "96",
          "FirstName": "Finley",
          "LastName": "Buchholz",
          "Gender": "Male",
          "Age": "4",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "101",
          "FirstName": "Charlotte",
          "LastName": "Warner",
          "Gender": "Female",
          "Age": "5",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "105",
          "FirstName": "Alexandra",
          "LastName": "Porche",
          "Gender": "Unknown",
          "Age": "3",
          "Grade": "0",
          "GradeFormatted": "Kindergarten"
        }, {
          "AliasId": "108",
          "FirstName": "AnnaLisa",
          "LastName": "DiRocco",
          "Gender": "Unknown",
          "Age": "4",
          "Grade": "0",
          "GradeFormatted": "Kindergarten"
        }, {
          "AliasId": "111",
          "FirstName": "Ava",
          "LastName": "Whitney",
          "Gender": "Unknown",
          "Age": "4",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "113",
          "FirstName": "Samantha",
          "LastName": "Spector",
          "Gender": "Unknown",
          "Age": "8",
          "Grade": "4",
          "GradeFormatted": "4th Grade"
        }, {
          "AliasId": "114",
          "FirstName": "William",
          "LastName": "Spector",
          "Gender": "Unknown",
          "Age": "6",
          "Grade": "1",
          "GradeFormatted": "1st Grade"
        }, {
          "AliasId": "119",
          "FirstName": "Bryce",
          "LastName": "Munce",
          "Gender": "Male",
          "Age": "8",
          "Grade": "3",
          "GradeFormatted": "3rd Grade"
        }, {
          "AliasId": "123",
          "FirstName": "Gabriel",
          "LastName": "Signore",
          "Gender": "Male",
          "Age": "5",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "125",
          "FirstName": "Alyssa",
          "LastName": "Groux",
          "Gender": "Unknown",
          "Age": "5",
          "Grade": "0",
          "GradeFormatted": "Kindergarten"
        }, {
          "AliasId": "126",
          "FirstName": "Kylie",
          "LastName": "Groux",
          "Gender": "Unknown",
          "Age": "9",
          "Grade": "5",
          "GradeFormatted": "5th Grade"
        }, {
          "AliasId": "128",
          "FirstName": "Dylan",
          "LastName": "Hummel",
          "Gender": "Unknown",
          "Age": "5",
          "Grade": "1",
          "GradeFormatted": "1st Grade"
        }, {
          "AliasId": "129",
          "FirstName": "Katelyn",
          "LastName": "Hummel",
          "Gender": "Unknown",
          "Age": "3",
          "Grade": "",
          "GradeFormatted": ""
        }, {
          "AliasId": "13",
          "FirstName": "Joshua",
          "LastName": "Rutledge",
          "Gender": "Male",
          "Age": "5",
          "Grade": "0",
          "GradeFormatted": "Kindergarten"
        }, {
          "AliasId": "14",
          "FirstName": "Eliana",
          "LastName": "Rutledge",
          "Gender": "Female",
          "Age": "3",
          "Grade": "",
          "GradeFormatted": ""
        }],
        "Groups":[
          {
          "RegistrationInstanceId":3,
          "Type": "Cabin",
          "name":"Cabin1",
          "capcity": 5,
          "GradeStart": 5,
          "GradeEnd": 8,
          "AgeStart": "",
          "AgeEnd:": "",
          "Gender":"Female",
          "Members": "14, 13, 129",
          },
          {
          "RegistrationInstanceId":3,
          "Type": "Cabin",
          "name":"Cabin2",
          "capacity": 30,
          "GradeStart": 9,
          "GradeEnd": 12,
          "AgeStart": "",
          "AgeEnd:": "",
          "Gender":"Female",
          "Members": "125, 126, 119",
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
       memberslist =  memberslist.replace(/,\s*$/, "");
       memberslist = memberslist.split(", ");
      return memberslist;
    },

    allRegistrants(state, sort) {
          var sort = state.SortOrder;
          console.log(sort);
          return _.orderBy(state.Registrations.filter(x => !store.getters.allAssignedRegistrations.includes(x.AliasId)), sort);

        }
  },
});
