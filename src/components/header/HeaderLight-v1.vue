<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center text-left">
        <v-card width="70vw">
          <v-row class="px-10 py-10">
              <v-col cols="12" sm="9" class="d-flex justify-center align-center">
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
                  <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
              </v-col>
              <v-col cols="12" sm="3" class="d-flex justify-end align-center">
                  <v-card-subtitle class="pr-0">Menu</v-card-subtitle>
                  <v-card-subtitle>
                      <v-icon class="mdi-menu">mdi-menu</v-icon>
                  </v-card-subtitle>
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