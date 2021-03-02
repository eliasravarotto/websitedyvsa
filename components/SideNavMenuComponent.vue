<template>
	<nav id="sidebar">
      <ul class="list-unstyled nav_custom">
          <li class=""><nuxt-link :to="'/modelos'" class="nav-link">Modelos</nuxt-link></li>
          <li class=""><nuxt-link :to="'/toyota-plan'" class="nav-link">Plan de Ahorro</nuxt-link></li>
          <li class=""><nuxt-link :to="'/usados'" class="nav-link">Usados</nuxt-link></li>
          <li class=""><nuxt-link :to="'/servicios-y-accesorios'" class="nav-link">Servicios y Accesorios</nuxt-link></li>
          <li class=""><a class="nav-link" href="https://dyv.e.toyota.com.ar/inventory" target="_blank">Cotizador Online</a></li>
          <li class=""><nuxt-link :to="'/financiacion'" class="nav-link">Financiación</nuxt-link></li>
          <li class=""><nuxt-link :to="'/contacto'" class="nav-link">Contacto</nuxt-link></li>
          <li class="custom-divider rgt"><span></span></li>
          <li class=""><nuxt-link :to="'/responsabilidad-social-empresaria'" class="nav-link">RSE</nuxt-link></li>
          <li class=""><a href="https://www.kintomobility.com.ar/" target="_blank" class="nav-link"> <img style="height: 1.4rem;" src="/logo-kinto.png"> </a></li>
          <li class=""><nuxt-link :to="'/entradas'" class="nav-link">Noticias y Novedades</nuxt-link></li>
      </ul>
      </nav>
</template>

<style scoped lang="scss">
  /* -------------------------------------
    SIDEBAR STYLE
  --------------------------------------- */
  #sidebar {
    width: 100%;
    top: 109px;
    right: -100%;
    height: 100vh;
    z-index: 999;
    color: #fff;
    padding: 0rem;
    position: fixed;
    background: #ffffff;
    transition: all 0.3s;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
  #sidebar.active {
      right: 0;
  }
  #sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }
  #sidebar ul.nav_custom {
    padding: 20px 10px;
    overflow-y: scroll;
    position: relative;
    height: 75vh;
    padding: 20px 35px;
  }
  #sidebar ul.nav_custom li{
  	text-align: end;
  }
  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li .nav-link {
    font-size: 1.2rem;
    color: #373737;
    text-decoration: none;
  }

  @media (min-width: $breakpoint-md) { 
    #sidebar{
      width: 400px !important;
    }

    .navbar-ppal .navbar-brand img {
      height: 48px !important;
    }
  }

</style>