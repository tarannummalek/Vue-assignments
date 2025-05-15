<template>
  <div class="carousel-container">
    <div id="ladyAvengersCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: idx === 0 }"
          v-for="(hero, idx) in ladyAvengers"
          :key="idx"
        >
          <AvengerComp
            :title="hero.title"
            :firstname="hero.firstname"
            :lastname="hero.lastname"
            :movies="hero.movies"
            :img="hero.img"
          />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#ladyAvengersCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#ladyAvengersCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#ladyAvengersCarousel"
          v-for="(hero, idx) in ladyAvengers"
          :key="idx"
          :data-bs-slide-to="idx"
          :class="{ active: idx === 0 }"
          :aria-label="`Slide ${idx + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Carousel } from 'bootstrap';
import AvengerComp from './components/AvengerComp.vue';

import wasp from "@/components/images/Wasp.webp";
import blackwidow from "@/components/images/blackwidow.jpg";
import gamora from "@/components/images/gamora.jpeg";
import captainmarvel from "@/components/images/captainmarvel.jpg";
import scarletwitch from "@/components/images/scarletwitch.jpg";
import shuri from "@/components/images/shuri.jpg";

onMounted(() => {
  const carouselElement = document.querySelector('#ladyAvengersCarousel');
  new Carousel(carouselElement, {
    interval: 4000,
    ride: 'carousel',
    pause: false,
    wrap: true
  });
});

const ladyAvengers = [
  {
    title: "Wasp",
    firstname: "Janet",
    lastname: "Van Dyne",
    movies: [
      { title: "Ant-Man", year: 2015 },
      { title: "Ant‑Man and the Wasp", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 }
    ],
    img: wasp
  },
  {
    title: "Scarlet Witch",
    firstname: "Wanda",
    lastname: "Maximoff",
    movies: [
      { title: "Captain America: The Winter Soldier", year: 2014 },
      { title: "Avengers: Age of Ultron", year: 2015 },
      { title: "Captain America: Civil War", year: 2016 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 },
      { title: "Doctor Strange in the Multiverse of Madness", year: 2022 }
    ],
    img: scarletwitch
  },
  {
    title: "Black Widow",
    firstname: "Natasha",
    lastname: "Romanoff",
    movies: [
      { title: "Iron Man 2", year: 2010 },
      { title: "Avengers", year: 2012 },
      { title: "Captain America: The Winter Soldier", year: 2014 },
      { title: "Avengers: Age of Ultron", year: 2015 },
      { title: "Captain America: Civil War", year: 2016 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 }
    ],
    img: blackwidow
  },
  {
    title: "Captain Marvel",
    firstname: "Carol",
    lastname: "Danvers",
    movies: [
      { title: "Captain Marvel", year: 2019 },
      { title: "Avengers: Endgame", year: 2019 }
    ],
    img: captainmarvel
  },
  {
    title: "Gamora",
    firstname: "Gamora Zen",
    lastname: "Whoberi Ben Titan",
    movies: [
      { title: "Guardians of the Galaxy", year: 2014 },
      { title: "Guardians of the Galaxy Vol. 2", year: 2017 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 }
    ],
    img: gamora
  },
  {
    title: "Shuri",
    firstname: "Shuri",
    lastname: "Princess",
    movies: [
      { title: "Black Panther", year: 2018 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 },
      { title: "Black Panther: Wakanda Forever", year: 2022 }
    ],
    img: shuri
  }
];
</script>

<style scoped>
.carousel-container {
  background: url('@/components/images/bg.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding-top: 40px;
}

/* Carousel buttons */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}

.carousel-indicators [data-bs-target] {
  background-color: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.carousel-indicators {
  bottom: -30px;
  position: relative;
}
</style>
