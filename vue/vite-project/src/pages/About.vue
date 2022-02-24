<template>
  <div>
    <h1>about page</h1>
    <div class="mousePosition">
      <span class="title">{{ mouse.x }} {{ mouse.y }}</span>
    </div>
    <div>
      <span>{{a}}</span>
      <button @click="changeFoo">changeFoo</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMouse } from '@/util/useMouse'
import { useStorage } from '@/util/useStorage';
import { isReactive, reactive, ref, shallowRef, triggerRef } from 'vue';
let { mouse } = useMouse()

const a=useStorage('a',0)
const b=useStorage('b',{name:'Ming',age:10})


function changeFoo(){
  a.value++
  b.value.age++
  console.log(typeof b.value.age)
}
</script>

<style lang="less" scoped>
.title {
  font-size: 14px;
  font-weight: bold;
}
</style>
