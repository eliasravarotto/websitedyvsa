<template>
<div id="contact-form">
	<form ref="contactform" action="#" method="POST" role="form" autocomplete="off" class="w-100" @submit.prevent="onSubmit">
		<input type="hidden" name="from" value="tpa">
		<input type="hidden" name="email" value="notiene@notiene.com">
		<input type="hidden" name="sucursal" value="Resistencia">

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
							   placeholder="Teléfono o Whatsapp" 
							   :class="{'custom-input-text form-control':true, 'is-invalid' : invalidPhone}"> 
						<label for="telefono" class="label-custom-input-text"><i class="fas fa-phone-alt"></i></label>
						<div class="invalid-feedback">{{ invalidPhoneText}}</div>
					</div>
				</div>
			</div>
			<div class="form-group row">
				<div class="col-md-12">
					<div class="validate-input">
						<input type="text" 
							   v-model="message.localidad" 
							   name="localidad" 
							   placeholder="Localidad"
							   :class="{'custom-input-text form-control':true, 'is-invalid' : invalidLocalidad}">
						<label for="localidad" class="label-custom-input-text"><i class="fas fa-map-marker-alt"></i></label>
						<div class="invalid-feedback">{{ invalidLocalidadText}}</div>
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
</template>

<script>
	import axios from '~/plugins/axios'

	export default {
        data(){
        	return {
				status: null,
				message: { localidad: null, message: '' },
				invalidName: false,
				invalidNameText: '',
				invalidPhone: false,
				invalidPhoneText: '',
				invalidLocalidad: false,
				invalidLocalidadText: '',
				invalidMessage: false,
				invalidMessageText: '',
        	}
        },
        mounted(){},
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

				if (this.message.localidad == null) {
					this.status = '';
					this.invalidLocalidad = true;
		          	this.invalidLocalidadText = 'Localidad es requerido.';
		          	return;
				}

				let formData = new FormData(this.$refs.contactform);

			 	axios
	        		.post('/message', formData)
	        		.then(res=>{
	        			notifier.show('Mensaje Enviado.' , 'Gracias por comunicarte con nosotros, estaremos en contacto con usted a la brevedad.', 'success', '/success.png', 30000);
	        			this.resetValidationForm();
	        			this.message = { sucursal: '' };
	        			console.log(res)
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
		    onCaptchaExpired: function () {
		      this.$refs.recaptcha.reset();
		    },
		    submit() {
		      this.$refs.recaptcha.execute();
		    },
		    resetValidationForm(){
		    	this.status = '';

		        this.invalidName = false;
	          	this.invalidNameText = '';
	          	this.invalidPhone = false;
	          	this.invalidPhoneText = '';
	          	this.invalidLocalidad = false;
	          	this.invalidLocalidadText = '';
	          	this.invalidMessage = false;
	          	this.invalidMessageText = '';
		    }
        }
    }
</script>