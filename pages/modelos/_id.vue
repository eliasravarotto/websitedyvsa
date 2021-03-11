<template>
    <div class="wrapper">

        <section v-if="!modelo.id">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center">
                        <div class="skeleton skeleton-title" style="width: 200px;"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center text-uppercase mt-2">
                        <div class="skeleton skeleton-p" style="width: 400px;"></div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="w-75 skeleton skeleton-body"></div>
                            <div class="skeleton skeleton-p mt-4" style="width: 400px;"></div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center flex-column">
                            <div v-for="ix in [1,2,3,4,5,6]" :key="ix" class="skeleton skeleton-p w-100 mb-3"></div>
                            <div class="skeleton skeleton-title mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    	<section v-show="modelo.id" class="animate-fade-in">

            <div class="section">
                <div class="section" style="position: relative;">
                    <img src="https://media.gettyimages.com/photos/empty-pavement-with-modern-architecture-picture-id1207663571?s=612x612" class="bg-drive" style="opacity: 0.9">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center pt-md-0 pt-5">
                            <div class="col-11 col-md-6 text-center" >
                                <img :src="baseUrl+modelo.img_modelo" class="w-100">
                            </div>
                            <div class="col-12 col-md-6 mt-3 mt-md-0">
                               <div class="row">
                                    <div class="col-md-12 text-center text-md-left">
                                        <div class="mb-2">
                                            <img v-lazy="baseUrl+modelo.img_logo" style="width: 200px;">
                                        </div>
                                        <div class="mb-4">
                                            <p>{{ modelo.descripcion }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-11 col-md-6">
                                        <a href="#" class="action-card-item w-100">
                                            <h2>Versiones</h2><i class="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-11 col-md-6">
                                        <a href="#" class="action-card-item w-100">
                                            <h2>Colores</h2><i class="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-11 col-md-6">
                                        <a href="#" class="action-card-item w-100">
                                            <h2>Ficha Técnica</h2><i class="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-11 col-md-6">
                                        <a href="#" class="action-card-item w-100">
                                            <h2>Cotizar</h2><i class="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-11 col-md-6">
                                        <a href="#" class="action-card-item w-100">
                                            <h2>Test Drive</h2><i class="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-11 col-md-6">
                                        <a href="#" class="action-card-item w-100">
                                            <h2>Galería</h2><i class="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="vehicle-versions">

                                <div class="title-wrapper">
                                    <span>Versiones</span>
                                    <h3>Lista de Precios</h3>
                                </div>

                                <table class="table table-hover tabla-precios">
                                    <thead>
                                      <tr>
                                        <th>VERSION</th>
                                        <th class="text-right">PRECIO</th>
                                      </tr>
                                    </thead>
                                    <tbody>                         
                                      <tr v-for="version in modelo.versiones" :key="version.id"> 
                                        <td class="w-50 text-muted version" style="font-size: 15px;">{{ version.nombre }}</td>
                                        <td class="w-50 text-right precio" style="font-size: 15px"> {{version.moneda}} $ {{ version.precio }}</td>
                                      </tr>
                                    </tbody>
                                </table>
                                <div class="alert alert-bg-light text-center" role="alert"><i class="fas fa-info-circle"></i> El precio <b>NO</b> incluye flete ni gastos de inscripción.</div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="vehicle-colors">
                                <div id="images_colors" class="text-center">
                                    <img v-for="(data, index) in modelo.colores"
                                         class="img-fluid animate-fade-in"
                                         :style="'padding: 0px; '+[index == 0 ? 'display: -webkit-inline-box;' : 'display: none;']" 
                                         :id="'img_'+data.codigo" 
                                         v-lazy="baseUrl+data.public_path"
                                         data-loading="/spiner-loading.gif"
                                         :key="data.id" 
                                    />
                                </div>

                                <div class="list-colors">
                                    <div class="text-center">
                                        <label>{{ color_selected }}</label>
                                    </div>
                                    <ul class="list-inline text-center">
                                        <li v-for="data in modelo.colores" 
                                            @click.prevent="changeColor(data.codigo, data.color)"
                                            class="list-inline-item"
                                            :id="data.codigo" 
                                            :key="data.id">
                                            <div class="circle" :style="{'background-color': '#'+data.codigo}"></div>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                <div class="title-wrapper">
                    <span>Galería de Imágenes</span>
                    <h1> Interior y Exterior</h1>
                </div>
                  <div class="row d-flex justify-content-center gallery">
                    <div class="col-10 col-sm-6 col-md-3 col-lg-2 mb-3 _gallery-item" 
                         v-for="(image, ix) in modelo.gallery"
                         :key="ix">
                         <div class="gallery-item" @click="openGallery(ix)">
                              <img class="img-fluid"
                                   v-lazy="image.src || image.thumb">
                        </div>
                    </div>
                  </div>

                  <light-box
                    v-if="modelo.gallery"
                    ref="lightbox"
                    :media="modelo.gallery"
                    :show-caption="false"
                    :show-light-box="false"
                  />
                </div>
            </div>

        </section>



    </div>
</template>

<script>
    import axios from '~/plugins/axios'

	export default {

        async asyncData({ params, $axios }) {
            const vehicle = await $axios.$get('https://panelweb.derkayvargas.com/api/modelos/' + params.id);
            return {vehicle}
            
        },
        computed: {
          title() {
            if (this.vehicle) return this.vehicle.data.nombre;
            return 'Galería de vehículos Toyota';
          },
          description() {
            const date = new Date();
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();
            return 'Versiones disponibles y lista de precios ' + month + ' ' + year;
          },
          url() {
            if (this.vehicle) 
                return process.env.baseUrl+'/modelos/'+this.vehicle.data.slug;
            return process.env.baseUrl;
          },
          image() {
            return process.env.baseUrl + this.vehicle.data.img_modelo
          },
        },
        head(){
          return {
                title: 'Toyota Derka y Vargas | Financiación',
                meta: [
                    {hid: "description", name: "description", content: this.description},
                    {hid: "og:description", property: "og:description", content: this.description},
                    {hid: "og:title", property: "og:title", content: this.title},
                    {hid: 'og:image', property: 'og:image', content: this.image },
                    {hid: 'og:url', property: 'og:url', content: this.url },
                    {hid: 'og:type', property: 'og:type', content: this.type }
                ],
                htmlAttrs: {
                  lang: 'es'
                }
              }
        },
        data(){
        	return {
                modelo: {},
                baseUrl: process.env.baseUrl,
                slug: this.$route.params.id,
                color_selected: 'Seleccionar Color',
        	}
        },
        mounted(){
            this.getModelo();
        },
        methods:{
        	getModelo(){
        		var _this = this;
        		axios
        			.get('/modelos/' + this.slug)
	        		.then( res =>{
	        			setTimeout(function(){
	        				//$("#skeleton").hide();
	        				_this.modelo = res.data.data;
                            _this.modelo.gallery = [];
                            _this.modelo.caracteristicas.forEach(caracteristica => {
                                var m = {};
                                m.thumb = _this.baseUrl+caracteristica.img;
                                m.src = _this.baseUrl+caracteristica.img;
                                _this.modelo.gallery.push(m);
                            });
	        			}, 2500);
        			})
	        		.catch(error=>{
                        if (error.response.data.code == 404){
                            this.$router.push({ name: 'NotFound' })
                        }

                    })
        	},
            changeColor(id, name_color){
                this.color_selected = name_color;
                $('.list-colors li.active_li').removeClass('active_li');
                $('.list-colors').find(".active_circle").removeClass("active_circle");

                $("#"+id).addClass("active_li");
                $("#"+id).children().addClass("active_circle");
                
                $("#images_colors").find("img").hide();
                $("#img_"+id).show();
            },
            openGallery(index) {
              this.$refs.lightbox.showImage(index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vehicle-colors{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .vehicle-colors #images_colors{
        width: 450px;
        height: 330px;
    }
    .vehicle-colors #images_colors img{
        width: 450px;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .circle {
        border-radius: 50%;
        border: 1px solid $dark;
        height: 35px;
        width: 35px;
    }
    .circle:hover {
        cursor: pointer;
    }
    .gallery .gallery-item {
        position: relative;
    }
    #images_colors{
        min-height: 297px;
    }
    .gallery .gallery-item:before {
        display: block;
        content: "";
        background: rgba(0,0,0,.6) url(./../../static/zoom.png) center center no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        -webkit-transition: opacity ease .33s;
        transition: opacity ease .33s;
    }
    .gallery .gallery-item:hover:before {
        opacity: 1;
        cursor: pointer;
    }
    .bg-drive{
        height: 190px;
    }
    .action-card-item{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        margin: 5px 0px;
        -webkit-box-shadow: 1px 0.5px 4px -1px rgb(0 0 0 / 75%);
        -moz-box-shadow: 1px 0.5px 4px -1px rgb(0 0 0 / 75%);
        box-shadow: 1px 0.5px 4px -1px rgb(0 0 0 / 75%);
    }
    .action-card-item h2{
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.4;
        // padding: 1.5rem;
        margin-top: 0;
        margin-bottom: 0;
    }
    @media (min-width: $breakpoint-lg) { 
        .img-vehicle{
            width: 350px;
        }
    }

    @media (min-width: $breakpoint-md) { 
        .bg-drive{
            height: 100%;
        }
    }


</style>