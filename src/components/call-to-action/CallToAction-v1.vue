<template>
    <v-container class="py-6">
      <v-responsive class="align-center text-center fill-height">
        <v-row class="ma-0 d-flex align-center justify-center text-center">
          <v-card width="70vw" class="bg-deep-purple-darken-3">
            <v-row class="pt-15 mt-10 d-flex align-center justify-center text-white">
                <v-card-text>
                    <div class="font-weight-light text-h4 title-responsive-font">A lot of components</div>
                    <div class="font-weight-light text-h4 my-1 title-responsive-font">& web layouts ready to use</div>
                    <v-card-text class="text-grey-lighten-1 px-0 py-10">
                        <p>Every day, we'll curate new stories from Makers - whether they're</p>
                        <p>long-time CEOs or solo creators - to give real, accessible insight.</p>
                    </v-card-text>
                </v-card-text>
            </v-row>
            <v-row class="pb-15 mb-10 d-flex align-center justify-center">
                <v-btn class="text-none px-8 text-grey-darken-1 mr-3" size="large" elevation="6" color="secondary" rounded>Signup</v-btn>
                <v-btn class="text-none px-8" size="large" elevation="6" rounded>Login</v-btn>
            </v-row>
          </v-card>
        </v-row>
      </v-responsive>
    </v-container>
</template>
  
<script setup lang="ts">
</script>

<style scoped>
    @media only screen and (max-width: 875px) {
        .title-responsive-font {
            font-size: 1.5rem !important;
        }
    }
</style>