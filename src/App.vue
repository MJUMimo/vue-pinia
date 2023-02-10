<script setup>
import { RouterLink, RouterView } from "vue-router";
import topic from "./components/topic.vue";
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="container">
      <header class="row mt-5" style="height: 200px">
        <div class="col-2">
          <img
            alt="Vue logo"
            class="logo"
            src="../src/assets/slide_image/comsci.jpg"
            width="291"
            height="173"
          />
        </div>
        <div class="col d-flex align-items-center">
          <topic msg="Welcome to Computer Science" />
        </div>
        <div class="col">
          <div class=""></div>
          <nav class="container text-center" style="background-color: #0040ff">
            <div class="row align-items-center" style="height: 80px">
              <div class="col">
                <div>
                  <RouterLink to="/" class="text-light mu">Home</RouterLink>
                </div>
              </div>
              <div class="col-3">
                <RouterLink to="/course" class="text-light mu"
                  >Course</RouterLink
                >
              </div>
              <div class="col">
                <RouterLink to="/AddDrop" class="text-light mu"
                  >Add-Drop</RouterLink
                >
              </div>
            </div>
          </nav>
        </div>
      </header>

      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.tria {
  position: absolute;

  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 30px solid #ffffff;
}

.mu {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
</style>
