<template>
	<v-container>
	  <v-form v-model="valid" ref="form">
	    <v-text-field
	      label="Resource"
	      v-model="data.name"
	      :counter="10"
	      required
	    ></v-text-field>
	    <v-text-field
	      label="Title"
	      v-model="data.title"
	      required
	    ></v-text-field>
	    <v-select
	      label="Item"
	      v-model="data.subject"
	      :items="items"
	      required
	    ></v-select>
	    <v-checkbox
	      label="Do you agree?"
	      v-model="data.terms"
	      required
	    ></v-checkbox>
	    <v-btn primary dark class="info" @click="submit">submit</v-btn>
	    
	    <v-btn dark class="info" @click="clear">clear</v-btn>
	  </v-form>

	  <submit-alert :dialog="submit_dialog"></submit-alert>

	</v-container>
</template>

<script>
	import submit_alert from '../Dialogs/submit_alert.vue'

	export default {
		name:'add-resource',
    data () {
      return {
        valid: false,
        submit_dialog: false,
        header: { },
        data: { },
        nameRules: [
          (v) => {  
          	console.log(v);
          	return !!v || 'Name is required' 
          },
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ]
      }
    },
    methods: {
      submit () {
        this.submit_dialog = true;
      	console.log(this.$store);
        console.log(this.data);
      	this.$store.dispatch('resource/add_item', this.data).then(() => {
      		this.data = {};
      		
      		// show item added succesfully
      		// or redirect to list
      	});


      	// var resource_size = this.$store.state.resource.items.length;
       //  if(this.$refs.form.validate()===true)
       //  {
       //  	this.$store.state.resource.items.unshift({	id: resource_id,
       //  																					resource: this.resource_name, 
       //  																					title: this.resource_title});

      	// }
      	// else{
      	// 	alert("error!!");
      	// }
      	// this.$refs.form.reset()

       	
      },
      clear () {
        this.data = {};
      }
    },
    computed: {
    	// header: function {

    	// 	this.$store.dispatch('resource/add_header', this.header).then(() => {
     //  		this.header = {};
     //  		// this.submit_dialog = true;
     //  		// show item added succesfully
     //  		// or redirect to list
     //  	});
    	// }

    },
    components: {
	    'submit-alert': submit_alert
	  }

  }
</script>