<template>
<div class="fixed z-50 top-0 w-full shadow-lg">
  <header class="bg-white">
    <div class="px-4 py-5 xl:px-14 flex items-center justify-between">
      <div class="md:w-80 cursor-pointer" @click="$router.push('/')">
        <img src="~/assets/img/logo/logo-drc-color.png" alt="Logo" class="h-drc-50" />
      </div>
      <div class="lg:hidden">
        <span
          class="flaticon-menu-1 text-3xl text-drc-black cursor-pointer"
        ></span>
      </div>
      <div class="hidden lg:block w-full">
        <nav class="text-sm">
          <ul class="flex space-x-8 justify-end xl:justify-start">
            <li
              v-for="(item, i) in menu_list"
              :key="i"
              class="cursor-pointer group-scope"
              @click="clicked(item.url)"
            >
                <span
                  class="text-black group-scope-hover:text-drc-blue font-semibold"
                >
                  {{ item.title }}
                </span>
                <span
                  class="flaticon-down-arrow-1 text-drc-xs font-semibold"
                  :class="{'opacity-0':item.child.length === 0}"
                />

              <div
                v-if="item.child.length != 0"
                class="hidden group-scope-hover:block absolute animate-slide-up -mt-2 z-50"
              >
                <ul class="mt-12 bg-white w-72">
                  <li
                    v-for="(child, i) in item.child"
                    :key="i"
                    class="menu-item cursor-pointer group-scope relative px-8"
                    @click="$router.push(child.url)"
                  >
                    <div
                      class="py-3 pl-6 border-drc-gray-2 flex justify-between items-center relative"
                      :class="
                        item.child.length - 1 === i ? 'border-b-0' : 'border-b'
                      "
                    >
                      <span
                        class="menu-title group-scope-hover:text-drc-blue font-medium"
                      >
                        {{ child.title }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="sosmed hidden xl:flex space-x-3 border-0 border-l border-drc-gray-2 pl-8"
      >
        <span class="fab fa-facebook-f" @click="$router.push('/sosmed/facebook')"></span>
        <span class="fab fa-twitter" @click="$router.push('/sosmed/twitter')"></span>
        <span class="fab fa-instagram" @click="$router.push('/sosmed/instagram')"></span>
      </div>
    </div>
  </header>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      menu_list: [
        {
          title: "Beranda",
          url: "/",
          child: [],
        },
        {
          title: "Tentang Kami",
          url: "",
          child: [
            {
              title: "Background",
              url: "/tentang-kami/background",
              child: [],
            },
            {
              title: "Lembaga Kajian",
              url: "#",
              child: [],
            },
            {
              title: "Profile DRC",
              url: "/tentang-kami/profile-drc",
              child: [],
            },
            {
              title: "Tim DRC",
              url: "#",
              child: [],
            },
          ],
        },
        {
          title: "Kegiatan",
          url: "",
          child: [
            {
              title: "Webinar",
              url: "/kegiatan/webinar",
              child: [],
            },
            {
              title: "Riset",
              url: "/kegiatan/riset",
              child: [],
            },
            {
              title: "Pembelajaran Jarak Jauh",
              url: "/kegiatan/pjj",
              child: [],
            }
          ],
        },
        {
          title: "Publikasi",
          url: "",
          child: [
            {
              title: "Buku",
              url: "#",
              child: [],
            },
            {
              title: "Publikasi",
              url: "/publikasi",
              child: [],
            },
            {
              title: "Jurnal",
              url: "#",
              child: [],
            },
            {
              title: "Artikel",
              url: "#",
              child: [],
            }
          ],
        },
        {
          title: "Mitra",
          url: "/mitra",
          child: [],
        },
        {
          title: "Login/Register",
          url: "",
          child: [],
        },
      ],
    };
  },
  methods:{
    clicked(url){
      if(!url){
        return false
      }else{
        this.$router.push(url)
      }
    }
  }
};
</script>

<style lang="postcss">
.sosmed .fab {
  @apply text-drc-gray-3 h-8 w-8 flex items-center justify-center rounded-full border border-drc-gray-2 cursor-pointer hover:text-white hover:bg-drc-blue;
}

.menu-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 20px;
  width: 10px;
  height: 10px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.menu-title::after {
  content: "";
  position: absolute;
  left: -14px;
  top: 24px;
  width: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
  -ms-transform-origin: right top;
  transform-origin: right top;
  transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.menu-item:hover > div > .menu-title::before {
  @apply border-drc-blue bg-drc-blue;
}

.menu-item:hover > div > .menu-title::after {
  border-color: #28388d;
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}
</style>