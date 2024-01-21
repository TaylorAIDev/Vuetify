<script lang="ts" setup>
import FooterLight1 from '@/components/footer/FooterLight-v1.vue'
import FooterLight2 from '@/components/footer/FooterLight-v2.vue'
</script>

<template>
    <div class="pt-6">
        <div class="pt-12 mb-16 pb-16">
            <v-row>
                <v-col cols="12" sm="12" md="10" lg="10" class="mx-auto">
                    <FooterLight1 />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="10" lg="10" class="mx-auto">
                    <FooterLight2 />
                </v-col>
            </v-row>
        </div>
    </div>
</template>