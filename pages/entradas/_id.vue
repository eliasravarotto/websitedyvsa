<template>
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-8">

					<div id="skeleton-post">
						<div class="post-media skeleton"></div><br>
						<div class="skeleton skeleton-title"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
						<div class="skeleton skeleton-p w-100"></div><br>
					</div>

					<main class="main-content animate-fade-in d-none">
						<div class="post-main" v-if="post">

							<img v-if="post.data.imagen_portada" class="img-fluid" v-lazy="baseUrl + post.data.imagen_portada">
							<h1 class="post-title">{{post.data.titulo}}</h1>

							<div class="post-date">
								<ul class="list-unstyled list-inline">
									<li> {{ post.data.created_at }} </li>
								</ul>
							</div>
							
							<div class="post-content" v-html="post.data.contenido"></div>
						</div>
					</main>
				</div>
				<div class="col-12 col-lg-4">
					<SideBarPostComponent />
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import axios from '~/plugins/axios'
	
	export default {

        async asyncData({ params, $axios }) {
            const post = await $axios.$get('https://panelweb.derkayvargas.com/api/entradas/' + params.id);
            //const post = await $axios.$get('http://webdyvsa.test/api/entradas/' + params.id);
            return {post}
            
        },
        computed: {
          title() {
            if (this.post) return this.post.data.titulo;
            return 'Entradas y Posteos Recientes'
          },
          description() {
            if (this.post) return this.post.data.contenido.substr(0, 50);
            return ''
          },
          url() {
            if (this.post) 
                return process.env.baseUrl+'/entradas/'+this.post.data.slug;
            return process.env.baseUrl;
          },
          image() {
          	if (this.post) 
            	return process.env.baseUrl + this.post.data.imagen_portada;
        	return process.env.baseUrl + '/logo-og.jpg';

          },
        },
        head(){
          return {
            title: this.title,
            meta: [
                {hid: "description", name: "description", content: this.description},
                {hid: "og:description", property: "og:description", content: this.description},
                {hid: "og:title", property: "og:title", content: this.title},
                {hid: 'og:image', property: 'og:image', content: this.image },
                {hid: 'og:url', property: 'og:url', content: this.url }
            ],
            htmlAttrs: {
              lang: 'es'
            }
          }
        },
        data(){
        	return {
        		baseUrl: process.env.baseUrl
        	}
        },
        mounted(){
        	setTimeout(function(){
				$("#skeleton-post").hide();
				$(".main-content").removeClass('d-none');
			}, 2500);
        }
    }
</script>

<style lang="scss">
	.post-main{
	   -webkit-animation: fadein 2s;
       -moz-animation: fadein 2s;
        -ms-animation: fadein 2s;
         -o-animation: fadein 2s;
            animation: fadein 2s;
	}
	.post-media{
		min-height: 300px;
	}
	.post-title{
		font-weight: 600;
	    font-size: 24px;
	    line-height: 1.25;
	}
	.post-main{
		padding: 1.75rem 1rem;
	}
	.post-date ul li{
		font-size: 12px;
		font-weight: 500;
	}
	.post-content p{
		text-align: justify;
	}
</style>