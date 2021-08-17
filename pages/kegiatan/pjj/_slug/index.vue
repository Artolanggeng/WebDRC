<template>
  <div class="max-w-1200 mx-auto px-4">
    <div class="grid grid-cols-12 gap-8 text-sm font-poppins py-12">
      <div class="col-span-full lg:col-span-8">
        <img :src="data.image" alt="" class="w-full" />
        <div class="border border-solid border-gray-300 p-8">
          <h3 class="font-poppins text-drc-dark-blue text-3xl font-bold">
            {{ data.title }}
          </h3>
          <div class="section-divider"></div>
          <div
            class="border-0 border-solid border-b border-gray-300 pb-4 text-justify"
            v-html="richtext"
          ></div>
          <div
            class="border-0 border-solid border-b border-gray-300 py-8 grid md:flex md:justify-between"
          >
            <div v-if="data.tags" class="textdrc flex space-x-2 items-center">
              <span class="font-semibold">Tags :</span>
              <span class="flex space-x-2">
                <span
                  v-for="tag in data.tags"
                  :key="tag._uid"
                  class="bg-gray-200 rounded py-1 px-2 cursor-pointer hover:text-white hover:bg-drc-dark-blue"
                  >{{ tag.text }}</span
                >
              </span>
            </div>
            <div class="text-drc-dark-blue flex space-x-2 items-center">
              <span class="font-semibold">Share : </span>
              <span class="flex space-x-2">
                <a href="#"
                  ><i
                    class="flex justify-center items-center h-8 w-8 bg-gray-300 rounded-full hover:bg-drc-dark-blue hover:text-white lab la-facebook-f"
                  ></i
                ></a>
                <a href="#"
                  ><i
                    class="flex justify-center items-center h-8 w-8 bg-gray-300 rounded-full hover:bg-drc-dark-blue hover:text-white lab la-twitter"
                  ></i
                ></a>
                <a href="#"
                  ><i
                    class="flex justify-center items-center h-8 w-8 bg-gray-300 rounded-full hover:bg-drc-dark-blue hover:text-white lab la-instagram"
                  ></i
                ></a>
                <a href="#"
                  ><i
                    class="flex justify-center items-center h-8 w-8 bg-gray-300 rounded-full hover:bg-drc-dark-blue hover:text-white lab la-linkedin-in"
                  ></i
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-full lg:col-span-4">
        <div class="border border-solid border-gray-300 p-8 grid gap-4">
          <div
            class="border-0 border-b border-gray-300 border-solid pb-4 font-bold text-drc-dark-blue text-drc-h3"
          >
            Ikuti Kelas HIV/AIDS
          </div>
          <p>
            Anda akan diarahkan ke halaman selanjutnya setelah mengklik tombol
            dibawah ini.
          </p>
          <button
          @click="$router.push(`/kegiatan/pjj/${$route.params.slug}/media`)"
            class="bg-drc-pastel-blue text-white font-poppins py-4 px-8 rounded-md flex justify-between text-drc-base font-medium"
          >
            <span>MULAI KELAS</span>
            <span class="la la-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="grid gap-8" v-if="data.instructors.length > 0">
      <div class="text-center py-8">
        <h5
          class="px-4 py-2 bg-purple-200 uppercase w-max rounded mx-auto text-drc-h5 text-drc-blue font-poppins"
        >
          INSTRUKTUR
        </h5>
        <h2 class="text-5xl font-semibold text-drc-dark-blue font-poppins">
          Tim Instruktur Kelas
        </h2>
        <div class="section-divider mx-auto"></div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-poppins">
        <div v-for="item in data.instructors" :key="item._uid" class="grid">
          <img
            :src="item.image.filename"
            alt="image"
            class="w-56 h-56 rounded-full mx-auto"
          />
          <div class="text-drc-h3 text-drc-dark-blue font-bold mx-auto">
            {{ item.name }}
          </div>
          <div class="mx-auto font-medium">{{ item.role }}</div>
        </div>
      </div>
    </div>
    <div class="grid gap-8 py-12" v-if="data.testimonial.length > 0">
      <div class="text-center py-8">
        <h5
          class="px-4 py-2 bg-purple-200 uppercase w-max rounded mx-auto text-drc-h5 text-drc-blue font-poppins"
        >
          Testimonial
        </h5>
        <h2 class="text-5xl font-semibold text-drc-dark-blue font-poppins">
          Testimonial
        </h2>
        <div class="section-divider mx-auto"></div>
      </div>
      <!-- <div class="owl-theme owl-carousel max-w-1200 p-4"> -->
      <div class="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in data.testimonial" :key="item._uid" class="font-poppins grid">
          <img :src="item.image.filename" alt="image" class="w-24 h-24 rounded-full mx-auto"/>
          <div class="text-drc-h3 text-drc-dark-blue font-bold mx-auto">{{ item.name }}</div>
          <div class="mx-auto font-medium">{{ item.role }}</div>
          <div class="testimonial-desc">{{ item.testimoni }}</div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let env_version = context.isDev? 'draft':'published';
    let data = await context.app.$storyapi
      .get(`cdn/stories/education/${context.params.slug}`, { version: env_version })
      .then((res) => {
        const data = res.data.story.content;
        return {
          image: data.image.filename,
          title: data.title,
          content: data.description,
          tags: data.tags,
          instructors: data.instructors,
          testimonial: data.testimonial,
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
    richtext() {
      return this.$storyapi.richTextResolver.render(this.data.content);
    },
  },
  mounted() {
    // let x = this.$el
    // console.log(x);
    // this.$nextTick(() => {
    //   $(this.$el)
    //     .find(".owl-carousel")
    //     .owlCarousel({
    //       items: 1,
    //       loop: true,
    //       responsiveClass: true,
    //       responsive: {
    //         0: {
    //           items: 1,
    //         },
    //         600: {
    //           items: 2,
    //         },
    //         1000: {
    //           items: 3,
    //         },
    //       },
    //     });
    // });
  },
};
</script>

<style scoped>
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

.testimonial-desc {
    background-color: #fff;
    -webkit-box-shadow: 0 0 40px rgb(14 16 48 / 4%);
    -moz-box-shadow: 0 0 40px rgba(14, 16, 48, 0.04);
    box-shadow: 0 0 40px rgb(14 16 48 / 4%);
    border: 1px solid rgba(127, 136, 151, 0.2);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin-top: 20px;
    padding: 40px;
    position: relative;
}

.testimonial-desc:after {
    position: absolute;
    content: '';
    top: -10px;
    left: 50%;
    width: 20px;
    height: 20px;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -moz-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    -o-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
    background-color: #fff;
    border-top: 1px solid rgba(127, 136, 151, 0.2);
    border-left: 1px solid rgba(127, 136, 151, 0.2);
}
</style>