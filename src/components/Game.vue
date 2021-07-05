<template>
  <v-dialog
    v-model="show"
    scrollable
    max-width="720"
  >
    <v-card>
      <v-card-title>
       <span>Trava linguas</span>
       <v-spacer></v-spacer>
       <v-icon>mdi-bookmark</v-icon>
      </v-card-title>
      <v-card-subtitle>
        <v-row  no-gutters justify="space-between">
          <v-col cols="8">
            <span>Enzo Rodrigues</span>
          </v-col>
          <v-col cols="2" align="end" class="ma-0 pa-0">
            <v-rating
              :value="4"
              length="4"
              class="ma-0 pa-0"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              size="12"
              readonly
            ></v-rating>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <v-row no-gutters class="mt-2" justify="end" >
          <v-item-group v-model="info" mandatory>
            <v-item :value="true" v-slot="{ active, toggle }" class="mr-1">
              <v-btn @click="toggle" icon small :color="active ? 'info' : ''">
                <v-icon>mdi-card-text</v-icon>
              </v-btn>
            </v-item>
            <v-item :value="false" v-slot="{ active, toggle }">
              <v-btn @click="toggle" icon small :color="active ? 'info' : ''">
                <v-icon>mdi-web</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
        </v-row>
      </v-card-text>
      <v-card-text style="height: 300px;">
        <v-radio-group
          column
        >
          <v-radio
            label="Bahamas, The"
            value="bahamas"
          ></v-radio>
          <v-radio
            label="Bahrain"
            value="bahrain"
          ></v-radio>
          <v-radio
            label="Bangladesh"
            value="bangladesh"
          ></v-radio>
          <v-radio
            label="Barbados"
            value="barbados"
          ></v-radio>
          <v-radio
            label="Belarus"
            value="belarus"
          ></v-radio>
          <v-radio
            label="Belgium"
            value="belgium"
          ></v-radio>
          <v-radio
            label="Belize"
            value="belize"
          ></v-radio>
          <v-radio
            label="Benin"
            value="benin"
          ></v-radio>
          <v-radio
            label="Bhutan"
            value="bhutan"
          ></v-radio>
          <v-radio
            label="Bolivia"
            value="bolivia"
          ></v-radio>
          <v-radio
            label="Bosnia and Herzegovina"
            value="bosnia"
          ></v-radio>
          <v-radio
            label="Botswana"
            value="botswana"
          ></v-radio>
          <v-radio
            label="Brazil"
            value="brazil"
          ></v-radio>
          <v-radio
            label="Brunei"
            value="brunei"
          ></v-radio>
          <v-radio
            label="Bulgaria"
            value="bulgaria"
          ></v-radio>
          <v-radio
            label="Burkina Faso"
            value="burkina"
          ></v-radio>
          <v-radio
            label="Burma"
            value="burma"
          ></v-radio>
          <v-radio
            label="Burundi"
            value="burundi"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row no-gutters justify="space-between">
          <v-col cols="12" md="6" class="px-1">
            <v-alert
              @click="clickPlay()"
              v-ripple
              style="cursor: pointer;"
              dense
              text
              type="info"
              icon="mdi-alarm"
            >
              <v-row no-gutters>
                <strong>Jogar contra o tempo</strong>
              </v-row>
              <v-row no-gutters>
                <span class="text-caption">Convide e jogue com seus amigos!</span>
              </v-row>
            </v-alert>
          </v-col>
          <v-col cols="12" md="6" class="px-1">
            <v-alert
              @click="clickPlay()"
              v-ripple
              style="cursor: pointer;"
              dense
              text
              type="warning"
              icon="mdi-web"
            >
              <v-row no-gutters>
                <strong>Jogar com amigos</strong>
              </v-row>
              <v-row no-gutters>
                <span class="text-caption">Convide e jogue com seus amigos!</span>
              </v-row>
            </v-alert>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Game",
  props: {
    value: { type: Boolean, required: true }
  },
  data() {
    return {
      info: true
    }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    clickPlay() {
      this.$emit('input', false)
      this.$router.push('/games-ranking/23ced3d5-b550-41e5-afe1-56ad9537c448')
    }
  }
}
</script>

<style>

</style>