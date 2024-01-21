<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="ma-0 d-flex align-center justify-center text-left">
        <v-card width="70vw">
          <v-row class="pl-8 pr-15 ma-0 bg-grey-lighten-3 d-flex justify-center align-center">
              <v-col cols="12" md="8" lg="10" class="d-flex justify-center align-center pl-6 py-6">
                  <v-row>
                      <v-card-subtitle>Multi-purpose User Interface Kit</v-card-subtitle>
                      <v-card-subtitle>contact@mail.com</v-card-subtitle>
                  </v-row>
              </v-col>
              <v-col cols="12" md="4" lg="2" class="d-flex justify-start align-center">
                  <v-card-subtitle>Follow us</v-card-subtitle>
                  <v-icon color="grey-lighten-1">mdi-twitter</v-icon>
                  <v-card-subtitle class="font-weight-black text-h6 text-medium-emphasis"><b>f</b></v-card-subtitle>
                  <v-card-subtitle class="font-weight-black text-h6 text-medium-emphasis pa-0"><b>in</b></v-card-subtitle>
              </v-col>
          </v-row>
          <v-row class="pl-15 pr-10 py-10 pt-5">
              <v-col cols="12" sm="10" class="d-flex justify-center align-center">
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
                  <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
              </v-col>
              <v-col cols="12" sm="2" class="d-flex justify-center align-center">
                  <v-btn class="text-none px-6" icon="mdi-magnify" elevation="6"></v-btn>
                  <v-btn class="text-none px-6 mx-4" icon="mdi-menu" color="primary"></v-btn>
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