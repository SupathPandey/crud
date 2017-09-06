<template>
	<v-container>
	  <v-data-table
	      :headers="headers"
	      :items="items"
	      class="elevation-2"
	    >	    
	    <template slot="items" scope="props">
	      <td>{{ props.item.id }}</td>
	      <td class="text-xs-right">{{ props.item.resource }}</td>
	      <td class="text-xs-right">{{ props.item.title }}</td>
	    </template>
	  </v-data-table>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex';


  export default {
    computed: {
    	...mapGetters('resource', [
	      'headers',
	      'items'
	    ])
    },
    mounted: function () {
		  // this.$store.resource.dispach("increment").then(() => {

		  // });
		}
  }

</script>