<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center text-left">
        <v-card width="70vw">
          <v-row class="pl-10 pr-5 py-10">
              <v-col cols="12" sm="8" md="8" lg="6" class="d-flex justify-center align-center">
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
                  <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
              </v-col>
              <v-col v-if="isMenuBreakdownSize" cols="12" md="8" lg="4" class="d-flex justify-end align-center flex-wrap text-center">
                  <v-card-text class="pa-0">Home</v-card-text>
                  <v-card-text class="text-grey pa-0">About us</v-card-text>
                  <v-card-text class="text-grey pa-0">Portfolio</v-card-text>
                  <v-card-text class="text-grey pa-0">Services</v-card-text>
                  <v-card-text class="text-grey pa-0">Contact</v-card-text>
              </v-col>
              <v-col v-else class="d-flex justify-end align-center" cols="4" sm="2" md="2">
                  <v-menu>
                      <template v-slot:activator="{ props }">
                          <v-btn icon="mdi-dots-vertical" class="bg-primary" v-bind="props"></v-btn>
                      </template>

                      <v-list class="bg-primary">
                          <v-list-item
                              v-for="(item, i) in menu.items"
                              :key="i"
                              :class="getClass(i)"
                          >
                              <v-list-item-title>{{ item }}</v-list-item-title>
                          </v-list-item>
                      </v-list>
                  </v-menu>
              </v-col>
              <v-col cols="8" sm="2" md="2" lg="2" class="d-flex justify-center align-center pr-6">
                  <v-btn class="text-none px-8" color="primary" size="large">Signup</v-btn>
              </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
    import { onBeforeUnmount } from 'vue';
    import { onMounted } from 'vue';
    import { reactive, ref } from 'vue';

    const menu = reactive({
        items: [
            'Home',
            'About us',
            'Portfolio',
            'Services', 
            'Contact'
        ],
    });
    const itemClasses = ref(['', 'text-grey', 'text-grey', 'text-grey', 'text-grey']);
    const getClass = (i: number) => {
        return itemClasses.value[i];
    };

    const isMenuBreakdownSize = ref(window.innerWidth >= 1300);
    let handleResize = () => {
        isMenuBreakdownSize.value = window.innerWidth >= 1300;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>

<style scoped>
  .letter-spacing-mid {
      letter-spacing: .4rem;
  }
</style>