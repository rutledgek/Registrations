export default {
    updateFilter(state, val){
      state.groupType = val;
  },
    updateSort(state, val){
      if(state.sortBy.order == val) {
        if(state.sortBy.direction == "asc" ){
          state.sortBy.direction = "desc" }
          else {
            state.sortBy.direction = "asc"
          }
        }
        else {
          state.sortBy.direction = "asc"
        }
      state.sortBy.order = val;

    },
    Add_Member(state, obj) {
      // console.log(obj);
      var Arr = state.Groups.find(grp => grp.Id === obj.val2).members;
      Arr.push(obj.val);
    },
    getRegistrations(state, response){
      // console.log(response);
          state.Registrations = response;
    },
    getGroups(state, response) {
      var arr = _.values(response);
      state.Groups = arr;
    },
    updateMembers(state, {response, obj}) {
      var Arr = state.Groups[obj.index].members = obj.Arr;
    },
    addGroup(data) {
      state.actions.dispatch('getGroups')
    }
}
