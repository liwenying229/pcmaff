let Mock = require("mockjs")

let arrs = Mock.mock({
    "list|10":[{
        "id|+1":0,
        "csentence":"@csentence"
    }]
})



Mock.mock("/api/Question","get",(config)=>{
    return arrs
})