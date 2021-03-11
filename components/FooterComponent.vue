<template>
	<footer>
		<div class="social-media">
			<div class="container">
				<div class="row">
					<div class="col-12 text-right">
						<ul class="list-inline mb-0 social-media-list">
							<li class="list-inline-item"><a href="https://www.facebook.com/derkayvargas" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
							<li class="list-inline-item"><a href="https://www.instagram.com/toyotaderkayvargas/" target="_blank"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-content">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-4 col-lg-3">
						<div class="widget-footer">
							<div class="widget-footer-header">
								<h2>Modelos</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li v-for="item in modelos" :key="item.id">
										<a href="#">{{ item.nombre }}</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="widget-footer mt-5">
							<div class="widget-footer-header">
								<h2>Vehículos Usados</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li><nuxt-link to="/usados">Usados</nuxt-link></li>
									<li><nuxt-link to="/usados">Usados UCT</nuxt-link></li>
									<li><nuxt-link to="/usados">¿Qué es un UCT Usado Certificado Toyota?</nuxt-link></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-4 col-lg-3">
						<div class="widget-footer">
							<div class="widget-footer-header">
								<h2>Servicios y Accesorios.</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									
									<li><nuxt-link to="/servicios-y-accesorios/servicios">Servicios</nuxt-link></li>
									<!-- <li><a href="#">Mantenimiento Express</a></li> -->
									<!-- <li><a href="#">Plan de Mantenimiento</a></li> -->
									<li><nuxt-link to="/servicios-y-accesorios/accesorios">Accesorios</nuxt-link></li>
									<li><nuxt-link to="/servicios-y-accesorios#garantia">Garantía</nuxt-link></li>
									<li><a href="https:/www.toyota.com.ar/servicios-y-accesorios/recall">Recall</a></li>
								</ul>
							</div>
						</div>

						<div class="widget-footer mt-5">
							<div class="widget-footer-header">
								<h2>Turnos Online</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li><nuxt-link tag="a" :to="'/servicios-y-accesorios/servicios/solicitud-de-turno'">Turno para Servicios</nuxt-link></li>
								</ul>
							</div>
						</div>

						<div class="widget-footer mt-5">
							<div class="widget-footer-header">
								<h2>Test Drive</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li><nuxt-link to="/contacto/solicitud-test-drive">Solicitar Test Drive</nuxt-link></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-4 col-lg-3">
						<div class="widget-footer">
							<div class="widget-footer-header">
								<h2>Financiación</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li><nuxt-link to="/toyota-plan">Plan de Ahorro</nuxt-link></li>
									<li><nuxt-link to="/financiacion">Compañía Financiera</nuxt-link></li>
								</ul>
							</div>
						</div>


						<div class="widget-footer mt-5">
							<div class="widget-footer-header">
								<h2>La voz del cliente</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li><nuxt-link to="/contacto/la-voz-del-cliente">Dejanos un comentario, sugerencia o reclamo.</nuxt-link></li>
								</ul>
							</div>
						</div>

						<div class="widget-footer mt-5">
							<div class="widget-footer-header">
								<!-- <h2>RSE</h2> -->
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li><nuxt-link to="/responsabilidad-social-empresaria">Responsabilidad Social Empresaria</nuxt-link></li>
									<li><nuxt-link to="/entradas">Noticias y Novedades</nuxt-link></li>
									<li><a href="https://dyv.e.toyota.com.ar/inventory" target="_blank">Cotizador Online</a></li>
									<li><a href="https://www.toyotamobility.com.ar/" target="_blank">Kinto</a></li>
								</ul>
							</div>
						</div>

					</div>
					<div class="col-sm-12 col-md-4 col-lg-3">
						<div class="widget-footer">
							<div class="widget-footer-header">
								<h2>Contacto</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li v-for="(sucursal, ix) in sucursales" :key="ix" class="mb-3">
										<span class="font-weight-600">{{ sucursal.sucursal }}</span>
										<ul class="list-unstyled ml-2">
											<li><i class="fas fa-location-arrow"></i> {{ sucursal.direccion }}</li>
											<li>
												<i class="fas fa-phone-alt"></i>
												<span class="phone" v-for="(tel, i) in sucursal.telefonos" :key="i+'Tel'"> <span class="mx-1" v-if="i>0">|</span> {{ tel }} </span>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>

						<div class="widget-footer mt-5">
							<div class="widget-footer-header">
								<h2>Emails</h2>
								<span class="bolded-line"></span>
							</div>
							<div class="widget-footer-body">
								<ul class="list-unstyled">
									<li>ventas@derkayvargas.com.ar</li>

									<li>plandeahorro@derkayvargas.com.ar</li>

									<li>consultas@derkayvargas.com.ar</li>

									<li>gestoria@derkayvargas.com.ar</li>

									<li>posventa-charata@derkayvargas.com.ar</li>

									<li>posventa-sp@derkayvargas.com.ar</li>

									<li>posventa-resistencia@derkayvargas.com.ar</li>

									<li>rse@derkayvargas.com.ar</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-100 footer-copyright">
			<div class="container">
				<p class="text-center mb-0" style="color: white;">Copyright <i aria-hidden="true" class="fa fa-copyright"></i> 2018 - Todos los Derechos Reservados</p>
			</div>
		</div>
	</footer>
