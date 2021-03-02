<template>
  <div>
    <SideNavMenuComponent />
      <!-- Page Content -->
      <div id="content">
        <TopBarComponent />
        <NavBarMenuComponent />
        <Nuxt />
        <PreFooterComponent />
        <FooterComponent />
      </div>
      
      <!-- Dark Overlay element -->
      <div class="overlay"></div>

  </div>
</template>

<style>

a,
  a:hover,
  a:focus {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s;
  }

  /* ---------------------------------------------------
    WRAPPER STYLE
  ----------------------------------------------------- */
  .wrapper {
      display: block;
  }
  /* ---------------------------------------------------
    CONTENT STYLE
  ----------------------------------------------------- */
  #content {
      width: 100%;
      min-height: 100vh;
      transition: all 0.3s;
      position: absolute;
      top: 0;
      right: 0;
  }

  /* ---------------------------------------------------
    OVERLAY
  ----------------------------------------------------- */
  .overlay.active {
      display: block;
      opacity: 1;
  }
  .overlay {
    top: 109px;
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

</style>
