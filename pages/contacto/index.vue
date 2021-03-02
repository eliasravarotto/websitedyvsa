<template>
	<div class="wrapper">
		<div class="container">
			<div class="title-wrapper">
				<h1 class="text-center">Contacto</h1>
			</div>
			<div class="row">
				<div class="col-12 col-lg-6 mb-5">
					<div class="text-center">
						<p>Dejanos tus datos y estaremos en contacto con usted a la brevedad.</p>
					</div>
					<div id="contact-form">
						<form action="#" method="POST" role="form" autocomplete="off" class="w-100" @submit.prevent="onSubmit">
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="text" 
											   v-model="message.name" 
											   name="cliente" 
											   placeholder="Apellido y Nombre" 
											   :class="{'custom-input-text form-control':true, 'is-invalid' : invalidName}"> 
										<label for="cliente" class="label-custom-input-text"><i class="fas fa-user"></i></label>
										<div class="invalid-feedback">{{ invalidNameText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="number" 
											   v-model="message.phone" 
											   name="telefono" 
											   placeholder="Teléfono" 
											   :class="{'custom-input-text form-control':true, 'is-invalid' : invalidPhone}"> 
										<label for="telefono" class="label-custom-input-text"><i class="fas fa-phone-alt"></i></label>
										<div class="invalid-feedback">{{ invalidPhoneText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="email" 
										       v-model="message.email" 
										       name="email" 
										       placeholder="Correo electrónico" 
										       :class="{'custom-input-text form-control':true, 'is-invalid' : invalidEmail}"> 
										<label for="email" class="label-custom-input-text"><i class="fas fa-envelope"></i></label>
										<div class="invalid-feedback">{{ invalidEmailText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<select v-model="message.sucursal" 
												name="sucursal" 
												:class="{'custom-input-text form-control':true, 'is-invalid' : invalidSucursal}">
											<option value="">Seleccione una Sucursal</option>
											<option value="Sáenz Peña">Sáenz Peña</option> 
											<option value="Resistencia">Resistencia</option> 
											<option value="Charata">Charata</option> 
											<option value="Villa Ángela">Villa Ángela</option>
										</select>
										<label for="sucursal" class="label-custom-input-text"><i class="fas fa-map-marker-alt"></i></label>
										<div class="invalid-feedback">{{ invalidSucursalText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<textarea v-model="message.message" 
												  name="message" 
												  :class="{'form-control custom-input-text label-custom-input-text-area':true, 'is-invalid' : invalidMessage}"></textarea>
											<label for="message" class="label-custom-input-text"><i class="fas fa-pen"></i>
										</label>
										<div class="invalid-feedback">{{ invalidMessageText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-5 d-flex align-items-center mt-3">
									<recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
									<button :disabled="status==='submitting'" type="submit" class="button button-dark btn-block">
										<i class="fas fa-paper-plane"></i> ENVIAR
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-12 col-lg-6 mb-5" id="sucursales">
					<div class="text-center">
						<p>Acercate a cualquiera de nuestros puntos de venta.</p>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="col-10 carouselSucursales">
							<VueSlickCarousel class="animate-fade-in" v-if="sucursales.length" v-bind="sliderSucursalesConfig">
								<div class="w-100 sucursal" v-for="sucursal in sucursales" :key="sucursal.sucursal">
									<img class="w-100 sucursal-img" :src="sucursal.image">
									<div class="w-100 px-4 py-4 sucursal">
										<h3 class="mb-4 sucursal-titile text-uppercase">{{ sucursal.sucursal }}</h3>
										<p class="sucursal-item">
											<span class="icon"><i class="fas fa-map-marker-alt"></i></span>
											{{ sucursal.direccion }}
										</p>
										<p class="sucursal-item">
											<span class="icon"><i class="fas fa-phone-alt"></i></span>
											<span class="phone" v-for="(tel, i) in sucursal.telefonos" :key="i+'Tel'"> 
												<span class="mx-1" v-if="i>0">|</span> <b>{{ tel }} </b>
											</span>
										</p>
									</div>
								</div>
							</VueSlickCarousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '~/plugins/axios'
	import VueSlickCarousel from 'vue-slick-carousel'
  	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  	export default {
  		head(){
	          return {
	            title: this.title,
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
	            return 'Toyota Derka y Vargas | Contacto';
	          },
	          description() {
	            return 'Toyota Derka y Vargas - Concesionario Oficial Toyota en Chaco - Datos de contacto. Casa Central Sáenz Peña, Sucursal Resistencia, Sucursal Charata, Sucursal Villa Angela.';
	          },
	          url() {
	            return 'https://derkayvargas.com/contacto';
	          },
	          image() {
	            return 'https://test.derkayvargas.com/logo-og.jpg';
	          },
	          type() {
	            return 'website';
	          },
	    },
		components: { 
			VueSlickCarousel
		},
        data(){
        	return {
        		sucursales: [],
        		sliderSucursalesConfig:{
							  "speed": 1200,
							  "dots": false,
							  "infinite": true,
							  "autoplay": true,
							  "slidesToShow": 1,
							  "slidesToScroll": 1,
							  "touchThreshold": 5,
							  "focusOnSelect": true,
							  "autoplaySpeed": 8000
							},
				message: { sucursal: '' },
				status: '',
				invalidName: false,
				invalidNameText: '',
				invalidPhone: false,
				invalidPhoneText: '',
				invalidEmail: false,
				invalidEmailText: '',
				invalidSucursal: false,
				invalidSucursalText: '',
				invalidMessage: false,
				invalidMessageText: '',
        	}
        },
        mounted(){
        	this.getSucursales();
        },
        methods:{
        	async onSubmit() {
		      try {
		        const token = await this.$recaptcha.getResponse()
		        await this.$recaptcha.reset()
		      } catch (error) {
		        // eslint-disable-next-line no-console
		        console.log('Login error:', error)
		      }
		    },
		    onSuccess(token){
		    	const self = this;
				this.status = "submitting";
				this.message.from = 'contacto';

			 	axios
	        		.post('/message', self.message)
	        		.then(res=>{
	        			notifier.show('Mensaje Enviado.' , 'Gracias por comunicarte con nosotros, estaremos en contacto con usted a la brevedad.', 'success', '/success.png', 30000);
	        			this.resetValidationForm();
	        			this.message = { sucursal: '' };
	        		})
	        		.catch(error=>{
	        			this.resetValidationForm();
	        			if (error.response.data.code == 422) {
				          if (error.response.data.error.name){
				          	this.invalidName = true;
				          	this.invalidNameText = error.response.data.error.name[0];
				          }
				          if (error.response.data.error.phone){
				          	this.invalidPhone = true;
				          	this.invalidPhoneText = error.response.data.error.phone[0];
				          }
				          if (error.response.data.error.email){
				          	this.invalidEmail = true;
				          	this.invalidEmailText = error.response.data.error.email[0];
				          }
				          if (error.response.data.error.sucursal){
				          	this.invalidSucursal = true;
				          	this.invalidSucursalText = error.response.data.error.sucursal[0];
				          }
				          if (error.response.data.error.message){
				          	this.invalidMessage = true;
				          	this.invalidMessageText = error.response.data.error.message[0];
				          }
				        }else{
				        	notifier.show('Ups! Algo salió mal.' , 'Por favor intente nuevamente más tarde.', 'danger', '/danger.png', 30000);
				        	alert('Ups, algo salió mal. Por favor intente nuevamente más tarde.')
				        }
	        		})
		    },
		    onExpired() {
		      console.log('Expired')
		    },
		    onError(error) {
		      console.log('Error happened:', error)
		    },
		    resetValidationForm(){
		    	this.status = '';

		        this.invalidName = false;
	          	this.invalidNameText = '';
	          	this.invalidPhone = false;
	          	this.invalidPhoneText = '';
	          	this.invalidEmail = false;
	          	this.invalidEmailText = '';
	          	this.invalidSucursal = false;
	          	this.invalidSucursalText = '';
	          	this.invalidMessage = false;
	          	this.invalidMessageText = '';
		    },
		    getSucursales(){
		    	axios
	        		.get('/sucursales-ventas')
	        		.then( res =>{
	        			this.sucursales = res.data.data
	        			console.log(res.data.data)
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
	.validate-input {
    	position: relative;
	}
	
	.sucursal .sucursal-titile{
		color: $dark
	}
	.sucursal .sucursal-item{
		color: $dark
	}
	.sucursal-item .icon{
		width: 25px;
		height: 25px;
    	background-color: $secondary;
    	display: inline-block;
    	text-align: center;
    	color: white;
    	margin-right: 7px;
	}
</style>