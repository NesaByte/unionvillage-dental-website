<template>
  <div id="contact" class="contact ssection">
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <h2>CONTACT US</h2>
    </div>
    <div
      class="center-box container"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <div class="text">
        <h1>Better yet, see us in person!</h1>

        <p>
          Uninovillage dental is a patient-focused dental office in 2 Station Lane,
          Unionville. You will receive comprehensive care from our experienced
          professional dental team. <br />
          Our dental clinic offer you family environmental dental care. <br /><br />
        </p>
      </div>
      <div class="row position align-items-stretch">
        <div
          class="portfolio-box-1"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact1.png" alt class="img-fluid" />
              <h3>Business Hours</h3>
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
        <div
          class="portfolio-box-1"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact2.png" alt class="img-fluid" />
              <h3>Address</h3>
            </div>
            <p>2 Station Lane, Unionville, ON, CA L3R 1R3</p>
          </div>
        </div>
        <div
          class="portfolio-box-1"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact3.png" alt class="img-fluid" />
              <h3>Email</h3>
            </div>
            <p>Dr Li's Email</p>
          </div>
        </div>
        <div
          class="portfolio-box-1"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/econtact4.png" alt class="img-fluid" />
              <h3>Phone</h3>
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
  name: "Econtact",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.contact {
  background-color: #e3e9d1;
  background-size: cover;
  display: block;
}
.contact h1 {
  font-family: Tahoma;
  font-weight: 900;
  color: #707070;
  font-size: 15px;
  text-align: center;
}
.contact p {
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
}

.text {
  display: block;
  margin-top: 5%;
}
.img h3 {
  display: inline;
  text-align: left;
  padding: 0;
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
  font-weight: 900;
  margin: 20px 1px 10px 10px;
}
.uvd-col li {
  font-size: 14px;
  line-height: 13px;
  color: #333;
  margin-bottom: 0;
  padding: 0 20px 20px 20px;
  word-wrap: break-word;
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

hr.liner {
  border: 1px solid#AE9C9C;
  width: 85%;
}

.img-fluid {
  max-width: 25%;
  max-height: 25%;
}

.uvd-col .img {
  position: relative;
  vertical-align: middle;
  border-style: none;
}

.uvd-col {
  border-radius: 0 0 4px 4px;
}

.row {
  display: block;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  right: 20%;
  left: 20%;
}

.portfolio-box-1 {
  box-sizing: border-box;
  display: block;
  flex-basis: 24%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  max-width: 21%;
  width: 240px;
  margin-bottom: 50px;
}

@media screen and (max-width: 1024px) {
  .portfolio-box-1 {
    max-width: 46%;
    flex-basis: 46%;
  }

  .row {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
}

@media screen and (max-width: 512px) {
  .portfolio-box-1 {
    max-width: 96%;
    flex-basis: 96%;
  }

  .row {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
}
@media screen and (max-width: 750px) {
}

@media screen and (max-width: 550px) {
}

@media screen and (max-width: 450px) {
}
@media screen and (max-width: 350px) {
}
</style>
