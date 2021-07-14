<template>
	<div class="game-ranking">
		<v-dialog
			:value="countDown && !loading"
			hide-overlay
			persistent
			max-width="100"
		>
			<v-card
				color="rgba(225, 225, 225, 0.7)"
				rounded="lg"
				class="pa-3"
			>
				<v-row no-gutters justify="center">
					<span class="text-h3 red--text">{{ countDown }}</span>
				</v-row>
			</v-card>
		</v-dialog>
		<v-toolbar
			dense
			rounded="lg"
		>
			<v-skeleton-loader
				v-if="loading"
				width="100"
				type="chip"
				transition="scale-transition"
			></v-skeleton-loader>
			<span v-else class="text-h6">{{ game.game.nome }}</span>
			<v-spacer></v-spacer>
			<v-icon>
				mdi-timer
			</v-icon>
			<span class="mx-2">
				{{ timer.toFixed(2) }}s
			</span>

			<v-btn icon small>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
		</v-toolbar>

		<div class="mt-6">
			<v-textarea
				color="grey lighten-1"
				outlined
				readonly
				:value="phrase"
				:loading="loading"
			></v-textarea>
			<v-textarea
				v-model="awnser"
				:color="!awnser ? 'grey lighten-1' : correct ? 'green accent-3' : 'red'"
				:autofocus="!loading"
				outlined
				@paste="(e) => e.preventDefault()"
			></v-textarea>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
	name: "GameRanking",
	data() {
		return {
			loading: true,
			game: {
				game: {},
				phrases: [],
				ranking: []
			},
			phraseIndex: 0,
			awnser: "",
			timer: 0,
			interval: null,
			countDown: 3
		}
	},
	computed: {
		...mapGetters([
			"getBaseApiUrl"
		]),
		phrase() {
			return this.game.phrases[this.phraseIndex]?.texto
		},
		correct() {
			return this.phrase.startsWith(this.awnser)
		}
	},
	methods: {
		toggleTimer() {
			console.log(this.interval)
			if (!this.interval) {
				this.interval = setInterval(() => {
					if (this.timer < 600) {
						this.timer += 0.01
					} else {
						this.toggleTimer()
					}
				}, 10)
			} else {
				clearInterval(this.interval)
				this.interval = null
			}
		},
		startGame() {
			let interval = setInterval(() => {
				if (this.countDown) {
					this.countDown--
				} else {
					this.toggleTimer()
					clearInterval(interval)
					interval = null
				} 
			}, 1000)
		}
	},
	watch: {
		awnser() {
			if (this.awnser == this.phrase) {
				if (this.phraseIndex == this.game.phrases.length - 1) {
					this.toggleTimer()
				} else {
					this.phraseIndex++
					this.awnser = ""
				}
			}
		}
	},
	mounted() {
		const id = this.$route.params.id
		axios(`${this.getBaseApiUrl()}/games/${id}`)
			.then(res => {
				console.log(res.data)
				this.game = res.data
				this.loading = false
				this.startGame()
			})
	}
}
</script>

<style>

</style>