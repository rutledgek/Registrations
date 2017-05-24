<template>
  <div class="hello">
    <div class="rows">
        <draggable class="dragArea"  style="min-height: 80px; width:100%">
          <h2><strong>Unassigned Registrants:</strong> ({{ filteredCount }})</h2>
          <div class="registrations well" v-for="Registration in Registrations">
            <div class="rows">
              <div>
                <h5>{{  Registration.FirstName}} {{  Registration.LastName }} - {{ Registration.AliasId}}</h5>
              </div>
            </div>
            <div class="rows">
              <div>
                Age: {{  Registration.Age }}
              </div>
              <div>
                Grade: {{ Registration.Grade }}
              </div>
              <div>
                Gender: {{  Registration.Gender }}
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>

</template>

<script>
import draggable from 'vuedraggable';
import { state } from '../store/store';




export default {
  name: 'unassaigned',
  components: {
    draggable
  },
  computed: {
    Registrations() {
      return this.$store.getters.unassignedRegistrants;
    },
    filteredCount() {
      return this.$store.getters.unassignedRegistrants.length;
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3,h4,h5,h6 {
  /*font-weight: normal;*/
  font-size:1.25em;
  /*margin-bottom:30px;*/

}
.rows>div {
  height: 20px;
  padding: 0;
  /*margin-bottom: 30px;*/
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /*margin: 0 10px;*/
}

a {
  color: #42b983;
}
.rows{
  display:flex;
  flex-diretion:column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  font-size:.75em;
  height: 20px;
}
.registrations{
  width: 100%;
  text-align: left;
  cursor: grab;
}
h6{
  text-align: left;
}
.well{
  /*margin-bottom:2px;*/
  padding: 0 5px;
  margin-bottom: 2px;
  /*padding-left: 5px;*/
  /*height: 50px;*/
}
</style>
