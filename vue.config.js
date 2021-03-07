module.exports = {
    configureWebpack: {
        resolve: { //解决路径相关问题
            extensions: [], //配置后省略后缀名
            alias: { //配置别名
                // '@': 'src', //默认已经配置
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'assets': '@/assets',
                'views': '@/views'
            }
        }
    }
}