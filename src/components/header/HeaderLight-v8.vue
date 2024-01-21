<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="ma-0 d-flex align-center justify-center text-left">
        <v-card width="70vw">
          <v-row class="px-10 py-10">
              <v-col cols="12" md="4" lg="4" class="d-flex justify-center align-center">
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
                  <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
              </v-col>
              <v-col v-if="isMenuBreakdownSize" cols="12" md="6" lg="4" class="d-flex justify-center align-center text-center flex-wrap">
                  <v-card-text>Home</v-card-text>
                  <v-card-text class="text-grey">Portfolio</v-card-text>
                  <v-card-text class="text-grey">Contact</v-card-text>
              </v-col>
              <v-col v-else class="d-flex justify-center align-center pr-3" cols="12" sm="8" md="4" lg="4">
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
              <v-col cols="12" sm="4" md="4" lg="4" class="d-flex justify-end align-center">
                  <v-icon color="grey-lighten-1" class="mr-5">mdi-twitter</v-icon>
                  <span class="font-weight-black text-h6 text-medium-emphasis mr-5"><b class="text-grey-lighten-1">f</b></span>
                  <span class="font-weight-black text-h6 text-medium-emphasis pa-0 mr-5"><b class="text-grey-lighten-1">in</b></span>
                  <v-btn class="text-none" size="large" color="primary">Signup</v-btn>
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
            'Portfolio',
            'Contact'
        ],
    });
    const itemClasses = ref(['', 'text-grey', 'text-grey']);
    const getClass = (i: number) => {
        return itemClasses.value[i];
    };

    const isMenuBreakdownSize = ref(window.innerWidth >= 1280);
    let handleResize = () => {
        isMenuBreakdownSize.value = window.innerWidth >= 1280;
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