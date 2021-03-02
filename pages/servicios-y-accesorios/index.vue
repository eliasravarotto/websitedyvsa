<template>
	<div class="wrapper">
		<section class="animate-fade-in">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="title-wrapper">
								<span>Elegí simpre por calidad y dale a tu toyota la exclusividad que se merece.</span>
								<h1>Servicios y Accesorios</h1>
							</div>
						</div>
					</div>

					<div id="planesAvanzadosAdjudicados">
						<div class="row">
							<div class="col-12 col-md-4">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Servicios</h2>
										<p>Mantenimiento para tu Toyota. Precios Vigentes. Solicitud de turno.</p>
										<nuxt-link :to="'/servicios-y-accesorios/servicios'" tag="a" > Ver Servicios -</nuxt-link>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-4">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Accesorios</h2>
										<p>Equipá tu Toyota con accesorios originales.</p>
										<nuxt-link :to="'/servicios-y-accesorios/accesorios'" tag="a" > Ver Accesorios -</nuxt-link>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-4">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Recall</h2>
										<p>Llamado a revisión técnica. Averiguá si tu vehículo está alcanzado</p>
										<a href="https://www.toyota.com.ar/servicios-y-accesorios/recall" > Averiguar -</a>
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

		<section class="animate-fade-in" id="garantia">
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-10 col-md-12">
						<h2>Garantía</h2>
						<div class="row d-flex align-items-center justify-content-center">
							<div class="col-10 col-md-2">
								<img v-lazy="'/garantia.jpg'" class="img-fluid">
							</div>
							<div class="col-12 col-md-9">
								<p class="text-justify">Somos los primeros en confiar en nuestros vehículos, por eso ofrecemos la mejor garantía para asegurar que la experiencia de uso sea única. Nuestros vehículos Toyota cero kilómetro comercializados y entregados a partir del 1 de septiembre de 2018, gozan de una garantía sobre el vehículo por 5 años o 150.000 km (lo que ocurra primero).
Nuestros vehículos híbridos cuentan con una garantía de 8 años o 160.000km sobre los componentes del sistema: batería híbrida, inversor-convertidor y unidad electrónica de control.</p>
								<a href="https://www.toyota.com.ar/servicios-y-accesorios/garantia" target="_blank" class="btn btn-link">Leer más -</a>
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

		<NewsDyvComponent :data="{ query: query }" />

		<div class="">
			<div class="container">
				<div class="row">
					<div class="col text-center">
						<nuxt-link class="button button-dark button-sm" :to="'/entradas'+query">Ver todo -</nuxt-link>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>


<script>
	import axios from '~/plugins/axios'
	export default {
		head(){
          return {
	            title: 'Toyota Derka y Vargas | Servicios de Poseventa',
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
	            return 'Toyota Derka y Vargas | Servicios de Poseventa';
	          },
	          description() {
	            return 'Servicios y Accesorios. Garantía Toyota. Toyota Recall, llamado a revisión.';
	          },
	          url() {
	            return 'https://derkayvargas.com/servicios-y-accesorios';
	          },
	          image() {
	            return 'https://test.derkayvargas.com/logo-og.jpg';
	          },
	          type() {
	            return 'website';
	          },
	    },
		props: ['data'], // ejemplo -> data: { query: '?categorias=rse,posventa,ventas,tpa&activo=1 ... etc etc' }
        data(){
        	return {
                query: '?categorias=posventa'
        	}
        },
    }	
</script>