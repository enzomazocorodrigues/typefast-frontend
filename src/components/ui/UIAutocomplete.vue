<template>
  <v-autocomplete
		v-model="result"
		:search-input.sync="search"
		:menu-props="{
			maxHeight: 304,
			offsetY: true,
			offsetOverflow: true,
			rounded: 'lg',
			nudgeBottom: 12
		}"
		:items="items"
		class="mx-4"
		label="Procurar jogos..."
		dense
		solo
		flat
		background-color="grey lighten-4"
		hide-no-data
		hide-details
		append-icon=""
		item-color=""
		clearable
		clear-icon="mdi-close-circle"
		color="grey"
	>
		<template v-slot:item="{ item, on, attrs }">
			<v-list-item v-on="on" v-bind="attrs">
				<v-list-item-content>
					<v-list-item-title>{{ item.text }}</v-list-item-title>
					<v-list-item-subtitle>{{ item.nomeUsuario }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</template>
	</v-autocomplete>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios"

export default {
	name: "UIAutocomplete",
	data() {
		return {
			result: "",
			search: "",
			items: []
		}
	},
	computed: {
		...mapGetters({
			getBaseApiUrl: "getBaseApiUrl"
		})
	},
	watch: {
		search() {
			console.log(1)
			if (this.search) {
				axios(`${this.getBaseApiUrl()}/games/autocomplete/${this.search}`)
					.then(res => {
						console.log(res.data)
						this.items = [...res.data]
					})
					.catch(err => {
						console.log(err)
					})
			} else {
				this.items = this.items.filter(item => !!item.value)
				// this.items = []
			}

		}
	}

}
</script>

<style>

</style>