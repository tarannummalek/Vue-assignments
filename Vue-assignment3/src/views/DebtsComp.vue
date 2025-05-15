<template>
    <div class="container py-5">
      <h2>Final summery of debts</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="(debt, index) in debts" :key="index">
          {{ debt.giver }} owes {{ debt.taker }}: &#x20b9;{{ debt.amount.toFixed(2) }}
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const memberData = ref([])
  const perPerson = ref(0)
  const moneyToGive = ref([])
  const moneyToTake = ref([])
  const debts = ref([])
  
  onMounted(() => {
    memberData.value = JSON.parse(localStorage.getItem('members') || '[]')
    const total = memberData.value.reduce((sum, m) => sum + Number(m.amount), 0)
    perPerson.value = total / memberData.value.length
  
    memberData.value.forEach((m) => {
      const diff = m.amount - perPerson.value
      if (diff < 0) moneyToGive.value.push({ person: m.name, amount: Math.abs(diff) })
      else if (diff > 0) moneyToTake.value.push({ person: m.name, amount: diff })
    })
  
    let i = 0, j = 0
    while (i < moneyToGive.value.length && j < moneyToTake.value.length) {
      const giver = moneyToGive.value[i]
      const taker = moneyToTake.value[j]
      const transfer = Math.min(giver.amount, taker.amount)
  
      debts.value.push({ giver: giver.person, taker: taker.person, amount: transfer })
  
      giver.amount -= transfer
      taker.amount -= transfer
  
      if (giver.amount === 0) i++
      if (taker.amount === 0) j++
    }
  })
  </script>
  