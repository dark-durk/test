let ming={name:'xiaoMing'}

function changeName(name:string):void
function changeName(name:object):void
function changeName(name:string|object):void{
  if(typeof name==='string'){
    ming.name=name
  }else{
    ming=Object.assign(name)
  }
  console.log(ming)
}

changeName('xxx')
changeName({name:'xiaoGong'})
