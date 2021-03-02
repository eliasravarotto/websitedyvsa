<template>
	<div class="wrapper">
		<section class="">
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-11 col-md-12">
						<div class="title-wrapper">
							<h1>Lista de Precios</h1>
							<span>Para que tu vehículo tenga la mayor eficiencia, vení al Servicio de Posventa Derka y Vargas <span><br> y dejá tu Toyota en las mejores manos.</span></span>
						</div>
						<div class="owl-carousel owl-carousel-servicios owl-theme py-2">
							<VueSlickCarousel :arrows="true" :dots="true" v-if="modelos.length" v-bind="sliderConfig">
								<div v-for="(modelo, i) in modelos" :key="i">
									<div class="pricing-1 popular mx-2 my-3">
										<div class="wrapper-img">
											<img class="img-fluid" v-lazy="baseUrl+modelo.img_modelo">
										</div>
										<div class="title my-3">{{ modelo.nombre }}</div>
										<div class="content">
											<table class="table table-striped_ table-pricing">
												 <tbody>
													<tr v-for="(s, ix) in modelo.servicios" :key="ix">
				 								      <td>{{ s.nombre }}</td>
												      <td class="text-right font-weight-bold"><span class="price">{{ s.precio | price}}</span></td>
												    </tr>
												</tbody>
											</table>
										</div>
									</div>
									<!-- <div class="button mt-3">
										<a href="{{route('turno_servicio_create')}}?modelo={{$modelo->nombre}}" class="btn button-theme pricing-btn">Solicitar Turno</a>
									</div> -->
								</div>
							</VueSlickCarousel>
						</div>	
					</div>	
				</div>
			</div>
		</section>

		<div class="section">
			<div class="container">
				<div class="custom-divider"><span></span></div>
			</div>
		</div>

		<section>
			<div class="container">
				<div class="row">
					<div class="col-12 bg-image-service h-300">
						<div class="row">
							<div class="col-12 col-md-8"></div>
							<div class="col-12 col-md-4">
								<div class="h-300 d-flex justify-content-center align-items-center">
									<div class="text-center">
										<div class="mb-4">
											<h3>¿Necesitas un servicio?</h3>
											<h4>Pedilo Online</h4>
										</div>
										<nuxt-link class="button button-dark button-md" :to="'/servicios-y-accesorios/servicios/solicitud-de-turno'">Solicitar Turno -</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="section">
			<div class="container">
				<div class="custom-divider"><span></span></div>
			</div>
		</div>

		<section class="">
			<div class="container">
				<div class="title-wrapper">
					<h1>Contacto</h1>
					<span>Acercate a cualquiera de nuestras sucursales y dejá tu Toyota en las mejores manos.</span>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="col-11 col-md-4" v-for="(sucursal, ix) in sucursales" :key="ix">
						<span class="font-weight-600">{{ sucursal.sucursal }}</span>
						<div class="custom-divider mt-1 mb-2"> <span></span> </div>
						<ul class="list-unstyled ml-2">
							<li class="mb-1"><i class="fas fa-location-arrow"></i> {{ sucursal.direccion }}</li>
							<li class="mb-1">
								<i class="fas fa-phone-alt"></i>
								<span class="phone" v-for="(tel, i) in sucursal.telefonos" :key="i+'Tel'"> <span class="mx-3" v-if="i>0">|</span> {{ tel }} </span>
							</li>
							<li class="mb-1 text-muted">
								<i class="far fa-clock"></i>
								<span class="phone"> Lunes a Viernes: 8:00 a 12.30 hs. - 15:30 a 19:30 hs. | Sábado: 8:00 a 12:30 hs.</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	
	import axios from '~/plugins/axios'
	import VueSlickCarousel from 'vue-slick-carousel'
  	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  	// optional style for arrows & dots
  	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	export default {
		components: { VueSlickCarousel },
		head(){
          return {
	            title: 'Toyota Derka y Vargas | Servicios',
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
	            return 'Toyota Derka y Vargas | Servicios';
	          },
	          description() {
	            return 'Lista de precios por modelo. Servicios de 10K, 20K, 30K, 40K,50K, 60K, 70K, 80K, 90K, 100K';
	          },
	          url() {
	            return 'https://derkayvargas.com/servicios-y-accesorios/servicios';
	          },
	          image() {
	            return 'https://test.derkayvargas.com/logo-og.jpg';
	          },
	          type() {
	            return 'website';
	          },
	    },
        data(){
        	return {
        		modelos: [],
        		sucursales: [],
        		baseUrl: process.env.baseUrl,
        		sliderConfig:{
			        			"centerMode": true,
			  					"centerPadding": "60px",
			  					"lazyLoad": "ondemand",
							  	"dots": true,
							  	"focusOnSelect": true,
							  	"infinite": true,
							  	"speed": 500,
							  	"slidesToShow": 3,
							  	"responsive": [
							  		{
								      "breakpoint": 1200,
								      "settings": {
							        		"slidesToShow": 3,
								      	}
								    },
								    {
								      "breakpoint": 992,
								      "settings": {
									        "slidesToShow": 2,
								      }
								    },
								    {
								      "breakpoint": 768,
								      "settings": {
									        "slidesToShow": 1,
									        "dots": false,
								      	}
								    },
								    {
								      "breakpoint": 576,
								      "settings": {
									        "slidesToShow": 1,
									        "centerPadding": "0px",
									        "dots": false,
								      	}
								    }
							  	]
							}
        	}
        },
        mounted(){
        	this.listaDePrecios();
        	this.getSucursales();
        },
        methods:{
        	listaDePrecios(){
        		axios
	        		.get('/posventa/lista-de-precios')
	        		.then( res =>{
	        			this.modelos = res.data.data;
        			})
	        		.catch(err=>{
	        			console.log(err)
	        		})

        	},
        	getSucursales(){
		    	axios
		    	.get('/sucursales-posventa')
		    	.then(res=>{
		    		console.log(res);
		    		this.sucursales = res.data.data;
		    	})

		    }
        }
    }
</script>

<style lang="scss">
	.pricing-1 {
	    text-align: center;
	    padding: 20px;
	    margin-bottom: 20px;
	}
	.pricing-1 .title {
	    color: #3f3f3f;
	    font-size: 22px;
	    font-weight: 600;
	}
	.pricing-1 .wrapper-img {
		height: 125px;
	}
	.pricing-1 .content {
	    border-bottom: 1px solid #eaeaea;
	}
	.pricing-1 .content table{
	  margin-bottom: 0px;
	}
	.pricing-1 .content .table-pricing td .price{
	  color: $dark; 
	}
	.pricing-1 {
	    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	    border: solid 1px $ligth_2;
	}

	.bg-image-service{
		background: url('/turno-service-toyota.jpg');
		background-position: right;
	}

	.h-300{
		height: 300px;
	}
</style>