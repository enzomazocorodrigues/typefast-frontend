<template>
	<div class="game-ranking">
		<!-- <v-textarea
			outlined
			readonly
			:value="game.phrases[0]"
		></v-textarea> -->
		<v-textarea
			outlined
		></v-textarea>
		oi
	</div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from "vuex";

export default {
	name: "GameRanking",
	data() {
		return {
			game: {
				game: {},
				phrases: [],
				ranking: []
			}
		}
	},
	computed: {
		...mapGetters({
			getBaseApiUrl: "getBaseApiUrl"
		})
	},
	// mounted() {
	// 	axios(`${this.getBaseApiUrl()}/games/${this.$route.params.id}`)
	// 		.then(res => {
	// 			console.log(res.data)
	// 			this.game = { ...res.data }
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }
}
</script>

<style>

</style>