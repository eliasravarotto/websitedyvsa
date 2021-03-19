<template>
	<div class="wrapper">
		<section class="section" v-if="displaySkeleton">
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-12 col-lg-6">
						<div class="skeleton skeleton-title w-75 mb-4"></div>
					</div>
				</div>
				<div class="my-4" v-for="item in [0,1,2]" :key="item">
					<div class="row">
						<div class="col-8">
							<div class="skeleton skeleton-title w-100"></div>
						</div>
						<div class="col-4">
							<div class="skeleton skeleton-title w-100"></div>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-12">
							<div class="skeleton skeleton-p w-100"></div>
							<div class="skeleton skeleton-p w-75 my-3"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="animate-fade-in" v-if="!displaySkeleton">
			<div class="container">
				<div class="text-center">
					<h1>{{ slug | capitalize }}</h1>
				</div>
			</div>
		</section>

		<section class="section animate-fade-in" v-if="!displaySkeleton">
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-12 col-sm-11 col-md-10 col-lg-6 mb-5">
						<ul class="list-group list-group-flush" v-if="planes.length">
			  				<li class="list-group-item" v-for="plan in planes" :key="plan.id">
			  					<div class="w-100 d-flex justify-content-between mb-2 plan">
			  						<div>
			  							<span class="unidad">{{ plan.plan_tpa.unidad }}</span>  <span class="modalidad">{{ plan.plan_tpa.modalidad }}</span>
			  						</div>
			  						<div class="precio-venta">
			  							{{ plan.precio_venta | price }}
			  						</div>
			  					</div>
			  					<div class="w-100">
			  						<span class="mr-2">Avance: {{ plan.avance_cuotas }} cuotas.</span>
			  						<span class="">Cuota pura: {{ plan.plan_tpa.cuota_pura | price}}</span>
			  					</div>
			  					<div class="w-100 fw300">
			  						<span>Valor en cuotas puras: {{ plan.avance_en_cuotaspura | price}}</span>
			  					</div>
			  					<div class="w-100 fw300">
			  						<span>Valor ahorrado: {{ plan.valor_ahorrado | price }}</span>
			  					</div>
			  				</li>
			  			</ul>
			  			<div v-if="!planes.length">
			  				<div class="alert alert-bg-light text-center" role="alert"><i class="fas fa-info-circle"></i> Por el momento no contamos con planes {{ slug | capitalize }} para la venta.</div>
			  			</div>
					</div>
					<div class="col-12 col-sm-11 col-md-10 col-lg-6 mb-5">
							<div class="row d-flex justify-content-center">
								<div class="col-9">
									<div class="text-center">
										<p>Realiza tu consulta y un asesor se pondrá en contacto con usted a la brevedad.</p>
									</div>
									<div>
										<ContactAreaTPAComponent />
									</div>
								</div>
							</div>
					</div>
		  		</div>
	  		</div>
		</section>
	</div>

</template>

<script>
	import axios from '~/plugins/axios'
   
    export default {
    	head(){
          return {
	            title: 'Toyota Derka y Vargas | Planes avanzados y adjudicados',
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
	            return 'Toyota Derka y Vargas | Planes avanzados y adjudicados';
	          },
	          description() {
	            return 'La forma más conveniente de acceder a tu Toyota. Tenemos a disposición planes de ahorro con avance de cuotas listos para ser licitados. Si querés subirte ya a tu nuevo Toyota, consultá por nuestros planes adjudicados.';
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
        		planes: [],
        		displaySkeleton: true,
                slug: this.$route.params.id,
            }
        },
        mounted(){
        	this.getPlanes();
        },
        methods:{
        	getPlanes(){
        		axios
	        		.get('/plan-de-ahorro/oportunidades/' + this.slug)
	        		.then(res=>{
	        			var self = this;
	        			setTimeout(function(){
							self.displaySkeleton = false;
	        				self.planes = res.data;
						}, 3000);
	        		})
	        		.catch(error=>{
                        if (error.response.data.code == 404){
                            this.$router.push({ name: 'NotFound' })
                        }else{
                        	alert("Ups! algo salió mal.")
                        }
                    })
        	}
        }
    }
</script>

<style scoped lang="scss">
	.plan .unidad{
		font-weight: 600;
		font-size: 17px;
	}
	.plan .modalidad{
		color: $tertiary;
	}
	.plan .precio-venta{
		font-weight: 600;
		color: $success;
		font-size: 17px;
	}
	.fw300{
		font-weight: 300;
	}
</style>