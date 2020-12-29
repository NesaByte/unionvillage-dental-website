<template>
  <div id="app">
    <div data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
      <AAnavbar />
      <Afront id="front" />
      <Babout id="about" />
      <CTreatment id="treatment" />
      <DPolicies id="policies" />
      <Econtact id="contact" />

      <AAspace />
      <Dportfolio id="portfolio" />
      <ffooter />
    </div>
  </div>
</template>

<script>
import Afront from "./components/Afront.vue";
import Babout from "./components/Babout.vue";
import CTreatment from "./components/CTreatment.vue";
import DPolicies from "./components/DPolicies.vue";
import Econtact from "./components/Econtact.vue";
import AAnavbar from "./components/AAnavbar.vue";

/*
import Ffooter from './components/Ffooter.vue'
import AAspace from './components/AAspace.vue'
 import 'vue-navigation-bar/dist/vue-navigation-bar.css'*/
export default {
  name: "App",
  components: {
    Afront,
    Babout,
    CTreatment,
    DPolicies,
    Econtact,
    AAnavbar,

    /*AAspace,
    Ffooter,
    */
  },
};
</script>

<style>
body {
  margin: 0%;
}

.ssection {
  padding: 60px 0;
  overflow: hidden;
  display: block; /*
    border-style: solid;    border-color: red;*/
}

.container {
  /*
    border-style: solid;    border-color: green;*/
  display: block;
  right: 15%;
  left: 15%;
  margin-right: auto;
  margin-left: auto;
}

h2 {
  font-family: Sitka Small;
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin-top: 5%;
  white-space: nowrap;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: #c17a00;
}

.h2-shadow {
  font-family: Sitka Small;
  color: #e5cda0;
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  margin-top: 3%;
  white-space: nowrap;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media screen and (min-width: 1400px) {
  .h2-shadow {
    margin-top: 4%;
  }
}

@media screen and (max-width: 900px) {
  h2 {
    font-size: 37px;
  }
  .h2-shadow {
    font-size: 65px;
  }
}

@media screen and (max-width: 800px) {
  h2 {
    font-size: 33px;
  }
  .h2-shadow {
    font-size: 60px;
  }
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 28px;
  }
  .h2-shadow {
    font-size: 55px;
  }
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 24px;
  }
  .h2-shadow {
    font-size: 50px;
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 20px;
  }
  .h2-shadow {
    font-size: 45px;
  }
}

@media screen and (max-width: 400px) {
  .h2-shadow {
    font-size: 40px;
  }
}

@media screen and (max-width: 300px) {
  .h2-shadow {
    font-size: 30px;
  }
}

@media screen and (max-width: 200px) {
  .h2-shadow {
    font-size: 20px;
  }
}
</style>
