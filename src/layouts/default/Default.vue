<template>
  <v-app>
    <v-row>
      <v-col lg="2" class="elevation-5">    
        <default-bar />
      </v-col>
      <v-col cols="12" lg="10">
        <default-view />
      </v-col>
    </v-row>
</v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>