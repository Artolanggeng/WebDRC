<template>
  <div>
    <ContentBanner
      title="Tentang Kami"
      parentPage="Tentang Kami"
      :page="data_about_us.title"
    />
    <div class="max-w-800 mx-auto px-4 my-8 lg:my-20">
      <div class="about-us-content" v-html="about_us_text"></div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    let data_about_us = await context.app.$storyapi
      .get("cdn/stories/tentang-kami/about-us", { version: version })
      .then((res) => {
        let data = res.data.story.content;
        return {
          title: data.page_title,
          text: data.text,
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      data_about_us,
    };
  },
  computed: {
    about_us_text() {
      return this.$storyapi.richTextResolver.render(this.data_about_us.text);
    },
  },
};
</script>

<style>
.about-us-content p,
.about-us-content ul {
  position: relative;
  padding-bottom: 20px;
  text-align: justify;
}

.about-us-content ul li {
  position: relative;
  display: block;
  font-size: 15px;
  text-transform: capitalize;
  padding-left: 30px;
  line-height: 30px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.about-us-content ul li p {
  margin: 0 !important;
  padding: 0 !important;
}

.about-us-content ul li:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}

.about-us-content ul li a {
  color: #757575;
}

.about-us-content ul li:hover,
.about-us-content ul li a:hover {
  color: #28388d;
}

.about-us-content ul li:before {
  font-family: "Flaticon";
  content: "\f120";
  position: absolute;
  left: 0px;
  line-height: 30px;
  font-size: 14px;
  color: #28388d;
}

.about-us-content ul li:after {
  position: absolute;
  left: 4px;
  margin-top: 0px;
  line-height: 30px;
  font-size: 14px;
  color: #28388d;
}
</style>