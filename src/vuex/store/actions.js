export default {
      removeMember({ commit }, obj) {
        console.log(obj.val2);
        console.log(obj.Arr);
        setTimeout(function(){
        commit('Remove_Member', obj)
      },100);
      },
      addMember({ commit }, obj) {
        setTimeout(function(){
        commit('Add_Member', obj)
      },100);
    },
}
