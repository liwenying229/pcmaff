let Mock = require("mockjs")

let arrss = Mock.mock({
    "list|30":[{
        "cparagraph":"@cparagraph"
    }]
})



Mock.mock("/api/Essaya","get",(config)=>{
    return arrss
})