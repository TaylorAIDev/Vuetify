<template>
    <v-container class="py-6">
      <v-responsive class="align-center text-left fill-height">
        <v-row class="ma-0 d-flex align-center justify-center text-left">
          <v-card width="70vw" class="bg-grey-darken-4">
            <v-row class="px-16 py-16 my-10 mx-2 text-white">
                <v-col cols="12" sm="12" lg="7" class="d-flex justify-center align-center">
                    <v-row>
                        <v-col cols="1" class="d-flex align-center text-h5 title-responsive-font">
                            <v-icon>mdi-lightning-bolt-circle</v-icon>
                        </v-col>
                        <v-col class="font-weight-light d-flex justify-start align-center text-h4 flex-wrap title-responsive-font">
                            Try Moiety Web UI Kit for Free
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6" lg="2" class="d-flex justify-center align-center">
                    <v-btn class="text-none px-10" size="large" color="primary" variant="flat">Try for Free</v-btn>
                </v-col>
                <v-col cols="12" sm="6" lg="3" class="d-flex justify-center align-center">
                    <v-btn class="text-none text-white-important bg-secondary px-10" size="large" variant="flat">Purchase Now</v-btn>
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
    @media only screen and (max-width: 1470px) {
        .title-responsive-font {
            font-size: 1.5rem !important;
        }
    }

    @media only screen and (max-width: 740px) {
        .title-responsive-font {
            font-size: 1rem !important;
        }
    }

    @media only screen and (max-width: 580px) {
        .title-responsive-font {
            font-size: 0.7rem !important;
        }
    }

    .text-white-important {
        color: white !important;
    }
</style>

