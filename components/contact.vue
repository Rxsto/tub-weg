<template>
  <div class="contact">
    <div class="wrapper">
      <p>Contact</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  padding: 0 25px 25px 25px;

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--black);
    box-shadow: var(--shadow-all);
    padding: 50px;
    width: 100%;
  }
}
</style>
