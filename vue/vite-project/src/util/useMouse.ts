import {reactive,onMounted,onUnmounted} from 'vue'

export function useMouse(){
  const mouse=reactive({
    x:0,
    y:0
  })
  function update(e:MouseEvent){
    mouse.x=e.pageX
    mouse.y=e.pageY
  }
  onMounted(()=>{
    window.addEventListener('mousemove',update)
  })
  onUnmounted(()=>{
    window.addEventListener('mousemove',update)
  })
  return {mouse}
}