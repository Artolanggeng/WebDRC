<template>
  <div class="max-w-1200 mx-auto px-4">
    <div class="text-center py-8">
      <h5
        class="px-4 py-2 bg-purple-200 uppercase w-max rounded mx-auto text-drc-h5 text-drc-blue font-poppins"
      >
        modul
      </h5>
      <h2 class="text-5xl font-semibold text-drc-dark-blue font-poppins">
        Semua Modul Pembelajaran
      </h2>
      <div class="section-divider mx-auto"></div>
    </div>

    <div class="grid grid-cols-12 mb-32 gap-8">
      <div class="col-span-full lg:col-span-3">
        <ul class="font-medium font-poppins">
          <li
            class="hover:text-drc-blue cursor-pointer text-sm relative"
            @click="category = data.value"
            v-for="data in list_categories"
            :key="data.id"
          >
            <div
              class="tab-category p-4"
              :class="{ 'category-active': category === data.value }"
            >
              <span class="la la-mortar-board"></span> {{ data.value }}
            </div>
          </li>
        </ul>
      </div>
      <div class="col-span-full lg:col-span-9">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          v-if="show_post.length > 0"
        >
          <div v-for="data in show_post" :key="data.id" class="border border-gray-300 border-solid rounded-lg">
            <div class="card-image">
              <img :src="data.image" class="rounded-t-lg" alt="" />
            </div>
            <div
              class="p-4"
            >
              <h3
                class="font-poppins text-drc-dark-blue text-lg font-semibold mb-0"
              >
                {{ data.title }}
              </h3>
              <h6
                class="font-poppins text-drc-base text-drc-blue font-semibold capitalize"
              >
                {{ data.category }}
              </h6>
              <p class="font-poppins">
                {{ data.intro }}
              </p>
              <button
                class="text-drc-dark-blue hover:text-drc-blue font-medium text-sm font-poppins"
                @click="$router.push(`/kegiatan/pjj/${data.id}`)"
              >
                Read More <span class="la la-long-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
        <div v-else>No data in {{ category }} category</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let version = context.query._storyblok || context.isDev ? "draft" : "published";
    let categories = await context.app.$storyapi.get(
      "cdn/datasource_entries?datasource=edu-categories",
      { version: version }
    );
    let data = await context.app.$storyapi
      .get("cdn/stories", { version: version, starts_with: "education/" })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              intro: bp.content.intro,
              image: bp.content.image.filename,
              category: bp.content.category,
            };
          }),
        };
      })
      .catch((err) => {
        console.log(err);
      });
    let list_pjj = data.posts;
    let list_categories = categories.data.datasource_entries;
    return {
      list_pjj,
      list_categories,
    };
  },
  data() {
    return {
      category: undefined,
    };
  },
  computed: {
    show_post() {
      return this.list_pjj.filter((e) => e.category === this.category);
    },
  },
  created() {
    this.category = this.list_categories[0].value;
  },
};
</script>

<style scoped>
.tab-category::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #27378d;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}

.tab-category:hover::after,
.tab-category.category-active::after {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.section-divider {
  position: relative;
  width: 90px;
  height: 3px;
  margin-top: 26px;
  margin-bottom: 30px;
}

.section-divider::before,
.section-divider::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-color: #27378d;
}

.section-divider::after {
  right: 25px;
  left: auto;
  background-color: #fff;
  width: 10px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
</style>