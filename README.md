# registrations

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##This project will have API calls to a RockRMS database to receive registration information for each registration instance.  Users will be able to drag and drop registrants(people) into user defined groups(i.e. vans, cabins, small groups, etc).

The main list is filtered by registration goup type that is selected and who has already been assigned to a group of that type.


### Work to be completed:

  1. Create a form to edit groups already created.
  
  2. Create a text box for filtering/searching unassigned registrants.
  
  3. Create filter, using the group filters, logic for drag and drop functionality.  On Drag Start, the filter will run and disable any groups that cannot be used for that person.

  4. All registration data is stored in RockRms.  The only field I want to be able to edit is Gender for when it is set to unknown.  Gender is necessary for groups that have gender filters.

  5. Create the LoginAuth system to connect with Rock, get login and person's aliasId.  This alias ID will be used to show all registrations that have that person as a leader/contact for the group.(This can be rethought but this is the best I can come up with currently to ensure only authorized people can edit registration assignments.

  -----
  Potential other modules:
    GIve a summary of fees(options) for each group. The SQL is currently written and it would be to import the results to see more event registration information in one place.
