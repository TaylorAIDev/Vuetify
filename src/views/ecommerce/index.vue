<template>
    <v-container fluid class="bg-grey-lighten-2">
        <v-container class="m-15 ">
            <v-carousel show-arrows="false" hide-delimiter-background height="auto">
                <template v-slot:prev="{ props }">
                    <v-btn icon="mdi-arrow-left" variant="elevated" color="white" @click="props.onClick"></v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn icon="mdi-arrow-right" variant="elevated" color="primary" @click="props.onClick"></v-btn>
                </template>
                <v-carousel-item>
                    <v-row>
                        <v-col cols="12" lg="6" md="12" sm="12">
                            <v-card class="mx-auto my-auto elevation-0 d-flex justify-center flex-column align-center"
                                width="350">
                                <v-img height="300">
                                </v-img>
                                <v-card-text class="text-center">
                                    <h2>$38.95</h2>
                                </v-card-text>
                                <v-card-text class="text-center">
                                    <h2 class="font-weight-regular">The Deadly Truth About a World Built for Men-From Stab
                                        Vests
                                    </h2>
                                </v-card-text>
                                <v-card-text class="text-center">
                                    <h5 class="text-grey-darken-2 font-weight-light">February 11, 2019-Design, Tutorials
                                    </h5>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6" md="12" sm="12">
                            <v-card class="mx-auto elevation-0 d-flex justify-center flex-column align-center" width="350">
                                <v-img height="300">
                                </v-img>
                                <v-card-text class="text-center">
                                    <h2>$38.95</h2>
                                </v-card-text>
                                <v-card-text class="text-center">
                                    <h2 class="font-weight-regular">The Deadly Truth About a World Built for Men-From Stab
                                        Vests
                                    </h2>
                                </v-card-text>
                                <v-card-text class="text-center">
                                    <h5 class="text-grey-darken-2 font-weight-light">February 11, 2019-Design, Tutorials
                                    </h5>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-container>

        <v-container class="pr-15 m-15">
                <v-card class="elevation-0 align-center" width="500">
                    <v-card-text class="text-start">
                        <v-icon icon="mdi-star" color="grey-lighten-1" class="mr-5"></v-icon>
                        <h4 class="m-10 text-grey-lighten-1 font-weight-medium d-inline">9.4(234 Reviews)</h4>
                    </v-card-text>

                        <h1 class="font-weight-light text-h3 ml-5">PlayStation 4 Slim</h1>

                    <v-card-text class="text-start primary--text">
                        <h3 class="text-grey-lighten-1 font-weight-light">Every day, we'll curate new storis from
                            Makers-whether
                            they're long-time
                            CEOs or
                            solo creators-to give real,accessible insight</h3>
                    </v-card-text>
                    <v-card-text>
                        <h2 class="mb-3">$38.95</h2>
                        <h4 class="text-grey-darken-2 font-weight-medium">Approximately US $40.70</h4>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-between">
                        <v-btn color="white" class="bg-primary mr-5 text-none">
                            Buy Now
                        </v-btn>
                        <v-icon icon="mdi-heart" class="mr-5" color="grey-lighten-1"></v-icon>
                        <h4 class="text-grey-darken-2 font-weight-medium">Add to Favourites</h4>
                    </v-card-actions>
                </v-card>

        </v-container>
    </v-container>
</template>