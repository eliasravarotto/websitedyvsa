<template>
	<div class="wrapper">
		<section id="section-uct-toyota">
			<div class="container">
				<div class="row d-flex align-items-center justify-content-center">
					<div class="col-10 col-md-12">
						<div class="row d-flex align-items-center justify-content-center bg-section-uct-toyota">
							<div class="col-10 col-md-3 mb-3 px-5">
								<img v-lazy="'/uct-h-md.png'" class="img-fluid">
							</div>
							<div class="col-12 col-md-9 mb-3 text-center text-md-left">
								<h4>¿Qué es un Usado Certificado TOYOTA?</h4>
								<p>Un Usado Certificado Toyota es un vehículo que puede adquirir un cliente cuyos beneficios son los siguientes:</p>
								<ul class="list-unstyled">
									<li><i class="fa fa-check"></i> Garantía de 1 año o 20.000 km.</li>
									<li><i class="fa fa-check"></i> Vehículos que fueron atendidos en concesionarios oficiales.</li>
									<li><i class="fa fa-check"></i> 150 puntos de inspección realizados por técnicos capacitados</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</section>

		<section class="section">
			<div class="container">
				<div class="row mb-2">
					<div class="col-12 d-flex justify-content-start align-items-center flex-wrap">
						<span class="total-vehicles d-block my-1"> {{ usados.length }} Vehiculos encontrados</span>
						<ul class="list-inline my-1">
							<template v-for="(value, ix) in filterApplied">
								<li class="list-inline-item mr-4" :key="ix" v-if="value!=null && value!=true && alue!=false">
									<a href="#" @click.prevent="removeFilter(ix)">
										<i class="fas fa-times"></i>
										{{value}}
									</a>
								</li>
							</template>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<form class="form-inline">
						  <div class="form-group mr-2 mb-2">
						    <select class="form-control form-control-sm" @change="filterData()" v-model="filterApplied.marca" :disabled="status==='sendingRequest'">
						    	<option :value="null">Marca Todas</option>
						    	<option v-for="(m,ix) in marcas" :value="m" :key="ix"> {{m}} </option>
						    </select>
						  </div>
						  <div class="form-group mr-2 mb-2">
						    <select class="form-control form-control-sm" @change="filterData()" v-model="filterApplied.anio" :disabled="status==='sendingRequest'">
						    	<option :value="null">Año Todos</option>
						    	<option v-for="(a,ix) in anios" :value="a" :key="ix"> {{a}} </option>
						    </select>
						  </div>
						  <div class="form-group mr-2 mb-2">
						    <select class="form-control form-control-sm" @change="filterData()" v-model="filterApplied.color" :disabled="status==='sendingRequest'">
						    	<option :value="null">Color Todos</option>
						    	<option v-for="(c, ix) in colores" :value="c" :key="ix"> {{c}} </option>
						    </select>
						  </div>
						  <div class="form-group mr-2 mb-2">
						    <select class="form-control form-control-sm" @change="filterData()" v-model="filterApplied.transmision" :disabled="status==='sendingRequest'">
						    	<option :value="null">Transmisión Todos</option>
						    	<option value="MANUAL">MANUAL</option>
						    	<option value="AUTOMÁTICA">AUTOMÁTICA</option>
						    </select>
						  </div>
						  <div class="form-group mr-2 mb-2">
						  	<div class="form-check"> 
							  <input class="form-check-input" type="checkbox" id="defaultCheck1" @change="filterData()" v-model="filterApplied.uct">
							  <label class="form-check-label" for="defaultCheck1">
							    Usado Certificado Toyota
							  </label>
							</div>
						  </div>
						  <div class="form-group mr-2 mb-2">
						  	<button class="btn btn-light btn-sm" @click.prevent="resetFilters()" :disabled="status==='sendingRequest'"> <img v-if="status === 'sendingRequest'" src="spiner-loading.gif" height="20px;"> Limpiar filtros</button>
						  </div>
						</form>
					</div>
				</div>
			</div>
		</section>

		<section v-if="!usados.length" class="section animate-fade-in">
			<div class="container">
				<div class="row">
					<div v-for="item in [1,2,3,4]" :key="item" class="col-sm-6 col-md-6 col-lg-3 mb-5">
						<div class="w-100 skeleton skeleton-body" style="height: 180px;"></div>
						<div class="w-100 skeleton skeleton-title mt-2"></div>
						<div class="row mt-1">
							<div class="col-8">
								<div class="w-100 skeleton skeleton-title"></div>
							</div>
							<div class="col-4">
								<div class="w-100 skeleton skeleton-title"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section v-if="usados.length" class="section animate-fade-in">
			<div class="container">
				<div class="row d-flex justify-content-center justify-content-md-start">
					<template v-for="unidad in usados">
						<div class="col-10 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center" :key="unidad.id">
							<div class="vehicle zoom-div">
								<nuxt-link class="link-no-styled" :to="'/usados/'+unidad.slug">
									<div class="vehicle-image-wrapper">
										<img v-if="unidad.foto" v-lazy="baseUrl+unidad.foto.replace('public', '/storage')">
										<img v-else v-lazy="'no-image-aviable.png'">
										<img v-if="unidad.uct" v-lazy="'uct-sm.png'" class="img-uct">
										<img v-if="unidad.estado == 'RESERVADO'" v-lazy="'reservado.png'" class="img-reservado">
									</div>
									<div class="vehicle-detail">
										<span class="title">{{ unidad.marca }} {{ unidad.modelo }}</span>
										
										<div class="custom-divider"></div>
										
										<div class="d-flex lh2">
											<span class="d-block">Año {{ unidad.anio }}</span> 
											<span class="mx-3 v-divider">|</span>
											<span class="d-block">{{ unidad.km }} km.</span>
										</div>
										
										<div class="custom-divider"></div>
										
										<div class="price-wrapper w-100 d-flex justify-content-between align-items-center">
											<div class="price-text">Precio</div>
											<div class="price">{{ unidad.precio | price }} </div>
										</div>
										
										<div class="custom-divider"></div>

									</div>
								</nuxt-link>

								<div class="contact-media d-flex justify-content-between">
									<span class="d-block">Consultar</span>
									<ul class="list-inline mb-0">
										<li class="list-inline-item"><a class="mail" href="#UsadosContactAreaComponent"><i class="far fa-envelope"></i></a></li>
										<li class="list-inline-item"><a class="facebook" href="https://www.facebook.com/derkayvargas" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</section>

		<section class="animate-fade-in" v-if="noVehiclesAviable">
			<div class="container">
				<div class="alert alert-bg-light text-center" role="alert"><i class="fas fa-info-circle"></i> Por el momento no contamos con vehículos usados para la venta.</div>
			</div>
		</section>

		<section class="section">
			<div class="container" id="UsadosContactAreaComponent">
				<UsadosContactAreaComponent />
			</div>
		</section>
	</div>
