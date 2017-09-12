<template>
  <v-dialog persistent v-model="deletedialog"> 
  <!-- ///////////////////////////// -->
    <v-card>
      <v-card-title class="headline">Do you wish to delete the resource {{ resource_num }}?</v-card-title><!-- 
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="green--text darken-1" flat="flat" @click="delete_resource_no">No</v-btn>
        <v-btn class="green--text darken-1" flat="flat" @click="delete_resource_yes">Yes</v-btn>
      </v-card-actions>
    </v-card>
  <!-- ///////////////////////////// -->

  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        del: this.deletedialog
      }
    },
    props: ['deletedialog'],
    methods: {
      delete_resource_yes() {
        console.log(this.$store.state.resource.selected);
        var id = this.$store.state.resource.selected;
        this.$store.dispatch('resource/delete_item', id);
        this.$parent.delete_dialog = false;
        // this.$router.s();
      },
      delete_resource_no() {
         this.$parent.delete_dialog = false;
        // this.$router.s();
      }
    },
    computed: {
      resource_num: function() {
        return this.$store.state.resource.selected;
      }


    }

    
  }
</script>