const path = require('path')

module.exports = {
    mount: {
        public: path.resolve(__dirname,'/'),
        src: path.resolve(__dirname,'/_dist_')
    },
    plugins:[
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-react-refresh'
    ]
}