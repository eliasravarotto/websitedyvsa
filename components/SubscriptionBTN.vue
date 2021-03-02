<template>
  <div>

  	<button class="button button-dark button-sm" data-toggle="modal" data-target="#modalPush">SUSCRIBIR</button>

    <div class="modal modal-push-subscription" tabindex="-1" id="modalPush">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<div class="d-flex flex-column">
						<h5 class="modal-title">Suscríbete a nuestra Web </h5>
						<p class="text-muted">Recibirás las últimas noticias y novedades.</p>
					</div>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body ml-4">
					<ul class="list-unstyled" v-if="options.length">
			  			<li v-for="op in options" class="" :key="op.key">
			  				<input :id="op.key" :value="op.key" type="checkbox" v-model="checkedOptions">
			  				<label :for="op.key">{{ op.label }}</label>
			  			</li>
			  		</ul>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Más tarde</button>
					<button type="button" class="btn btn-danger my-2" style="border-radius: 0px;" :disabled="permissionGranted || !listenersStarted" @click="requestPermission">Aceptar</button>
				</div>
			</div>
		</div>
    </div>

  </div>
</template>

<script>
	import Vue from 'vue'
	import axios from '~/plugins/axios'
	export default Vue.extend({
		data() {
			return {
			  permissionGranted: false,
			  listenersStarted: false,
			  mostrarModal: true,
			  checkedOptions: [],
			  options: [{key: 'tpa', label: 'Toyota Plan'}, {key: 'servicios-y-accesorios', label: 'Servicios y Accesorios'}, {key: '0km', label: 'Ventas 0KM'}, {key: 'usados', label: 'Usados'}, {key: 'noticias-y-novedades', label: 'Noticias y Novedades'}],
			  loading: false,
			  idToken: '',
			}
		},
		mounted(){
			if (process.client) {
				this.startListeners();
			}
		},
		methods: {
			async requestPermission() {
				try {
					const permission = await Notification.requestPermission()
					this.permissionGranted = permission === 'granted'
					this.getIdToken()
				} catch (e) {
					console.error(e)
				}
			},
			async getIdToken() {
				this.loading = true
				let currentToken
				try {
					currentToken = await this.$fire.messaging.getToken()
				} catch (e) {
					console.error('An error occurred while retrieving token. ', e)
					this.idToken = ''
					this.loading = false
				}
				if (currentToken) {
					this.idToken = currentToken
				} else {
					// Show permission request.
					console.info(
					  'No Instance ID token available. Request permission to generate one.'
					)
					// Show permission UI.
					// updateUIForPushPermissionRequired();
					this.idToken = ''
				}

				this.subscribeUser(this.idToken);
				this.loading = false
			},
			startListeners() {
				this.startOnMessageListener()
				this.startTokenRefreshListener()
				this.listenersStarted = true
			},
			startOnMessageListener() {
				this.$fire.messaging.onMessage((payload) => {
					console.info('Message received. ', payload)
				})
			},
			startTokenRefreshListener() {
				this.$fire.messaging.onTokenRefresh(async () => {
					try {
					  const refreshedToken = await this.$fire.messaging.getToken()
					  this.idToken = refreshedToken
					} catch (e) {
					  console.error('Unable to retrieve refreshed token ', e)
					}
				})
			},
			sendTestMessage() {
			// try {
			//   setTimeout(() => {
			//     // wait 5 seconds so you have time to switch away from the page to test the service-worker
			//     this.$fire.functions.httpsCallable('sendTestPushMessage')({
			//       token: this.idToken,
			//     })
			//   }, 5000)
			// } catch (e) {
			//   alert(e)
			// }
			},
			subscribeUser(token){
				console.log(this.checkedOptions)
				axios
					.post('/push-subscription/'+token, { options: this.checkedOptions })
					.then( res =>{
						console.log(res.data)
						$('#modalPush').modal('hide')
					})
					.catch(err =>{
						$('#modalPush').modal('hide')
						console.log("Error al Subscribir Usuario")
					})
			}
		},
	})
</script>