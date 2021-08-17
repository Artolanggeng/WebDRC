<template>
  <section class="banner-section banner-one hero-carousel">
    <div class="banner-carousel owl-theme owl-carousel max-h-screen">
      <!-- Slide Item -->
      <div class="slide-item" v-for="banner in dataHero" :key="banner._uid">
        <div class="image-layer" :style="{ backgroundImage: `url(${banner.image.filename})`}"></div>
        <div class="auto-container">
          <div class="content-box">
            <div class="content clearfix">
              <div class="inner">
                <h1>{{banner.title}}</h1>
                <div class="text">{{banner.description}}</div>
                <div class="links-box clearfix" v-if="banner.button_text">
                  <a href="#" class="theme-btn btn-style-one"
                    ><span class="btn-title">{{banner.button_text}}</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:["dataHero"],
  mounted() {
    this.$nextTick(() => {
      $(this.$el).find(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        nav: true,
      });
    });
  },
};
</script>

<style lang="postcss">
.hero-carousel .owl-stage-outer{
  @apply max-h-screen
}
</style>