<script lang="ts">
import { isReactive } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    data: () => ({
      items: [
        { title: 'Headers', icon: 'mdi-clock', to: 'headers'},
        { title: 'Hero Headers', icon: 'mdi-account', to: 'heroheaders'  },
        { title: 'Content', icon: 'mdi-clock', to: 'content'},
        { title: 'Features', icon: 'mdi-account', to: 'features'  },
        { title: 'Coll To Action', icon: 'mdi-clock', to: 'calltoaction'},
        { title: 'Gallery', icon: 'mdi-clock', to: 'gallery'},
        { title: 'Blog', icon: 'mdi-account', to: 'blog'  },
        { title: 'Testimonial', icon: 'mdi-flag', to: 'testimonial' },
        { title: 'E-commerce', icon: 'mdi-clock', to: 'ecommerce'},
        { title: 'Pricing Table', icon: 'mdi-clock', to: 'pricing'},
        { title: 'Team', icon: 'mdi-account', to: 'team'  },
        { title: 'Contact', icon: 'mdi-flag', to: 'contact' },
        { title: 'Title', icon: 'mdi-clock', to: 'title'},
        { title: 'Footer', icon: 'mdi-account', to: 'footer'  },
      ],
      activeIndex: null as number | null
    }),
  // methods: {
  //   setActive(index: number) {
  //     this.activeIndex = index
  //   }
  // },  
  setup() {
    const router = useRouter();

    const isActive = (to: string) => {
      console.log("to", to);
      const currentPath = router.currentRoute.value.path;
      console.log('currentPath', currentPath);
      return currentPath === `/${to}`;
    };

    return {
      isActive,
    };
  },
  }
</script>

<template>
    <div class="hidden-sm hidden-xs hidden-md position-fixed pa-5">
      <div class="d-flex justify-center align-center">
        <!-- <v-btn href="/" variant="text"> -->
          <v-icon size="30px">mdi-lightning-bolt-circle</v-icon>
          <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
        <!-- </v-btn> -->
      </div>
      <v-list>
        <v-list-subheader>PAGES</v-list-subheader>
        <v-list-item 
          v-for="(item, i) in items"
          :key="i" :href="item.to" class="pl-10"
          :class="{'active': isActive(item.to)}"
          >
          <!-- <template v-slot:prepend>
            <v-icon class="mx-5" :icon="item.icon"></v-icon>
          </template> -->

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <div class="hidden-lg hidden-xl">
      <v-row class="justify-center align-center">
        <v-col cols="3" class="d-flex justify-center align-center">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list class="w-100">
              <v-list-subheader>PAGES</v-list-subheader>
              <v-list-item v-for="(item, i) in items" :key="i" :href="item.to" 
              :class="{'active': isActive(item.to)}">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col cols="9" class="d-flex justify-center align-center">
          <v-icon>mdi-lightning-bolt-circle</v-icon>
          <v-card-text class="letter-spacing-mid"><b>MOIETY</b> UI KIT</v-card-text>
        </v-col>
      </v-row>
    </div>
</template>

<style scoped>
.active {
  background-color: #f0f0f0;
}
</style>


<!-- <script lang="ts">
export default {
  data: () => ({
    items: [
      { title: 'Pricing Table', to: 'pricing' },
      { title: 'Team', to: 'team' },
      { title: 'Contact', to: 'contact' },
      { title: 'Title', to: 'title' },
      { title: 'Footer', to: 'footer' },
    ],
  }),
}
</script> -->

<!-- <template>
  <v-container>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list class="w-100">
        <v-list-item v-for="(item, i) in items" :key="i" :href="item.to">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template> -->


<!-- <template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-4" />

      Base Preset
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script> -->


