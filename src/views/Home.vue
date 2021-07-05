<template>
  <div class="home">
    <ui-autocomplete />
    <v-container fluid fill-height>
      <v-slide-group class="mt-4" v-for="k in 8" :key="k">
        <v-slide-item
          v-for="n in 15"
          :key="n"
          class="mr-4"
        >
          <game-card @click="showGame = true" />
        </v-slide-item>
      </v-slide-group>
    </v-container>
    <game v-model="showGame" />
  </div>
</template>

<script>
  import UIAutocomplete from '@/components/ui/UIAutocomplete'
  import Game from '@/components/Game'
  import GameCard from '@/components/GameCard'
  export default {
    name: 'Home',
    components: {
      'ui-autocomplete': UIAutocomplete,
      Game,
      GameCard
    },
    data() {
      return {
        showGame: false
      }
    }
  }
</script>
<style scoped>
.v-slide-group__wrapper {
    touch-action: auto !important;
    overflow: scroll !important;
    scroll-behavior: smooth !important;
    scroll-snap-type: x mandatory !important;
}
</style>
