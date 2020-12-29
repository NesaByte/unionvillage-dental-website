<template>
<div id="about" class="about ssection " 
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true">
    
    <div class="boxx">
      <p class="h2-shadow">ABOUT US</p>
      <h2> ABOUT US</h2>
    </div>

    

      <div class="center-box container">
      <div class="text" data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true">
        <h1>
    Welcome to UnionVillage Dental! <br><br>

We understand the pain and stress associated with oral diseases, and how they can negatively impact your overall health and confidence. With nearly 30 years of experience practicing dentistry, Dr. Li and our oral healthcare team aim to provide you with the best dental experience tailored for you (our staff members are fluent in both English and Mandarin). Whether it’s orthodontics treatments or complex wisdom teeth extraction, our staff members are qualified and experienced to treat your concerns.  Our office is set up in a family-friendly office environment, and we are equipped with the latest technologies, such as digital X-ray, Cephalic X-ray, intra-oral cameras, and heated-massage dental chairs, to ensure you the best quality of care. <br> <br>
    </h1>
      </div>   
      <div class="pic"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">  
          
        <div class="photo-box">
      </div>
      
      
      </div> 
    </div>
    </div>
    
    
</template>

<script>
export default {
  name: 'Babout',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.about{
   background: #FBFAF8;
   background-size: cover;
   display: block;
}

.text{
  display: block;
  margin-top:10%;
  margin-right:10%;
  margin-left:10%;
}
.about h1{
  font-family: Tahoma;
	color: #707070;
  font-size: 15px;
}

.pic{
  border-style: solid;    border-color: steelblue;
  position: absolute;
  width: 50%;
  height:       50%;
  margin-top:   80%;
  margin-left:  25%;
  margin-right: 25%;/**/

}

.photo-box{
/*  border-style: solid;    border-color: steelblue;*/
    position: absolute;
    background-image: url("../assets/babout.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
    width: 100%;
    margin-right:0%;
    margin-left:0%;
    margin-top: 0%;  
}
/**/


.progress-row{
    display: block;
margin-top:2%;
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}

.progress-box-1{
  box-sizing: border-box;
  display:block;
  flex-basis: 96%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size:16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  max-width: 96%;
  width: 240px;
  margin-bottom: 10px;/*
  border-style: solid;    border-color: steelblue;*/
}

.progress-desc{
    font-size: 14px;
  line-height:13px;
    color: black;
    margin-bottom: 0;
    padding: 0 0 2px 0;
    word-wrap: break-word;
}

.progress-percentage{
  float:right;
}

.progress-bar-col{
  height: 10px;
  transition: 0.9s all linear;
  background-color: #C17A00;
}

.progress-bar-wrap{
  background: #FDD059;
}


@media screen and (max-width: 2100px) {
  .pic{
  margin-top:-7%;}
}

@media screen and (max-width: 1600px) {
  .pic{
  margin-top:-9%;}
}

@media screen and (max-width: 1400px) {
  .pic{
  margin-top:-12%;}
}

@media screen and (max-width: 1200px) {
  .pic{
  margin-top:-15%;}
}

@media screen and (max-width: 1024px) {
.text{
  margin-top:15%;
  margin-left:0%;

}

.pic{
  position: static;
  display: block;
  width: 100%;
  height:50vh;
  margin-top:10%;
  margin-left:0%;
  margin-right:0%;
}



.photo-box{
position: absolute;
    height: 100%;
    width: 100%;
    margin-right:0%;
    margin-left:5%;
    margin-top: -5%;  
  }
  .center-box h1{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 0%;
  margin-bottom: 0%;
}
}



@media screen and (max-width: 900px) {
  .center-box h1{ font-size: 18px; }
  .center-box h3{ font-size: 30px;  }
}

@media screen and (max-width: 850px) {
  .center-box h1{ font-size: 18px; }
  .center-box h3{    font-size: 29px;  }

}

@media screen and (max-width: 800px) {
    .center-box h1{    font-size: 17px;  }

  .center-box h3{    font-size: 28px;  }
}

@media screen and (max-width: 700px) {

  .center-box h1{    font-size: 16px; }
  
  .center-box h3{    font-size: 26px;  }

}

@media screen and (max-width: 650px) {

    .center-box h1{    font-size: 15px; }

    .center-box h3{   font-size: 23px;   }
}

@media screen and (max-width: 600px) {

    .center-box h1{    font-size: 15px;  }

    .center-box h3{   font-size: 23px;  }
}

@media screen and (max-width: 550px) {

  .center-box h1{    font-size: 14px;  }
  .center-box h3{   font-size: 20px; }
}


@media screen and (max-width: 500px) {

    .center-box h1{    font-size: 13px; }
}

@media screen and (max-width: 450px) {
  }


@media screen and (max-width: 400px) {

    .center-box h1{    font-size: 12px; }
}

@media screen and (max-width: 350px) {
    .center-box h1{    margin-top:20%;}
}

</style>