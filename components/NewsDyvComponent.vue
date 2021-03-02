<template>

	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-6 col-lg-3 mb-5">
				<div class="widget-subscribe">
					<div class="widget-subscribe-header">
						<span>Novedades</span>
						<h2>Derka y Vargas</h2>
						<span class="bolded-line"></span>
					</div>
					<div class="widget-subscribe-body">
						<p>Entérate de todas nuestras noticias y novedades, también de promociones, descuentos y oportunidades que tenemos para ofrecerte.</p>

						<!-- <SubscriptionBTN /> -->

					</div>
				</div>
			</div>

			<!-- SKELETON LOADING -->
			<template v-if="skeleton">
				<div v-for="item in [1,2,3]" :key="item" class="col-sm-12 col-md-6 col-lg-3 mb-5">
					<div class="w-100 skeleton skeleton-body" style="height: 180px;"></div>
					<div class="w-100 skeleton skeleton-title mt-2"></div>
					<div class="row mt-1">
						<div class="col-8">
							<div class="w-100 skeleton skeleton-title"></div>
						</div>
						<div class="col-4">
							<div class="w-100 skeleton skeleton-title"></div>
						</div>
					</div>
				</div>
			</template>

			<div class="col-sm-12 col-md-6 col-lg-3 mb-5 animate-fade-in" v-for="(item) in posts" :key="item.id">
				<div class="item-post">
					<div class="item-post-image">
						<nuxt-link tag="a" :to="'/entradas/'+item.slug">
							<img class="w-100" v-lazy="baseUrl+item.imagen_portada">
						</nuxt-link>
					</div>
					<!-- <div class="item-post-date">
						<ul class="list-unstyled mb-1">
							<li><i class="far fa-calendar-alt"></i> October 19, 2016</li>
						</ul>
					</div> -->
					<div class="item-post-title">
						<h4><nuxt-link tag="a" :to="'/entradas/'+item.slug">{{ item.titulo.substr(0, 50) }}</nuxt-link></h4>
					</div>
					<div class="item-post-content">
						<p>{{ item.contenido.substr(0, 100) }} ... </p>
					</div>
					<div class="item-post-footer">
						<nuxt-link tag="a" :to="'/entradas/'+item.slug">Leer más -</nuxt-link>
					</div>
				</div>
			</div>

			<div v-if="!posts.length && !skeleton" class="col-sm-12 col-md-9 mb-5 animate-fade-in">
				<div role="alert" class="alert alert-bg-light text-center">
					<i class="fas fa-info-circle"></i> Por el momento no hay articulos relacionados a la categoría {{data.categoria}}
				</div>
			</div>

		</div>
	</div>

</template>

<script>
	import axios from '~/plugins/axios'
	export default {
		props: ['data'], // ejemplo -> data: { query: '?categorias=rse,posventa,ventas,tpa&activo=1 ... etc etc' }
        data(){
        	return {
                posts: [],
                skeleton: true,
                baseUrl: process.env.baseUrl,
        	}
        },
        mounted(){
        	this.getPosts()

        },
        methods:{
        	getPosts(){
        		var url = '/entradas';
        		if (this.data.query != null || this.data.query != '') {
        			url += this.data.query;
        		}
        		var slf = this;
        		axios
	        		.get(url)
	        		.then(res=>{
	        			setTimeout(function(){
	        				slf.posts = res.data.data.slice(0, 3)
	        				slf.skeleton = false
	        			}, 2500);
	        		})
        	}
        }
    }
</script>

<style lang="scss" scoped>
	.widget-subscribe-header {
	    margin-bottom: 15px;
	    border-bottom: 1px dotted rgba(0,0,0,.3);
	}
	.bolded-line {
	    display: block;
	    margin-bottom: -1px;
	    margin-top: 15px;
	    width: 30px;
	    height: 1px;
	    background-color: rgba(0,0,0,.5);
	}

	.item-post{
		padding-bottom: 20px;
	    border-bottom: #cccccc 1px solid;
	}
	.item-post-date ul li{
		margin-right: 15px;
	    color: $tertiary;
	    font-size: 12px;
	    text-transform: uppercase;
	}
	.item-post-title h4 a{
		color: $dark;
    	line-height: 1.4;
    	font-size: 18px;
    	text-decoration: none;
	}
	.item-post-footer a{
		font-weight: 700;
		color: $primary;
	}
</style>