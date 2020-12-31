<template>
  <div
    id="about"
    class="about ssection"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
  >
    <h2>ABOUT US</h2>

    <div class="center-box">
      <div
        class="text"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <h1>Welcome to UnionVillage Dental! <br /><br /></h1>

        <p>
          We understand the pain and stress associated with oral diseases, and how they
          can negatively impact your overall health and confidence. With nearly 30 years
          of experience practicing dentistry, Dr. Li and our oral healthcare team aim to
          provide you with the best dental experience tailored for you (our staff members
          are fluent in both English and Mandarin). Whether it’s orthodontics treatments
          or complex wisdom teeth extraction, our staff members are qualified and
          experienced to treat your concerns. Our office is set up in a family-friendly
          office environment, and we are equipped with the latest technologies, such as
          digital X-ray, Cephalic X-ray, intra-oral cameras, and heated-massage dental
          chairs, to ensure you the best quality of care. <br />
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
  margin-top: 5%;
  margin-right: 10%;
  margin-left: 10%;
}
.about h1 {
  font-family: Tahoma;
  font-weight: 900;
  color: #707070;
  font-size: 15px;
}
.about p {
  font-family: Tahoma;
  color: #707070;
  font-size: 14px;
}

@media screen and (max-width: 750px) {
  .about h1 {
    font-size: 15px;
  }
  .about p {
    font-size: 14px;
  }
}

@media screen and (max-width: 550px) {
  .text {
    margin-top: 6%;
  }
  .about h1 {
    font-weight: 800;
    font-size: 14px;
  }
  .about p {
    font-size: 13px;
  }
}

@media screen and (max-width: 450px) {
  .text {
    margin-top: 8%;
  }
  .about h1 {
    font-weight: 800;
    font-size: 13px;
  }
  .about p {
    font-size: 12px;
  }
}

@media screen and (max-width: 350px) {
  .text {
    margin-top: 10%;
  }
  .about h1 {
    font-weight: 800;
    font-size: 12px;
  }
  .about p {
    font-size: 11px;
  }
}
</style>
