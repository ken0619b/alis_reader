// module.exports = {
//   webpack: (config, { dev }) => {
//     config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] });
//     return config;
//   }
// }

const withSass = require('@zeit/next-sass')
module.exports = withSass()