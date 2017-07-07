export default {
  filteredGroups(state) {
    if(state.groupType == "") {
        var filteredGroupsbyType = state.Groups
    }
    else {
      var filteredGroupsbyType = state.Groups.filter(group => group.type == state.groupType);
    }
    return filteredGroupsbyType;
  },
  getlocalgroups(state){
    if(state.Groups != '') {
    return _.last(state.Groups).Id;
    }
    else{
      return 0;
    }
  },
  unassignedRegistrants(state, getters) {
    if(state.Groups != '') {
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
   var orderedRegistrations=_.orderBy(state.Registrations, state.sortBy.order, state.sortBy.direction).filter(x => !memberslist.includes(x.AliasId))
   return orderedRegistrations;
  }
  },
  allRegistrations(state) {
    return state.Registrations
  },
  uniqueTypes(state) {
    // function removeDuplicates(originalArray,prop) {
    //        var newArray = [];
    //        var lookupObject  = {};
    //        for(var i in originalArray) {
    //           lookupObject[originalArray[i][prop]] = originalArray[i];
    //        }
    //        for(i in lookupObject) {
    //            newArray.push(lookupObject[i]);
    //        }
    //         return newArray;
    //     }
        // var uniqueArray = removeDuplicates(state.Groups, "type");
        var uniqueArray =  _.sortBy(_.uniqBy(state.Groups, 'type'), 'name');
        return uniqueArray;
  },
  getGrades (state) {
    return state.Grades
  },
  getDroppedMember(state) {
    return state.movedItem.AliasId;
  },
  lastGroup(state) {

  },
  showRoster(state) {

  }
}
