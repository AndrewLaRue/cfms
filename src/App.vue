<template>
  <header class="container-fluid">
    <div class="row align-items-center" title="Home">
      <img class="col-3 py-3 img-fluid" src="src\assets\img\cfms_logo.png" alt="">
      <h1 class="col-9">CFMS -<br> California Federation of Mineralogical Societies
        <br>
        <span class="fs-4">California Lapidary and Rockhounding Clubs</span>
      </h1>
    </div>
  </header>
  <main class="container-fluid">
    <MyNav />
    <router-view />
  </main>
  <footer class=" container-fluid text-center bg-dark">
    <div class="row">
      <p class="text-light col-12 mb-1">CFMS - California Federation of Mineralogical Societies <a
          href="https://cfmsinc.org/privacy-policy/">Privacy
          Policy</a></p>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
