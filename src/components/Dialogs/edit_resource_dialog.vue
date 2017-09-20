<template>
  <div class="edit_resource_dialog">
    <v-container>
      <v-dialog  persistent v-model="editdialogform">
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
              <v-container fluid class="ma-0 pa-0" grid-list-md>
<!-- /////////////////////////////////////////// -->
                <v-layout class="mt-1">                            
                    <v-layout wrap row> 
                      <v-flex xs12 sm4 md4 class="mt-3 subheader">
                        <span class="pl-3">Resource</span>         
                      </v-flex>
                      <v-flex class="pt-0">
                        <v-text-field                        
                          name="input-1"                          
                          :placeholder=this.$store.state.resource.selected.name
                          v-model="modified_item.name"
                          id="testing1"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>               
                </v-layout>
<!-- /////////////////////////////////////////// -->
                <v-layout class="mt-1">      
                    <v-layout wrap row> 
                      <v-flex xs12 sm4 md4 class="mt-2 subheader">
                        <span class="pl-5">Title</span>         
                      </v-flex>
                      <v-flex class="pt-0">
                        <v-text-field                        
                          name="input-2"
                          :placeholder=this.$store.state.resource.selected.title
                          v-model="modified_item.title"                       
                          id="testing2"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>  
                </v-layout>
<!-- /////////////////////////////////////////// -->
                <v-layout>      
                    <v-layout wrap row> 
                      <v-flex xs12 sm4 md4 class="mt-2 subheader">
                        <span class="pl-4">Subjects</span>         
                      </v-flex>
                      <v-flex xs12 sm8 md8 class="pt-0">
                        <v-select
                          class="mt-3 pt-0"
                          :placeholder=this.$store.state.resource.selected.subject
                          v-model="modified_item.subject"   
                          :items="subjects"
                          required
                        ></v-select>
                      </v-flex>
                    </v-layout>  
                </v-layout>

<!-- /////////////////////////////////////////// -->
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
          modified_item: {id: "", name: null, title: null, subject: null},          
          subjects: this.$store.state.resource.subjects
      }
    },
    props: ['editdialogform'],
    methods: {
      
      edit_resource_save: function(){
        this.$store.state.resource.all_dialog.edit_dialog = false;
        if(this.modified_item.id===""){
          this.modified_item.id = this.$store.state.resource.selected.id;
        }
        if(this.modified_item.name===null){
          this.modified_item.name = this.$store.state.resource.selected.name;
        }
        if(this.modified_item.title===null){
          this.modified_item.title = this.$store.state.resource.selected.title;
        }
        if(this.modified_item.subject===null){
          this.modified_item.subject = this.$store.state.resource.selected.subject;
        }
          
                       
            this.$store.dispatch('resource/edit_item', this.modified_item);
        
         
        console.log(this.modified_item.id+" "+this.modified_item.title+" "+this.modified_item.subject);
        this.close();
      },
      edit_resource_cancel: function(modified_item){
        this.$store.state.resource.all_dialog.edit_dialog = false;
        this.close();
        // console.log(this.modified_item);
        return this.modified_item;
        
      },
      close: function(){
        this.modified_item = {id: "", name: null, title: null, subject: null};
      }
    },
    computed: {      
      
    }
  }
</script> 

<style scoped>

  hr {
    border-width: 0.5px;
  }
  
</style>