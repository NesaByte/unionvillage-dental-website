<template>
<div class="first" >
  <div class="center-box">
    <div class="top"></div>
    <div class="bot"></div>
  </div>
</div>
    
</template>

<script>
export default {
  name: 'Econtact',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.top{
height: 25%;
width: 100%;
margin-top: -5px;
  background-color: #FBFAF8;
  position: absolute;
-webkit-clip-path:     polygon(0 0, 100% 0, 150% 0%, 0 100%);
    clip-path:         polygon(0 0, 100% 0, 150% 0%, 0 100%);
}

.bot{
height: 25%;
width: 100%;
bottom: -5px;
  background-color: #ECE7DD;
  position: absolute;
-webkit-clip-path:     polygon(150% 0, 100% 100%, 0 100%, 0 80%);
    clip-path:         polygon(150% 0, 100% 100%, 0 100%, 0 80%);
}
.center-box{
height: 350px;
/*  padding: 150px 0*/;
  background-image: url("../assets/IMG_7192.png");
  background-position: center center;
  background-size: cover;
  position: relative;
}
.box{
  position: relative;
  height: 50vh;
  width: 100%;
/*  border-style: solid;   border-color: red; */ 
   background-color: #FBFAF8
}

@media (min-width: 1024px){
  .center-box{
    background-attachment: fixed;
  }
}
</style>