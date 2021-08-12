Vue.component('formularios-general',{
    template://html
    `
    <v-row>
        <v-col cols="12" md="6">
            
            <v-card shaped elevation="5">
                <form>
                    <v-card-title>Registrar Usuario</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>

                    
                        <v-text-field
                        label="Nombres"
                        outlined
                        color="blue-grey darken-4"
                        prepend-icon="mdi-account-box-outline"
                        ></v-text-field>

                        <v-text-field
                        label="Apellidos"
                        outlined
                        color="blue-grey darken-4"
                        prepend-icon="mdi-account-details-outline"
                        ></v-text-field>

                        <v-text-field
                        label="cedula"
                        outlined
                        color="blue-grey darken-4"
                        prepend-icon="mdi-card-account-details-outline"
                        ></v-text-field>

                        <v-text-field
                        label="Telefono"
                        outlined
                        color="blue-grey darken-4"
                        prepend-icon="mdi-cellphone"
                        ></v-text-field>

                        <v-text-field
                        label="Correo"
                        outlined
                        color="blue-grey darken-4"
                        prepend-icon="mdi-email-outline"
                        ></v-text-field>

                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="error" dark rounded>
                            <v-icon class="mr-2">mdi-close-outline</v-icon>
                            Cancelar    
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark rounded>
                            <v-icon class="mr-2">mdi-content-save</v-icon>
                            Guardar    
                        </v-btn>
                    </v-card-actions>
                </form>

            </v-card>
        
        </v-col>

        <v-col cols="12" md="6">

            <v-card shaped elevation="5">
                <form>
                    <v-card-title>Registrar Usuario</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>

                    
                        <v-text-field
                        label="Nombres"
                        outlined
                        shaped
                        color="red lighten-1"
                        prepend-inner-icon="mdi-account-box-outline"
                        ></v-text-field>

                        <v-text-field
                        label="Apellidos"
                        outlined
                        shaped
                        color="red lighten-1"
                        prepend-inner-icon="mdi-account-details-outline"
                        ></v-text-field>

                        <v-text-field
                        label="cedula"
                        outlined
                        shaped
                        color="red lighten-1"
                        prepend-inner-icon="mdi-card-account-details-outline"
                        
                        ></v-text-field>

                        <v-text-field
                        label="Telefono"
                        outlined
                        shaped
                        color="red lighten-1"
                        prepend-inner-icon="mdi-cellphone"
                        ></v-text-field>

                        <v-text-field
                        label="Correo"
                        outlined
                        shaped
                        color="red lighten-1"
                        prepend-inner-icon="mdi-email-outline"
                        ></v-text-field>

                    


                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="error" dark rounded>
                            <v-icon class="mr-2">mdi-close-outline</v-icon>
                            Cancelar    
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark rounded>
                            <v-icon class="mr-2">mdi-content-save</v-icon>
                            Guardar    
                        </v-btn>
                    </v-card-actions>
                </form>

            </v-card>

        </v-col>
    </v-row>
    
    `
    ,
    data(){
        return{

        }
    },

})