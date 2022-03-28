// src/mock.js
const Mock = require('mockjs')
const Random = Mock.Random

const getResource = () => {
    let resources = []
    for (let i = 0; i < 10; i++) {
        resources.push({
            id: Random.date() + ' ' + Random.time(),
            username: "@cname()",
            avatar: "@image('120x80','blue','#fff','avatar')",
            description: "@paragraph()",
            label: '一级' + Random.csentence(2, 35),
            children: [{
                label: '二级 1-1-1'
            }]
        })
    }
    return resources
}

Mock.mock('http://localhost:8088/getResource', 'get', getResource())