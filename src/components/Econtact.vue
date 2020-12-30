<template>
  <div
    id="about"
    class="about ssection"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
  >
    <h2>CONTACT US</h2>

    <div class="center-box">
      <div
        class="text"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <h1>Better yet, see us in person!</h1>

        <p>
          Uninovillage dental is a patient-focused dental office in 2 Station Lane,
          Unionville. You will receive comprehensive care from our experienced
          professional dental team. <br />
          Our dental clinic offer you family environmental dental care. <br /><br />
        </p>
      </div>
      <div class="row">
        <div class="icons" data-aos="fade-down" data-aos-delay="150" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact1.png" alt class="img-fluid" />
              <h4>Business Hours</h4>
            </div>
            <p>
              Monday: By appointment <br />
              Tuesday: 9:30am - 6:30pm<br />
              Wednesday: 9:30am - 6:30pm<br />
              Thursday: By appointment<br />
              Friday: By appointment<br />
              Saturday: 9:30am - 6:30pm<br />
              Sunday: 9:30am - 6:30pm<br />
            </p>
          </div>
        </div>
        <div class="icons" data-aos="fade-down" data-aos-delay="300" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact2.png" alt class="img-fluid" />
              <h4>Address</h4>
            </div>
            <p>2 Station Lane, Unionville, ON, CA L3R 1R3</p>
          </div>
        </div>
        <div class="icons" data-aos="fade-up" data-aos-delay="450" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact3.png" alt class="img-fluid" />
              <h4>Email</h4>
            </div>
            <p>Dr Li's Email</p>
          </div>
        </div>
        <div class="icons" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact4.png" alt class="img-fluid" />
              <h4>Phone</h4>
            </div>
            <p>(905) 604-9069</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Babout",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.about {
  background: #e3e9d1;
  background-size: cover;
  display: block;
}
hr.liner {
  border: 1px solid#AE9C9C;
  width: 85%;
}
.text {
  display: block;
  margin-top: 5%;
  margin-right: 10%;
  margin-left: 10%;
}
.about h1 {
  font-family: Tahoma;
  font-weight: 900;
  color: #707070;
  font-size: 15px;
  margin-right: 35%;
  margin-left: 40%;
}
.about p {
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
}

.uvd-col .img {
  position: static;
  vertical-align: middle;
  border-style: none;
}
.img h4 {
  display: inline;
  text-align: left;
  padding: 0;
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
  font-weight: 900;
  margin: 20px 1px 10px 10px;
}
.uvd-col p {
  line-height: 13px;
  margin-bottom: 0;
  padding: 10px 20px 20px 25px;
  word-wrap: break-word;
  font-family: Tahoma;
  color: #707070;
  font-size: 12px;
}
.uvd-col h3 {
  text-align: left;
  padding: 0;
  margin: 20px 1px 20px 25px;
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
  font-weight: 900;
}
.icons {
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
  display: block;
  margin-top: 1%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 80%;
  height: auto;
  margin-right: 10%;
  margin-left: 10%;
}
.img-fluid {
  max-width: 25%;
  max-height: 25%;
}

@media screen and (max-width: 2100px) {
}

@media screen and (max-width: 1600px) {
}

@media screen and (max-width: 1400px) {
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 1024px) {
  .text {
    margin-top: 15%;
    margin-left: 0%;
  }

  .photo-box {
    position: absolute;
    height: 100%;
    width: 100%;
    margin-right: 0%;
    margin-left: 5%;
    margin-top: -5%;
  }
  .center-box h1 {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 0%;
    margin-bottom: 0%;
  }
}

@media screen and (max-width: 900px) {
  .center-box h1 {
    font-size: 18px;
  }
  .center-box h3 {
    font-size: 30px;
  }
}

@media screen and (max-width: 850px) {
  .center-box h1 {
    font-size: 18px;
  }
  .center-box h3 {
    font-size: 29px;
  }
}

@media screen and (max-width: 800px) {
  .center-box h1 {
    font-size: 17px;
  }

  .center-box h3 {
    font-size: 28px;
  }
}

@media screen and (max-width: 700px) {
  .center-box h1 {
    font-size: 16px;
  }

  .center-box h3 {
    font-size: 26px;
  }
}

@media screen and (max-width: 650px) {
  .center-box h1 {
    font-size: 15px;
  }

  .center-box h3 {
    font-size: 23px;
  }
}

@media screen and (max-width: 600px) {
  .center-box h1 {
    font-size: 15px;
  }

  .center-box h3 {
    font-size: 23px;
  }
}

@media screen and (max-width: 550px) {
  .center-box h1 {
    font-size: 14px;
  }
  .center-box h3 {
    font-size: 20px;
  }
}

@media screen and (max-width: 500px) {
  .center-box h1 {
    font-size: 13px;
  }
}

@media screen and (max-width: 450px) {
}

@media screen and (max-width: 400px) {
  .center-box h1 {
    font-size: 12px;
  }
}

@media screen and (max-width: 350px) {
  .center-box h1 {
    margin-top: 20%;
  }
}
</style>
