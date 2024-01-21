<script lang="ts" setup>
  import Contact1 from '@/components/contact/Contact-v1.vue'
  import Contact2 from '@/components/contact/Contact-v2.vue'
</script>

<template>
  <v-container class="bg-grey-lighten-2 h-100">

    <!-- <div class="pt-6">
    <div class="pt-12 mb-16 pb-16"> -->
      <v-row>
        <v-col cols="10" sm="10" class="mx-auto">
          <Contact1 />
        </v-col>
      </v-row>
    <!-- </div>
  </div>
  <div class="pt-6">
    <div class="pt-12 mb-16 pb-16"> -->
      <v-row>
        <v-col cols="10" sm="10" md="10" lg="10" class="mx-auto">
          <Contact2 />
        </v-col>
      </v-row>
    <!-- </div>
  </div> -->
  </v-container>
</template>
