<template>
  <v-dialog persistent v-model="dialog"> 
  <!-- ///////////////////////////// -->
    <v-card>
      <v-card-title class="headline">The record is submitted.</v-card-title><!-- 
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
      <v-card-actions>
        <v-spacer></v-spacer><!-- 
        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn> -->
        <v-btn class="green--text darken-1" flat="flat" @click.native="table_view">Okay</v-btn>
      </v-card-actions>
    </v-card>
  <!-- ///////////////////////////// -->

  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['dialog'],
    methods: {
      table_view() {
        this.$router.push('/');
      }
    },
    computed: { }
  }
</script>