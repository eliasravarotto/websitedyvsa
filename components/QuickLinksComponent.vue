<template>
	<section class="grid-varios">

		<div v-if="displaySkeleton" class="animate-fade-in">
			<div class="container">
				<div class="row">
					<div class="col">
						<ul class="list-inline quick-access">
							<li class="list-inline-item quick-access-item" v-for="i in [0,1,2,3,4,5,6]">
								<div class="skeleton skeleton-body"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div v-if="!displaySkeleton" class="animate-fade-in">
			<div class="container">
				<div class="row">
					<div class="col">
						<ul class="list-inline quick-access">
							<li class="list-inline-item quick-access-item">
								<nuxt-link class="highlight zoom-div"  to="/usados">
									<span><img src="sedan-car-front.svg"></span>
									<h5 class="my-3">USADOS</h5>
								</nuxt-link>
							</li>
							<li class="list-inline-item quick-access-item">
								<nuxt-link class="highlight zoom-div"  to="/toyota-plan">
									<span><img src="sedan-car-front.svg"></span>
									<h5 class="my-3">TOYOTA PLAN</h5>
								</nuxt-link>
							</li>
							<!-- <li class="list-inline-item quick-access-item">
								<a href="#">
									<span><img src="racing.svg"></span>
									<h5 class="my-3">ACCESORIOS</h5>
								</a>
							</li> -->
							<li class="list-inline-item quick-access-item">
								<nuxt-link class="highlight zoom-div" to="/servicios-y-accesorios" >
									<span><img src="maintenance.svg"></span>
									<h5 class="my-3">SERVICIOS Y ACCESORIOS</h5>
								</nuxt-link>
							</li>
							<li class="list-inline-item quick-access-item">
								<a class="highlight zoom-div" href="https://www.toyotamobility.com.ar" target="_blank">
									<span><img src="car-key.svg"></span>
									<h5 class="my-3">KINTO SHARE</h5>
								</a>
							</li>
							<li class="list-inline-item quick-access-item">
								<nuxt-link class="highlight zoom-div"  to="/contacto/solicitud-test-drive">
									<span><img src="steering-wheel.svg"></span>
									<h5 class="my-3">TEST DRIVE</h5>
								</nuxt-link>
							</li>
							<li class="list-inline-item quick-access-item">
								<a class="highlight zoom-div" href="https://dyv.e.toyota.com.ar/inventory" target="_blank">
									<span><img src="dollar.svg"></span>
									<h5 class="my-3">COTIZADOR ONLINE</h5>
								</a>
							</li>
							<li class="list-inline-item quick-access-item">
								<nuxt-link class="highlight zoom-div" to="/contacto/la-voz-del-cliente">
									<span><img src="conversacion.svg"></span>
									<h5 class="my-3">CONSULTAS Y RECLAMOS</h5>
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  	</section>
</template>

<script>
	import axios from 'axios'
	export default {
    	props: ['data'],
        data(){
        	return {
                displaySkeleton: true
        	}
        },
        mounted(){
        	self = this;
            setTimeout(function(){
            	self.displaySkeleton = false;
            }, 3500)  
        },
    }
</script>

