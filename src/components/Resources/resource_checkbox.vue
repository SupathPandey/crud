<template>
	<v-container>
	  <v-data-table
	  		v-model="selected"
	      :headers="headers"
	      :items="items"
	      select-all
	      :pagination.sync="pagination"
	      selected-key="name"
	      class="elevation-2"
	    >	    
	    <template slot="headers" scope="props">
	    	<tr>
		    		<th>
		    			<v-checkbox
		    				primary
		    				hide-details
		    				@click.native="toggle_all"
		    				:input-value="props.all"
		    				:indeterminate="props.indeterminate"
		    			></v-checkbox>
		    		</th>
		    		<th 
			    			v-for="header in props.headers" 
			    			:key="header.text"
			    			:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
		          	@click="changeSort(header.value)"
		        	><v-icon>arrow_upward</v-icon>
		          {{ header.text }}
	        	</th>
	    	</tr>	    	
	    </template>
	    <template slot="items" scope="props">
	    	<tr :active="props.selected" @click="props.selected = !props.selected">
	    		<td>
	    			<list-checkbox></list-checkbox>
	          <v-checkbox
	            primary
	            hide-details
	            :input-value="props.selected"
	          ></v-checkbox>
        	</td>
	    		<td>{{ props.item.id }}</td>
		      <td class="text-xs-right">{{ props.item.name }}</td>
		      <td class="text-xs-right" >{{ props.item.title }}</td>
	    	</tr>
	    </template>
	  </v-data-table>
	
	  <v-container> 
			<v-layout row wrap left class="mb-2">
				<v-flex xs12 sm4 class="text-xs-center text-sm-left">
					<v-btn large router to="/add_resource" dark class="info">ADD</v-btn>
				</v-flex>
				<v-flex xs12 sm4 class="text-xs-center text-sm-left">
					<v-btn large router dark class="info" @click="edit_resource">EDIT</v-btn>
				</v-flex>				
				<v-flex xs12 sm4 class="text-xs-center text-sm-left">
					<v-btn large router to="/add_resource" dark class="primary">DELETE</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex';


  export default {
  	data() {
  		return {
  			pagination: {
          sortBy: 'name'
        },
  		}
  	},
  	methods: {
  		edit_resource: function() {

  		}

  	},
    computed: {
    	...mapGetters('resource', [
	      'headers',
	      'selected',
	      'items'
	    ])	
    },
    mounted: function () {
		  // this.$store.resource.dispach("increment").then(() => {

		  // });
		}
  }

</script>