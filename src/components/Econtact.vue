<template>
  <div id="contact" class="contact ssection">
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <p class="h2-shadow">GET IN TOUCH</p>
      <h2>GET IN TOUCH</h2>
    </div>

    <div class="center-box container">
      <div class="row">
        <div class="icons" data-aos="fade-down" data-aos-delay="150" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/contact_icon.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="icons" data-aos="fade-down" data-aos-delay="300" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/contact_icon.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="icons" data-aos="fade-up" data-aos-delay="450" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/contact_icon.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="icons" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/contact_icon.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <!--div class="text">
            <h1>
                 SOME CONVING WORDS in here. like, pls people, get in touch with me happy face. xd
            </h1>
            </div-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Econtact",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.contact {
  background: #fbfaf8;
  background-size: cover;
  display: block;
}

.text {
  display: inline-block;
  width: 60%;
  margin-top: 2%;
  margin-left: 20%;
  margin-left: 20%;
  border-style: solid;
  border-color: black;
}

.contact h1 {
  font-family: Sitka Text;
  color: black;
  font-size: 20px;
}

/*.icons{
  display: inline-block;
  width: 48%;
  margin-top:18%;/*
  margin-left:0%;
  margin-right: 2%;
}*/

.uvd-col .img {
  position: relative;
  vertical-align: middle;
  border-style: none; /*
  border-style: solid;    border-color: black;*/
}

.icons {
  /*
  border-style: solid;    border-color: green;*/
  box-sizing: border-box;
  display: block;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin-left: 1%;
  margin-right: 1%;
  max-width: 23%;
  width: 43%;
  margin-bottom: 10px;
}

.row {
  /*
    border-style: solid;    border-color: red;*/
  display: block;
  margin-top: 15%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 30%;
  height: auto;
  margin-right: 35%;
  margin-left: 35%;
}

.img-fluid {
  max-width: 100%;
  max-height: 100%;
}
</style>
