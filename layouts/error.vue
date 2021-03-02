<template>
	<div>
		<section class="wrapper-not-found section">
			<div v-if="error.statusCode === 404" class="container text-center py-5">
				<div class=""><img class="img-fluid" src="/404.gif"></div>
				<div class="my-4">
					<h1 class="mb-4">PAGE NOT FOUND</h1>
					<p class="mb-4">La página que estás buscando no pudo ser encontrada.</p>
				</div>
				<NuxtLink class="button button-dark button-sm" to="/">Home page</NuxtLink>
			</div>
			<div v-else class="container text-center py-5">
				<h1>¡Oh, no! Ha ocurrido un error :(</h1>
				<pre>{{error}}</pre>
				<NuxtLink class="button button-dark button-sm" to="/">Home page</NuxtLink>
			</div>
		</section>
	</div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style scoped>
	.wrapper-not-found{
		background-color: #eeeeee;
		height: 100vh
	}
	p{
		font-size: 22px
	}
</style>