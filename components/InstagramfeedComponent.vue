<template>
	<div>
		<div class="title-wrapper">
			<h2><img v-lazy="'/instagram.png'" class="img-ig"> @toyotaderkayvargas</h2>
			<a class="btn btn-sm btn-follow-ig" href="https://www.instagram.com/toyotaderkayvargas" target="_blank">Seguir</a>
		</div>
		<div>
			<div class="row">
				<div v-for="item in data.slice(0, 9)" :key="item.id" class="no-px col-6 col-md-4 mb-3">
					<div class="content">
					    <a :href="item.permalink" target="_blank">
					      <div class="content-overlay"></div>
					      <img class="content-image" v-lazy="item.media_url">
					      <div class="content-details fadeIn-bottom">
					        <p class="content-title"><i class="fas fa-search"></i></p>
					        <p class="content-text">Ver publicación</p>
					      </div>
					    </a>
				  	</div>
				</div>
			</div>
			<VueSlickCarousel :arrows="false" :dots="false" v-if="data.length" v-bind="sliderConfig">
		      	<div class="item-Ig-caroucel" v-for="itemIg in data.slice(9,19)" :key="itemIg.id">
		      		<a :href="itemIg.permalink" target="_blank" class="mx-3">
		      			<img class="img-fluid mx-2" v-lazy="itemIg.media_url">
		      		</a>
		      	</div>
	      	</VueSlickCarousel>
		</div>
	</div>
</template>

<script>

	import axios from 'axios'
	import VueSlickCarousel from 'vue-slick-carousel'
  	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  	// optional style for arrows & dots
  	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	export default {
		components: { VueSlickCarousel },
        data(){
        	return {
        		baseUrl: process.env.baseUrl,
        		data: [],
        		sliderConfig:{
							  "speed": 7500,
							  "infinite": true,
							  "slidesToShow": 4,
							  "autoplay": true,
							  "autoplaySpeed": 0,
							  "responsive": [
							  		{
								      "breakpoint": 1200,
								      "settings": {
							        		"slidesToShow": 4,
								      	}
								    },
								    {
								      "breakpoint": 992,
								      "settings": {
									        "slidesToShow": 3,
								      }
								    },
								    {
								      "breakpoint": 768,
								      "settings": {
									        "slidesToShow": 3,
									        "dots": false,
								      	}
								    },
								    {
								      "breakpoint": 576,
								      "settings": {
									        "slidesToShow": 3,
									        "dots": false,
								      	}
								    }
							  	]
							}
        	}
        },
        mounted(){
        	this.feed();
        },
        methods:{
        	feed(){
        		axios
	        		.get('https://v1.nocodeapi.com/eliasravarotto/instagram/gzfaEcsVEkmjsInI')
	        		.then( res =>{
	        			this.data = res.data.data;
	        			console.info(res)
        			})
	        		.catch(err=>{
	        			console.log("Error api instagram feed")
	        		})
        	}
        }
    }
</script>

<style lang="scss">
.no-px{
	padding-left: 0px;
	padding-right: 0px;
}
.btn.btn-follow-ig{
	background-color: #636bda;
	color: white;
}
.title-wrapper .img-ig{
	height: 35px;
}
.item-Ig-caroucel{
	padding-right: 3px;
	padding-left: 3px;
}
	.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

.fadeIn-top{
  top: 20%;
}

.fadeIn-left{
  left: 20%;
}

.fadeIn-right{
  left: 80%;
}
</style>