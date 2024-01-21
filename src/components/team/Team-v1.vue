<template>
  <v-card
    class="h-100"
    :ripple="false"
  >
    <v-row
      no-gutters
      class="h-100 pa-5 pa-md-10 pa-lg-15"
    >
      <v-col
        cols="12" sm="12" md="6" lg="6" xl="6"
        class="d-flex flex-column justify-center align-center align-md-start pa-5 pa-md-10 pa-lg-15"
      >  
        <v-avatar
          size="20vw"
          rounded="xl"
          class="min-size-200"
          >
          <v-img cover class="bg-radial-gradient"></v-img>
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <v-card-text
          class="d-flex flex-column align-center align-md-start justify-center gap-2 h-100"
        >                
          <h3 class="text-lg-h3 text-h4 text-center font-weight-light">
              {{ 'Mathilde Mortensen' }}
          </h3><br>
          <span class="text-grey-darken-1"><b>CEO & User interface Designer</b></span><br>
          <p class="text-grey-darken-1 text-center text-md-start">Every day, we'll curate new stories from Makers - wheter they're <br>long-time CEOs or 
                solo creators - to give real, accessible insight</p><br>
          <div>
            <v-btn
              color="primary"
              icon="mdi-pound"
              class="rotate-45"
            ></v-btn>
            <v-btn
              class="ma-4"
              color="grey"
              icon="mdi-twitter"
            ></v-btn>
            <v-btn
              color="grey"
              icon="mdi-facebook"
            ></v-btn>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
.bg-radial-gradient {
  background: radial-gradient(circle at 100% 0%, #7d54d9ff, #472AB202)
}

.min-size-200 {
  min-width: 200px !important;
  min-height: 200px !important;
}

.rotate-45 {
  rotate: -45deg !important;
}
</style>