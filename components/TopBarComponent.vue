<template>
	<div class="w-100 top-bar">
		<div class="d-flex justify-content-end">
			<ul class="list-inline mb-0 location">
				<li class="list-inline-item d-sm-none d-md-none d-lg-none">
					<nuxt-link :to="'/contacto'" tag="a">
						<i class="fas fa-location-arrow"></i> Sucursales
					</nuxt-link>	
				</li>
				<li class="list-inline-item d-none d-sm-block">
					<nuxt-link :to="'/contacto'" tag="a">
						<i class="fas fa-location-arrow"></i> Conoce Nuestras Sucursales
					</nuxt-link>
				</li>
			</ul>
			<ul class="list-inline mb-0 mx-3">
				<li><span> | </span></li>
			</ul>
			<ul class="list-inline mb-0 social-media-list">
				<li class="list-inline-item"><a href="https://www.facebook.com/derkayvargas" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
				<li class="list-inline-item"><a href="https://www.instagram.com/toyotaderkayvargas/" target="_blank"><i class="fab fa-instagram"></i></a></li>
				<!-- <li class="list-inline-item"><a href="#"><i class="fab fa-whatsapp"></i></a></li> -->
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  components:{},
  data () {
    return {}
  },
  mounted(){
  	
  }
}
</script>

<style lang="scss">
	.top-bar{
		background-color: #F6F6F6;
		padding: 10px 30px 10px 30px;
	}
	.top-bar .social-media-list li{
		margin-left: 7px;
		margin-right: 7px;
	}
	.top-bar .social-media-list li:last-child{
		margin-right: 0px;
	}
	.top-bar .social-media-list li:first-child{
		margin-left: 0px;
	}

	.top-bar .location li a,
	.top-bar .social-media-list li a{
		color: $dark_2;
	}

	.top-bar .location li a:hover{
		text-decoration: none;
	}
	.top-bar .location li a i{
		-webkit-transition: -webkit-transform .4s ease-in-out;
          transition:         transform .4s ease-in-out;
      } 
	.top-bar .location li a:hover i{
	    transform: rotate(360deg);
    	transition: all 0.4s ease-in-out 0s;
    }
</style>