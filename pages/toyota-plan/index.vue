<template>
	<div>
		<SliderComponent :data="{slide_id: 1}" />

		<div class="wrapper">

			<div class="container" v-if="displaySkeleton">
				<div class="section">
					<div class="skeleton skeleton-p w-50 mt-5"></div>
					<div class="skeleton skeleton-title w-75 mt-2"></div>
					<div class="w-100 mt-5 d-flex justify-content-center flex-column">
						<div class="w-100 skeleton skeleton-body"></div>
						
						<div class="w-100 skeleton skeleton-title mt-2"></div>
						<div class="w-100 skeleton skeleton-title"></div>
						<div class="w-100 skeleton skeleton-title"></div>
					</div>
				</div>

				<div class="section">
					<div class="skeleton skeleton-p w-50 mt-5"></div>
					<div class="skeleton skeleton-title w-75 mt-2"></div>

					<div class="row mt-5">
						<div class="col-12 col-lg-6">
							<div class="skeleton skeleton-body w-100"></div>
						</div>
						<div class="col-12 col-lg-6">
							<div class="skeleton skeleton-body w-100"></div>
						</div>
					</div>
				</div>
			</div>

			<section class="section animate-fade-in" v-if="!displaySkeleton">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="col-11 col-md-12">
							<div class="title-wrapper">
								<span>¡Tenemos un plan para vos!</span>
								<h1>Accedé a un Toyota de la forma más coveniente</h1>
							</div>

							<div class="listado-planes my-5">
								<VueSlickCarousel :arrows="true" :dots="true" v-if="planes.length" v-bind="sliderConfig">
							      	<div class="vehicle-item" v-for="(modelo, ix) in planes" :key="ix">
								      <div class="vehicle-content">
								      	<div>
								      		<div class="vehicle-image">
								      			<img :src="baseUrl+modelo.image" class="w-100">
								      		</div>
								      		<div class="vehicle-footer">
								      			<span class="d-block text-center fs14">Modalidad {{modelo.modalidad}}</span>
								      			<span class="title d-block pb-0"> {{modelo.modelo}} {{ modelo.version }}</span>
								      			<div class="links">
								      				<a href="#" 
								      				    
								      				   class="text-center btn btn-link"
								      				   @click.prevent="openModalCuotas('#modal'+modelo.slug)">
								      					Ver cuotas-
								      				</a>							      			
								      			</div>
								      		</div>
								      	</div>
								      </div>
							  		</div>
							    </VueSlickCarousel>
							</div>

							<div v-for="(modelo, ix) in planes" :key="ix" :id="'modal'+modelo.slug" class="modal" role="dialog">
							  <div class="modal-dialog modal-lg">
							    <!-- Modal content-->
							    <div class="modal-content" >
							      <div class="modal-body">
									  <h3 class="text-center">{{modelo.modelo}} {{modelo.version}} </h3>
									<table class="table table-hover table-bordered">
									    <tbody>
									      <tr>
									        <th>Modalidad</th>
									        <td>{{modelo.modalidad}}</td>
									      </tr>
									      <tr>
									        <th>Plazo</th>
									        <td>84 Cuotas</td>
									      </tr>
									    </tbody>
								  	</table>
								  	<div class="table-responsive">
								        <table class="table table-hover  table-detal-plan">
										    <thead>
										      <tr style="background-color: black">
										        <th v-for="(cuota,ix) in modelo.cuotas" :key="ix" class="text-center" style="color: white; font-weight: bold;">{{cuota.cuota}}</th>
										      </tr>
										    </thead>
										    <tbody>
										      <tr>
										        <td v-for="(cuota,ix) in modelo.cuotas" :key="ix" class="text-center" style="font-weight: bold;">$ {{cuota.valor}}</td>
										      </tr>
										    </tbody>
									  	</table>
								  	</div>
								  	<div class="pl-2" style="border-left: 5px solid #e81f39;">
										<p>Integración Mínima 24 Cuotas</p>	
										<p>Ver más info y legales en <a href="https://www.toyota.com.ar/financiacion/plan-de-ahorro">toyota.com.ar/financiacion/plan-de-ahorro</a></p>
										<p>Vigencia 01 de Enero 2021</p>
									</div>
							      </div>
							      <div class="modal-footer">
							        <button type="button" class="btn btn-default" data-dismiss="modal">CERRAR</button>
							      </div>
							    </div>
							  </div>
							</div>

						</div>
					</div>
				</div>
			</section>

			<section class="section animate-fade-in" v-if="!displaySkeleton">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="title-wrapper">
								<span>Planes avanzados y adjudicados</span>
								<h1>Oportunidades</h1>
							</div>
						</div>
					</div>

					<div id="planesAvanzadosAdjudicados">
						<div class="row">
							<div class="col-12 col-md-6">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Avanzados</h2>
										<p>Tenemos a disposición planes de ahorro con avance de cuotas listos para ser licitados.</p>
										<nuxt-link :to="'/toyota-plan/oportunidades/avanzados'" tag="a" > Ver listado -</nuxt-link>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Adjudicados</h2>
										<p>Si querés subirte ya a tu nuevo Toyota, consultá por nuestros planes adjudicados.</p>
										<nuxt-link :to="'/toyota-plan/oportunidades/adjudicados'" tag="a" > Ver listado -</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="section animate-fade-in" v-if="!displaySkeleton">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="title-wrapper">
								<span>Estamos aquí para asesorarte</span>
								<h1>Nuestro equipo</h1>
							</div>
						</div>
					</div>

					<div class="row d-flex justify-content-center mb-4">
						<div class="col-11 col-lg-12">
							<h3 class="mb-4 font-weight-light">Ventas</h3>
							<VueSlickCarousel :arrows="true" :dots="false" v-if="teamVentas.length" v-bind="sliderConfig">
							      	<div class="team-item" v-for="(item, ix) in teamVentas" :key="ix">
								      <div class="team-content px-5">
								      		<div class="team-image">
								      			<img :src="baseUrl+'/imagenes/tpa/team/'+item.avatar" class="w-100">
								      		</div>
								      		<div class="team-footer">
								      			<span class="title"> {{item.nombre}}</span>
								      			<span class="text-muted d-block mb-2"><i class="fas fa-map-marker-alt"></i> {{item.sucursal}} </span>
								      			<span class="text-muted d-block"><i class="fab fa-whatsapp"></i> {{item.telefono}}</span>
								      		</div>
								      </div>
							  		</div>
							    </VueSlickCarousel>
						</div>
					</div>

					<div class="row d-flex justify-content-center mb-4">
						<div class="col-11 col-lg-12">
							<h3 class="mb-4 font-weight-light">Administración</h3>
							<VueSlickCarousel :arrows="true" :dots="false" v-if="teamAdministracion.length" v-bind="sliderConfig">
							      	<div class="team-item" v-for="(item, ix) in teamAdministracion" :key="ix">
								      <div class="team-content px-5">
								      		<div class="team-image">
								      			<img :src="baseUrl+'/imagenes/tpa/team/'+item.avatar" class="w-100">
								      		</div>
								      		<div class="team-footer">
								      			<span class="title"> {{item.nombre}}</span>
								      			<span class="text-muted d-block mb-2"><i class="fas fa-map-marker-alt"></i> {{item.sucursal}} </span>
								      			<span class="text-muted d-block"><i class="fab fa-whatsapp"></i> {{item.telefono}}</span>
								      		</div>
								      </div>
							  		</div>
							    </VueSlickCarousel>
						</div>
					</div>
				</div>
			</section>

			<section class="section animate-fade-in" v-if="!displaySkeleton">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-6">

							<div class="text-center">
								<p>Consultá por un plan de ahorro,un asesor se pondrá en contacto con usted a la brevedad.</p>
							</div>
							<ContactAreaTPAComponent />
						</div>

						<div class="col-12 col-lg-6">
							<FacebookFanPageTPA />
						</div>
					</div>
				</div>
			</section>

		</div>
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
	            title: 'Toyota Derka y Vargas | Toyota Plan',
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
	            return 'Toyota Derka y Vargas | Toyota Plan';
	          },
	          description() {
	            return 'La forma más conveniente de acceder a tu Toyota. Encontrá el Plan De Ahorro ideal para vos';
	          },
	          url() {
	            return 'https://derkayvargas.com/toyota-plan';
	          },
	          image() {
	            return 'https://derkayvargas.com/logo-og.jpg';
	          },
	          type() {
	            return 'website';
	          },
	    },
        data(){
        	return {
        		displaySkeleton: true,
        		planes: [],
        		sliderConfig:{
							  "speed": 500,
							  "dots": true,
							  "autoplay": true,
							  "infinite": false,
							  "focusOnSelect": true,
							  "slidesToShow": 4,
							  "slidesToScroll": 1,
							  "touchThreshold": 5,
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
									        "slidesToShow": 2,
									        "dots": false,
								      	}
								    },
								    {
								      "breakpoint": 576,
								      "settings": {
									        "slidesToShow": 1,
									        "dots": false,
								      	}
								    }
							  	]
							},
				teamVentas: [],
				teamAdministracion: [],
				invalidName: false,
				invalidNameText: '',
				invalidPhone: false,
				invalidPhoneText: '',
				invalidLocalidad: false,
				invalidLocalidadText: '',
				invalidMessage: false,
				invalidMessageText: '',
				baseUrl: process.env.baseUrl,
        	}
        },
        mounted(){
        	this.getTeam();
        	var self = this;
        	setTimeout(function(){
				self.displaySkeleton = false;
			}, 3000);
			this.getPlanesVigentes();
        },
        methods:{
        	getTeam(){
        		axios
        		.get('/team-tpa')
        		.then(res=>{

        			var team = res.data.data.sort( (a,b) => a.orden - b.orden )

        			team.forEach(element => {
        				if (element.perfil == 'Asesor de Ventas') {
        					this.teamVentas.push(element);
        				}else{
        					this.teamAdministracion.push(element);
        				}
        			});
        		})
        	},
        	getPlanesVigentes(){
        		axios
	        		.get('/plan-de-ahorro/planes-vigentes')
	        		.then(res=>{
	        			this.planes = res.data.data
	        		})
        	},
        	openModalCuotas(modalId){
        		$(modalId).modal('toggle');
        	}
        }
    }
