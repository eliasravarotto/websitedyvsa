<template>
	<div class="wrapper">

		<section v-show="showSkeleton">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-10 col-lg-7 mb-5">
						<div class="skeleton skeleton-body w-100"></div>
						<div class="skeleton skeleton-title w-100"></div>
						<div class="skeleton skeleton-title w-100"></div>
						<div class="skeleton skeleton-title w-100 mb-4"></div>
						
						<div class="skeleton skeleton-title w-100"></div>
						<div class="skeleton skeleton-title w-100"></div>
						<div class="skeleton skeleton-title w-100"></div>
					</div>
					<div class="col-12 col-md-10 col-lg-5 mb-5">
						<div class="skeleton skeleton-title w-100"></div>
						<div class="skeleton skeleton-title w-100"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
						<div class="skeleton skeleton-p w-100 mt-4"></div>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="skeleton skeleton-title w-50 mb-5"></div>
				<div class="row">
					<div class="col-sm-6 col-md-6 col-lg-3">
						<div class="skeleton skeleton-title mb-2" style="height: 150px;"></div>
						<div class="skeleton skeleton-title mb-2"></div>
						<div class="skeleton skeleton-p mb-2"></div>
						<div class="skeleton skeleton-p w-75"></div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-3">
						<div class="skeleton skeleton-title mb-2" style="height: 150px;"></div>
						<div class="skeleton skeleton-title mb-2"></div>
						<div class="skeleton skeleton-p mb-2"></div>
						<div class="skeleton skeleton-p w-75"></div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-3">
						<div class="skeleton skeleton-title mb-2" style="height: 150px;"></div>
						<div class="skeleton skeleton-title mb-2"></div>
						<div class="skeleton skeleton-p"></div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-3">
						<div class="skeleton skeleton-title mb-2" style="height: 150px;"></div>
						<div class="skeleton skeleton-title mb-2"></div>
						<div class="skeleton skeleton-p mb-2"></div>
						<div class="skeleton skeleton-p w-75"></div>
					</div>
				</div>
			</div>
		</section>

		<section class="animate-fade-in" v-show="!showSkeleton">
			<div class="container">
			    <div class="row d-flex justify-content-center">
			        <div class="col-12 col-md-10 col-lg-7">
			            <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
			                <!-- slides -->
			                <img v-lazy="'/uct-single-sm.png'" class="img-indicator-uct" v-if="unidad.uct">
			                <div class="carousel-inner">
			                    <div v-for="(imagen, i) in unidad.gallery" :key="i" :class="{ 'active': i==0, 'carousel-item': true }" @click="openGallery(i)"> 
			                    	<img :src="imagen.src" :alt="unidad.marca + ' ' + unidad.modelo">
			                    </div>
			                </div> 
			                <!-- Left right --> 
			                <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"></a> 
			                <a class="carousel-control-next" href="#custCarousel" data-slide="next"></a>
			                <!-- Thumbnails -->
			                <ol class="carousel-indicators carousel-thumbnails list-inline mt-3">
			                    <li v-for="(imagen, i) in unidad.gallery" :key="i" :class="{ 'active': i==0, 'list-inline-item': true }"> 
			                    	<a :id="'carousel-selector-'+i" :data-slide-to="i" data-target="#custCarousel"> 
			                    		<img :src="imagen.src" class="img-fluid"> 
			                    	</a> 
			                    </li>
			                </ol>
			            </div>
			        </div>
			        <div class="col-12 col-md-10 col-lg-5">
			        	<div class="">
	                        <div class="car-details">
	                            <div class="header-price text-center d-flex justify-content-center align-items-center">
	                                <span class="d-block label-price mr-3">Precio</span>
	                                <span class="d-block h3">{{ unidad.precio | price }}</span>
	                            </div>
	                            <div class="details-list">
	                            	<ul class="list-group list-group-flush">
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Marca:</span> <span>{{ unidad.marca }}</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Modelo y Version:</span> <span>{{ unidad.modelo }}</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Año:</span> <span>{{ unidad.anio }}</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Color:</span> <span>{{ unidad.color }}</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">KM:</span> <span>{{ unidad.km }} km</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Transmisión:</span> <span>{{ unidad.transmision }}</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Combustible:</span> <span>{{ unidad.combustible }}</span>
									  </li>
									  <li class="list-group-item">
									  	<span class="mr-2 fw500">Disponibilidad:</span> <span :class="{'text-danger': unidad.estado == 'RESERVADO' }">{{ unidad.estado }}</span>
									  </li>
									  <li class="list-group-item" v-if="unidad.uct">
									  	<img src="/uct-single-sm.png">
									  </li>
									</ul>
	                            </div>
	                        </div>
	                    </div>
			        </div>
			    </div>

			    <light-box
			    	v-if="viewGaleria"
		            ref="lightbox"
		            :media="unidad.gallery"
		            :show-caption="false"
		            :show-light-box="false"
		            :onClosed="closeLightBox()"
		            :onOpened="openLightBox()" 
		        />
        	</div>
		</section>

		<section class="section" v-show="!showSkeleton">
			<div class="container">
				<h2 class="title-sm d-inline-block">
					<span>Otros Vehículos</span>
					<div class="custom-divider mt-2"><span></span></div>
				</h2>
				<div class="row d-flex justify-content-center justify-content-md-start">
					<div class="col-10 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center" v-for="item in usados" :key="item.id">
						<div class="vehicle zoom-div">
							<nuxt-link class="link-no-styled" :to="'/usados/'+item.slug">
								<div class="vehicle-image-wrapper">
									<img v-if="item.foto" v-lazy="baseUrl + item.foto.replace('public', '/storage')">
									<img v-else v-lazy="'/no-image-aviable.png'">
									<img v-if="item.uct" v-lazy="'/uct-sm.png'" class="img-uct">
								</div>
								<div class="vehicle-detail">
									<span class="title">{{ item.marca }} {{ item.modelo }}</span>
									
									<div class="custom-divider"></div>
									
									<div class="d-flex lh2">
										<span class="d-block">Año {{ item.anio }}</span> 
										<span class="mx-3 v-divider">|</span>
										<span class="d-block">{{ item.km }} km.</span>
									</div>
									
									<div class="custom-divider"></div>
									
									<div class="price-wrapper w-100 d-flex justify-content-between align-items-center">
										<div class="price-text">Precio</div>
										<div class="price">{{ item.precio | price }} </div>
									</div>
									
									<div class="custom-divider"></div>

								</div>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="container">
			<UsadosContactAreaComponent />
		</section>
	</div>
