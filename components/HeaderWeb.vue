<template>
  <nav class="navbar navbar-expand bg-dark">
    <div class="container justify-content-between">
      <img src="../assets/TipWeb-Logo.png" alt="" style="height: 40px" />
      <ul class="nav">
        <li class="nav-link">
          <NuxtLink class="text-light" to="/"> Beranda </NuxtLink>
        </li>
        <li class="nav-link">
          <NuxtLink class="text-light" to="./DaftarRencana">
            Rencana Perjalanan
          </NuxtLink>
        </li>
        <li class="nav-link">
          <NuxtLink class="text-light" to="./tutorial"> Tutorial</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
