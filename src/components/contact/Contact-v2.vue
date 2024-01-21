<template>
  
  <v-container class="fill-height">
      <v-responsive class="align-center text-left fill-height">
        <v-row class="d-flex align-center justify-center text-left pa-16">
            <v-card width="70vw" class="pa-16">

              <v-row>
    <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="pa-0 pr-md-5">
      <v-row>
        <v-col
          cols="12" sm="12" md="6" lg="6" xl="6"
        >      
          <v-text-field
            model-value="Nicoline Poulse"
            bg-color="primary"
            class="elevation-5"
            hide-details
          ></v-text-field> 
        </v-col>
        <v-col
          cols="12" sm="12" md="6" lg="6" xl="6"
        >       
          <v-text-field
            placeholder="Your Email"
            class="elevation-5"
            hide-details hide-selected
          ></v-text-field> 
        </v-col>
        <v-col
          cols="12"
        >       
          <v-textarea
            placeholder="Your Message"
            class="elevation-5"
            hide-details 
            no-resize
          > </v-textarea>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="6" xl="6"
            class="elevation-5 d-flex justify-center align-center">
      <v-btn
        color="primary"
        icon="mdi-map-marker"
      ></v-btn>
    </v-col>
    <v-col cols="12" class="pa-0 py-5">       
      <v-btn color="primary" class="text-none" variant="flat"> Send </v-btn>
    </v-col>
  </v-row>
            </v-card>
        </v-row>
      </v-responsive>
    </v-container>
</template>