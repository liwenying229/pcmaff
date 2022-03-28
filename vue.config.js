const {
    defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //解决代码格式化
});