<template>
  <div class="home">
    <HeroCarousel :dataHero="data_home.banner" />
    <section>
      <div class="py-24 bg-drc-dark-navy bg-cover bg-left-top lg:bg-right-top">
        <div class="max-w-1200 px-4 w-full mx-auto flex justify-between lg:space-x-4">
          <div class="max-w-600 text-center md:text-justify text-drc-gray-3">
            <h2 class="text-white mb-12">{{ data_home.about_us.title }}</h2>
            <div v-html="desc_text" class="about-us-desc"></div>
          </div>
          <div class="hidden lg:block">
            <img class="ml-24" :src="data_home.about_us.image.filename" :alt="data_home.about_us.image.alt">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="relative">
        <div
          class="absolute h-full w-drc-400 bg-cover bg-center hidden lg:block"
          :style="{
            backgroundImage: `url(${data_home.service.background_image.filename})`,
          }"
        ></div>
        <div class="max-w-1200 w-full px-4 py-24 mx-auto">
          <div class="grid lg:grid-cols-3 gap-10">
            <div class="text-white relative max-w-450 mx-auto">
              <div class="block relative">
                <img
                  :src="data_home.service.image.filename"
                  alt="Feature"
                  class="w-full"
                />
                <div class="bg-drc-blue text-center text-white px-5 py-8">
                  <h3>{{ data_home.service.text_intro }}</h3>
                  <nuxt-link
                    :to="data_home.service.link_url"
                    class="text-white hover:text-black"
                    >{{ data_home.service.link_text }}</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div
                class="featured-block-two"
                v-for="preview in data_home.service.preview_service"
                :key="preview._uid"
              >
                <div class="inner-box h-full">
                  <div class="content-box">
                    <div class="icon-box">
                      <span class="icon flaticon-sheriff-badge"></span>
                    </div>
                    <div class="content">
                      <h4>
                        <a href="policing-crime.html">{{ preview.title }}</a>
                      </h4>
                      <div class="text">
                        {{ preview.description }}
                      </div>
                      <div class="read-more">
                        <a :href="preview.redirect_url">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Teams :dataTeam="data_home.team"/>
    <News/>
    <section class="get-info-section">
      <div class="auto-container">
        <div class="sec-title with-separator centered">
          <h2>Konsultasi</h2>
          <div class="separator">
            <span class="cir c-1"></span><span class="cir c-2"></span
            ><span class="cir c-3"></span>
          </div>
          <div class="lower-text">
            Denounce with righteous indignation and dislike men who are so
            beguiled & demoralized our power of choice.
          </div>
        </div>
        <div class="row clearfix">
          <div class="mx-auto lg:w-drc-600">
            <div class="inner">
              <div class="default-form form-box">
                <form method="post" action="contact.html">
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="form-group">
                      <div class="field-inner">
                        <input
                          type="text"
                          name="field-name"
                          placeholder="Name"
                          required=""
                          value=""
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="field-inner">
                        <input
                          type="email"
                          name="field-name"
                          placeholder="Email"
                          required=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="form-group md:col-span-2">
                      <div class="field-inner">
                        <textarea
                          name="field-name"
                          placeholder="Enter your question..."
                          required=""
                        ></textarea>
                      </div>
                    </div>

                    <div class="form-group md:col-span-2">
                      <button type="submit" class="theme-btn btn-style-one">
                        <span class="btn-title">Submit Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    let data_home = await context.app.$storyapi
      .get("cdn/stories/home", { version: version })
      .then((res) => {
        let data = res.data.story.content;
        return {
          banner: data.section_banner,
          about_us: data.section_description[0],
          team: data.section_team[0],
          service: data.section_service[0],
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      data_home
    };
  },
  computed: {
    desc_text() {
      return this.$storyapi.richTextResolver.render(
        this.data_home.about_us.text
      );
    },
  },
};
</script>

<style lang="postcss">
.home .big-letter{
  @apply drc-big-letter-mobile lg:drc-big-letter;
}
</style>