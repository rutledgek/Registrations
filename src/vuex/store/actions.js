import api from '../utils/api'

export default {
      updateMembers(context, obj) {
        console.log(obj.oldArr.members);
        if(obj.Arr.length == 0){
          data = '{"members":[0]}'
        } else {
        var data = '{"members":['+obj.Arr+']}'
        }
        return api.get('https://registrations-assignment.firebaseio.com/Groups.json?orderBy="Id"&startAt=' + obj.val2 + '&endAt=3&print=pretty')
          .then((response) => {
            // console.log(response)
            return api.patch('https://registrations-assignment.firebaseio.com/Groups/'+Object.keys(response)[0]+'.json', data)
              .then((response) => {
                context.dispatch('getGroups');
            })
            })
          .catch((error) => console.log(error));


        // return api.patch('https://registrations-assignment.firebaseio.com/Groups/' + obj.index + '.json', data)
        //  .then((response) => context.commit('updateMembers', {response, obj}))
        //  .catch((error) => console.log(error));
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

      addGroup(context, data){
        // console.log(data);
        return api.post('https://registrations-assignment.firebaseio.com/Groups.json',data)
          .then((response) => {
            context.dispatch('getGroups');
          })
          .catch((error) => console.log(error));
      },
      deleteGroup(context, data) {
        return api.get('https://registrations-assignment.firebaseio.com/Groups.json?orderBy="Id"&startAt=' + data.Id + '&limitToFirst1*print=pretty')
          .then((response) => {
            return api.delete('https://registrations-assignment.firebaseio.com/Groups/'+Object.keys(response)[0]+'.json')
              .then((response) => {
                context.dispatch('getGroups');
              })
            })
          .catch((error) => console.log(error));
      },
}
