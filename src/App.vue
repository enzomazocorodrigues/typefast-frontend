<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="8">
            <base-nav v-if="navigator"></base-nav>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'App',

  components: {
    BaseNav
  },

  data: () => ({
    //
  }),

  computed: {
    navigator() {
      return [
        "Home",
        "Historico",
        "Ranking",
        "Salvos",
        "Trofeus"
      ].includes(this.$route.name)
    }
  }
};
</script>
