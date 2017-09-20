<template>
  <div class="edit_resource_dialog">
    <v-container>
      <v-dialog  persistent v-model="this.$store.state.resource.all_dialog.edit_dialog">
        <v-card>
          <v-layout row class="purple darken-1 white--text">
            <v-flex xs12 class="mt-3 text-xs-center">
              <h5>
                <span class="headline">Resource</span>
                <hr class="mr-3 mt-1 ml-3">
              </h5>
            </v-flex>         
          </v-layout>          
          <v-card-text class="ma-0 pa-2">
              <v-container fluid class="ma-0 pa-0">
                <v-layout row>
                    <v-flex xs4 class="mt-3 mr-0 pl-2">
                      <v-subheader>Resource</v-subheader>
                    </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="input-1"
                      label="Label Text"
                      id="testing"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs4 class="mt-3 mr-0 pl-">
                      <v-subheader>Title</v-subheader>
                    </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="input-1"
                      label="Label Text"
                      id="testing"
                    >test</v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs4 class="mt-3 mr-1 text-xs-center">
                      <v-select>Name2</v-select>
                    </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="input-1"
                      label="Label Text"
                      id="testing"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm12 md12 class="mt-4 text-xs-center">
                    <v-btn flat class="red--text darken-1" @click="edit_resource_cancel">Cancel</v-btn>
                    <v-btn flat class="green--text darken-1" @click="edit_resource_save">Save</v-btn>
                  </v-flex>
                </v-layout>
                </v-layout>
              </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "msg"
      }
    },
    props: ['editdialog'],
    methods: {
      edit_resource_save: function(){

      },
      edit_resource_cancel: function(){
        this.$store.state.resource.all_dialog.edit_dialog = false;

      }
    }
  }
</script> 

<style scoped>

  hr {
    border-width: 0.5px;
  }


  
</style>