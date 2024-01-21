<template>
    <v-container>
        <v-card class="mx-auto elevation-0 m-5" width="500">
            <v-img cover class="align-end rounded-lg text-white bg-radial-gradient" height="300">
            </v-img>
            <v-card-text class="text-start mt-2">
                <h5 class="font-weight-medium">February 11, 2019-Design, Tutorials</h5>
            </v-card-text>
            <v-card-text class="text-start primary--text">
                <h2 class="font-weight-regular">The Deadly Truth About a World Built for Men - From Stab Vests to Car Crashes</h2>
            </v-card-text>
            <v-card-actions class="d-flex justify-between">
                <v-btn color="white" class="bg-primary mr-5 text-none">
                    Read More
                </v-btn>
                <v-icon icon="mdi-comment-processing-outline" :style="{ fontSize: iconSize }" class="align-centers mr-5"/>
                <h5 class="text-grey-darken-1 font-weight-medium">124 comments</h5>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
export default {
    data() {
        return {
            iconSize: '20px'
        };
    }
}
</script>

<style lang="scss" scoped>
.bg-radial-gradient {
    background: linear-gradient(#7D54D9, #472AB2 )
}
</style>