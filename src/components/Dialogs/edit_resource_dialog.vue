<template>
  <v-dialog persistent v-model="editdialog">
    <v-card>
      <v-card-title>
        <span class="headline">Resource</span>
      </v-card-title>
      <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field label="Resource Name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field label="Resource Title" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-select
                  
                ></v-select>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-btn flat class="red--text darken-1" @click="edit_resource_cancel">Cancel</v-btn>
                <v-btn flat class="green--text darken-1" @click="edit_resource_save">Save</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: ['editdialog'],
    methods: {
      edit_resource_save: function(){

      },
      edit_resource_cancel: function(){
        this.$parent.edit_resource_dialog =false;

      }
    }
  }
</script> 