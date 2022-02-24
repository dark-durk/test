/* 
* infer 就是记录下待推断的数据类型
*/
type a = StringConstructor
//记录对象数据类型
type ConstructorToType<T> = T extends { (): infer V } ? V : never //将构造函数类型转为普通的数据类型
type c = ConstructorToType<a> // type c = String
// 记录函数参数数据类型
type argType<T> = T extends (...arg: infer V) => any ? V : never
type d = argType<(a: string, b: number) => any> // type d = [a: string, b: number]
// 记录函数返回值类型
type returnType<T> = T extends (...args: any) => infer V ? V : never
const func = () => 'void'
type e = returnType<typeof func> //type e = string


export const dragVerifyProps = {
  isPassing: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 250
  },
  height: {
    type: Number,
    default: 40
  },
  text: {
    type: String,
    default: '按住滑块将图片旋转至正确方向'
  },
  successText: {
    type: String,
    default: 'success'
  },
  background: {
    type: String,
    default: '#eee'
  },
  progressBarBg: {
    type: String,
    default: '#76c61d'
  },
  completedBg: {
    type: String,
    default: '#76c61d'
  },
  circle: {
    type: Boolean,
    default: false
  },
  radius: {
    type: String,
    default: '4px'
  },
  handlerIcon: {
    type: String
  },
  successIcon: {
    type: String
  },
  handlerBg: {
    type: String,
    default: '#fff'
  },
  textSize: {
    type: String,
    default: '14px'
  },
  textColor: {
    type: String,
    default: '#333'
  },
  imgsrc: {
    type: String
  },
  showTips: {
    type: Boolean,
    default: true
  },
  successTip: {
    type: String,
    default: '验证通过'
  },
  failTip: {
    type: String,
    default: '验证失败'
  },
  minDegree: {
    type: Number,
    default: 90
  },
  maxDegree: {
    type: Number,
    default: 270
  }
}

type a = ExtractProp<typeof dragVerifyProps>

// 将BooleanConstructor转为boolean
type ConstructorToType<T> = T extends { (): infer P } ? P : never

// 将type的类型提取出来，如值为BooleanConstructor
type ExtractPropValue<T> = [T] extends [null]
  ? any
  : [T] extends [
    {
      type: null | true
    }
  ]
  ? any
  : T extends { type: infer P }
  ? ConstructorToType<P>
  : any
// 遍历一个 格式为｛type:boolean,default:false｝prop对象
type ExtractProp<T> = T extends Object
  ? {
    [K in keyof T]: ExtractPropValue<T[K]>
  }
  : {
    [K in string]: any
  }
