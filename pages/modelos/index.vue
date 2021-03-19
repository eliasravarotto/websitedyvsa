<template>
	<div class="wrapper">
		<section v-if="!modelos">
			<div class="container">
				<div class="title-wrapper">
					<h1 class="skeleton skeleton-title w-25 mb-5 d-none d-md-block d-lg-block"></h1>
					<h1 class="skeleton skeleton-title w-50 mb-5 d-md-none d-lg-none"></h1>
				</div>
				<div class="row">
					<template v-for="item in [0,1,2,3,4,5,6,7]">
						<div class="item col-sm-6 col-md-4 col-lg-3" :key="item">
							<div class="vehicle mb-5">
								<div class="w-100 d-flex justify-content-center ">
									<div class="skeleton skeleton-title w-75"></div>
								</div>
								<div class="w-100 skeleton mt-4" style="height: 100px"></div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</section>

		<section v-if="modelos">
			<div class="container">
				<div class="title-wrapper">
					<h1 class="title-sm d-inline-block">
						<span>Autos y Minivans</span>
						<div class="custom-divider mt-2"><span></span></div>
					</h1>
				</div>
				<div class="row">
					<template v-for="modelo in modelos">
						<div class="col-sm-6 col-md-4 col-lg-3" v-if="modelo.tipo_vehiculo_id == 1" :key="modelo.id">
							
							<div class="vehicle mb-5">
								<h3 class="text-center vehicle-title">{{ modelo.nombre }}</h3>
								<div class="vehicle-hb text-center">
									<span v-if="modelo.es_hibrido">Hibrido</span> 
									<img v-if="modelo.es_hibrido" :src="baseUrl+'/imagenes/logos/logohibrido.jpg'">
								</div>
								<img class="vehicle-image" :src="baseUrl+modelo.img_modelo">
								<div class="vehicle-footer">
									<nuxt-link :to="'/modelos/'+modelo.slug" class="button button-dark button-sm">Ver modelo</nuxt-link>
								</div>
							</div>

						</div>
					</template>
				</div>
			</div>
		</section>

		<section v-if="modelos" class="section">
			<div class="container">
				<div class="title-wrapper">
					<h1 class="title-sm d-inline-block">
						<span>Pickups y Comerciales</span>
						<div class="custom-divider mt-2"><span></span></div>
					</h1>
				</div>
				<div class="row">
					<template v-for="modelo in modelos">
						<div class="col-sm-6 col-md-4 col-lg-3" v-if="modelo.tipo_vehiculo_id == 2" :key="modelo.id">
							
							<div class="vehicle mb-5">
								<h3 class="text-center vehicle-title">{{ modelo.nombre }}</h3>
								<div class="vehicle-hb text-center">
									<span v-if="modelo.es_hibrido">Hibrido</span> 
									<img v-if="modelo.es_hibrido" :src="baseUrl+'/imagenes/logos/logohibrido.jpg'">
								</div>
								<img class="vehicle-image" :src="baseUrl+modelo.img_modelo">
								<div class="vehicle-footer">
									<nuxt-link :to="'/modelos/'+modelo.slug" class="button button-dark button-sm">Ver modelo</nuxt-link>
								</div>
							</div>

						</div>
					</template>
				</div>
			</div>
		</section>

		<section v-if="modelos">
			<div class="container">
				<div class="title-wrapper">
					<h1 class="title-sm d-inline-block">
						<span>SUV y CROSSOVERS</span>
						<div class="custom-divider mt-2"><span></span></div>
					</h1>
				</div>
				<div class="row">
					<template v-for="modelo in modelos">
						<div class="col-sm-6 col-md-4 col-lg-3" v-if="modelo.tipo_vehiculo_id == 3" :key="modelo.id">
							
							<div class="vehicle mb-5">
								<h3 class="text-center vehicle-title">{{ modelo.nombre }}</h3>
								<div class="vehicle-hb text-center">
									<span v-if="modelo.es_hibrido">Hibrido</span> 
									<img v-if="modelo.es_hibrido" :src="baseUrl+'/imagenes/logos/logohibrido.jpg'">
								</div>
								<img class="vehicle-image" :src="baseUrl+modelo.img_modelo">
								<div class="vehicle-footer">
									<nuxt-link :to="'/modelos/'+modelo.slug" class="button button-dark button-sm">Ver modelo</nuxt-link>
								</div>
							</div>

						</div>
					</template>
				</div>
			</div>
		</section>

		<DividerSectionComponent />

		<KintoShareComponent />
	</div>
</template>

<script>
	import axios from '~/plugins/axios'
	export default {
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
	    computed: {
	          title() {
	            return 'Toyota Derka y Vargas | Modelos';
	          },
	          description() {
	            return 'Galería de vehiculos TOYOTA. Modelos activos año '+ new Date().getFullYear();
	          },
	          url() {
	            return 'https://derkayvargas.com/modelos';
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
        		modelos: null,
        		baseUrl: process.env.baseUrl
        	}
        },
        mounted(){
        	this.getModelos();
        },
        methods:{
        	getModelos(){
        		var _this = this;
        		axios
        			.get('/modelos?activo=1')
	        		.then( res =>{
	        			setTimeout(function(){
	        				_this.modelos = res.data.data;
	        			}, 2500);
	        			console.log(res)
        			})
	        		.catch(err=>{
	        			console.log(err)
	        		})
	        	
        	},
        }
    }
</script>

<style lang="scss" scoped>
.title-sm{
	font-size: 22px;
	line-height: 1.35;
    font-weight: 400;
}

.vehicle-image{
	width: 100%
}
.vehicle{
	border: none;
	padding: 10px 25px;
	-webkit-animation: fadein 2s;
       -moz-animation: fadein 2s;
        -ms-animation: fadein 2s;
         -o-animation: fadein 2s;
            animation: fadein 2s;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
.vehicle .vehicle-title{
	margin-bottom: 0px;
}
.vehicle .vehicle-hb img{
	height: 25px;
	margin-left: 5px;
}
.vehicle .vehicle-hb span{
	font-size: 15px;
	color: $tertiary
}
.vehicle .vehicle-hb{
	margin: 5px 0px 10px 0px;
}	
.vehicle-footer{
	padding: 20px 0px;
	display: flex;
	justify-content:center;

}


@media (min-width: $breakpoint-lg) {

	.vehicle-footer .button{
		opacity: 0;
		position:absolute;
	}
	.vehicle:hover .vehicle-footer .button{
		opacity: 1;
	    -webkit-animation:linear 1;
	    -webkit-animation-name: run;
	    -webkit-animation-duration: 0.3s;
	}

	@-webkit-keyframes run {
	    0% { left: 0;}
	    50%{ left : 5%;}
	    100%{ left: 25%;}
	}
}

@media (min-width: $breakpoint-sm) {
	.vehicle .vehicle-hb{
		height: 25px;
		display: flex;
		justify-content: center;
	}	
}

</style>