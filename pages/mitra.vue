<template>
  <div>
    <ContentBanner title="Mitra" page="Mitra" />
    <div class="sec-title with-separator centered mt-12 md:mt-14 lg:mt-16 mb-10">
      <h2>Mitra kami</h2>
      <div class="separator">
        <span class="cir c-1"></span><span class="cir c-2"></span
        ><span class="cir c-3"></span>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 max-w-1200 mx-auto">
        <div v-for="mitra in data_mitra" :key="mitra._uid">
            <img :src="mitra.logo.filename" :alt="mitra.logo.alt">
            <div class="shadow-lg p-4">
                <h4 class="text-drc-black font-medium">{{mitra.name}}</h4>
                <div>
                    <span>{{mitra.phone}}</span>
                    <br>
                    <span>{{mitra.address}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    let data_mitra = await context.app.$storyapi
      .get("cdn/stories/mitra", { version: version })
      .then((res) => {
        return res.data.story.content.items;
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      data_mitra,
    };
  },
};
</script>