</script>

<style lang="scss" scoped>
	.fs14{
		font-size: 14px;
	}
	.box{
		padding: 1.7rem;
	    box-sizing: border-box;
	    width: 100%;
	    border-radius: 6px;
	    -webkit-backdrop-filter: blur(4px);
	    backdrop-filter: blur(4px);
	    box-shadow: 10px 35px 50px 0 rgba(0,0,0,.1);
	    background-color: rgba(55,55,55,.6);
	    color: #fff;
	    transition: all .4s ease-in-out;
	}
	.box:hover{
	    background-color: rgba(55,55,55,.8);
	}
	#planesAvanzadosAdjudicados a{
		font-weight: 700;
		color: $ligth;
	}
	.box-background{
		background: url(https://www.toyota.com.ar/storage/contents/KFAT5HKKgW.png);
		background-position: left;
	}

	.team-image img{
		border-radius: 6px;
	}
	.team-content .team-footer .title {
	    font-size: 20px;
	    color: #080808;
	    margin-bottom: 10px;
	    display: inline-block;
	    width: 100%;
	    font-weight: 700;
	}
	.team-content .team-footer{
	    padding: 10px;
	}

	.vehicle-footer .links{
		padding-top: 15px;
		text-align: center;
	}
	.vehicle-footer .links a{
		color: $primary;
		font-weight: bold;
	}
	@media only screen and (max-width: 576px) and (min-width: 400px){
		.vehicle-content .vehicle-footer {
		    margin-top: 100px !important;
		}
	}
</style>