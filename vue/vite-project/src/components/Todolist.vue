<template>
  <div>
    <el-button size="large" @click="clickBtn">df</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,useSlots } from 'vue'
import ElButton from '@/components/button/Button.vue'

export default defineComponent({
  name:'Todolist',
  setup() {
    const slot=useSlots()
    function clickBtn(e){
      console.log(e)
    }
    return {
      clickBtn
    }
  }
})
</script>

<style lang="less" scoped></style>

