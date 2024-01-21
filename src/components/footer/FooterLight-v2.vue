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
    <div class="text-center">
        <div class="letter-spacing-mid my-10">
            <b>MOIETY</b>&#9;<v-icon icon="mdi-lightning-bolt-circle" />&#9;UI KIT
        </div>
        <div class="my-10">
            <v-btn v-for="link in links" :key="link" variant="text" class="mx-2 text-grey-darken-1" rounded="xl">
                {{ link }}
            </v-btn>
        </div>
        <div class="text-center my-10 text-grey-darken-1" cols="12">
            All rights are reserved &copy;
            {{ new Date().getFullYear() }}, PanoplyStore
        </div>
    </div>
    <!-- </v-footer> -->
</template>