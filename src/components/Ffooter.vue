<template>
  <!-- Footer -->
  <mdb-footer>
    <div class="mfooter footer-copyright text-center py-3">
      <mdb-container fluid>
        Copyright &copy; 2020 designed by <span>NesaByte</span>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Ffooter",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.mfooter {
  background: #5d702a;
  color: white;
}

.mfooter span {
  font-family: Segoe Script;
}
</style>
