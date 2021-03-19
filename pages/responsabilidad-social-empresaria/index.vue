<template>
	<div class="wrapper animate-fade-in">

		<div class="container">
			<div class="title-wrapper">
				<span>Construyamos juntos la mejor comunidad</span>
				<h1>Responsabilidad Social Empresarial</h1>
			</div>

			<div class="row">
				<div class="col">
					<p class="text-justify">La RSE y el desarrollo sustentable para una empresa significan adoptar estrategias de negocio que cumplan con las necesidades de la organización y sus accionistas, al tiempo que gestionan sus impactos positivos y negativos en el ambiente y en la sociedad. Las empresas que logren involucrarse en los asuntos y actividades relacionadas con su comunidad serán capaces de demostrar que son un contribuyente responsable con el futuro del desarrollo social.</p>
					<a class="btn btn-link" href="https://www.toyota.com.ar/acerca-de-toyota/ciudadania-corporativa" target="_blank">Leer más</a>
				</div>
			</div>
		</div>

		<DividerSectionComponent />

		<div class="container">
			<div class="row d-flex justify-content-center mb-5 py-2">
				<div class="col-11 col-md-6">
					<img class="img-fluid" v-lazy="'https://derkayvargas.com/imagenes/rse/imagen-firmas.png'">
				</div>
				<div class="col-11 col-md-6">
					<h2>Mensaje de Toyota Argentina en el Acto de Lanzamiento del Programa RSE Concesionarios</h2>
					<p class="text-justify mt-3">El futuro de las empresas en los próximos años exige abordar el desafío de interrelacionar los objetivos de triple impacto: ambiental, social y económico. Los programas de responsabilidad social empresaria (RSE) se integran cada vez más al corazón del negocio. En este mundo globalizado ya no se juzga el éxito empresarial sólo con indicadores financieros; los valores intangibles como la reputación, la ética y la responsabilidad . . .</p>
					<nuxt-link class="btn btn-link" to="/entradas/mensaje-de-toyota-argentina-en-el-acto-de-lanzamiento-del-programa-rse-concesionarios">Leer más</nuxt-link>
				</div>
			</div>

			<div class="row d-flex justify-content-center mt-5 py-2">
				<div class="col-11 col-md-6">
					<h2>Programa RSE Derka y Vargas 2018/2021</h2>
					<p class="text-justify mt-3">PALABRAS de EDUARDO FREDY VARGAS (Presidente Derka y Vargas S.A.): -"Buenas noches y bienvenidos a todos lo presentes, autoridades, legisladores, funcionarios de gobierno y de Toyota Argentina, representantes de organizaciones de la sociedad civil, directivos y personal de nuestra empresa, familiares, amigos. Nos convoca hoy una fecha especial que nos relaciona con la comunidad desde otro lugar, como hacedores y protagonistas del cambio al . . .</p>
					<nuxt-link class="btn btn-link" to="/entradas/programa-rse-derka-y-vargas-20182021">Leer más</nuxt-link>
				</div>
				<div class="col-11 col-md-6 d-flex justify-content-center">
					<img class="img-fluid" v-lazy="'https://derkayvargas.com/imagenes/rse/rsedyv1.jpg'">
				</div>
			</div>
		</div>

		<DividerSectionComponent />

		<div class="container">
			<ul class="list-group list-group-flush">
		      <li class="list-group-item" v-for="post in posts">
		          <div class="row d-flex align-items-center">
		              <div class="col-xs-12 col-md-3">
		                  <img v-if="post.image != null" v-lazy="baseUrl+post.image.public_path" class="img-fluid">
		                  <img v-else v-lazy="'/imagenes/default.png'" class="img-fluid">
		              </div>
		              <div class="col-xs-12 col-md-9">
		                    <span v-for="c in post.categories" style="font-size: 14px">{{c.name}}</span>
		                  <h4>{{ post.titulo }}</h4>
		                  <p>{{ post.contenido.substr(0, 250) + '...' }}</p>
		                  <p><nuxt-link :to="'/entradas/'+post.slug" class="btn btn-outline-black btn-round">Leer más <i class="fas fa-arrow-right"></i></nuxt-link></p>
		              </div>
		          </div>
		      </li>
		  </ul>

		  <div class="row">
		  	<div class="col">
		  		<nuxt-link to="/entradas?categorias=rse">Ver todos</nuxt-link>
		  	</div>
		  </div>

		</div>


		<DividerSectionComponent />

		<div class="container">

			<div class="title-wrapper">
				<span>Derka y Vargas</span>
				<h1>Boletines y Certificados</h1>
			</div>

			<div class="row mt-5">
				<div class="col-6 col-md-2" v-for="(image, index) in boletines" :key="index">
					<img class="img-fluid cursor-pointer" 
						 v-lazy="image.src || image.thumb"
            			 @click="openGallery(index)">
				</div>
			</div>
		</div>

		<light-box
	        ref="lightbox"
	        :media="boletines"
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
	            title: 'Toyota Derka y Vargas | Responsabilidad Social Empresarial',
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
	            return 'Toyota Derka y Vargas | Responsabilidad Social Empresarial';
	          },
	          description() {
	            return 'La RSE y el desarrollo sustentable para una empresa.';
	          },
	          url() {
	            return 'https://derkayvargas.com/responsabilidad-social-empresaria';
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
        		posts: null,
        		boletines: [{ 
							    thumb: 'https://derkayvargas.com/imagenes/rse/cert-iram.jpg',
							    src: 'https://derkayvargas.com/imagenes/rse/cert-iram.jpg',
						  	},
						  	{ 
							    thumb: 'https://derkayvargas.com/imagenes/rse/boletin-2_2020.jpg',
							    src: 'https://derkayvargas.com/imagenes/rse/boletin-2_2020.jpg',
						  	}],
        		baseUrl: process.env.baseUrl
        	}
        },
        mounted(){
        	this.getPosts();
        },
        methods:{
        	getPosts(){
        		var _this = this;
        		var query = 'categorias=rse';
        		axios
        			.get('/entradas?'+query)
	        		.then( res =>{
	        			setTimeout(function(){
	        				_this.posts = res.data.data.slice(0,5);
	        			}, 2500);
	        			console.log(res)
        			})
	        		.catch(err=>{
	        			console.log(err)
	        		})
        	},
        	openGallery(index) {
      			this.$refs.lightbox.showImage(index)
    		}
        }
    }
</script>