import { ref, shallowRef, unref, watchEffect } from 'vue'
/*
 * 监听一个变量，如果发生变化自动保存到localStorage
 */
export function useStorage(name: string, value: any, shallow: boolean = false) {
  if (typeof value==='undefined'||value===null) {
    console.log(value)
    return
  }
  const valueInit = unref(value)
  const data = (shallow ? shallowRef : ref)(valueInit)
  const dataType = getDataType(valueInit)
  const serializer = StorageSerializers[dataType]
  watchEffect(() => {
    localStorage.setItem(name, serializer.write(data.value))
  })
  const rawValue = localStorage.getItem(name)
  data.value = rawValue && serializer.read(rawValue)
  return data
}

function getDataType(data: any) {
  if (typeof data === 'object') {
    if (data instanceof Set) return 'set'
    if (data instanceof Map) return 'map'
    return 'object'
  }
  return typeof data
}

const StorageSerializers = {
  boolean: {
    read: v => v === 'true',
    write: v => String(v)
  },
  number: {
    read: v => Number.parseFloat(v),
    write: v => String(v)
  },
  string: {
    read: v => v,
    write: v => String(v)
  },
  map: {
    read: v => new Map(JSON.parse(v)),
    write: v => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: v => new Set(JSON.parse(v)),
    write: v => JSON.stringify(Array.from(v.entries()))
  },
  object: {
    read: v => JSON.parse(v),
    write: v => JSON.stringify(v)
  }
}
