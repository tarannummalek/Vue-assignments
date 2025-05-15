<template>
    <div class="container py-5">
      <h2>Per Person Summary</h2>
      <p><strong>Total:</strong> ${{ total }}</p>
      <p><strong>Per Person:</strong> ${{ perPerson.toFixed(2) }}</p>
  
      <ul class="list-group mt-3">
        <li class="list-group-item" v-for="m in memberData" :key="m.name">
          {{ m.name }} paid ${{ m.amount }} –
          <span :class="badgeClass(m)">
            {{
              m.amount > perPerson ? 'Overpaid' :
              m.amount < perPerson ? 'Underpaid' : 'Even'
            }}
          </span>
        </li>
      </ul>
  
      <button class="btn btn-primary mt-4" @click="goToDebts">Next</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const memberData = ref([])
  const total = ref(0)
  const perPerson = ref(0)
  
  onMounted(() => {
    memberData.value = JSON.parse(localStorage.getItem('members'))
    total.value = memberData.value.reduce((sum, m) => sum + Number(m.amount), 0)
    perPerson.value = total.value / memberData.value.length
  })
  
  function badgeClass(m) {
    const diff = m.amount - perPerson.value
    if (diff > 0) return 'badge bg-success'
    if (diff < 0) return 'badge bg-warning'
    return 'badge bg-secondary'
  }
  
  function goToDebts() {
    router.push('/debts')
  }
  </script>
  