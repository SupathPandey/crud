<template>
  <v-container>
    <v-dialog persistent v-model="deletedialog">    
      <v-card>
      <v-layout class="primary darken-1 white--text">
        <v-flex xs12 class="mt-3 text-xs-center">
          <h5>Delete Resource</h5>
        </v-flex>
      </v-layout>
      <v-card-text class="ma-0 pa-2">
        <v-flex class="mt-3 text-xs-center">
          <span>Do you wish to delete resource </span>          
        </v-flex>
        <v-flex class="mt-3 text-xs-center">
          <h6>{{ resource_name }} ?</h6>
        </v-flex>
        <!-- <v-flex class="mt-2 text-xs-center">
           <h6>{{ resource_name }}?</h6>
        </v-flex> -->
       









     
          <v-layout row>        
            <v-flex class="text-xs-center">
              <v-btn class="green--text darken-1" flat="flat" @click="delete_resource_no">No</v-btn>
              <v-btn class="green--text darken-1" flat="flat" @click="delete_resource_yes">Yes</v-btn>      
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>    
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    props: ['deletedialog'],
    methods: {
      delete_resource_yes() {
        console.log(this.$store.state.resource.selected);
        var id = this.$store.state.resource.selected;
        console.log(id+ " deletedialog");
        this.$store.dispatch('resource/delete_item', id); //calling a action in module
        this.$store.state.resource.all_dialog.delete_dialog = false;
        // this.$parent.delete_dialog = false;
        // this.$router.s();
      },
      delete_resource_no() {
        this.$store.state.resource.all_dialog.delete_dialog = false;
        // this.$parent.delete_dialog = false;
        // this.$router.s();
      }
    },
    computed: {
      resource_name: function() {
        return this.$store.state.resource.selected.name;
      }
    }

    
  }
</script>
<style scoped>
  
</style>