<template>
  <section class="row bar justify-content-around">
    <router-link :to="{ name: 'Home' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">Home</button>
    </router-link>
    <router-link :to="{ name: 'Shows' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">Shows</button>
    </router-link>
    <router-link :to="{ name: 'Newsletters' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">Newsletters</button>
    </router-link>
    <router-link :to="{ name: 'History' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">History</button>
    </router-link>
    <router-link :to="{ name: 'FRA' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">FRA/Youth</button>
    </router-link>
    <router-link :to="{ name: 'Forms' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">Forms</button>
    </router-link>
    <router-link :to="{ name: 'Protected' }" class="col-1">
      <button class="btn rounded-circle btn-dark text-light">Protected</button>
    </router-link>
  </section>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.bar {
  height: 15px;
  background-color: rgb(67, 67, 67);


}

button {
  transform: translateY(-12px);
}
</style>