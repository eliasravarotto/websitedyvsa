import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

Vue.filter('price', function (value) {

	var formatter = new Intl.NumberFormat('es-AR', {
	  style: 'currency',
	  currency: 'ARS',
	  minimumFractionDigits: 2
	})

	return formatter.format(value)
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

