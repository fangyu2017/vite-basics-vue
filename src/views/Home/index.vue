<template>
  <div class="home">
    home
    <button @click="onClick">increment {{ store.counter }}</button>
    {{ store.doubleCount }}
    <button @click="clickAbout">about</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store'
import api from '@/api'
const store = useCounterStore()
const onClick = () => {
  store.increment()
  api.onClick()
}
const router = useRouter()
const clickAbout = () => {
  router.push({ name: 'About' })
}

</script>

<style lang="scss" scoped>
.home {
  @include flex-center;
}
</style>
