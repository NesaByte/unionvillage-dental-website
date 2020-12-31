<template>
  <div id="front" class="front">
    <div class="covid-box">
      <h1>
        COVID-19 update: Our clinic is open! We have changed our company policy to follow
        Ontario guidelines and to better ensure the safety of our patients.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Afront",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.front {
  background-image: url("../assets/afront.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.covid-box {
  background: #0032f9b6;
  position: relative;
  height: 35px;
  margin: auto;
  width: 100%;
  top: 7%;
  bottom: 20%;
}

.covid-box h1 {
  font-family: Tahoma, "Segoe UI", Geneva, Verdana, sans-serif;
  font-size: 12px;
  color: white;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  padding-top: 10px;
}

@media screen and (max-width: 1200px) {
  .covid-box {
    height: 50px;
  }
}
@media screen and (max-width: 600px) {
  .covid-box {
    height: 65px;
  }
  .covid-box h1 {
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
  }
}

/* Small phones */
@media screen and (max-width: 450px) {
  .covid-box {
    height: 65px;
  }

  .covid-box h1 {
    font-size: 11px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
}
@media screen and (max-width: 325px) {
  .covid-box {
    height: 80px;
  }
}

@media (min-width: 700px) {
  .front {
    background-attachment: fixed;
  }
}
</style>
