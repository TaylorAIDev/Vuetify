<script lang="ts" setup>
    import Title1 from '@/components/title/Title-v1.vue'
    import Title2 from '@/components/title/Title-v2.vue'
    import Title3 from '@/components/title/Title-v3.vue'
    import Title4 from '@/components/title/Title-v4.vue'
    import Title5 from '@/components/title/Title-v5.vue'
    import Title6 from '@/components/title/Title-v6.vue'
</script>

<template>
  <v-container class="bg-grey-lighten-2">
  <div class="pt-6">
    <div class="pt-12 mb-5">
      <v-row>
        <v-col cols="10" sm="10" md="8" lg="8" class="mx-auto">
          <Title1/>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="pt-6">
    <div class="pt-12 mb-5">
        <v-row>
        <v-col cols="10" sm="10" md="8" lg="8" class="mx-auto">
          <Title2/>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="pt-6">
    <div class="pt-12 mb-5">
        <v-row>
        <v-col cols="10" sm="10" md="8" lg="8" class="mx-auto">
          <Title3/>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="pt-6">
    <div class="pt-12 mb-5">
      <v-row>
        <v-col cols="10" sm="10" md="8" lg="8" class="mx-auto">
          <Title4/>
        </v-col>
      </v-row>  
    </div>
  </div>
  <div class="pt-6">
    <div class="pt-12 mb-5">
        <v-row>
        <v-col cols="10" sm="10" md="8" lg="8" class="mx-auto">
          <Title5/>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="pt-6">
    <div class="pt-12 mb-5">
        <v-row>
        <v-col cols="10" sm="10" md="8" lg="8" class="mx-auto">
          <Title6/>
        </v-col>
      </v-row>
    </div>
  </div>

  </v-container>
</template>
