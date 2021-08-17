<template>
  <div class="mt-12">
    <div class="info-box-item box-media-item">
      <div v-if="icon" class="info-header">
        <span class="info__icon" :class="icon"></span>
      </div>
      <div class="info-body">
        <div
          v-if="title"
          class="font-semibold text-drc-dark-blue text-xl font-poppins mb-4"
        >
          {{ title }}
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style scoped>
.box-media-item {
  -webkit-box-shadow: 0 0 0 0;
  -moz-box-shadow: 0 0 0 0;
  box-shadow: 0 0 0 0;
  background-color: transparent;
  border: 1px solid rgba(127, 136, 151, 0.2);
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  margin-bottom: 80px;
  text-align: center;
}

.info-box-item {
  background-color: #fff;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-box-shadow: 0 0 40px rgba(82, 85, 90, 0.1);
  -moz-box-shadow: 0 0 40px rgba(82, 85, 90, 0.1);
  box-shadow: 0 0 40px rgba(82, 85, 90, 0.1);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 50px 40px 47px 40px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.box-media-item::after {
  display: none;
}
.info-box-item::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #27378d;
  z-index: -1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.info-box-item:hover::after {
  height: 100%;
  top: 0;
  bottom: auto;
}

.box-media-item .info-header {
  max-width: 75px;
  max-height: 75px;
  line-height: 75px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  margin-top: -88px;
}

.box-media-item .info-header::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(127, 136, 151, 0.2);
  background-color: #fff;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  z-index: -1;
}

.box-media-item:hover .info-header::after {
  background-color: #27378d;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.box-media-item:hover .info-header .info__icon {
  color: #fff;
}
.box-media-item .info-header .info__icon {
  font-size: 40px;
  color: #2e3d62;
  width: 100%;
  height: 100%;
  line-height: 75px;
}

.box-media-item .info-body {
  margin-top: 44px;
}
</style>