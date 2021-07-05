<template>
	<v-app-bar v-if="display" app flat outlined class="white">
		<v-row class="mx-n6" no-gutters justify="center" align="center">
			<v-col cols="6" md="3">
				<profile />
			</v-col>
      <v-col cols="6" md="4" align="end">
				<!-- <h1>Type Fast</h1> -->
				<v-item-group mandatory>
					<v-item v-for="(option, i) in options" v-slot="{ active, toggle }" :key="i">
						<v-btn
							class="text-capitalize font-weight-bold mr-2"
							depressed
							plain
							small
							router
							:to="option.route"
							@click="toggle"
						>
							<v-icon>{{ active ? option.activeIcon : option.icon }}</v-icon>
							<!-- <span class="ml-1">{{ option.name }}</span> -->
						</v-btn>
					</v-item>
				</v-item-group>
			</v-col>
		</v-row>
	</v-app-bar>
	<div v-else>
		<v-app-bar app flat outlined class="white">
			<v-row no-gutters>
				<v-col class="px-2" cols="12">
					<profile />
				</v-col>
			</v-row>
		</v-app-bar>
		<v-bottom-navigation app flat dense>
    <v-btn v-for="(option, i) in options"
			router
			:to="option.route"
			:key="i"
		>
      <v-icon>{{ option.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>	
	</div>
  
</template>

<script>
import Profile from '@/components/Profile'

export default {
	name: "BaseNav",
	components: {
		Profile
	},
	data() {
		return {
			options: [
				{
					name: "Home",
					route: "/",
					icon: "mdi-view-grid-outline",
					activeIcon: "mdi-view-grid"
				},
				{
					name: "Histórico",
					route: "/historico",
					icon: "mdi-clock-outline",
					activeIcon: "mdi-clock"
				},
				{
					name: "Ranking",
					route: "/ranking",
					icon: "mdi-web",
					activeIcon: "mdi-web"
				},
				{
					name: "Salvos",
					route: "/salvos",
					icon: "mdi-bookmark-outline",
					activeIcon: "mdi-bookmark"
				},
				{
					name: "Troféus",
					route: "/trofeus",
					icon: "mdi-trophy-outline",
					activeIcon: "mdi-trophy"
				}
			]
		}
	},

	computed: {
		display() {
			return !['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
		}
	}
}
</script>

<style>

</style>