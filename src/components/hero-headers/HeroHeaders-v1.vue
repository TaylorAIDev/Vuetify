<template>
    <v-container class="py-6">
      <v-responsive class="align-center text-center fill-height">
        <v-row class="ma-0 d-flex align-center justify-center text-center">
          <v-card width="70vw" image="@/assets/heroheaders/heroheaders1.png">
            <v-row class="px-6 py-10">
                <v-col cols="12" sm="12" md="2" class="d-flex justify-center align-center">
                    <v-btn class="text-none" color="blue-grey-darken-3" icon="mdi-menu" elevation="6"></v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="8" class="d-flex justify-center align-center text-white">
                    <v-card-text class="letter-spacing-mid d-flex justify-end"><b>MOIETY</b></v-card-text>
                    <v-icon>mdi-lightning-bolt-circle</v-icon>
                    <v-card-text class="letter-spacing-mid d-flex justify-start">UI KIT</v-card-text>
                </v-col>
                <v-col cols="12" sm="12" md="2" class="d-flex justify-center align-center">
                    <v-btn class="text-none px-8 text-grey-darken-1" size="large" elevation="6" color="secondary" rounded>Signup</v-btn>
                </v-col>
            </v-row>
            <v-row class="pa-10 d-flex align-center justify-center text-white">
                <v-card-text>
                    <div class="font-weight-normal text-h3 mb-3 title-responsive-font">A platform for Makers to</div>
                    <div class="font-weight-bold text-h3 mb-10 title-responsive-font">Share their Knowledge</div>
                    <p class="text-grey">Every day, we'll curate new stories from Makers - whether they're long-time CEOs</p>
                    <p class="text-grey">or solo creators - to give real, accessible insight into what it means to make a</p>
                    <p class="text-grey">product, build a team, acquire the first 100 users...</p>
                </v-card-text>
            </v-row>
            <v-row class="pt-2 pb-15 mb-10 d-flex align-center justify-center">
                <v-btn class="text-none px-8 text-grey-darken-1 mr-3" size="large" elevation="6" color="secondary" rounded>Signup</v-btn>
                <v-btn class="text-none px-8" size="large" elevation="6" rounded>Login</v-btn>
            </v-row>
            <v-row class="pa-16 d-flex justify-center align-center">
                <v-img
                src="@/assets/heroheaders/ScrollDown.png"
                width="24"
                height="24"
                >
                    <template v-slot:placeholder>
                        <div class="d-flex align-center justify-center fill-height">
                        <v-card-text class="d-flex justify-center">
                            ScrollDown
                        </v-card-text>
                        </div>
                    </template>
                </v-img>
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

    @media only screen and (max-width: 875px) {
        .title-responsive-font {
            font-size: 1.5rem !important;
        }
    }
</style>