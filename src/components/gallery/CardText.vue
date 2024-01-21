<template>
    <v-container>
        <v-card class="mx-auto elevation-0" width="370">
            <v-img class="align-end rounded-lg text-white bg-grey-lighten-2" height="250">
            </v-img>
            <v-card-text class="text-center primary--text mt-5">
                <h3 class="font-weight-medium">{{ varient }}</h3>
            </v-card-text>
            <v-card-text class="text-center">
                <h3 class="text-grey-darken-1 font-weight-light">Actual look and feel design of the final graphical user
                    interface (GUI)</h3>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn color="white" class="bg-primary text-none">
                    Learn More
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'cardWithText',
    props: {
        varient: {
            type: String,
            required: true
        }
    }
}
</script>