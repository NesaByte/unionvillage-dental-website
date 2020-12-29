<template>
  <div
    id="about"
    class="about ssection"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
  >
    <div class="boxx">
      <p class="h2-shadow">POLICIES</p>
      <h2>POLICIES</h2>
    </div>

    <div class="center-box container">
      <div
        class="text"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <h1>Appointment Cancellation Policy</h1>

        <p>
          Your appointment is confirmed at the time of your booking. With your
          appointment, we reserve the time for our dentist and dental assistant for your
          procedures. We will also be sterilizing and preparing the operatory and
          armamentarium needed for the required procedures. We therefore require you to
          give us a minimum 24 HR notification if you are unable to attend the
          appointment. If the cancellation is made less than 24 HRs, a cancellation fee
          will be charged.
        </p>

        <h1>Emergency Treatment Policy</h1>

        <p>
          In the event of drop-in patient with urgent needs. The drop-in patient will be
          treated first depends on the severity of emergency. We apologize if your
          appointment times have to be delayed due to the case of emergency drop-in
          patients.
        </p>
        <h1>Payment Policy</h1>

        <p>
          We accept all forms of payment, including cash, visa, mastercard, and debit
          card. We also accept all forms of insurance policies.
        </p>
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
  background: #fbfaf8;
  background-size: cover;
  display: block;
}

.text {
  display: block;
  margin-top: 10%;
  margin-right: 10%;
  margin-left: 10%;
}
.about h1 {
  font-family: Tahoma;
  color: #707070;
  font-size: 15px;
}

.pic {
  border-style: solid;
  border-color: steelblue;
  position: absolute;
  width: 50%;
  height: 50%;
  margin-top: 80%;
  margin-left: 25%;
  margin-right: 25%; /**/
}

.photo-box {
  /*  border-style: solid;    border-color: steelblue;*/
  position: absolute;
  background-image: url("../assets/babout.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
}
/**/

.progress-row {
  display: block;
  margin-top: 2%;
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}

.progress-box-1 {
  box-sizing: border-box;
  display: block;
  flex-basis: 96%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  max-width: 96%;
  width: 240px;
  margin-bottom: 10px; /*
  border-style: solid;    border-color: steelblue;*/
}

.progress-desc {
  font-size: 14px;
  line-height: 13px;
  color: black;
  margin-bottom: 0;
  padding: 0 0 2px 0;
  word-wrap: break-word;
}

.progress-percentage {
  float: right;
}

.progress-bar-col {
  height: 10px;
  transition: 0.9s all linear;
  background-color: #c17a00;
}

.progress-bar-wrap {
  background: #fdd059;
}

@media screen and (max-width: 2100px) {
  .pic {
    margin-top: -7%;
  }
}

@media screen and (max-width: 1600px) {
  .pic {
    margin-top: -9%;
  }
}

@media screen and (max-width: 1400px) {
  .pic {
    margin-top: -12%;
  }
}

@media screen and (max-width: 1200px) {
  .pic {
    margin-top: -15%;
  }
}

@media screen and (max-width: 1024px) {
  .text {
    margin-top: 15%;
    margin-left: 0%;
  }

  .pic {
    position: static;
    display: block;
    width: 100%;
    height: 50vh;
    margin-top: 10%;
    margin-left: 0%;
    margin-right: 0%;
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
