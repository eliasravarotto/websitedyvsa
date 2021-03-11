<template>
	<div class="wrapper">
		
		<div class="container">
			<div class="title-wrapper">
				<span>Equipá tu Toyota y dale la exclusividad que se merece</span>
				<h1>Accesorios</h1>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-12 d-flex justify-content-start align-items-center flex-wrap">
					<span class="total-vehicles d-block my-1"> {{ accesorios.length }} Accesorios encontrados</span>
					<ul class="list-inline my-1">
						<template v-for="(value, ix) in filterApplied">
							<li class="list-inline-item mr-4" :key="ix" v-if="value!=null">
								<a href="#" @click.prevent="removeFilter(ix)">
									<i class="fas fa-times"></i>
									{{value | getModelo(modelos)}}
								</a>
							</li>
						</template>
					</ul>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-12">
					<form class="form-inline">
					  <div class="form-group mr-2 mb-2">
					  	<label class="my-1 mr-2">Filtrar por</label>
					    <select class="form-control form-control-sm" @change="filterData()" v-model="filterApplied.modelo_id" :disabled="status==='sendingRequest'">
					    	<option :value="null">Modelo Todos</option>
					    	<option v-for="(m,ix) in modelos" :value="m.id" :key="ix"> {{m.nombre}} </option>
					    </select>
					  </div>
					</form>
				</div>
			</div>
		</div>

		<section v-if="accesorios.length" class="section animate-fade-in">
			<div class="container">
				<div class="row d-flex justify-content-center justify-content-md-start">
					<template v-for="accesorio in accesorios">
						<div class="col-10 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center" :key="accesorio.id">
							<div class="vehicle zoom-div">
								<div class="vehicle-image-wrapper">
									<img v-if="accesorio.fotos.length" v-lazy="baseUrl+accesorio.fotos[0].public_path" @click.prevent="showImagesAccesorio(accesorio.fotos)">
									<img v-else v-lazy="'no-image-aviable.png'">
								</div>
								<div class="vehicle-detail">
									<span class="title" style="min-height: 60px;">{{ accesorio.nombre }}</span>
									
									<div class="custom-divider"></div>
									
									<div class="price-wrapper w-100 d-flex justify-content-between align-items-center">
										<div class="price-text">Precio</div>
										<div class="price">{{ accesorio.precio | price }} </div>
									</div>
									
									<div class="custom-divider"></div>
								</div>
								<div class="contact-media d-flex justify-content-between">
									<span class="d-block">Consultar</span>
									<ul class="list-inline mb-0">
										<!-- <li class="list-inline-item"><a class="mail" href="#"><i class="far fa-envelope"></i></a></li> -->
										<li class="list-inline-item">
											<a class="whatsapp" 
											   :href="'https://wa.me/5493624013577?text=Hola%20me%20interesa%20el%20accesorio%20'+accesorio.nombre.replace(' ', '%20')" 
											   target="_blank">
											   <i class="fab fa-whatsapp"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</section>

		<light-box
	        ref="lightbox"
	        :media="media"
	        :show-caption="false"
	        :show-light-box="false"
	        
	      />

	</div>
</template>

<script>
	
	import axios from '~/plugins/axios'
	import siteLoading from 'static/spiner-loading.gif'
	
	export default {
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
	            return 'Toyota Derka y Vargas | Accesorios';
	          },
	          description() {
	            return 'Accesorios Originales para tu Toyota.';
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
        		media: [{}],
        		modelos: [],
        		accesorios: [],
        		baseUrl: process.env.baseUrl,
        		filterApplied: { modelo_id: null},
        		status: '',
        	}
        },
        mounted(){
        	this.getModelos();
        	this.getAccesorios();
        },
        filters: {
		  getModelo: function (value, modelos) {
			const result = modelos.filter(modelo => modelo.id == value);

			if (result.length > 0)
				return result[0].nombre;

			return {}
		  }
		},
        methods:{
        	removeFilter(ix){
		    	this.filterApplied.[ix] = null
		    	this.filterData();
        	},
        	getModelos(){
        		axios
	        		.get('/modelos')
	        		.then( res =>{
	        			//Ordenar
	        			this.modelos = res.data.data.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
        			})
	        		.catch(err=>{
	        			alert(err)
	        		})
        	},
        	getAccesorios(url = '/accesorios?'){
        		axios
	        		.get(url)
	        		.then( res =>{
	        			this.accesorios = res.data.data;
        			})
	        		.catch(err=>{
	        			alert(err)
	        		})
        	},
        	filterData(){
        		let url = '/accesorios?';
				for (var [key, value] of Object.entries(this.filterApplied)) {
				    if (value) {
				    	url += '&'+key+'='+ value;
				    }
				}

				this.accesorios = [];

				this.getAccesorios(url);
        	},
        	showImagesAccesorio(images){
	            if (images.length > 0) {

	        		this.media = [];
	        		images.forEach(img => {
		                var m = {};
		                m.thumb = this.baseUrl+img.public_path;
		                m.src = this.baseUrl+img.public_path;
		                this.media.push(m);
		            });

		            this.openGallery(0);
	            }
        	},
        	openGallery(index) {
      			this.$refs.lightbox.showImage(index)
    		}
        }
    }
</script>