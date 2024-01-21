<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="ma-0 d-flex align-center justify-center text-left">
        <v-card width="70vw">
          <v-row class="px-6 py-10">
              <v-col cols="12" sm="2" class="d-flex justify-center align-center">
                  <v-btn class="text-none px-6" icon="mdi-menu" elevation="6"></v-btn>
              </v-col>
              <v-col cols="12" sm="8" class="d-flex justify-center align-center">
                  <v-card-text class="letter-spacing-mid d-flex justify-end"><b>MOIETY</b></v-card-text>
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
                  <v-card-text class="letter-spacing-mid">UI KIT</v-card-text>
              </v-col>
              <v-col cols="12" sm="2" class="d-flex justify-center align-center">
                  <v-btn class="text-none px-8 text-grey-darken-1" size="large" elevation="6" rounded>Signup</v-btn>
              </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">  
</script>

<style scoped>
  .letter-spacing-mid {
      letter-spacing: .4rem;
  }
</style>