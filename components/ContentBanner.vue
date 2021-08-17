<template>
  <section class="page-banner">
    <div class="image-layer bg-banner"></div>

    <div class="banner-inner">
      <div class="auto-container">
        <div class="inner-container clearfix">
          <h1>{{title}}</h1>
          <div class="page-nav">
            <ul class="bread-crumb clearfix">
              <li><a href="index.html">Home</a></li>
              <li v-if="parentPage"><a href="#">{{parentPage}}</a></li>
              <li v-if="page" class="active">{{page}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props : {
    parentPage : {
      type : String
    },
    page : {
      type : String
    },
    title : {
      type: String
    }
  }
}
</script>

<style scoped>
.bg-banner{
    background: url("~/assets/img/background/banner-image-2.jpg");
}
</style>

