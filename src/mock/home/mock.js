let Mock = require("mockjs")
// var randomIndex = Math.round(Math.random() * 19)

let arr = Mock.mock([{
    "list|100": [{
        // "id|+1": 0,

        // "imgurl": Bgs[randomIndex],
        "integer":"@integer(1,999)",//随机整数
        "intege":"@integer(600,8000)",
        "desc": "@cword(20,30)", //随机汉字
        "datetime": "@datetime",
        // "datatime": "@date(yyyy-MM-dd)"
    }]
}])

Mock.mock("/api/home", "get", (config) => {
    return arr
    
})