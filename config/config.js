/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/4/26
 * @Description:
 */
const paths = require('./paths');

module.exports = {
  entry: {
    'index': [
      paths.appIndexJs,
    ],
    'main': [
      paths.appSrc + "/entry/main.js",
    ]
  }
};