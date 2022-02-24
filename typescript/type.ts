const dragVerifyProps = {
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

/* 
* 提取一个对象的key作为类型
*/
type DragVerifyProp=keyof typeof dragVerifyProps
console.log(typeof dragVerifyProps)

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number






