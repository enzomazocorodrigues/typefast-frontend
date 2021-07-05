<template>
	<div>
		<v-list nav dense class="ma-0 pa-0">
			<v-list-item @click="detail = !detail">
				<v-list-item-avatar>
					<v-skeleton-loader boilerplate type="avatar"></v-skeleton-loader>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title><strong>Enzo Rodrigues</strong></v-list-item-title>
					<v-list-item-subtitle>3790 pts</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-dialog v-model="detail" max-width="720">
			<v-card>
				oi
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: "Profile",
	data() {
		return {
			detail: false
		}
	}
}
</script>

<style>

</style>