</template>

<script>
	import axios from '~/plugins/axios'
   
    export default {
    	async asyncData({ params, $axios }) {
            const vehicle = await $axios.$get('https://panelweb.derkayvargas.com/api/usados/' + params.id);
            return {vehicle}
            
        },
		head(){
          return {
	            title: 'Usados | Toyota Derka y Vargas',
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
	    computed: {
	          title() {
	            return 'Usados | Toyota Derka y Vargas';
	          },
	          description() {
	            return this.vehicle.data.marca + ' ' + this.vehicle.data.modelo + ' - Año ' + this.vehicle.data.anio ;
	          },
	          url() {
	            return 'https://derkayvargas.com/usados/'+this.vehicle.data.slug;
	          },
	          image() {
	            return process.env.baseUrl+this.vehicle.data.foto;
	          },
	          type() {
	            return 'website';
	          },
	    },
        data(){
            return {
            	unidad: {},
                usados: [],
                imagenes:'',
                showSkeleton: true,
                viewGaleria: false,
                slug: this.$route.params.id,
                baseUrl: process.env.baseUrl,
            }
        },
        mounted() {
        	this.getUnidad();
        },
        methods:{
        	getUnidad(){
        		axios
	        		.get('/usados/' + this.slug)
	        		.then(res=>{
	        			this.unidad = res.data.data;

	        			if (this.unidad.foto != "/storage/") {
			            	var portada = {};
			            	portada.public_path = this.unidad.foto;
			            	this.unidad.photos.unshift(portada);
	        			}

	        			this.unidad.gallery = [];
			            this.unidad.photos.forEach(img => {
			                var m = {};
			                m.thumb = process.env.baseUrl+img.public_path;
			                m.src = process.env.baseUrl+img.public_path;
			                this.unidad.gallery.push(m);
			            });
			            
			            if (this.unidad.gallery.length == 0) {
			            	var m = {};
			                m.thumb = '/no-image-aviable.png';
			                m.src = '/no-image-aviable.png';
			                this.unidad.gallery.push(m);
			            }
			            
			            this.viewGaleria = true;

			            this.usadosDeInteres();

			            var _this = this;
	        			setTimeout(function(){
		                    _this.showSkeleton = false;
		                },3000);
	        		})
	        		.catch(err=>{
	        			console.log(err);
	        			alert('Ups! Algo salió mal.')
	        		});
        	},
        	usadosDeInteres(){
        		var _this = this;
        		axios
	        		.get('/usados')
	        		.then(res=>{
	        			var i = 0;
        				var arr = [];

    					//Agregar unidades que coincidan con el modelo
	        			res.data.data.forEach(item => {
	        				if (item.modelo.includes(_this.unidad.modelo.split(" ")[0]) && item.id != _this.unidad.id ) {
	        					arr.push(item);
	        				}
	        				if (item.id == _this.unidad.id) {
	        					res.data.data.splice(i, 1);
	        				}
	        				i++;
	        			});

    					//Agregar unidades que coincidan con la marca
	        			res.data.data.forEach(item => {
	        				if (item.marca.includes(_this.unidad.marca) && item.id != _this.unidad.id ) {
	        					arr.push(item);
	        				}
	        			});

	        			//Agregar el resto de unidades
	        			res.data.data.forEach(item => {
        					arr.push(item);
	        			});

    					//remover duplicados
    					this.usados = arr.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
		            })
		            .catch(err=>{
	        			console.log(err);
	        			alert('Ups! Algo salió mal.')
	        		});
        	},
        	closeLightBox(){
                console.log('CLOSE GALLERY')
        	},
            openLightBox(){
                console.log('OPEN GALLERY')
            },
            openGallery(index) {
                self = this;
                this.viewGaleria = true;
                setTimeout(function(){
	                self.$refs.lightbox.showImage(index)
	                history.pushState('', 'Galery', '/usados/'+self.unidad.slug+'#show-galery');
                },500);

            },
        }
    }
</script>


<style lang="scss" scoped>
	#custCarousel .carousel-indicators {
	    position: static;
	    margin-top: 20px;
	    flex-wrap: wrap;
	}
	.carousel-indicators li {
		height: auto;
		opacity: 1;
	}
	#custCarousel .carousel-indicators li a img{
		width: 100px;
	}

	#custCarousel .carousel-thumbnails>li {
	    width: 100px
	}

	#custCarousel .carousel-thumbnails li img {
	    display: block;
	    opacity: 0.6
	}

	#custCarousel .carousel-thumbnails li.active img {
	    opacity: 1
	}

	#custCarousel .carousel-thumbnails li:hover img {
	    opacity: 0.75
	}

	.carousel-item img {
	    width: 100%
	}

	#custCarousel .carousel-control-next,
	#custCarousel .carousel-control-prev{
		top: 40%;
		height: 50px;
	    width: 50px;
	    background-color: $primary;
	}

	#custCarousel .carousel-control-prev:before, 
	.carousel-control-next:before{
		font-family: "Font Awesome 5 Free"; 
		font-weight: 900; 
		color: $white;
	} 
	#custCarousel .carousel-control-prev:before{
		content: "\f053";
	}
	#custCarousel .carousel-control-next:before{
		content: "\f054";
	}

	.car-details .header-price{
	    background-color: $ligth_3;
	    padding: 22px 0 13px;
	}
	.car-details .header-price .label-price{
	    font-size: 12px;
	    font-weight: 400;
	    color: $dark;
	    text-transform: uppercase;
	}
	.car-details .header-price .h3{
	    color: $dark;
	}
	.img-indicator-uct{
		position: absolute;
	    top: 5px;
	    left: 5px;
	    z-index: 1;
	    background-color: white;
	    opacity: 0.8;
	    width: 25%;
	}
</style>