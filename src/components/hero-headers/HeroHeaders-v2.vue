<template>
    <v-container class="py-6">
      <v-responsive class="align-center text-left fill-height">
        <v-row class="ma-0 d-flex align-center justify-center text-left">
          <v-card width="70vw" class="bg-indigo-darken-4">
            <v-row class="px-6 py-10 text-white">
                <v-col cols="12" sm="12" md="6" lg="4" class="d-flex justify-center align-center pl-10">
                    <v-row>
                        <v-col cols="1" class="d-flex align-center">
                            <v-icon>mdi-lightning-bolt-circle</v-icon>
                        </v-col>
                        <v-col class="d-flex justify-start align-center ml-2">
                            <span class="letter-spacing-mid"><b>MOIETY</b>&nbsp;</span>
                            <span class="letter-spacing-mid">UI KIT</span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col v-if="isMenuBreakdownSize" cols="12" md="8" lg="5" class="d-flex justify-center align-center flex-wrap">
                    <v-card-text><div>Home</div></v-card-text>
                    <v-card-text class="text-grey"><div>About us</div></v-card-text>
                    <v-card-text class="text-grey"><div>Portfolio</div></v-card-text>
                    <v-card-text class="text-grey"><div>Services</div></v-card-text>
                    <v-card-text class="text-grey"><div>Contact</div></v-card-text>
                </v-col>
                <v-col v-else class="d-flex justify-end pr-10" cols="4" sm="4" md="2" lg="5">
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
                <v-col cols="8" sm="8" md="4" lg="3" class="d-flex justify-center align-center pr-16">
                    <v-btn class="text-none px-8 mx-3" size="large" color="primary">Signup</v-btn>
                    <v-btn class="text-none px-8" size="large" color="white" variant="outlined">Login</v-btn>
                </v-col>
            </v-row>
            <v-row class="px-8 py-6 mb-12 d-flex align-center justify-center text-white">
                <v-col cols="12" sm="12" md="6" class="pt-10 mt-16">
                    <v-card-text>
                        <div class="font-weight-normal text-h3 mb-3 title-responsive-font">Design means</div>
                        <div class="font-weight-bold text-h3 mb-10 title-responsive-font">Business_</div>
                        <p class="text-grey">Every day, we'll curate new stories from Makers - whether they're</p>
                        <p class="text-grey">long-time CEOs or solo creators - to give real, accessible insight</p>
                        <p class="text-grey">into what it means to make a product, build a team.</p>
                    </v-card-text>
                    <v-btn class="text-none px-8 mx-3 my-10" size="large" color="primary">Get Started for Free</v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    src="@/assets/heroheaders/heroheaders2.png"
                    >
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                            <v-card-text class="d-flex justify-center">
                                Graph
                            </v-card-text>
                            </div>
                        </template>
                    </v-img>
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

    const isMenuBreakdownSize = ref(window.innerWidth >= 1550);
    let handleResize = () => {
        isMenuBreakdownSize.value = window.innerWidth >= 1550;
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

    @media only screen and (max-width: 700px) {
        .title-responsive-font {
            font-size: 1.5rem !important;
        }
    }
</style>

