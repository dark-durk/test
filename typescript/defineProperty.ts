const obj1={
  name:'Ming',
  age:11,
  hobbies:['football','basketball',{hobby1:'rap',hobby2:'sing'}]
}

Object.defineProperty(obj1,'hobbies',{
  get(){
  console.log('get')
  return 'hobbies'
},set(v){
  console.log('set',v)
}
})

// obj1.hobbies[0]='Hong'
console.log(obj1.hobbies)
console.log(obj1.hobbies[0])