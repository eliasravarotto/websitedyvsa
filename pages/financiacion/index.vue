<template>
	<div class="wrapper">
		<section class="animate-fade-in">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="title-wrapper">
								<span>Elegí la forma ideal para financiar tu Toyota</span>
								<h1>Financiación</h1>
							</div>
						</div>
					</div>

					<div id="planesAvanzadosAdjudicados">
						<div class="row">
							<div class="col-12 col-md-6">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Toyota Plan</h2>
										<p>La forma más conveniente de acceder a tu Toyota. Encontrá el <b>Plan De Ahorro</b> ideal para vos</p>
										<nuxt-link :to="'/toyota-plan'" tag="a" > Ver Planes -</nuxt-link>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6">
								<div class="mb-3 box-background">
									<div class="box">
										<h2>Financiá tu Toyota</h2>
										<p>Elegí la financiación que más te convenga. COTIZÁ Y EMITÍ TU APROBADO ONLINE</p>
										<a href="https://www.toyotacfa.com.ar/" target="_blank"> Conocer más -</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</section>

		<div class="section">
			<div class="container">
				<div class="custom-divider"><span></span></div>
			</div>
		</div>

		<section class="animate-fade-in">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Créditos Prendarios</h2>
						<p>Nuestros planes de financiación aplican hasta el 75% del valor de la unidad. El 25% restante se abona junto a la entrega de la unidad y la firma del crédito prendario. Tenemos planes a Tasa Fija en pesos y en plazos de hasta 60 meses. Puede consultarnos también por nuestros planes de Tasa Variable.</p>
						<a class="btn btn-link" target="_blank" href="https://www.toyotacfa.com.ar/creditos-prendarios">Más detalles -</a>
					</div>
				</div>
			</div>
		</section>

		<div class="section">
			<div class="container">
				<div class="custom-divider"><span></span></div>
			</div>
		</div>

		<section class="animate-fade-in">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Leasing</h2>
						<p>El leasing es un arrendamiento financiero que le permite disponer del uso y goce del vehículo mediante el pago de un canon mensual. Incluye la opción de compra al finalizar el contrato, en el caso que el cliente desee quedarse con el vehículo.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-md-6 my-3">
						<h4>Beneficios Fiscales</h4>
  						<ul class="list-unstyled">
  							<li><i class="fa fa-check"></i> El IVA se abona mensualmente con los cánones y no al momento de la compra del vehículo</li>
  							<li><i class="fa fa-check"></i> Amortización acelerada</li>
  							<li><i class="fa fa-check"></i> No se encuentra alcanzado por el impuesto a la ganancia mínima presunta (dependiendo del tipo de vehículo y de la condición impositiva del tomador)</li>
  						</ul>
					</div>
					<div class="col-12 col-md-6 my-3">
						<h4>Beneficios Económicos y Financieros</h4>
  						<ul class="list-unstyled">
  							<li><i class="fa fa-check"></i> Opción de compra al finalizar el contrato</li>
  							<li><i class="fa fa-check"></i> Financiación a Tasa Fija</li>
  							<li><i class="fa fa-check"></i> Uso y goce del vehículo mediante el pago de un canon mensual </li>
  						</ul>
					</div>
				</div>
			</div>
		</section>

		<div class="section">
			<div class="container">
				<div class="custom-divider"><span></span></div>
			</div>
		</div>

		<div class="container">
			<ContactAreaFinanciacionComponent />
		</div>
	</div>
</template>

<script>
	export default {
		head(){
          return {
	            title: 'Toyota Derka y Vargas | Financiación',
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
	            return 'Toyota Derka y Vargas | Financiación';
	          },
	          description() {
	            return 'Concesionario Oficial Toyota en Chaco | Financiación';
	          },
	          url() {
	            return 'https://derkayvargas.com/financiacion';
	          },
	          image() {
	            return 'https://test.derkayvargas.com/logo-og.jpg';
	          },
	          type() {
	            return 'website';
	          },
	    },
        data(){
        	return {}
    	}
    }
</script>


<style lang="scss">
	.box{
		padding: 1.7rem;
	    box-sizing: border-box;
	    width: 100%;
	    border-radius: 6px;
	    -webkit-backdrop-filter: blur(4px);
	    backdrop-filter: blur(4px);
	    box-shadow: 10px 35px 50px 0 rgba(0,0,0,.1);
	    background-color: rgba(55,55,55,.6);
	    color: #fff;
	    transition: all .4s ease-in-out;
	}
	.box:hover{
	    background-color: rgba(55,55,55,.8);
	}
	#planesAvanzadosAdjudicados a{
		font-weight: 700;
		color: $ligth;
	}
	.box-background{
		background: url(https://www.toyota.com.ar/storage/contents/KFAT5HKKgW.png);
		background-position: left;
	}
</style>