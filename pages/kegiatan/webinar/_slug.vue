<template>
  <div>
    <div
      class="
        h-drc-330
        lg:h-drc-500
        bg-drc-banner-2 bg-no-repeat bg-cover bg-center
      "
    >
      <div class="h-full w-full bg-black bg-opacity-60">
        <div class="pt-20 lg:pt-32 max-w-1200 mx-auto">
          <div
            class="
              py-4
              px-7
              mx-auto
              bg-drc-blue
              text-white
              w-max
              rounded-full
              text-sm
            "
          >
            Webinar
          </div>
          <h1
            class="
              text-drc-h2-base
              lg:text-drc-h1-md
              font-manjari
              text-white
              font-bold
              text-center
              px-4
              mt-4
              lg:mt-8
            "
          >
            {{ data.title }}
          </h1>
        </div>
      </div>
    </div>
    <div class="max-w-800 mx-auto -mt-12 lg:-mt-16 px-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div class="text-white bg-drc-blue text-center p-8">
          <div class="font-bold text-drc-h4 font-manjari">Waktu</div>
          <hr
            class="bg-white opacity-50 w-48 mx-auto my-4"
            style="height: 1px"
          />
          <div v-text="$moment(data.date).format('MMMM DD, YYYY')"></div>
          <div v-text="data.time"></div>
        </div>
        <div class="text-white bg-drc-blue text-center p-8">
          <div class="font-bold text-drc-h4 font-manjari">Lokasi</div>
          <hr
            class="bg-white opacity-50 w-48 mx-auto my-4"
            style="height: 1px"
          />
          <div v-text="data.location" class="mb-2"></div>
          <a
            v-if="data.url"
            :href="data.url"
            target="_blank"
            class="
              text-drc-blue
              bg-white
              px-3
              py-1
              rounded-lg
              font-montserrat-alternates
              text-drc-h5
              font-semibold
              hover:bg-opacity-70
            "
            >Join</a
          >
        </div>
      </div>
      <div class="mt-4 lg:mt-8 text-center max-w-800">
        <img :src="data.image.filename" :alt="data.image.alt" class="w-full" />
      </div>
      <div class="my-4 lg:my-8">
          <h2 class="text-drc-h2-md text-drc-black">Overview</h2>
          <div v-html="richtex_overview"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let env_version = context.isDev ? "draft" : "published";
    let data = await context.app.$storyapi
      .get(`cdn/stories/kegiatan/webinar/${context.params.slug}`, {
        version: env_version,
      })
      .then((res) => {
        const data = res.data.story.content;
        return {
          title: data.title,
          date: data.date,
          time: data.time,
          location: data.location,
          url: data.url,
          image: data.image,
          overview: data.overview,
          guest: data.guest_stars,
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      data,
    };
  },
  computed: {
    richtex_overview() {
      return this.$storyapi.richTextResolver.render(this.data.overview);
    },
  },
};
</script>