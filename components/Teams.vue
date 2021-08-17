<template>
  <section class="team-section">
    <div class="auto-container">
      <div class="sec-title with-separator centered">
        <h2>{{dataTeam.title}}</h2>
        <div class="separator">
          <span class="cir c-1"></span><span class="cir c-2"></span
          ><span class="cir c-3"></span>
        </div>
        <div class="lower-text">
          {{dataTeam.description}}
        </div>
      </div>

      <div class="team-carousel owl-theme owl-carousel">
        <!--Team Block-->
        <div class="team-block" v-for="person in data_active" :key="person._uid">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <img :src="person.image.filename" :alt="person.image.alt" />
              </figure>
              <div class="hover-box">
                <div class="p-4">
                  <div class="hover-upper my-0 mx-4">
                    <p class="text-sm font-medium mb-3">{{person.description}}</p>
                  </div>
                  <div class="hover-lower">
                    <ul class="social-links clearfix">
                      <li>
                        <a :href="person.facebook" target="_blank"><span class="fab fa-facebook-f" :class="{'opacity-40':!person.facebook}"></span></a>
                      </li>
                      <li>
                        <a :href="person.twitter" target="_blank"><span class="fab fa-twitter" :class="{'opacity-40':!person.twitter}"></span></a>
                      </li>
                      <li>
                        <a :href="person.linkedin" target="_blank"><span class="fab fa-linkedin-in" :class="{'opacity-40':!person.linkedin}"></span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="lower-box">
              <h4>
                <span class="text-drc-black">{{person.name}}</span>
              </h4>
              <div class="designation">{{person.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:["dataTeam"],
  computed:{
    data_active(){
      if(this.dataTeam.team_person){
        let data_show = []
        for (let index = 0; index < this.dataTeam.team_person.length; index++) {
            if(this.dataTeam.team_person[index].show){
              data_show.push(this.dataTeam.team_person[index])
            }
        }
        return data_show
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      $(this.$el).find(".owl-carousel").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          },
        });
    });
  },
};
</script>