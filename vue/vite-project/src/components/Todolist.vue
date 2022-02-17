<template>
  <div>
    <el-button size="large">df</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,useSlots } from 'vue'
import ElButton from '@/components/button/Button.vue'

export default defineComponent({
  name:'Todolist',
  setup() {
    const slot=useSlots()
    console.log(slot)
  }
})
</script>

<style lang="less" scoped></style>

