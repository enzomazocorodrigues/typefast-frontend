<template>
  <!-- router
  to="/game/1" -->
	<v-card
    color="#26c6da"
    dark
    max-width="400"
		rounded="lg"
    @click="$emit('click')"
  >
    <v-card-title class="text-h6 font-weight-bold">
      <span>Trava linguass</span>
			<v-spacer></v-spacer>
			<v-btn icon small @click.stop="salvo = !salvo">
				<v-icon>{{ `mdi-bookmark${!salvo ? '-outline' : ''}` }}</v-icon>
			</v-btn>
    </v-card-title>

    <v-card-text class="ml-1 mt-n5">
      Enzo Rodrigues
    </v-card-text>

    <v-card-actions class="cyan">
      <v-list-item dense class="pa-0">
        <v-list-item-avatar color="grey darken-3" class="my-0 ">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content class="py-0">
          <v-list-item-title>Evan You</v-list-item-title>
          <v-list-item-subtitle>4096 pts</v-list-item-subtitle>
        </v-list-item-content>

				<v-list-item-action class="ma-0">
					<v-icon small class="mt-2">mdi-crown</v-icon>
          <v-list-item-action-text class="text-caption">15.782s</v-list-item-action-text>
				</v-list-item-action>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "Game",
    data() {
      return {
        salvo: false
      }
    }
}
</script>

<style>

</style>