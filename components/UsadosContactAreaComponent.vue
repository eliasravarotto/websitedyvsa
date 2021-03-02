<template>
	<div>
		<div class="section">
			<h2>Contacto</h2>
			<p class="mb-0">Acercate y conocé los autos usados que tenemos para vos.</p>
			<p>Encontrá las mejores opciones en Chaco de unidades usadas en todas las marcas.</p>
		</div>

		<div class="row">
			<div class="col-12 col-lg-6 mb-4">
				<div id="contact-form">
						<form ref="contactform" @submit.prevent="onSubmit" action="#" method="POST" role="form" autocomplete="off" class="w-100">
							<input type="hidden" name="from" value="usados">
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
			<div class="col-12 col-lg-6 mb-4 pl-md-5">
				<ul class="list-unstyled sucursales-usados">
					<li class="mb-4" v-for="(sucursal, ix) in sucursales" :key="ix">
						<span class="font-weight-600">{{ sucursal.sucursal }}</span>
						<div class="custom-divider mt-1 mb-2"> <span></span> </div>
						<ul class="list-unstyled ml-2">
							<li class="mb-1"><i class="fas fa-location-arrow"></i> {{ sucursal.direccion }}</li>
							<li class="mb-1">
								<i class="fas fa-phone-alt"></i>
								<span class="phone" v-for="(tel, i) in sucursal.telefonos" :key="i+'Tel'"> <span class="mx-3" v-if="i>0">|</span> {{ tel }} </span>
							</li>
							<li class="mb-1 text-muted">
								<i class="far fa-clock"></i>
								<span class="phone"> Lunes a Viernes: 8:00 a 12.30 hs. - 15:30 a 19:30 hs. | Sábado: 8:00 a 12:30 hs.</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '~/plugins/axios'

  	export default {
        data(){
        	return {
        		sucursales: [],
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
        	this.getSucursalesUsados();
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
	     	onSuccess(token) {
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
			        }
        		})

		      // here you submit the form
		      //this.$refs.form.submit()
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
		    getSucursalesUsados(){
		    	axios
		    	.get('/sucursales-usados')
		    	.then(res=>{
		    		this.sucursales = res.data.data;
		    	})
		    	.catch(err=>{
		    		notifier.show('Ups! Algo salió mal.' , 'Por favor intente nuevamente más tarde.', 'danger', '/danger.png', 30000);
		    		console.log("Error al cargar Sucursales.")
		    	})

		    }
        }
    }
</script>