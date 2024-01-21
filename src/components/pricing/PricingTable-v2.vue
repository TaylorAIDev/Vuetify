<script setup lang="ts">

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
    name: 'Starter',
    tagLine: `Development of the process and/or information flow of the system (i.e. for phone tree system, 
                this would be an option tree flowchat.)`,
    monthlyPrice: 4.95,
    current: false,
    advance: false,
    baseFeatures: [
      'Publish to PanoplyStore',
      '100 Static Pages',
      '50 Form Submissions',
    ],
    advanceFeatures: [
      'No SSL Option',
      'No Site Search',
      'No Content Editors',
    ],
  },
  {
    name: 'Business',
    tagLine: `Development of the process and/or information flow of the system
             (i.e. for phone tree systems, this would be an option tree flowchart)`,
    monthlyPrice: 9.95,
    current: true,
    advance: true,
    baseFeatures: [
      'Publish to PanoplyStore',
      '100 Static Pages',
      '50 Form Submissions',
    ],
    advanceFeatures: [
      'SSL Option',
      'Site Search',
      'Content Editors',
    ],
  },
]
</script>

<template>
  <v-row>
    <v-col v-for="plan in pricingPlans" v-bind="props" cols="12" sm="12" md="12" lg="6" xl="6">
      <v-card flat border class="px-10 py-10" rounded="lg" :class="plan.current ? 'bg-primary border-opacity-100' : ''">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
              <h1 class="text-sm-h2 font-weight-medium">
                {{ plan.name }}
              </h1>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="text-end">
              <div class="d-flex justify-center align-center">
                <h1 class="text-5xl">
                  $ {{ plan.monthlyPrice }}
                </h1>
                <sub class="text-sm font-weight-medium ms-1"> / mon</sub>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="10" lg="10" xl="10">
              <p class="mt-5 font-weight-low">
                {{ plan.tagLine }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text class="mt-5" :class="plan.current ? 'bg-primary' : ''">
          <v-row>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <v-list :class="plan.current ? 'bg-primary' : ''">
                <v-list-item  class="pa-0" v-for="feature in plan.baseFeatures" :key="feature">
                  <template #prepend>
                    <v-icon :color="plan.current ? 'white' : 'primary'" icon="mdi-check-circle" class="me-3" />
                  </template>

                  <v-list-item-title>
                    {{ feature }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <v-list :class="plan.current ? 'bg-primary' : ''">
                <v-list-item class="pa-0" v-for="feature in plan.advanceFeatures" :key="feature">
                  <template #prepend>
                    <v-icon :icon="plan.advance ? 'mdi-check-circle' : 'mdi-close-circle'" class="me-3" />
                  </template>

                  <v-list-item-title>
                    {{ feature }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-row>
            <v-col cols="12" sm="5" md="5" lg="5" xl="5" class="d-flex justify-center justify-sm-start">
              <v-btn flat :color="plan.current ? 'secondary' : 'primary'"  class="text-none" :variant="'flat'" :size="'x-large'">
                {{ 'Get Started' }}
              </v-btn>
            </v-col>
            <v-col cols="12" sm="7" md="7" lg="7" xl="7" 
                    class="d-flex align-center justify-center justify-sm-start"
            >
              <v-btn :color="plan.current ? 'secondary' : ''"
                variant="text"  class="text-none"
              >
              Contact us for more details
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>