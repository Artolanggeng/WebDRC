<template>
  <div class="max-w-1200 mx-auto px-4">
    <div class="text-center py-8">
      <h5
        class="
          px-4
          py-2
          bg-purple-200
          uppercase
          w-max
          rounded
          mx-auto
          text-drc-h5 text-drc-blue
          font-poppins
        "
      >
        Webinar
      </h5>
      <h2 class="text-5xl font-semibold text-drc-dark-blue font-poppins">
        Semua Webinar
      </h2>
      <div class="section-divider mx-auto"></div>
    </div>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 mb-32 gap-8"
      v-if="list_webinar"
    >
      <div
        v-for="webinar in list_webinar"
        :key="webinar.id"
        class="rounded-lg shadow-lg p-4 hover:bg-gray-200 cursor-pointer"
        @click="$router.push(`/kegiatan/webinar/${webinar.id}`)"
      >
        <div class="font-poppins text-drc-dark-blue text-lg font-semibold mb-0">
          {{ webinar.title }}
        </div>
        <div v-text="$moment(webinar.date).format('MMMM DD, YYYY')"></div>
      </div>
    </div>
    <div v-else>No webinars available</div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    let data = await context.app.$storyapi
      .get("cdn/stories", {
        version: version,
        starts_with: "kegiatan/webinar/",
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              date: bp.content.date,
              time: bp.content.time,
              image: bp.content.image.filename,
            };
          }),
        };
      })
      .catch((err) => {
        console.log(err);
      });
    let list_webinar = data.posts;
    return {
      list_webinar,
    };
  },
};
</script>