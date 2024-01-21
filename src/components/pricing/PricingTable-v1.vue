<script setup lang="ts">

import pricingIcon from '@/assets/pricing/pricing-icon1.png'
import currentPriceIcon from '@/assets/pricing/pricing-icon2.png'

interface Pricing {
  title?: string
  xs?: number | string
  sm?: number | string
  md?: string | number
  lg?: string | number
  xl?: string | number
}

const props = defineProps<Pricing>()

const pricingPlans = [
  {
    name: 'Starter Plan',
    logo: pricingIcon,
    monthlyPrice: 'Free',
    current: false,
    free: true,
    features: [
      '1 Project',
      '100 Mb of Storage',
      '0 Team Members',
      'Single License',
    ],
  },
  {
    name: 'Premium Plan',
    logo: currentPriceIcon,
    monthlyPrice: 4.95,
    current: true,
    features: [
      '10 Project',
      '250 Gb of Storage',
      '10 Team Members',
      'Team License',
    ],
  },
  {
    name: 'Super Plan',
    logo: pricingIcon,
    monthlyPrice: 9.5,
    current: false,
    features: [
      'Unlimited Projects',
      'Unlimited Storage',
      '50 Team Members',
      'Team & Single License',
    ],
  },
]
</script>

<template>
  <v-row class="d-flex justify-center align-center">
    <v-col v-for="plan in pricingPlans" v-bind="props" cols="12" sm="9" md="9" lg="4" xl="4">
      <v-card flat border class="py-5" rounded="xl" :class="plan.current ? 'bg-primary border-opacity-100 py-15' : ''">
        <v-card-text class="text-center">
          <v-img :src="plan.logo" :height="70" class="mx-auto mb-5" />
          <v-card-text class="position-relative text-center mb-4">
            <div class="d-flex justify-center align-center">
              <h1 class="text-5xl">
                {{ plan.free ? '' : '$' }}
                {{ plan.monthlyPrice }}
              </h1>
              <sub class="text-sm font-weight-medium ms-1 mt-4">{{ plan.free ? '' : '/mon' }}</sub>
            </div>
          </v-card-text>
          <h5 class="text-h5 font-weight-medium mb-2">
            {{ plan.name }}
          </h5>
        </v-card-text>

        <v-card-text class="text-center" :class="plan.current ? 'bg-primary' : ''">
          <v-list :class="plan.current ? 'bg-primary' : ''">
            <v-list-item v-for="feature in plan.features" :key="feature">
              <v-list-item-title>
                {{ feature }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="mb-3 justify-center">
          <v-btn :variant="'flat'" :size="'large'"  class="text-none" :color="plan.current ? 'secondary' : 'primary'">
            {{ 'Get Started' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
