<template>
  <div id="app">
    <div data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
      <AAnavbar />
      <Afront id="front" />
      <Babout id="about" />
      <AAspace />
      <CTreatment id="treatment" />
      <DPolicies id="policies" />
      <Econtact id="contact" />
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
import Ffooter from "./components/Ffooter.vue";
import AAnavbar from "./components/AAnavbar.vue";
import AAspace from "./components/AAspace.vue";

export default {
  name: "App",
  components: {
    Afront,
    Babout,
    CTreatment,
    DPolicies,
    Econtact,
    Ffooter,
    AAnavbar,
    AAspace,
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
  display: block;
}

.container {
  display: block;
  right: 15%;
  left: 15%;
  margin-right: auto;
  margin-left: auto;
}

h2 {
  font-family: Tahoma, "Segoe UI", Geneva, Verdana, sans-serif Small;
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  white-space: nowrap;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: #58682c;
}

@media screen and (max-width: 900px) {
  h2 {
    font-size: 37px;
  }
}

@media screen and (max-width: 800px) {
  h2 {
    font-size: 33px;
  }
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 28px;
  }
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 24px;
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 20px;
  }
}
</style>
