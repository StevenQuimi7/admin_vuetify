var app= new Vue({
    el:'#app',
    data:{
        name:'steven',
        drawer:false,
        izquierda:false,
        items:[
            {
                icon:'mdi-home',
                text:'Inicio'
            },
            {
                icon:'mdi-view-dashboard',
                text:'Dashboard'
            },
            {
                icon:'mdi-map',
                text:'Mapa',
            },
            
        ],
        items2:[
            {
                icon:'mdi-cog',
                text:'Configuracion',
            },
            {
                icon:'mdi-logout',
                text:'Cerrar Sesion',
            },
        ],
        usuarios:[
            {
                icon:'mdi-account-key',
                text:'Administrativo',
            },
            {
                icon:'mdi-account-check',
                text:'Operativo',
            },
            {
                icon:'mdi-account-group',
                text:'emprendedor',
            },

        ]
    },
    vuetify:new Vuetify(),
    template://html
    `
    <v-app>
    <!-------------------------NAVIGATION DRAWER-MENU LATERAL------------------------->

        <v-navigation-drawer app color="blue-grey lighten-5" v-model="drawer">
            
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Steven Quimi</v-list-item-title>
                    <v-list-item-subtitle>stven.quimip@ug.edu.ec</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-divider></v-divider>

            <v-list>

                <v-list-item-group
                color="gray darken-4"
                
                >

                    <v-list-item v-for="item in items" :key="item">

                        <v-list-item-icon>
                            <v-icon color="indigo lighten-1">{{item.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{item.text}}</v-list-item-title>
                        </v-list-item-content>
                    
                    </v-list-item>

                    <v-list-group
                        :value="false"
                        prepend-icon="mdi-account"  
                        color="gray darken-4"
                 
                    >

                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Usuarios</v-list-item-title>
                            </v-list-item-content>
                        </template>
   
                        <v-list-item v-for="usuario in usuarios" :key="usuario">

                            <v-list-item-icon>
                                <v-icon color="indigo lighten-1" right>{{usuario.icon}}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{usuario.text}}</v-list-item-title>
                            </v-list-item-content>
                        
                        </v-list-item>
                        
                    </v-list-group>

                    <v-list-item v-for="item2 in items2" :key="item2">

                        <v-list-item-icon>
                            <v-icon color="indigo lighten-1">{{item2.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{item2.text}}</v-list-item-title>
                        </v-list-item-content>
                    
                    </v-list-item>

                </v-list-item-group>

            
            </v-list>

        </v-navigation-drawer>

        <!-----------------------FIN NAVIGATION DRAWER-MENU LATERAL------------------------->

        <!------------------------------------HEADER--------------------------------------->

        <v-app-bar app color="red darken-4" dark>
    
            <!-- -->
            <v-app-bar-nav-icon @click.stop="cambia"></v-app-bar-nav-icon>
            <v-toolbar-title> Plantilla Admin </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn outlined>Mi Cuenta</v-btn>

        </v-app-bar>

        <!----------------------------------FIN HEADER-------------------------------------->
    
        <!---------------------------------CUREPO-BODY-------------------------------------->
        <v-main>
            <v-container fluid>

                <data-table>
                </data-table>
                <formularios-general>
                </formularios-general>
        
            </v-container>
        </v-main>
        <!-------------------------------FIN CUREPO-BODY-------------------------------------->


        <!--------------------------------PIE DE PAGINA------------------------------------->
    
        <v-footer color="blue-grey darken-4" dark :class="{izquierda,izquierdaN}">
                    
            <v-col
                class="text-center"
                cols="12"     
            >
                {{ new Date().getFullYear() }} — <strong>stevoperezbsc@hotmail.com</strong>
            </v-col>
            
        </v-footer>

        <!----------------------------- FIN PIE DE PAGINA------------------------------------->

    </v-app>

    `,
    methods:{
        cambia(){
            this.drawer=!this.drawer;
            this.izquierda=!this.izquierda;
        }
    }
})