<template>
	<nav class="navbar navbar-expand-lg navbar-light navbar-ppal">
    <nuxt-link class="navbar-brand" tag="a" :to="'/'">
      <img src="./../static/logo-dyv.png" style="height: 40px">
    </nuxt-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav overflow-auto ml-auto">
        <!-- <nuxt-link class="nav-item" tag="li" active-class="nuxt-link-exact-active" to="/">
          <a class="nav-link" href="#">Home</a>
          <span class="current"></span>
        </nuxt-link> -->

        <li class="nav-item">
          <nuxt-link class="nav-link"  to="/modelos">
            Modelos
            <span class="current"></span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link class="nav-link" :to="'/financiacion'">
            Financiación
            <span class="current"></span>
          </nuxt-link>
        </li>
        
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="'/usados'">
            Usados
            <span class="current"></span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link class="nav-link" :to="'/servicios-y-accesorios'">
            Posventa
            <span class="current"></span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="https://dyv.e.toyota.com.ar/inventory" target="_blank">Cotizador Online</a>
          <span class="current"></span>
        </li>

      </ul>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
          <button type="button" id="sidebarCollapse" class="navbar-btn d-flex justify-content-end">
              <div class="toggler_icon">
                <span></span> 
                <span></span> 
                <span></span>
              </div>
          </button>
        </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    components: {},
    mounted(){
      $(document).ready(function () {
        $('#dismiss, .overlay').on('click', function () {
            $('#sidebarCollapse').removeClass('active');
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
            $("html").css("overflow", "auto");
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('.overlay').toggleClass('active');
            $(this).toggleClass('active');
            
            if ($(this).hasClass('active')) {
              $("html").css("overflow", "hidden");
            }else{
              $("html").css("overflow", "auto");
            }
        });

        $("a").on('click', function () {
            if ($('#sidebar').has('active') && $(this) !=  $('#sidebarCollapse') ) {
              $('#sidebarCollapse').removeClass('active');
              $('#sidebar').removeClass('active');
              $('.overlay').removeClass('active');

              $("html").css("overflow", "auto");
            }
        });
      });
    }
  }
</script>

<style lang="scss">

  .navbar-ppal{
    border-bottom: 1px solid rgba(55,55,55,.1);
    padding: .5rem 1.5rem !important;
    height:65px;
  }
  .navbar-ppal .navbar-brand {
    padding: 0px;
    margin: 0px;
  }
  .navbar-ppal.navbar-light .navbar-nav .nav-link {
    color: $dark;
    font-weight: 500;
    padding-right: .9rem;
    padding-left: .9rem;
  }
  .navbar-ppal.navbar-light .navbar-nav .nav-item span.current{
    display: block;
    height: 2px;
    width:0px;
  }
  .navbar-ppal.navbar-light .navbar-nav .nav-item .nuxt-link-active,
  .navbar-ppal.navbar-light .navbar-nav .nav-item:hover .nav-link{
    color: $primary;
  }
  .navbar-ppal.navbar-light .navbar-nav .nav-item .nuxt-link-active span.current,
  .navbar-ppal.navbar-light .navbar-nav .nav-item:hover span.current{
    height: 2px;
    width: 100%;
    display: block;
    background-color: $primary;
    transition: width 0.4s ease-in-out;
    -o-transition: width 0.4s ease-in-out;
    -moz-transition: width 0.4s ease-in-out;
    -webkit-transition: width 0.4s ease-in-out;
  }

  /*-------------------------------------
    BTN SIDEBAR STYLE
  ---------------------------------------*/
  .navbar-btn {
    width: 70px;
    background: #fff;
    cursor: pointer;
  }

  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
    margin-left: auto;
  }

  .navbar-btn .toggler_icon {
    width: 25px;
    height: 20px;
    position: relative;
    margin-left: .5rem;
    transition: .5s ease-in-out;
  }

  .navbar-btn .toggler_icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #373737;
    border-radius: 5px;
    left: 0;
    transition: .25s ease-in-out;
  }
  .navbar-btn .toggler_icon span:first-child {
      top: 0;
  }
  .navbar-btn .toggler_icon span:nth-child(2) {
    top: 8.5px;
    /*height: 2.5px;*/
  }
  .navbar-btn .toggler_icon span:nth-child(3) {
    top: 16.5px;
    /*height: 2.5px;*/
  }

  .navbar-btn.active .toggler_icon span:first-child {
      top: 8.5px;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
  }
  .navbar-btn.active .toggler_icon span:nth-child(2) {
      opacity: 0;
  }
  .navbar-btn.active .toggler_icon span:nth-child(3) {
    top: 8.5px;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .overflow-auto{
    overflow:auto;
  }
</style>