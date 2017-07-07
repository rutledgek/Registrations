import api from '../utils/api'

export default {
      updateMembers(context, obj) {
        if(obj.Arr.length == 0){
          data = '{"members":[0]}'
        } else {
        var data = '{"members":['+obj.Arr+']}'
        }

        var limit = obj.val2 + 1;
        return api.get('https://registrations-assignment.firebaseio.com/Groups.json?orderBy="Id"&startAt=' + obj.val2 + '&endAt=' + obj.val2)
          .then((response) => {
            console.log(response)
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
        return api.get('https://registrations-assignment.firebaseio.com/Groups.json?orderBy="Id"&startAt=' + data.Id + '&endAt=' + data.Id)
          .then((response) => {
            return api.delete('https://registrations-assignment.firebaseio.com/Groups/'+Object.keys(response)[0]+'.json')
              .then((response) => {
                context.dispatch('getGroups');
              })
            })
          .catch((error) => console.log(error));
      },
}
