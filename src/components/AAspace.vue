<template>
  <div class="first">
    <div class="center-box"></div>
  </div>
</template>

<script>
export default {
  name: "AAspace",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.top {
  height: 25%;
  width: 100%;
  margin-top: -5px;
  background-color: red;
  position: absolute;
  -webkit-clip-path: polygon(0 0, 100% 0, 150% 0%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 150% 0%, 0 100%);
}

.bot {
  height: 25%;
  width: 100%;
  bottom: -5px;
  background-color: blue;
  position: absolute;
  -webkit-clip-path: polygon(150% 0, 100% 100%, 0 100%, 0 80%);
  clip-path: polygon(150% 0, 100% 100%, 0 100%, 0 80%);
}
.center-box {
  height: 350px;
  padding: 150px 0;
  background-image: url("../assets/babout.jpg");
  background-position: center center;
  background-size: cover;
  position: relative;
}
.box {
  position: relative;
  height: 50vh;
  width: 100%;
  /*  border-style: solid;   border-color: red; */
  background-color: #fbfaf8;
}

@media (min-width: 1024px) {
  .center-box {
    background-attachment: fixed;
  }
}
</style>
