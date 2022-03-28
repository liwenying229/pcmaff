let Mock = require("mockjs")

let arr = Mock.mock(["这里是全部的信息","这是第二个","这是第三个"])



Mock.mock("/api/Search","get",(config)=>{
    return arr
})