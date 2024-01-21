<template>
  <v-container class="py-6">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="ma-0 d-flex align-center justify-center text-left">
        <v-card width="70vw" class="bg-grey-darken-4">
          <v-row class="px-15 py-10">
              <v-col v-if="isMenuBreakdownSize" cols="3" sm="3" class="d-flex justify-center align-center text-center flex-wrap pa-0">
                  <v-card-text class="pa-0">Home</v-card-text>
                  <v-card-text class="text-grey pa-0">Portfolio</v-card-text>
                  <v-card-text class="text-grey pa-0">Contact</v-card-text>
              </v-col>
              <v-col v-else class="d-flex justify-center align-center pr-3" cols="4" sm="3">
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
              <v-col cols="4" sm="6" class="d-flex justify-center align-center">
                  <v-icon>mdi-lightning-bolt-circle</v-icon>
              </v-col>
              <v-col cols="4" sm="3" class="d-flex justify-end align-center">
                  <v-btn class="text-none px-8" color="primary" size="large" rounded>Signup</v-btn>
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

    const isMenuBreakdownSize = ref(window.innerWidth >= 1030);
    let handleResize = () => {
        isMenuBreakdownSize.value = window.innerWidth >= 1030;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>
  