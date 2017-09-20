<template>
	<v-container>
	  <v-data-table
	      :headers="headers"
	      :items="items"
	      class="elevation-2"
	    >	    
	    <template slot="items" scope="props">
	      <td>{{ props.item.id }}</td>
	      <td class="text-xs-right">{{ props.item.name }}</td>
	      <td class="text-xs-right" >{{ props.item.title }}</td>
	      <td class="text-xs-right" >
	      	<v-chip class="accent white--text">{{ props.item.subject }}</v-chip>
	      </td>
	      <td>
		      <v-flex xs12 sm12 right >
	            <v-btn icon @click="delete_resource(props.item)" class="primary--text" >
	              <v-icon>delete</v-icon>
	            </v-btn>	       
	            <v-btn icon @click="edit_resource(props.item)" class="green--text">
	              <v-icon>mode_edit</v-icon>
	            </v-btn>
	        </v-flex>	      	
	      </td>
	    </template>
	  </v-data-table>

	

		<v-container> 
			<v-layout row wrap right class="mb-2">
				<v-flex xs12 sm6 class="text-xs-center text-sm-left">
					<v-btn large router to="/add_resource" dark class="info">Add Resource</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		<delete-dialog :deletedialog="this.$store.state.resource.all_dialog.delete_dialog"></delete-dialog>
		<edit-resource :editdialogform="this.$store.state.resource.all_dialog.edit_dialog"></edit-resource>
	</v-container>
</template>

<script>
	import delete_dialog from '../Dialogs/delete_dialog.vue'
	import edit_resource_dialog from '../Dialogs/edit_resource_dialog.vue'

	import { mapGetters } from 'vuex';


  export default {
  	data() {
  		return {
  			selected: {},
  			// delete_dialog: false,
  			dialog: false
  		}
  	},
  	methods: {
  		delete_resource(item) {
  			console.log(this.dialog);
  			this.$store.state.resource.all_dialog.delete_dialog = true;
  			this.$store.state.resource.selected = item; //setting state selected to id of selected item 
  			
  		},
  		edit_resource(item) {
  			
  			this.$store.state.resource.all_dialog.edit_dialog = true;
  			this.$store.state.resource.selected = item;
  			

  			// alert("delete");
  		}
  	},
    computed: {
    	...mapGetters('resource', [
	      'headers',
	      'items'
	    ])
    },
    components: {
	    'delete-dialog': delete_dialog, 
	    'edit-resource': edit_resource_dialog
	  },
    mounted: function () {
		  // this.$store.resource.dispach("increment").then(() => {

		  // });
		}
  }

</script>