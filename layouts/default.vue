<template>
  <!-- <div
    v-if="loading"
    id="loading-screen"
    class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
  >
    <span
      class="
        text-green-500
        opacity-75
        top-1/2
        my-0
        mx-auto
        block
        relative
        w-0
        h-0
      "
    >
      <i class="fas fa-circle-notch fa-spin fa-5x"></i>
    </span>
  </div> -->
  <div>
    <TheHeader />
    <Nuxt style="margin-top: 87.5px" class="min-h-screen"/>
    <div class="elfsight-app-56a5b34b-e3ff-49b9-b512-d2bc2a316a9a"></div>
    <TheFooter />
  </div>
</template>

<style>
.loader div {
  animation-duration: 0.5s;
}

.loader div:first-child {
  animation-delay: 0.1s;
}

.loader div:nth-child(2) {
  animation-delay: 0.3s;
}

.loader div:nth-child(3) {
  animation-delay: 0.6s;
}
</style>