<template>
	<div class="wrapper">
		<div class="container">
			<div class="text-center">
				<h1>Solicitar Test Drive</h1>
			</div>
			<div class="row section d-flex justify-content-center">
				<div class="col-11 col-md-6 col-lg-6">
					<div class="text-center">
						<p>Dejanos tus datos y estaremos en contacto con usted a la brevedad para confirmar la fecha y hora del Test Drive.</p>
					</div>
					<div id="contact-form">
						<input type="hidden" name="from" value="web-site">
						<form ref="testDriveform" action="#" method="POST" role="form" autocomplete="off" class="w-100" @submit.prevent="onSubmit">
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="text" 
											   v-model="testDrive.cliente" 
											   name="cliente" 
											   placeholder="Apellido y Nombre" 
											   :class="{'custom-input-text form-control':true, 'is-invalid' : invalidCliente}"> 
										<label for="cliente" class="label-custom-input-text"><i class="fas fa-user"></i></label>
										<div class="invalid-feedback">{{ invalidClienteText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="number" 
											   v-model="testDrive.telefono" 
											   name="telefono" 
											   placeholder="Teléfono" 
											   :class="{'custom-input-text form-control':true, 'is-invalid' : invalidTelefono}"> 
										<label for="telefono" class="label-custom-input-text"><i class="fas fa-phone-alt"></i></label>
										<div class="invalid-feedback">{{ invalidTelefonoText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="validate-input">
										<input type="email" 
										       v-model="testDrive.email" 
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
										<select v-model="testDrive.sucursal" 
												name="sucursal" 
												:class="{'custom-input-text form-control':true, 'is-invalid' : invalidSucursal}">
											<option value="">Seleccione una Sucursal</option>
											<option v-for="sucursal in sucursales" :key="sucursal" :value="sucursal">{{sucursal}}</option>
										</select>
										<label for="sucursal" class="label-custom-input-text"><i class="fas fa-map-marker-alt"></i></label>
										<div class="invalid-feedback">{{ invalidSucursalText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-12 col-md-6">
									<div class="validate-input">
										<select v-model="testDrive.modelo" 
												name="modelo" 
												:class="{'custom-input-text form-control':true, 'is-invalid' : invalidModelo}">
											<option value="">Seleccione un Modelo</option>
											<option v-for="modelo in modelos" :key="modelo" :value="modelo">{{ modelo }}</option>
										</select>
										<label for="modelo" class="label-custom-input-text"><i class="fas fa-car"></i></label>
										<div class="invalid-feedback">{{ invalidModeloText}}</div>
									</div>
								</div>
								<div class="col-12 col-md-6">
									<div class="validate-input">
										<input type="date" 
										       v-model="testDrive.fecha_estimada" 
										       name="fecha_estimada" 
										       :class="{'custom-input-text form-control':true, 'is-invalid' : invalidFecha}"> 
										<label for="fecha_estimada" class="label-custom-input-text"><i class="fas fa-calendar-day"></i></label>
										<div class="invalid-feedback">{{ invalidFechaText}}</div>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div role="alert" class="alert alert-bg-light text-center">
									<i data-v-1c5e4ded="" class="fas fa-info-circle"></i> 
									La fecha está sujeta a disponibilidad.
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
	            return 'Toyota Derka y Vargas | Solicitud de Test Drive';
	          },
	          description() {
	            return 'Solicitud de Test Drive. Casa Central Sáenz Peña, Sucursal Resistencia, Sucursal Charata, Sucursal Villa Angela.';
	          },
	          url() {
	            return 'https://derkayvargas.com/contacto/solicitud-test-drive';
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
				testDrive: { sucursal: '', modelo: '', servicio: '' },
				modelos: ['Etios','Yaris','Corolla','Hilux'],
				servicios: ['10.000 KM','20.000 KM','30.000 KM','40.000 KM','50.000 KM','60.000 KM','70.000 KM','80.000 KM','90.000 KM','100.000 KM', 'Otro'],
				sucursales: ['Sáenz Peña','Resistencia','Charata'],
				status: '',
				invalidCliente: false,
				invalidClienteText: '',
				invalidTelefono: false,
				invalidTelefonoText: '',
				invalidEmail: false,
				invalidEmailText: '',
				invalidSucursal: false,
				invalidSucursalText: '',
				invalidFecha: false,
				invalidFechaText: '',
				invalidModelo: false,
				invalidModeloText: '',
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
		    onSuccess(recaptchaToken) {
			const self = this;
			this.status = "submitting";

			let formData = new FormData(this.$refs.testDriveform);
			axios
				.post('/solicitar-test-drive', formData)
				.then(res=>{
					this.resetValidationForm();
					this.testDrive = { sucursal: '', modelo: '', servicio: '' };
					notifier.show('Test Drive Solicitado' , 'Estaremos en contacto con usted a la brevedad para confirmar el Test Drive.', 'success', '/success.png', 0);
				})
				.catch(error=>{
					self.resetValidationForm();
					if (error.response.data.code == 422) {
			          if (error.response.data.error.cliente){
			          	self.invalidCliente = true;
			          	self.invalidClienteText = error.response.data.error.cliente[0];
			          }
			          if (error.response.data.error.telefono){
			          	self.invalidTelefono = true;
			          	self.invalidTelefonoText = error.response.data.error.telefono[0];
			          }
			          if (error.response.data.error.email){
			          	self.invalidEmail = true;
			          	self.invalidEmailText = error.response.data.error.email[0];
			          }
			          if (error.response.data.error.sucursal){
			          	self.invalidSucursal = true;
			          	self.invalidSucursalText = error.response.data.error.sucursal[0];
			          }
			          if (error.response.data.error.modelo){
			          	self.invalidModelo = true;
			          	self.invalidModeloText = error.response.data.error.modelo[0];
			          }
			          if (error.response.data.error.fecha_estimada){
			          	self.invalidFecha = true;
			          	self.invalidFechaText = error.response.data.error.fecha_estimada[0];
			          }
			        }else{
			        	alert('Ups, algo salió mal. Por favor intente nuevamente más tarde.')
			        	notifier.show('Ups! Algo salió mal.' , 'Por favor intente nuevamente más tarde.', 'danger', '/danger.png', 30000);
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

		        this.invalidCliente = false;
	          	this.invalidClienteText = '';
	          	this.invalidTelefono = false;
	          	this.invalidTelefonoText = '';
	          	this.invalidEmail = false;
	          	this.invalidEmailText = '';
	          	this.invalidSucursal = false;
	          	this.invalidSucursalText = '';
	          	this.invalidFecha = false;
	          	this.invalidFechaTextText = '';
	          	this.invalidModelo = false;
	          	this.invalidModeloTextText = '';
		    }
        }
    }
</script>