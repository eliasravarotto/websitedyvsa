<template>
	<div class="container">
		
		<ul v-if="!posts" class="list-group list-group-flush animate-fade-in">
			<li class="list-group-item" v-for="i in [0,1,2,3,4]">
				<div class="row d-flex align-items-center">
	              <div class="col-xs-12 col-md-3">
	              	<div class="skeleton skeleton-body w-100 mb-3"></div>
	              </div>
	              <div class="col-xs-12 col-md-9">
                      <span style="font-size: 14px"><p class="skeleton skeleton-p w-25 mb-1"></p></span>
	                  <div class="skeleton skeleton-title w-75 mb-3"></div>
	                  <div class="skeleton skeleton-p w-100 mb-1"></div>
	                  <div class="skeleton skeleton-p w-100 mb-1"></div>
	                  <div class="skeleton skeleton-p w-100 mb-1"></div>
	                  <div class="skeleton skeleton-p w-100 mb-3"></div>
	                  <p class="skeleton skeleton-title w-25"></p>
	              </div>
	          </div>
			</li>
		</ul>

		<ul v-if="posts" class="list-group list-group-flush animate-fade-in">
	      <li class="list-group-item" v-for="post in posts">
	          <div class="row d-flex align-items-center">
	              <div class="col-xs-12 col-md-3">
	                  <img v-if="post.image != null" v-lazy="baseUrl+post.image.public_path" class="img-fluid">
	                  <img v-else v-lazy="'/imagenes/default.png'" class="img-fluid">
	              </div>
	              <div class="col-xs-12 col-md-9">
	                    <span v-for="c in post.categories" style="font-size: 14px">{{c.name}}</span>
	                  <h4>{{ post.titulo }}</h4>
	                  <p>{{ post.contenido.substr(0, 250) + '...' }}</p>
	                  <p><nuxt-link :to="'/entradas/'+post.slug" class="btn btn-outline-black btn-round">Leer más <i class="fas fa-arrow-right"></i></nuxt-link></p>
	              </div>
	          </div>
	      </li>
	  	</ul>
	</div>
</template>

<script>
	import axios from '~/plugins/axios'
	export default {
		head(){
          return {
	            title: 'Toyota Derka y Vargas | Noticias y Novedades Recientes',
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
	            return 'Toyota Derka y Vargas';
	          },
	          description() {
	            return 'Noticias, novedades y promociones. Toyota Derka y Vargas - Concesionario Oficial Toyota en Chaco.';
	          },
	          url() {
	            return 'https://derkayvargas.com/entradas';
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
        		posts: null,
        		baseUrl: process.env.baseUrl
        	}
        },
        mounted(){
        	this.getPosts();
        },
        methods:{
        	getPosts(){
        		var _this = this;
        		var query = '';
	            var url = window.location.href;
	            var p = this.getParamsUrl(window.location.href);
	            $.each(p, function(index, value) {
	              if (value !== 'undefined')
	              	query = query + index +'='+value+'&'
	            });
        		axios
        			.get('/entradas?'+query)
	        		.then( res =>{
	        			setTimeout(function(){
	        				_this.posts = res.data.data;
	        			}, 2500);
	        			console.log(res)
        			})
	        		.catch(err=>{
	        			console.log(err)
	        		})
        	},
        	getParamsUrl(url){
				var params = {};
				var parser = document.createElement('a');
				parser.href = url;
				var query = parser.search.substring(1);
				var vars = query.split('&');
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split('=');
					params[pair[0]] = decodeURIComponent(pair[1]);
				}
				return params;
        	}
        }
    }
</script>