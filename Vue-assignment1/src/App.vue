<script setup>
import { ref, computed } from 'vue';
let ladyAvengers = [
  {
    title: "Wasp",
    firstname: "Janet",
    lastname: "Van Dyne",
    movies: [
      { title: "Ant-Man", year: 2015 },
      { title: "Ant‑Man and the Wasp", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 }
    ]
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
    ]
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
    ]
  },
  {
    title: "Captain Marvel",
    firstname: "Carol",
    lastname: "Danvers",
    movies: [
      { title: "Captain Marvel", year: 2019 },
      { title: "Avengers: Endgame", year: 2019 }
    ]
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
    ]
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
    ]
  }
];

const searchTitle = ref("");
const searchFirstname = ref("");
const searchLastname = ref("");
const searchMovie = ref("");

const filteredAvengers = computed(() => {
  return ladyAvengers.filter(({ title, firstname, lastname, movies }) => {
    const matchTitle = title.toLowerCase().includes(searchTitle.value.toLowerCase());
    const matchFirstname = firstname.toLowerCase().includes(searchFirstname.value.toLowerCase());
    const matchLastname = lastname.toLowerCase().includes(searchLastname.value.toLowerCase());
    const matchMovie = movies.some(movie =>
      movie.title.toLowerCase().includes(searchMovie.value.toLowerCase())
    );
    return matchTitle && matchFirstname && matchLastname && matchMovie;
  });
});

const resetFilters = () => {
  searchTitle.value = "";
  searchFirstname.value = "";
  searchLastname.value = "";
  searchMovie.value = "";
};
</script>

<template>
  <div class="container">
    <h2>Lady Avengers Filter</h2>
    
    <div style="margin-bottom: 1rem; display: flex; flex-direction: column; gap: 8px;">
      <input v-model="searchTitle" placeholder="Filter by Title" />
      <input v-model="searchFirstname" placeholder="Filter by First Name" />
      <input v-model="searchLastname" placeholder="Filter by Last Name" />
      <input v-model="searchMovie" placeholder="Filter by Movie Title" />
      <button @click="resetFilters">Reset Filters</button>
    </div>

    <table class="table table-responsive table-hover table-info table-sm mb-100">
      <thead>
        <tr>
          <th>Sl</th>
          <th>Title</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Movies</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ title, firstname, lastname, movies }, idx) in filteredAvengers" :key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ title }}</td>
          <td>{{ firstname }}</td>
          <td>{{ lastname }}</td>
          <td>
            <ol>
              <li v-for="(movie, mIdx) in movies" :key="mIdx">
                {{ movie.title }} ({{ movie.year }})
              </li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
input {
  padding: 6px;
  width: 100%;
  max-width: 300px;
}
button {
  width: 150px;
  padding: 6px;
  background-color: #337ab7;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
