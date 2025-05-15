<script setup>

const props = defineProps(["title", "firstname", "lastname", "movies", "img"])

</script>
<template>
  <div class="card border-0 mx-auto" style="max-width: 700px; align-items: center;">
    <img :src=img class="card" :alt="title" style="height: 350px; width: 350px;  ;" />
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">
        <strong>Name:</strong> {{ firstname }} {{ lastname }}<br />
        <strong>Movies ({{ movies.length }}):</strong>
      </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="({ title, year }, idx) in movies" :key="idx">
          {{ idx + 1 }}. {{ title }} ({{ year }})
        </li>
      </ul>
    </div>
  </div>
</template>
