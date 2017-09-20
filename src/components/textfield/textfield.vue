<template>
	<v-text-field
		v-model="placeholder"
	></v-text-field>
</template>
<script>
	export default {
		props: {
			disabled: {type: Boolean, default: false},
			placeholder: {type: String, default: "msg"}
		}, 
		computed: {
			msg: function() {
				return this.$store.state.resource.selected.name;
			}
		}

	}
</script>