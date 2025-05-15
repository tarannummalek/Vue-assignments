<template>
    <div class="container py-5">
      <h2>Enter Group Details</h2>
      <label class="form-label">Number of People:</label>
      <input type="number" class="form-control" v-model.number="headCount" @change="initMembers" />
  
      <div v-for="(member, index) in memberData" :key="index" class="my-3">
        <label>Person {{ index + 1 }}</label>
        <div class="input-group">
          <input class="form-control" v-model="member.name" placeholder="Name" />
          <input class="form-control" type="number" v-model.number="member.amount" placeholder="Amount" />
        </div>
      </div>
  
      <button class="btn btn-primary mt-3" @click="goToSummary">Next</button>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const headCount = ref(0)
  const memberData = ref([])
  
  function initMembers() {
    memberData.value = Array.from({ length: headCount.value }, () => ({ name: '', amount: 0 }))
  }
  
  function goToSummary() {
    localStorage.setItem('members', JSON.stringify(memberData.value))
    router.push('/summary')
  }
  </script>
    