<template>
  <!-- - - - - - NAVIGATION BAR - - - - - -->
  <header class="navg">
    <b-navbar fixed="top" toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navv">
          <b-nav-item active href="#about" to="/">ABOUT US</b-nav-item>
          <b-nav-item active href="#treatment" to="/about">TREATMENT</b-nav-item>
          <b-nav-item active href="#policies" to="/projects">POLICIES</b-nav-item>
          <b-nav-item active href="#contact" to="/contact-us">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #73873df1;
  padding-bottom: 0;
  .navbar-nav {
    margin-left: auto;
    margin-right: auto;
    .nav-item {
      .nav-link {
        color: white;
        font-family: Roboto;
        transition: all ease-in-out 0.5s;
        border-bottom: 3px solid transparent;
        text-transform: uppercase;
        /*font-weight: 500;*/
        font-size: 18px;
        /*padding: 5px;*/
        padding-left: 35px;
        padding-right: 35px;
        &.router-link-active {
          color: blue;
          border-bottom: 3px solid purple;
        }
      }
      &:hover {
        .nav-link {
          color: paleturquoise;
          border-bottom: 3px solid #234120;
        }
      }
    }
  }
}
@media all and (max-width: 600px) {
  .header-info {
    border: none;
    justify-content: center;
    .info-list {
      display: none;
    }
  }
}
</style>
