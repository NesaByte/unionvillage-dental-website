<template>
<div class="third" >
  <div class="center-box">  
      <div class="title-box">
          <h2>SKILLS</h2>
      </div>
      <div class="photo-box">

      </div>
  </div>
</div>
    
</template>

<script>
export default {
  name: 'Cskills',
  props: {
    msg: String
  }
}
</script>

<style scoped>


.center-box{
  position: relative;
  height: 80vh;
  width: 80%;
  left: 10%;
  top: 10%;/*
  border-style: solid;
  border-color: steelblue;*/
  background-color: #ECE7DD7F
}

.center-box h1{/*
  border-style: solid;
    border-color: steelblue;*/
  position: absolute;
  font-family: Sitka Subheading;
	font-style: normal;
	font-weight: bold;
	color: black;
  font-size: 20px;
  left:52%;
  top: 25%;
    /*-webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
          filter:blur(4px);
    -o-filter:blur(4px);
    -ms-filter:blur(4px);
    -moz-filter:blur(4px);
    -webkit-filter:blur(4px);*/

}

.title-box{
    position: absolute;
    height: 10vh;
  width: 2%;
  top: 5%;
  left: 50%;
  bottom: 20%;
  font-size: 50px;/*
      -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    border-style: solid;
    border-color: steelblue;*/
}

.title-box h2{
      left: 50%;
  top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    white-space: nowrap;
    position: absolute;
  font-family: Sitka Subheading;
	font-style: normal;
	font-weight: bold;
    font-size: 45px;
  left: 0%;
  top: 0%;
}

.photo-box{
    position: absolute;
    background-image: url("../assets/skills.png");
  height: 20vh;
  width: 80%;
  
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  right: 10%;
  left: 10%;
  top: 25%;
}


</style>