</template>

<script>
	
	import axios from '~/plugins/axios'

	export default {
        data(){
        	return {
        		modelos: [],
        		sucursales: []
        	}
        },
        mounted(){
        	this.getModelos();
        	this.getSucursales();
        },
        methods:{
        	getModelos(){
        		axios
	        		.get('/modelos?activo=1')
	        		.then( res =>{
	        			this.modelos = res.data.data
        			})
	        		.catch()
        	},
        	getSucursales(){
        		axios
	        		.get('/sucursales-ventas')
	        		.then( res =>{
	        			this.sucursales = res.data.data
        			})
	        		.catch(err=>{
	        			alert("Ups! algo salió mal");
	        			console.log(err)
	        		})
        	}
        }
    }
</script>

<style lang="scss">
	footer{
		background-color: $secondary;
	}

	.font-weight-600{
		font-weight: 600;
	}
	.bolded-line {
	    display: block;
	    margin-bottom: -1px;
	    margin-top: 15px;
	    width: 30px;
	    height: 1px;
        background-color: #fff;
	}
	.social-media {
		padding: 30px 0px;
	}
	.social-media .social-media-list li{
		margin-left: 10px;
		margin-right: 10px;
	}
	.social-media .social-media-list li a:hover{
		text-decoration: none;
	}
	.social-media .social-media-list li a{
	    position: relative;
	    border-radius: 100px;
	    border: 1px solid #d8d8d8;
	    background-color: #d8d8d8;
	    height: 46px;
	    width: 46px;
	    overflow: hidden;
	    display: flex;
	    justify-content: center;
	    align-items:center;
	    vertical-align: top;
	    transition: all .4s ease-in-out;
	}
	.social-media .social-media-list li a i{
		font-size: 20px;
		color: $dark_2;
	}
	.footer-copyright{
		background-color: $dark;
		padding: 10px;
	}
	.footer-content{
		padding: 50px 0px;
	}

	.widget-footer .widget-footer-header{
        margin-bottom: 15px;
    	border-bottom: 1px dotted rgba(255,255,255,.4);
	}
	.widget-footer .widget-footer-header h2{
		// color: $gray-ligth;
		color: $white;
		font-size: 15px;
	}

	.widget-footer .widget-footer-body ul li,
	.widget-footer .widget-footer-body ul li a{
		color: $white;
		font-size: 14px;
		line-height: 1.8rem;
	}

	@media (min-width: $breakpoint-md) {
		.social-media .social-media-list li a{
			height: 34px;
    		width: 34px;
    	}

    	.social-media .social-media-list li a i{
			font-size: 17px;
		}
	}
</style>