<template>
	<div>
		<div class="d-none d-md-block d-lg-block" v-if="displaySkeleton" style="padding:12px;">
			<div class="skeleton w-100" style="height: 300px;"></div>
		</div>

		<div class="d-md-none d-lg-none" v-if="displaySkeleton" style="padding:12px;">
			<div class="skeleton w-100 " style="height: 480px;"></div>
		</div>

		<div id="carouselMd" v-show="!displaySkeleton" class="carousel slide animate-fade-in d-none d-md-block d-lg-block">
      
	      <ol class="carousel-indicators">
	        <li v-for="(item, ix) in itemsMd" :key="ix" data-target="#carouselMd" :data-slide-to="ix" :class="[ix == 0 ? 'active' : '']"></li>
	      </ol>

	      <div class="carousel-inner">
	        <div :class="[ix == 0 ? 'active' : '', 'carousel-item']" v-for="(item,ix) in itemsMd" :key="ix">
	        	<a :href="item.url">
	          		<img class="img-fluid w-100" :src="item.image.public_path" alt="First slide">
	        	</a>
	        </div>
	      </div>

	      <a v-show="!displaySkeleton" class="carousel-control-prev" href="#carouselMd" role="button" data-slide="prev">
	        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	        <span class="sr-only">Previous</span>
	      </a>

	      <a v-show="!displaySkeleton" class="carousel-control-next" href="#carouselMd" role="button" data-slide="next">
	        <span class="carousel-control-next-icon" aria-hidden="true"></span>
	        <span class="sr-only">Next</span>
	      </a>
    	</div>

	    <div id="carouselSm" v-show="!displaySkeleton" class="carousel slide animate-fade-in d-md-none d-lg-none">
	      
	      <ol class="carousel-indicators">
	        <li v-for="(item, ix) in itemsMd" :key="ix" data-target="#carouselSm" :data-slide-to="ix" :class="[ix == 0 ? 'active' : '']"></li>
	      </ol>

	      <div class="carousel-inner">
	        <div :class="[ix == 0 ? 'active' : '', 'carousel-item']" v-for="(item,ix) in itemsSm" :key="ix">
	        	<a :href="item.url">
	          		<img class="img-fluid w-100" :src="item.image.public_path" alt="First slide">
	          	</a>
	        </div>
	      </div>

	      <a v-show="!displaySkeleton" class="carousel-control-prev" href="#carouselSm" role="button" data-slide="prev">
	        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	        <span class="sr-only">Previous</span>
	      </a>

	      <a v-show="!displaySkeleton" class="carousel-control-next" href="#carouselSm" role="button" data-slide="next">
	        <span class="carousel-control-next-icon" aria-hidden="true"></span>
	        <span class="sr-only">Next</span>
	      </a>
	    </div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
    	props: ['data'],
        data(){
        	return {
        		items: null,
                itemsSm: [],
                itemsMd: [],
                displaySkeleton: true
        	}
        },
        mounted(){
            this.getDataSlide(this.data.slide_id);  
        },
        methods:{
            getDataSlide(slide_id){
                var vm = this;
                axios
	                .get('https://derkayvargas.com/slide_get_data/'+slide_id)
	                .then(res => {
	                	setTimeout(function(){
							vm.displaySkeleton = false;

							vm.items = res.data.items;

		                    vm.items.forEach(item => {
		                        if (item.size == 'SM')
		                            vm.itemsSm.push(item);
		                        if (item.size == 'MD')
		                            vm.itemsMd.push(item);
		                        item.image.public_path = 'https://derkayvargas.com' + item.image.public_path
		                    });
		                    $('#carouselSm').carousel({interval: 4500, ride: 'carousel'})
		                    $('#carouselMd').carousel({interval: 4500, ride: 'carousel'})

						}, 3250);
	                })
            },
        }
    }
</script>

<style scoped lang="scss">
	.carousel{
		min-height: 250px;
	}
	.carousel .carousel-inner{
		padding: 12px;
	}
	.carousel .carousel-inner .carousel-item {
		cursor: pointer;
	}
	.carousel .carousel-inner .carousel-item img{
		border-radius: 5px;
		box-shadow: 4px 1px 15px -5px rgba(236,10,29,1);
	}
</style>