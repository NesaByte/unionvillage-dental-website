<template>

<div id="front" class="front">
    <div class="center-box"  
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="90"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">
      <h1>
        
      </h1>
      
    </div>

</div>

    
</template>

<script>

export default {
  name: 'Afront',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.front{/*
  border-style: solid;
    border-color: steelblue;*/
  background-image: url("../assets/afront.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.center-box{
  position: relative;
  height: 20vh;
  margin: auto;width: 40%;
  top: 20%;
  bottom: 20%;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

.center-box h1{
  /*border-style: solid;    border-color: steelblue;*/
    white-space: wrap;
  position: absolute;
  font-family: Segoe Script;
	font-style: normal;
	font-weight: bold;
	color: #C17A00;
  font-size: 70px;
  top:30%;
      left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 800px) {
  .center-box h1 {
    font-size: 55px;
  }
}

@media screen and (max-width: 700px) {
  .center-box h1 {
    font-size: 45px;
  }
}

@media screen and (max-width: 600px) {
  .center-box h1 {
    font-size: 35px;
  }
}

@media screen and (max-width: 400px) {
  .center-box h1 {
    font-size: 30px;
  }
}

@media (min-width: 700px){
  .front{
    background-attachment: fixed;
  }
}

</style>