</template>

<script>
	
	import axios from '~/plugins/axios'
	
	export default {
		head(){
          return {
	            title: 'Toyota Derka y Vargas | Autos Usados Multimarcas',
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
	            return 'Toyota Derka y Vargas | Autos Usados Multimarcas';
	          },
	          description() {
	            return 'Encontrá las mejores opciones en Chaco de unidades usadas en todas las marcas. Accedé a un Usado Certificado Toyota.';
	          },
	          url() {
	            return 'https://derkayvargas.com/usados';
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
        		baseUrl: process.env.baseUrl,
        		usados: [],
        		colores: [],
        		marcas: [],
        		anios: [],
        		filterApplied: { marca: null, anio: null, color: null, transmision: null, uct: null },
        		status: '',
        		noVehiclesAviable: false
        	}
        },
        mounted(){
        	this.getUsados();
        },
        methods:{
			getUsados( url = '/usados?visible=1' ){
        		var _this = this;
        		this.status = 'sendingRequest';
        		axios
        			.get(url)
	        		.then( res =>{
	        			setTimeout(function(){
        					_this.status = '';
	        				_this.usados = res.data.data;
		        			//if (!_this.marcas.length)
	        				_this.setForm();
	        				if (res.data.data.length == 0)
	        					_this.noVehiclesAviable = true;
	        			}, 2500);
        			})
	        		.catch(err=>{
	        			console.log(err)
	        		})
	        	
        	},
        	filterData(){
        		let url = '/usados?visible=1';
				for (var [key, value] of Object.entries(this.filterApplied)) {
				    if (value) {
				    	if (key=='uct') {
				    		let val = value == true ? 1 : 0;
				    		url += '&'+key+'='+ val;
				    	}else{
				    		url += '&'+key+'='+ value;
				    	}
				    }
				}

				this.usados = [];

				this.getUsados(url);
        	},
        	setForm(){
        		let colores = this.usados.map(function(u) {   return u.color;});
				let anios = this.usados.map(function(u) {   return u.anio;});
				let marcas = this.usados.map(function(u) {   return u.marca;});
				this.anios = [...new Set(anios)]
				this.colores = [...new Set(colores)]
				this.marcas = [...new Set(marcas)]
        	},
        	resetFilters(){
        		this.usados = [];
        		this.filterApplied = { marca: null, anio: null, color: null, transmision: null };
        		this.getUsados();
        	},
        	removeFilter(ix){
		    	this.filterApplied.[ix] = null
		    	this.filterData();
        	}
        }
    }

</script>

<style scoped lang="scss">
	.lh2{
		line-height: 2
	}
	.total-vehicles{
	    float: left;
	    padding-left: 15px;
	    padding-right: 30px;
	    background: url(https://www.yacopinisa.com/wp-content/plugins/automotive/images/ribbon-bg.png) top right no-repeat;
	    line-height: 36px;
	    margin-right: 12px !important;
	    font-weight: 600;
	    font-size: 14px;
	    line-height: 36px;
	    color: $dark_3
	}
	#section-uct-toyota .bg-section-uct-toyota{
		background-color: $ligth_2
	}
</style>