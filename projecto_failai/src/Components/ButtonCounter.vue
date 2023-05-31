<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button type="button"
          @click="count++"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  >
    You clicked me {{ count }} times.
  </button>
</template>
