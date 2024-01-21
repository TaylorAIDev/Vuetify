<template>
    <v-container fluid class="bg-grey-lighten-2">
        <v-row align="center" justify="center" class="mr-10 ml-10">
            <v-col lg="4" md="12" sm="12"  v-for="(variant, i) in variants" :key="i">
                <Blog1 :varient="variant" />
            </v-col>
        </v-row>

        <v-row align="center" justify="center">
            <v-col>
                <Blog2/>
            </v-col>
            <v-col>
                <Blog2/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Blog1 from '@/components/blog/Blog-v1.vue'
import Blog2 from '@/components/blog/Blog-v2.vue'
export default {
    components: {
        Blog1,Blog2
    },
    data() {
        return {
            variants: ['Computer-Generated Faces Are Getting Real'
                    , 'Real Estate Developers Are Now Designing WIth Instagram in Mind'
                    , 'The Deadly Truth About a World Built for Men-From Stab Vests'],
        };
        // Rest of your component code...
    },
}
</script>