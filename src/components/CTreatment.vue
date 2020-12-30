<template>
  <div id="portfolio" class="portfolio ssection">
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <h2>TREATMENT</h2>
    </div>
    <div
      class="center-box container"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <div class="text">
        <p>At Unionvillage dental, we offer a wide variety of services.</p>
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
              <img src="../assets/ctreatment0.jpg" alt class="img-fluid" />
            </div>
            <h3>Restorative dental care</h3>
            <hr class="liner" />
            <p>
              - Digital X-ray with Reduced Radiation <br />
              - Tooth Fillings & Restoration <br />
              - Root Canal Treatment <br />
              - Sealants <br />
              - Mouth Guards <br />
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
              <img src="../assets/ctreatment1.jpg" alt class="img-fluid" />
            </div>
            <h3>Cosmetic Dentistry</h3>
            <hr class="liner" />
            <p>
              - Dental Crowns <br />
              - Dental Bridges <br />
              - Dentures <br />
              - Dental Veneers <br />
              - Teeth Whitening <br />
            </p>
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
              <img src="../assets/ctreatment2.jpg" alt class="img-fluid" />
            </div>
            <h3>Orthodontics</h3>
            <hr class="liner" />
            <p>
              - Fixed Braces <br />
              - Removal Braces <br />
              - Retainers <br />
              - Rapid Palatal Expanders
            </p>
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
              <img src="../assets/ctreatment3.jpg" alt class="img-fluid" />
            </div>
            <h3>Wisdom teeth extraction</h3>
            <hr class="liner" />
            <p>
              Wisdom teeth come during teens or twenties. Wisdom teeth can be painful or
              crowding your existing teeth. Extraction is a common surgery procedure to
              solve the problems that caused by wisdom teeth.
            </p>
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
              <img src="../assets/ctreatment4.jpg" alt class="img-fluid" />
            </div>
            <h3>Implant</h3>
            <hr class="liner" />
            <p>
              Dental implants are the most permanent nature looking solution for missing
              teeth replacement.
            </p>
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
              <img src="../assets/ctreatment5.jpg" alt class="img-fluid" />
            </div>
            <h3>Dental Hygiene</h3>
            <hr class="liner" />
            <p>
              - Teeth Scaling <br />
              - Fluoride treatment <br />
              - Tooth Polishing <br />
              - Root Planning & Deep cleaning <br />
              - Sensitive Teeth & Desensitization <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dportfolio",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.portfolio {
  background-color: #e3e9d1;
  background-size: cover;
  display: block;
}

.text p {
  font-family: Tahoma;
  font-weight: 700;
  color: #707070;
  font-size: 14px;
}
.text {
  display: block;
  margin-top: 5%;
  margin-right: 27%;
  margin-left: 27%;
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
  padding: 0 20px 20px 25px;
  word-wrap: break-word;
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
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
  max-width: 100%;
  max-height: 100%;
}
.uvd-col .img {
  position: relative;
  vertical-align: middle;
  border-style: none;
}

.uvd-col {
  background: #fcfcfc;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
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
  flex-basis: 33.3333%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  max-width: 29.3333%;
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
  .text {
    margin-right: 15%;
    margin-left: 15%;
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
  .text p {
    font-size: 15px;
  }
  .text {
    margin-top: 6%;
    margin-right: 5%;
    margin-left: 5%;
  }
  .uvd-col p {
    font-size: 15px;
  }
  .uvd-col h3 {
    font-size: 15px;
  }
}

@media screen and (max-width: 550px) {
  .text p {
    font-size: 14px;
  }
  .text {
    margin-top: 6%;
    margin-right: 5%;
    margin-left: 5%;
  }
  .uvd-col p {
    font-size: 14px;
  }
  .uvd-col h3 {
    font-size: 14px;
  }
}

@media screen and (max-width: 450px) {
  .text p {
    font-size: 13px;
  }
  .text {
    margin-top: 8%;
  }

  .uvd-col p {
    font-size: 13px;
  }
  .uvd-col h3 {
    font-size: 13px;
  }
}
@media screen and (max-width: 350px) {
  .text p {
    font-size: 12px;
  }
  .text {
    margin-top: 10%;
  }

  .uvd-col p {
    font-size: 12px;
  }
  .uvd-col h3 {
    font-size: 12px;
  }
}
</style>
