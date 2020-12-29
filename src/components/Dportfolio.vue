<template>
<div id="portfolio" class="portfolio ssection" >
    <div
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true">
    <p class="h2-shadow">PORFOLIO</p>
    <h2>PORTFOLIO</h2>
      </div>
  <div class="center-box container">
      <div class="row position align-items-stretch">

        <div class="portfolio-box-1" 
          data-aos="fade-up" data-aos-delay="100"
          data-aos-once="true">
          <div class="uvd-col">
            <div class="img">
              <img src="../assets/test.png" alt class="img-fluid">
            </div>
            <h3>Past</h3>
            <p>Website quick description one two three four abcdefghijklmnopqrstuvwxyz</p>
          </div>
        </div>

      <div class="portfolio-box-1"
          data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
        <div class="uvd-col">
            <div class="img">
              <img src="../assets/test.png" alt class="img-fluid">
            </div>
            <h3>Present</h3>
            <p>Website quick description</p>
          </div>
      </div >
      <div class="portfolio-box-1"
          data-aos="fade-up" data-aos-delay="300"
          data-aos-once="true">
        <div class="uvd-col">
            <div class="img">
              <img src="../assets/test.png" alt class="img-fluid">
            </div>
            <h3>Future</h3>
            <p>Website quick description</p>
          </div>
      </div >
      </div>
  </div>
</div>
    
</template>

<script>
export default {
  name: 'Dportfolio',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.portfolio{
  background-color: #ECE7DD;
   background-size: cover;
   display: block;
 
}

.uvd-col p{
  font-size: 14px;
  line-height:13px;
    color: #333;
    margin-bottom: 0;
    padding: 0 20px 20px 20px;
    word-wrap: break-word;
}
.uvd-col h3{
  color: #000;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    padding: 0;
    margin: 40px 1px 12px 1px;
}
.img-fluid{
    max-width: 100%;
  max-height: 100%;
}
.uvd-col .img{
  position: relative;
  vertical-align: middle;
    border-style: none;/*
    border-style: solid;    border-color: black;*/
}

.uvd-col{
  background:#C17A00;/*
    border-style: solid;    border-color: steelblue;*/
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
}

.row{/*
    border-style: solid;    border-color: red;*/
    display: block;
  margin-top:15%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  right: 20%;
  left: 20%;
}

.portfolio-box-1{/*
  border-style: solid;    border-color: green;*/
  box-sizing: border-box;
  display:block;
  flex-basis: 33.3333%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size:16px;
  margin-left: 2%;
  margin-right: 2%;
  line-height: 24px;
  max-width: 29.3333%;
  width: 240px;
  margin-bottom: 10px;
}

@media screen and (max-width: 1024px) {
.portfolio-box-1{  
  max-width: 46%;
  flex-basis: 46%;
}}

@media screen and (max-width: 512px) {
.portfolio-box-1{  
  max-width: 96%;
  flex-basis: 96%;
}
}

</style>