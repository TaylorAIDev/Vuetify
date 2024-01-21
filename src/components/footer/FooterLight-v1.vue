<script lang="ts">
export default {
    data: () => ({
        links: [
            'Home',
            'About Us',
            'Portfolio',
            'Services',
            'Contact',
        ],
    }),
}
</script>

<template>
    <!-- <v-footer class="bg-grey-lighten-1"> -->
    <v-row class="my-10">
        <v-col cols="12" md="6">
            <div class="letter-spacing-mid d-flex justify-md-start justify-center">
                <v-icon icon="mdi-lightning-bolt-circle" />&#9;<b>MOIETY</b> UI KIT
            </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-md-end justify-center">
            <v-btn color="primary" variant="flat" class="mx-2 text-none">
                Signup
            </v-btn>
            <v-btn color="primary" variant="outlined" class="mx-2 text-none">
                Login
            </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-grey-darken-1 d-flex justify-md-start justify-center">
            &copy; {{ new Date().getFullYear() }}, PanoplyStore
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-end">
            <v-btn v-for="link in links" :key="link" variant="text" class="ml-4 text-grey-darken-1" rounded="xl">
                {{ link }}
            </v-btn>
        </v-col>
    </v-row>
    <!-- </v-footer> -->
</template>