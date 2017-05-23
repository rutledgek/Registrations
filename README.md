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
  1. Finish Group Type Selector(sets store groupType value to a value).  Selector will be populated by the unique group types that already exist in the groups for that registration instance.
  
  2. Create form tp create/edit groups.  Part of this form is a selector showing all group types that already exist and the ability to create a new group type.  
      Group Information(Many of these are used as filters to prevent people who do not fit the group's criteria from being added. These include Capacity, Gender, Age Range, or Grade Range.  (Use case: we don't want to be able to add middle school boys to a high school girls cabin):
        Registration Instance(from Rock),
        Type,
        Name,
        Capacity,
        Gender,
        Age Start,
        Age End,
        Grade Start,
        Grade End
        
  4. Create filter, using the group filters, logic for drag and drop functionality.  On Drag Start, the filter will run and disable any groups that cannot be used for that person.
  
  3. All registration data is stored in RockRms.  The only field I want to be able to edit is Gender for when it is set to unknown.  Gender is necessary for groups that have gender filters.
  
  5. Create the LoginAuth system to connect with Rock, get login and person's aliasId.  This alias ID will be used to show all registrations that have that person as a leader/contact for the group.(This can be rethought but this is the best I can come up with currently to ensure only authorized people can edit registration assignments.
  
  -----
  Potential other modules:
    GIve a summary of fees(options) for each grou. The SQL is currently written and it would be to import the results to see more event registration information in one place.
    
    
