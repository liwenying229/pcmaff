let Mock = require("mockjs")

var Bgs = [
    "https://img.pmcaff.com/FjAEFgdmcQjxHOFPj1mMR0S5h5xF-picture",
    "https://img.pmcaff.com/FqrHoGAI8Q-LM4fxOh6OAFQJJ8MQ-picture",
    "https://img.pmcaff.com/FoBeYLczXc1ufiVnf4jstPTqXkfE-picture",
    "https://img.pmcaff.com/Fl_1AIXVM2H94sN8f1eBKKngZl-v-picture",
    "https://img.pmcaff.com/FlLvcpTLmUAnGo1jX_348MxgCbUS-picture",
    "https://img.pmcaff.com/FhnOCkGuJEStVhGqlJR5YEH9rlDj-picture",
    "https://img.pmcaff.com/Fo5jN7S5_YRYOq_gmRATHAIsOm0P-picture",
    "https://img.pmcaff.com/FvIvjpLsV_Dzf8bUjAwdQnddZcrH-picture",
    "https://img.pmcaff.com/FsnVUGMna7u-hYrZ6h0EH9jLLqZw-picture",
    "https://img.pmcaff.com/Fs3fpHvnh5OKGWVfRimNr89Jf-Bz-picture",
    "https://img.pmcaff.com/FrpPq6F_F1rpsehA11NBv7JsK3yA-picture",
    "https://img.pmcaff.com/Fh4ALeBCOvVcosySIvgF7VaT5HaJ-picture",
    "https://img.pmcaff.com/FvGJSX6Ovb9FrpN0qrZf41kC4BwE-picture",
    "https://img.pmcaff.com/FgSYv1M7SRHKrlT8QdpNYtx4HT1q-picture",
    "https://img.pmcaff.com/FlYLEpByJZhYWkQD1ZziLANGt0Jr-picture",
    "https://img.pmcaff.com/FlTOw8xFmWn5bWkdLCw2ItNmnEyx-picture",
    "https://img.pmcaff.com/FqQglqo85lbohi_8K7Bb5VHo5mmi-picture",
    "https://img.pmcaff.com/FmwC2MbrMWLRLPyf1460WZCGUnd4-picture",
    "https://img.pmcaff.com/FtieuCZzgnVCl57CHsX_Lp_Y2P7x-picture",
    "https://img.pmcaff.com/FiurP2fyzpCDEVeJeqTlfXXbrEEr-picture"
]
var randomIndex = Math.round(Math.random() * 19)

let arr = Mock.mock([{
    "list|100": [{
        // "id|+1": 0,

        "imgurl": Bgs[randomIndex],
        "desc": "@cword(20,30)", //随机汉字
        "datetime": "@date(yyyy-MM-dd)",
        "datatime": "@date(yyyy-MM-dd)"
    }]
}])

Mock.mock("/api/activity", "get", (config) => {
    return arr
})