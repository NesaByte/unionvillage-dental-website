<template>
  <div
    id="policies"
    class="policies ssection"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
  >
    <h2>POLICIES</h2>

    <div class="center-box">
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
          will be charged. <br /><br />
        </p>

        <h1>Emergency Treatment Policy</h1>

        <p>
          In the event of drop-in patient with urgent needs. The drop-in patient will be
          treated first depends on the severity of emergency. We apologize if your
          appointment times have to be delayed due to the case of emergency drop-in
          patients. <br /><br />
        </p>
        <h1>Payment Policy</h1>

        <p>
          We accept all forms of payment, including cash, visa, mastercard, and debit
          card. We also accept all forms of insurance policies. <br /><br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dpolicies",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.policies {
  background: #fbfaf8;
  background-size: cover;
  display: block;
}

.text {
  display: block;
  margin-top: 5%;
  margin-right: 10%;
  margin-left: 10%;
}
.policies h1 {
  font-family: Tahoma;
  font-weight: 900;
  color: #707070;
  font-size: 15px;
}
.policies p {
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
}
.row {
  display: block;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 60%;
  height: auto;
  margin-right: 20%;
  margin-left: 20%;
}

@media screen and (max-width: 750px) {
  .policies h1 {
    font-size: 15px;
  }
  .policies p {
    font-size: 14px;
  }
}

@media screen and (max-width: 550px) {
  .text {
    margin-top: 6%;
  }
  .policies h1 {
    font-weight: 800;
    font-size: 14px;
  }
  .policies p {
    font-size: 13px;
  }
}

@media screen and (max-width: 450px) {
  .text {
    margin-top: 8%;
  }
  .policies h1 {
    font-weight: 800;
    font-size: 13px;
  }
  .policies p {
    font-size: 12px;
  }
}

@media screen and (max-width: 350px) {
  .text {
    margin-top: 10%;
  }
  .policies h1 {
    font-weight: 800;
    font-size: 12px;
  }
  .policies p {
    font-size: 11px;
  }
}
</style>
