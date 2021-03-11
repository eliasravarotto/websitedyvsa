<template>
	<section>
		<div class="container">
			
			<div class="title-wrapper">
				<span>Galería de Vehículos</span>
				<h1>Modelos Destacados</h1>
			</div>
			
			<div class="row d-flex justify-content-center">
				<div class="col-11 col-md-12">
					<VueSlickCarousel :arrows="true" :dots="true" v-if="modelos.length" v-bind="sliderConfig">
				      	<div class="vehicle-item" v-for="(modelo, ix) in modelos" :key="ix">
					      <div class="vehicle-content">
					      	<nuxt-link :to="'modelos/'+modelo.slug">
					      			<img v-lazy="baseUrl+'/imagenes/logos/logohibrido.jpg'" v-if="modelo.es_hibrido" class="img-es-hibrido">
					      		<div class="vehicle-image">
					      			<img v-lazy="baseUrl+modelo.img_modelo" class="w-100">
					      		</div>
					      		<div class="vehicle-footer">
					      			<span class="title"> {{modelo.nombre}} </span>
					      			<ul class="ul-features list-unstyled"></ul>
					      			<span v-if="modelo.versiones[0].moneda == 'ARS'" class="text-muted text-center d-block">Desde <b>${{modelo.versiones[0].precio}}</b></span>
					      			<span v-if="modelo.versiones[0].moneda == 'USD'" class="text-muted text-center d-block">Desde <b>USD ${{modelo.versiones[0].precio}}</b></span>
					      		</div>
					      	</nuxt-link>
					      </div>
				  		</div>
				    </VueSlickCarousel>
				</div>
			</div>
		    
		    <div class="row d-flex justify-content-center">
				<div class="col-12">
		    		<div class="w-100 mt-4 text-center">
		    			<nuxt-link class="button button-dark button-sm mt-5" tag="a" :to="'/modelos'">VER TODOS</nuxt-link>
		    		</div>
	    		</div>
    		</div>
		</div>
	</section>
</template>


<script>
	
	import axios from '~/plugins/axios'
	import VueSlickCarousel from 'vue-slick-carousel'
  	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  	// optional style for arrows & dots
  	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	export default {
		components: { VueSlickCarousel },
        data(){
        	return {
        		baseUrl: process.env.baseUrl,
        		modelos: [],
        		templateCaroucel: '',
        		sliderConfig:{
							  "dots": true,
							  "focusOnSelect": true,
							  "infinite": false,
							  "speed": 500,
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
							}
        	}
        },
        mounted(){
        	this.getModelosDestacados();
        },
        methods:{
        	getModelosDestacados(){
        		axios
	        		.get('/modelos?destacado=1&activo=1')
	        		.then( res =>{
	        			this.modelos = res.data.data;
        			})
	        		.catch()
        	}
        }
    }
</script>

<style lang="scss">
	.title-wrapper{
		padding-bottom: 1.9rem;
	}

	

	.slick-dots{
		position: relative
	}
	.slick-dots li button:before {
		font-size: 12px
	}

	.slick-prev:before, .slick-next:before{
		font-family: "Font Awesome 5 Free"; 
		font-weight: 900; 
		color: $dark_2;
	} 
	.slick-prev:before{
		content: "\f053";
	}
	.slick-next:before{
		content: "\f054";
	}
</style>