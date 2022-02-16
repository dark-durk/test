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


function changeFoo(){
  a.value++
}
</script>

<style lang="less" scoped>
.title {
  font-size: 14px;
  font-weight: bold;
}
</style>
