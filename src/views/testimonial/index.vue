<template>
    <v-container fluid class="bg-grey-lighten-2">
        <v-container class="mt-15">
            <v-row>
                <v-col lg="4" md="12" sm="12">
                    <v-card class="mx-auto elevation-0 m-10 d-flex justify-center flex-column align-center" width="320">
                        <v-avatar color="grey-lighten-2" size="65" class="mt-6"></v-avatar>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">Jasmin Böhm</h4>
                            <h5 class="text-grey-lighten-1 font-weight-light">CEO, Fuubely</h5>
                        </v-card-text>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">"Web design was the exact comnination of left and right brain I'd
                                been
                                searching for."</h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="4" md="12" sm="12">
                    <v-card class="mx-auto m-10 d-flex justify-center flex-column align-center elevation-12" width="320">
                        <v-avatar color="grey-lighten-2" size="65" class="mt-6"></v-avatar>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">Sam Schumacher</h4>
                            <h5 class="text-grey-lighten-1 font-weight-light">Designer Products</h5>
                        </v-card-text>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">"Programming is about more than having the next hit app, it's
                                about
                                training"
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="4" md="12" sm="12">
                    <v-card class="mx-auto elevation-0 m-10 d-flex justify-center flex-column align-center" width="320">
                        <v-avatar color="grey-lighten-2" size="65" class="mt-6"></v-avatar>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">Lina Franke</h4>
                            <h5 class="text-grey-lighten-1 font-weight-light">Product Manager</h5>
                        </v-card-text>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">"Hey, I haven't done that before. But I can find out how to do
                                it,
                                and it can
                                be done."</h4>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="mt-15">
            <v-carousel height="400" show-arrows hide-delimiter-background delimiter-icon="mdi-star">
                <template v-slot:prev="{ props }">
                    <v-btn icon="mdi-arrow-left" variant="elevated" color="white" @click="props.onClick"></v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn icon="mdi-arrow-right" variant="elevated" color="primary" @click="props.onClick"></v-btn>
                </template>
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-card class="mx-auto elevation-0 mt-15 d-flex justify-center flex-column align-center" width="320">
                        <v-avatar color="grey-lighten-2" size="100" class="mt-6 mb-6 elevation-24"></v-avatar>
                        <v-card-text class="text-center">
                            <h5 class="font-weight-medium">Jasmin Böhm</h5>
                            <h5 class="text-grey-lighten-1 font-weight-regular">CEO, Fuubely</h5>
                        </v-card-text>
                        <v-card-text class="text-center">
                            <h4 class="font-weight-medium">"Web design was the exact comnination of left and right brain I'd
                                been searching for."</h4>
                        </v-card-text>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </v-container>
</template>

<script lang="ts">
export default {
    data() {
        return {
            slides: [
                'First',
                'Second',
                'Third',
            ],
        }
    },
}
</script>