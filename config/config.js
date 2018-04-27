/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/4/26
 * @Description:
 */
const paths = require('./paths');

module.exports = {
  entry: [
    {
      'name': "index",
      'entryJs': paths.appSrc + "/entry/index.js",
      'title': "首页",
      'template': paths.appHtml,
      'content': '这个是首页'
    },
    {
      'name': "main",
      'entryJs': paths.appSrc + "/entry/main.js",
      'title': "Main's Page",
      'template': paths.appHtml,
      'content': '这个是Main'
    }
  ]
};