<style scoped lang="scss">
	.list-inline-item:not(:last-child) {
	    margin-right: 0rem;
	}
	.quick-access{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.grid-varios .quick-access-item{
		width: 50%;
	}
	.grid-varios .quick-access-item:nth-child(3n),
	.grid-varios .quick-access-item:last-child{
		width: 100%;
	}

	.grid-varios .quick-access-item a,
	.grid-varios .quick-access-item .skeleton{
		margin: 12px 10px;
		height:150px;
		display: flex;
		padding: 10px 5px;
		justify-content: center;
		flex-direction:column;
	}
	.grid-varios .quick-access-item a span{
		display: block;
		width: 100%;
	}

	.grid-varios .quick-access-item a:hover{
		text-decoration: none;
	}
	.grid-varios .quick-access-item a:hover h5{
		color: $dark
	}
	.grid-varios .quick-access-item a:hover img{
		opacity:1;
	}
	.grid-varios .quick-access-item a h5{
		color: $dark;
		font-weight: 400;
	}
	.grid-varios .quick-access-item a img{
		width: 50px;
		opacity:0.7;
	}


	@media (min-width: $breakpoint-md) { 
		.grid-varios .quick-access-item,
		.grid-varios .quick-access-item:last-child,
		.grid-varios .quick-access-item:nth-child(3n){
			width: 200px;
		}
	}

	@media (min-width: $breakpoint-lg) {
		.grid-varios .quick-access-item{
			width: 200px;
		}
	}

	.quick-access .highlight{
		padding: 7px 0px;
	}




	.grid-varios .col-pad {
	    padding: 0 7.5px;
	}
	.grid-varios .box{
	    visibility: visible;
	    opacity: 1;
	    transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s;
	    min-height: 200px;
        margin: 0 0 15px;
        position: relative;
	}
	.grid-varios .box::after {
	    position: absolute;
	    content: "";
	    width: 100%;
	    height: 100%;
	    background: rgba(20,20,20,0.2);
	    left: 0;
	    top: 0;
	    z-index: 1;
	}
	.grid-varios .box.bg-tpa{
		background-image: url(https://tsuyoi.com.ar/wp-content/themes/tsuyoi-theme/images/home/img-4.jpg);
	    background-size: cover;
	    background-position: center;
	}
	.grid-varios .box.bg-kinto{
		background-image: url(https://derkayvargas.com/imagenes/home-min/kinto-grid.png);
	    background-size: cover;
	    background-position: center;
	}
	.grid-varios .box.bg-accesorios{
		background-image: url(https://derkayvargas.com/imagenes/posventa/accesorios.jpg);
	    background-size: cover;
	    background-position: center;
	}
	.grid-varios .box .content{
	    z-index: 2;
	    position: absolute;
	    width: 100%;
	    text-align: center;
	    top: 50%;
	    -webkit-transform: translate(0, -50%);
	    -moz-transform: translate(0, -50%);
	    -ms-transform: translate(0, -50%);
	    -o-transform: translate(0, -50%);
	    transform: translate(0, -50%);
	}
	.grid-varios .box .content h2{
	    text-transform: uppercase;
	    color: #fff;
	    font-size: 30px;
	    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
	}


	@-webkit-keyframes pulse {
  from {
    box-shadow: 0 0 0 0 rgba(3, 149, 229, 0.4);
  }
  to {
    box-shadow: 0 0 0 45px rgba(3, 149, 229, 0);
  }
}

@keyframes pulse {
  from {
    box-shadow: 0 0 0 0 rgba(3, 149, 229, 0.4);
  }
  to {
    box-shadow: 0 0 0 45px rgba(3, 149, 229, 0);
  }
}
.highlight {
	position: relative;
	border: 3px solid rgba(255, 255, 255, 0.2);
	border-radius: 2px;
	// line-height: 60px;
	color: white;
	background-color: #e1e1e1;
	text-align: center;
	font-size: 15px;
	letter-spacing: 3px;
	cursor: pointer;
	-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

	-webkit-box-shadow: 0px 0px 12px -2px rgba(227,34,60,1);
	-moz-box-shadow: 0px 0px 12px -2px rgba(227,34,60,1);
	box-shadow: 0px 0px 12px -2px rgba(227,34,60,1);  
}
.highlight:before, .highlight:after {
  content: "";
  width: 0%;
  height: 0%;
  position: absolute;
  visibility: hidden;
  border-radius: 2px;
}
.highlight:before {
  border-top: 2px solid $tertiary;
  border-right: 2px solid $tertiary;
  transition: width 0.1s ease 0.3s, height 0.1s ease 0.2s, visibility 0s 0.4s;
  top: 0;
  left: 0;
}
.highlight:after {
  border-left: 2px solid $tertiary;
  border-bottom: 2px solid $tertiary;
  bottom: 0;
  right: 0;
  transition: width 0.1s ease 0.1s, height 0.1s ease, visibility 0s 0.2s;
}
.highlight:hover {
  // -webkit-animation: pulse 1s ease-out 0.4s;
  //         animation: pulse 1s ease-out 0.4s;
  color: $tertiary;
}
.highlight:hover:before, .highlight:hover:after {
  width: 100%;
  height: 100%;
  visibility: visible;
}
.highlight:hover:before {
  transition: width 0.1s ease, height 0.1s ease 0.1s;
}
.highlight:hover:after {
  transition: width 0.1s ease 0.2s, height 0.1s ease 0.3s, visibility 0s 0.2s;
}

</style>