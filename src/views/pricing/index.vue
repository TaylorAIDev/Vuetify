<script lang="ts" setup>
  import Table1 from '@/components/pricing/PricingTable-v1.vue'
  import Table2 from '@/components/pricing/PricingTable-v2.vue'
</script>

<template>
  <v-card class="pt-6">
    <v-card-text class="pt-12 mb-16 pb-16">
      <v-row>
        <v-col cols="10" sm="12" md="10" lg="10" class="mx-auto">
          <Table1 />
        </v-col>
      </v-row>
    </v-card-text> 
  </v-card> 
  <v-card class="pt-6">
    <v-card-text class="pt-12 mb-16 pb-16">
      <v-row>
        <v-col cols="10" sm="12" md="10" lg="10" class="mx-auto">
          <Table2 />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>