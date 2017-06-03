import api from '../utils/api'

export default {
      updateMembers(context, obj) {
        if(obj.Arr.length == 0){
          data = '{"members":[0]}'
        } else {
        var data = '{"members":['+obj.Arr+']}'
        }
        return api.patch('https://registrations-assignment.firebaseio.com/Groups/' + obj.index + '.json', data)
         .then((response) => context.commit('updateMembers', {response, obj}))
         .catch((error) => console.log(error));
      },
      addMember({ commit }, obj) {
        setTimeout(function(){
        commit('Add_Member', obj)
      },100);
    },
      getRegistrations(context){
        return api.get('https://registrations-assignment.firebaseio.com/Registrations.json')
         .then((response) => context.commit('getRegistrations',response))
         .catch((error) => console.log(error));
      },
      getGroups(context){
        return api.get('https://registrations-assignment.firebaseio.com/Groups.json')
         .then((response) => context.commit('getGroups',response))
         .catch((error) => console.log(error));
      },
}
