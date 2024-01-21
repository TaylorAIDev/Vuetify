<template>
    <v-container fluid class="bg-grey-lighten-2">
        <v-container class="mb-15 mt-15 bg-white py-16">
            <v-row align="center" justify="center">
                <v-row>
                    <v-col lg="4" md="12" sm="12">
                        <BlurCard />
                    </v-col>
                    <v-col lg="4" md="12" sm="12">
                        <ColorCard />
                    </v-col>
                    <v-col lg="4" md="12" sm="12">
                        <BlurCard />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col lg="4" md="12" sm="12">
                        <BlurCard />
                    </v-col>
                    <v-col lg="4" md="12" sm="12">
                        <BlurCard />
                    </v-col>
                    <v-col lg="4" md="12" sm="12">
                        <BlurCard />
                    </v-col>
                </v-row>
            </v-row>
        </v-container>

        <v-container class="mt-15 bg-white py-16">
            <v-row align="center" justify="center">
                <v-col lg="4" md="12" sm="12" v-for="(variant, i) in variants" :key="i">
                    <CardText :varient="variant" />
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import BlurCard from '@/components/gallery/BlurCard.vue';
import ColorCard from '@/components/gallery/ColorCard.vue'
import CardText from '@/components/gallery/CardText.vue'

export default {
    components: {
        CardText, BlurCard, ColorCard,
    },
    data() {
        return {
            variants: ['User Interface Design', 'Usability Inspection', 'Information Architecture']
        };
        // Rest of your component code...
    },
}

</script>