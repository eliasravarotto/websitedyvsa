<template>
  <div>
    <SliderComponent :data="{slide_id: 1}" />
    
    <div class="wrapper"></div>

    <QuickLinksComponent />

 	<DividerSectionComponent />

    <VehicleGalleryComponent />

    <DividerSectionComponent />

	<div class="container">
		<div class="row d-flex justify-content-center">
			<div class="col-11 col-md-12">
    			<NewsDyvComponent :data="{ query: '' }" />
			</div>
		</div>
	</div>

  <DividerSectionComponent />

  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-11 col-md-6">
	       <FacebookFanPage />
      </div>
      <div class="col-11 col-md-6">
         <InstagramfeedComponent />
      </div>
    </div>
  </div>


  </div>
</template>

<script>
  export default {
    head(){
          return {
            title: this.title,
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
            return 'Toyota Derka y Vargas - Concesionario Oficial Toyota en Chaco - Financiá tu Toyota - Servicios de Posventa, repuestos y accesorios.';
          },
          url() {
            return 'https://derkayvargas.com';
          },
          image() {
            return 'https://derkayvargas.com/logo-og.jpg';
          },
          type() {
            return 'website';
          },
    },
  }
</script>