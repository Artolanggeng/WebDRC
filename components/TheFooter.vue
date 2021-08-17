<template>
  <footer class="main-footer">
    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="grid md:grid-cols-2 lg:grid-cols-4">
          <!--Column-->
          <div class="">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Tentang Kami</h4>
              </div>
              <div class="widget-content">
                <ul class="links">
                  <li><a href="#">Background</a></li>
                  <li><a href="#">Anggota Team</a></li>
                  <li><a href="#">Vacancy</a></li>
                  <li><a href="#">Kontak</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Kegiatan</h4>
              </div>
              <div class="widget-content">
                <ul class="links">
                  <li><a href="#">Riset</a></li>
                  <li><a href="#">Commentary</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="">
            <div class="footer-widget num-widget">
              <div class="widget-title">
                <h4>Publikasi</h4>
              </div>
              <div class="widget-content">
                <ul class="num-links">
                  <li><a href="#">Jurnal Ilmiah</a></li>
                  <li><a href="#">Artikel</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="">
            <div class="footer-widget about-widget">
              <div class="logo">
                <a href="#"
                  ><img src="~/assets/img/logo/logo-drc-white.png" alt=""
                /></a>
              </div>
              <div class="address">
                <h5>DRC Office</h5>
                <div class="text">
                  Building F 3rd Floor, Faculty of Law <br />University of
                  Indonesia, Depok - 16424
                </div>
              </div>
              <div class="address">
                <h5>Contact Us</h5>
                <div class="text">021-7884-9083</div>
                <div class="text">drc-law@ui.ac.id</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner">
          <div class="copyright">
            Copyrights <a href="#">&copy; Djokosoetono Research Center</a> All
            rights reserved.
          </div>
          <ul class="social-links clearfix">
            <li class="cursor-pointer">
              <span class="fab fa-facebook-f hover:text-drc-blue" @click="$router.push('/facebook')"></span>
            </li>
            <li class="cursor-pointer">
              <span class="fab fa-twitter hover:text-drc-blue"></span>
            </li>
            <li class="cursor-pointer">
              <span class="fab fa-linkedin-in hover:text-drc-blue"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>