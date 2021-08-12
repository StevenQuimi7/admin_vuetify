Vue.component('data-table',{
    template://html
    `

    <v-row>
        <v-col>
            <v-card shaped elevation="8">
                <v-card-title>Usuarios del Sistema</v-card-title>
                <v-card-subtitle>Usuario Administrativo</v-card-subtitle>
                <v-divider></v-divider>             
                <v-card-text>

                    <v-data-table
                        dense
                        :headers="encabezado"
                        :items="usuarios"
                        item-key="Nombres"
                        class="elevation-1"
                    >
                        <template v-slot:item.Acciones="{ item }">

                            <v-btn icon color="red">
                                <v-icon
                                    small
                                    class="mr-2"
                                    
                                >
                                    mdi-eye
                                </v-icon>
                            </v-btn>

                            <v-btn icon color="red">
                                <v-icon
                                    small
                                    class="mr-2"
                                    
                                >
                                    mdi-pencil
                                </v-icon>
                            </v-btn>

                            <v-btn icon color="red">
                                <v-icon
                                    small
                                    
                                >
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                
                </v-card-text>
        
            </v-card>
            
        <v-col>
    </row>

    `,
    data(){
        return{
            usuarios: [
                {
                  Nombres: 'Steven',
                  Apellidos: 'Quimi',
                  Cedula: '0923599890',
                  Telefono: '0990924825',
                  Correo: 'stevoperezbsc@hotmail.com',
                  
                },
                {
                    Nombres: 'Ana',
                    Apellidos: 'Peralta',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Jostin',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Laura',
                    Apellidos: 'Maldonado',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Steven',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Steven',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Steven',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Steven',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Steven',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
                {
                    Nombres: 'Steven',
                    Apellidos: 'Quimi',
                    Cedula: '0923599890',
                    Telefono: '0990924825',
                    Correo: 'stevoperezbsc@hotmail.com',
                    
                },
              ],
              encabezado: [
                {
                  text: 'Nombres',
                  align: 'start',
                  sortable: false,
                  value: 'Nombres',
                },
                
                { text: 'Apellidos', value: 'Apellidos' },
                { text: 'Cedula', value: 'Cedula' },
                { text: 'Telefono', value: 'Telefono' },
                { text: 'Correo', value: 'Correo' },
                { text: 'Acciones', value: 'Acciones' },
                
              ],

        }
        
    }
    
})