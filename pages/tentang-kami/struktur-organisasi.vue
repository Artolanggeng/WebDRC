<template>
  <div>
    <ContentBanner title="Tentang Kami" parentPage="Tentang Kami" :page="data_organizational_structure.title"/>
    <div class="sidebar-page-container">
      <div class="auto-container">
        <div class="grid lg:grid-cols-6">
          <!--Content Side-->
          <div class="content-side lg:col-span-4">
            <div class="content-inner">
              <div class="organizational-structure-content" v-html="organizational_structure_text"></div>
            </div>
          </div>

          <!--Sidebar Side-->
          <ContentSidebar />
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
    let data_organizational_structure = await context.app.$storyapi
      .get("cdn/stories/tentang-kami/organizational-structure", { version: version })
      .then((res) => {
        let data = res.data.story.content;
        return {
          title : data.page_title,
          text : data.text
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      data_organizational_structure,
    };
  },
  computed: {
    organizational_structure_text() {
      return this.$storyapi.richTextResolver.render(this.data_organizational_structure.text);
    },
  },
};
</script>

<style>
.organizational-structure-content > p,
.organizational-structure-content ul {
  position: relative;
  padding-bottom: 20px;
  text-align: justify;
}

.organizational-structure-content ul li {
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

.organizational-structure-content ul li p {
  margin: 0 !important;
  padding: 0 !important;
}

.organizational-structure-content ul li:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}

.organizational-structure-content ul li a {
  color: #757575;
}

.organizational-structure-content ul li:hover,
.organizational-structure-content ul li a:hover {
  color: #28388d;
}

.organizational-structure-content ul li:before {
  font-family: "Flaticon";
  content: "\f120";
  position: absolute;
  left: 0px;
  line-height: 30px;
  font-size: 14px;
  color: #28388d;
}

.organizational-structure-content ul li:after {
  position: absolute;
  left: 4px;
  margin-top: 0px;
  line-height: 30px;
  font-size: 14px;
  color: #28388d;
}

.organizational-structure-content ol{
  margin-left: 1rem;
}

.organizational-structure-content ol li{
  list-style: decimal;
  padding-left: 1rem;
}
</style>