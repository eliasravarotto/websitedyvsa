<template>
	<section id="prefooter">
		<div class="py-4">
				<div class="container container-prefooter">
					<VueSlickCarousel :arrows="false" :dots="false" v-bind="sliderConfig">
						<div>
							<img v-lazy="'/logo_tsm.png'">
						</div>
						<div>
							<img v-lazy="'/iso_14001.png'">
						</div>
						<div>
							<img v-lazy="'/logo_eco.png'">
						</div>
						<div>
							<img v-lazy="'/logo_etc.png'">
						</div>
						<div>
							<img v-lazy="'/logo_genuine_parts.png'">
						</div>
						<div>
							<img v-lazy="'/logo_mant_exp.png'">
						</div>
					</VueSlickCarousel>
				</div>
		</div>
	</section>
</template>

<script>
	
	import axios from '~/plugins/axios'
	import VueSlickCarousel from 'vue-slick-carousel'
  	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  	// optional style for arrows & dots
  	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	export default {
		components: { VueSlickCarousel },
        data(){
        	return {
        		sliderConfig:{
							  "speed": 450,
							  "dots": true,
        					  "autoplay": true,
							  "infinite": true,
							  "slidesToShow": 6,
							  "focusOnSelect": true,
							  "responsive": [
							  		{
								      "breakpoint": 1200,
								      "settings": {
							        		"slidesToShow": 6,
								      	}
								    },
								    {
								      "breakpoint": 992,
								      "settings": {
									        "slidesToShow": 4,
								      }
								    },
								    {
								      "breakpoint": 768,
								      "settings": {
									        "slidesToShow": 4,
								      	}
								    },
								    {
								      "breakpoint": 576,
								      "settings": {
									        "slidesToShow": 2,
								      	}
								    }
							  	]
							}
        	}
        },
    }
</script>

<style lang="scss">
	#prefooter{
		background-color: #f7f7f7;
	}
	.container-prefooter .slick-track{
		display: flex;
		align-items: center;
	}
</style>