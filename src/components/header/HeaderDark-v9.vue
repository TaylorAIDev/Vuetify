<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="ma-0 d-flex align-center justify-center text-left">
        <v-card width="70vw" class="bg-grey-darken-4">
          <v-row class="px-10 py-4">
              <v-col cols="12" sm="12" md="5" lg="5" xl="7" class="d-flex justify-center align-center">
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
                  <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="3" xl="3" class="d-flex justify-center align-center">
                  <v-text-field
                      append-inner-icon="mdi-magnify"
                      :rounded="true"
                      density="comfortable"
                      placeholder="Type to search..."
                      theme="light"
                      variant="outlined"
                      class="mt-6"
                  />
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="d-flex justify-end align-center">
                  <v-btn class="text-none px-8" color="primary" size="large" rounded>Signup</v-btn>
                  <v-btn class="text-none px-6 mx-2" icon="mdi-menu" color="primary"></v-btn>
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