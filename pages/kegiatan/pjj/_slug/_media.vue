<template>
  <div class="max-w-1200 mx-auto px-4 font-poppins">
    <div class="text-center py-8">
      <h5
        class="px-4 py-2 bg-purple-200 uppercase w-max rounded mx-auto text-drc-h5 text-drc-blue font-poppins"
      >
        DOWNLOAD MATERI
      </h5>
      <h2 class="text-5xl font-semibold text-drc-dark-blue font-poppins">
        {{data.title}}
      </h2>
      <div class="section-divider mx-auto"></div>
    </div>

    <div class="grid grid-cols-12 mb-32 gap-8">
      <div class="col-span-full lg:col-span-3">
        <ul class="font-medium font-poppins">
          <li
            class="hover:text-drc-blue cursor-pointer text-sm relative"
            @click="media_item = index"
            v-for="(menu, index) in sidebar"
            :key="index"
          >
            <div
              class="tab-category p-4"
              :class="{ 'category-active': media_item === index }"
            >
              {{ menu }}
            </div>
          </li>
        </ul>
      </div>
      <div class="col-span-full lg:col-span-9">
        <div>
          <div
            class="font-poppins font-semibold text-drc-h4 text-drc-dark-blue mb-4"
          >
            {{ content_media.media_title }}
          </div>
          <div v-html="richtext"></div>
          <div class="pt-8 grid grid-cols-2 gap-x-8">
            <MediaBox
              icon="la la-file-video-o"
              title="Video Pembelajaran"
              class="col-span-2"
              v-if="content_media.video.length > 0"
            >
              <div>
                Berikut adalah video pembelajaran untuk
                {{ content_media.media_name }}
              </div>
              <div
                class="pt-8"
                :class="
                  content_media.video.length > 1
                    ? 'grid grid-cols-2'
                    : 'flex justify-center'
                "
              >
                <div
                  v-for="video in content_media.video"
                  :key="video._uid"
                  class="flex flex-col items-center space-y-4"
                >
                  <iframe
                    :src="video.video_url"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                  ></iframe>
                  <a
                    :href="video.video_download"
                    class="media-button font-poppins"
                    download
                    >Download <span class="la la-download"></span
                  ></a>
                </div>
              </div>
            </MediaBox>
            <MediaBox
              v-if="content_media.file_presentasi.length > 0"
              icon="la la-file-powerpoint-o"
              title="File Presentasi"
            >
              <div
                v-for="file in content_media.file_presentasi"
                :key="file._uid"
                class="mb-8"
              >
                <div class="mb-4">{{ file.file_desc }}</div>
                <a :href="file.file_url" class="media-button font-poppins">
                  Download <span class="la la-download"></span
                ></a>
              </div>
            </MediaBox>
            <MediaBox
              v-if="content_media.case_study.length > 0"
              icon="la la-file-powerpoint-o"
              title="Studi Kasus"
            >
              <div
                v-for="file in content_media.case_study"
                :key="file._uid"
                class="mb-8"
              >
                <div class="mb-4">{{ file.file_desc }}</div>
                <a :href="file.file_url" class="media-button font-poppins">
                  Download <span class="la la-download"></span
                ></a>
              </div>
            </MediaBox>
            <MediaBox
              v-if="content_media.link_classroom"
              icon="la la-desktop"
              title="Join Classroom"
            >
              <div class="mb-4">Klik tautan dibawah ini</div>
              <a
                :href="content_media.link_classroom"
                class="media-button font-poppins"
                >Join <span class="la la-external-link"></span
              ></a>
            </MediaBox>
            <MediaBox
              v-if="content_media.quiz.length"
              icon="la la-desktop"
              title="Quiz"
            >
              <div
                v-for="file in content_media.quiz"
                :key="file._uid"
                class="mb-8"
              >
                <div class="mb-4">{{ file.file_desc }}</div>
                <a :href="file.file_url" class="media-button font-poppins">
                  Come In <span class="la la-external-link"></span
                ></a>
              </div>
            </MediaBox>
            <MediaBox
              v-if="content_media.file_modul.length > 0"
              icon="la la-desktop"
              title="Modul Pembelajaran"
            >
              <div
                v-for="file in content_media.file_modul"
                :key="file._uid"
                class="mb-8"
              >
                <div class="mb-4">{{ file.file_desc }}</div>
                <a :href="file.file_url" class="media-button font-poppins">
                  Download <span class="la la-download"></span
                ></a>
              </div>
            </MediaBox>
          </div>
        </div>
      </div>
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
          media: data.media,
          title: data.media_title
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      data,
    };
  },
  data() {
    return {
      media_item: 0,
    };
  },
  computed: {
    sidebar() {
      if (this.data.media) {
        let menu = [];
        for (let index = 0; index < this.data.media.length; index++) {
          menu.push(this.data.media[index].media_name);
        }
        return menu;
      }
    },

    content_media() {
      return this.data.media[this.media_item];
    },

    richtext() {
      return this.$storyapi.richTextResolver.render(
        this.content_media.media_description
      );
    },
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

.media-button {
  font-size: 15px;
  text-transform: uppercase;
  background-color: #27378d;
  color: #fff;
  font-weight: 500;
  padding: 0 30px;
  line-height: 50px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.media-button:hover {
  color: #fff;
  background-color: #5d50c5;
  -webkit-box-shadow: 0 12px 24px -6px rgba(93, 80, 197, 0.2);
  -moz-box-shadow: 0 12px 24px -6px rgba(93, 80, 197, 0.2);
  box-shadow: 0 12px 24px -6px rgba(93, 80, 197, 0.2);
  -webkit-transform: translateY(-1px);
  -moz-transform: translateY(-1px);
  -ms-transform: translateY(-1px);
  -o-transform: translateY(-1px);
  transform: translateY(-1px);
}
</style>