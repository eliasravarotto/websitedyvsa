<template>
	<aside>
		<div class="widget widget-posts">
			<h4 class="widget-title">Recientes</h4>
			<div class="widget-content">
				<ul class="list-unstyled recent-posts">
					<div id="skeletonListPosts">
					<li class="w-100" v-for="(i,ix) in skeletomItems" :key="ix">
						<div class="row">
							<div class="col-4" style="height: 55px">
								<div class="w-100 h-100 skeleton"></div>
							</div>
							<div class="col-8" style="height: 55px">
								<div class="w-100 h-50 skeleton"></div>
								<div class="w-50 h-25 skeleton mt-2"></div>
							</div>
						</div>
					</li>
					</div>
					<li v-for="item in posts" :key="item.id" class="w-100">
						<nuxt-link tag="a" :to="'/entradas/'+item.slug">
							<div class="post-thumbnail">
								<img class="img-fluid" v-lazy="baseUrl+item.imagen_portada">
							</div>
							<div class="post-title">
									{{ item.titulo }}
							</div>
							<div class="post-meta">
								{{ item.created_at }}
							</div>
						</nuxt-link>
					</li>
				</ul>
				<ul v-if="!posts" class="list-unstyled recent-posts">
					<li class="w-100">
						<div>
							<div class="post-thumbnail">
								<div class="w-100 skeleton skeleton-sm"></div>
							</div>
							<div class="post-title">
									
							</div>
							<div class="post-meta">
								
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
	
	import axios from '~/plugins/axios'

	export default {
        data(){
        	return {
        		posts: [],
        		skeletomItems: [1,2,3,4],
        		baseUrl: process.env.baseUrl,
        	}
        },
        mounted(){
        	this.getPosts();
        },
        methods:{
        	getPosts(){
        		var _this = this;
        		axios
        			.get('/entradas')
	        		.then( res =>{

	        			setTimeout(function(){
	        				$("#skeletonListPosts").hide();
	        				_this.posts = res.data.data;
	        			}, 2500);
        			})
	        		.catch()
        	}
        }
    }
</script>

<style scoped lang="scss">
	.widget{
		border: 1px solid #eee;
	}
	.widget-posts{
		min-height: 500px;
	}
	.widget-title {
	    position: relative;
	    margin-top: 0;
	    margin-bottom: 12px;
	    font-size: 15px;
	    font-weight: 600;
	    color: $dark;
	    text-transform: uppercase;
	    clear: both;
	    background: $ligth;
	    padding: 20px;
	    border-bottom: 3px solid $primary;
	    text-align: left;
	}
	.widget-content {
	    position: relative;
	    padding: 25px;
	    border: 1px solid #eee;
	    font-size: 12px;
	    overflow: hidden;
	    margin-top: -13px;
	}
	.post-thumbnail {
	    float: left;
	    margin-right: 12px;
	    padding-top: 4px;
	    width: 65px;
	    height: 65px;
	    overflow: hidden;
	}

	.widget .recent-posts li a{
		text-decoration: none;
	}
	.widget .recent-posts li{
		list-style-type: none;
	    float: left;
	    width: 100%;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0 0 11px 0;
	    padding: 0px 15px 15px 0px;
	    border-bottom: 1px solid #E4E4E4;
	    text-align: left;
	    color: #444;
	    background: none;
	    position: relative;
	}
	.widget .recent-posts .post-title{
		font-weight: 400 !important;
	    line-height: 1.3 !important;
	    font-size: 14px;
	    margin-bottom: 5px;
	    color: $dark_2;
	}

	.widget .recent-posts .post-meta{
		color: $tertiary;
	    font-size: 11px !important;
	}
</style>