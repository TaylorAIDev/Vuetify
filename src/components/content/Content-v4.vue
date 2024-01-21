<template>
    <v-container class="fill-height">
      <v-responsive class="align-center text-left fill-height">
        <v-row class="d-flex align-center justify-center text-left pa-16">
            <v-card width="70vw" class="pa-16">
                <v-row>
                    <v-col cols="12" md="12" lg="6">
                        <v-card class="rounded-0" flat elevation="13">
                            <v-img
                            src="@/assets/content/content4.jpg"
                            cover
                            >
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                    <v-card-text class="d-flex justify-center">
                                        Avatar
                                    </v-card-text>
                                    </div>
                                </template>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="12" lg="6" class="pl-7 my-16">
                        <div class="font-weight-light text-h4 title-responsive-font">A lot of components & web</div>
                        <div class="font-weight-light text-h4 my-1 title-responsive-font">layouts ready to use</div>
                        <v-card-text class="text-grey px-0 py-10">
                            <p>Every day, we'll curate new stories from Makers - whether they're</p>
                            <p>long-time CEOs or solo creators - to give real, accessible insight.</p>
                        </v-card-text>
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
    @media only screen and (max-width: 910px) {
        .title-responsive-font {
            font-size: 1.5rem !important;
        }
    }
</style>