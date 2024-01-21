<template>
    <v-container>
        <v-card class="mx-auto elevation-0 m-5" width="300">
            <v-img class="align-end rounded-lg text-white bg-radial-gradient" height="200">
            </v-img>
            <v-card-text class="text-start primary--text">
                <h3 class="font-weight-medium">{{ varient }}</h3>
                <h5 class="text-grey-darken-1 font-weight-medium mt-2">February 11, 2019-Design, Tutorials</h5>
            </v-card-text>
            <v-card-actions class="d-flex justify-start">
                <v-btn color="white" class="bg-primary text-none">
                    Read More
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
    
</template>

<script lang="ts">
export default {
    name: 'blog-v1',
    props: {
        varient: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-radial-gradient {
    background: linear-gradient(#7D54D9, #472AB2 )
}
</style>