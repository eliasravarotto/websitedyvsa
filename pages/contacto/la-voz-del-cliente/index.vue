<template>
	<div class="wrapper">
		<div class="container">
			<div class="title-wrapper">
				<h1 class="text-center">La voz del cliente</h1>
			</div>
			<div class="row mt-md-3">
				<div class="col-12 col-lg-6 mb-5" style="min-height: 185px;">
					<!-- Estamos trabajando para continuar brindándole la mejor atención. -->
					<img class="img-fluid d-none d-md-block d-lg-block" src="/atencion-al-cliente-md.jpg">
					<img class="img-fluid d-md-none d-lg-none" src="/atencion-al-cliente.jpg">
				</div>
				<div class="col-12 col-lg-6 mb-5">
					<div class="text-center">
						<p>Podes dejar un <b>comentario</b>, <b>sugerencia</b> o <b>reclamo</b> y lo estaremos revisando a la brevedad.</p>
					</div>
					<div id="contact-form">
						<form ref="contactform" action="#" method="POST" role="form" autocomplete="off" class="w-100" @submit.prevent="onSubmit">
							<input type="hidden" name="from" value="la_voz_del_cliente">
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="text" 
											   v-model="message.name" 
											   name="name" 
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
											   name="phone" 
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
							<div class="row">
								<div class="col d-flex align-items-center mt-3">
									<div role="alert" class="alert alert-bg-light text-center">
										<i class="fas fa-info-circle"></i>
										Los datos ingresados se mantendrán en total confidencialidad.
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
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '~/plugins/axios'
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
	            return 'Toyota Derka y Vargas - Concesionario Oficial Toyota en Chaco - Comentarios, sugerencias o reclamos. Estamos trabajando para continuar brindando la mejor atención';
	          },
	          url() {
	            return 'https://derkayvargas.com/contacto/la-voz-del-cliente';
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
        	setTimeout(function(){ $('.skeleton-image').hide(); }, 4000);
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

				let formData = new FormData(this.$refs.contactform);

			 	axios
	        		.post('/message', formData)
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
	.sucursal .skeleton-image{
		position: absolute;
		top: 0;
		height: 250px;
	}
</style>