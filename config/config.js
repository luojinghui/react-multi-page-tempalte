/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/4/26
 * @Description:
 */
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniHtmlPluginConfig = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
};

//如果是线上环境，将isPrd置为true
const isPrd = true;

module.exports = {
  entry: [
    {
      'name': "index",
      'entryJs': paths.appSrc + "/entry/index.js",
    },
    {
      'name': "main",
      'entryJs': paths.appSrc + "/entry/main.js",
    },
    {
      'name': "meetingControl",
      'entryJs': paths.appSrc + "/entry/meetingControlEntry.js",
    },
    {
      'name': "meetingOtherControl",
      'entryJs': paths.appSrc + "/entry/meetingOtherControl.js",
    },
    {
      'name': "meetingPassword",
      'entryJs': paths.appSrc + "/entry/meetingPassword.js",
    }
  ],
  htmlConfig: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["index"],
      template: paths.appHtml,
      title: "首页",
      minify: isPrd ? miniHtmlPluginConfig : {}
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["main"],
      template: paths.appHtml,
      filename: 'main.html',
      title: "main",
      minify: isPrd ? miniHtmlPluginConfig : {}
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["meetingControl"],
      template: paths.appHtml,
      filename: 'meetingControl.html',
      title: "主持会议",
      minify: isPrd ? miniHtmlPluginConfig : {}
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["meetingOtherControl"],
      template: paths.appHtml,
      filename: 'meetingOtherControl.html',
      title: "主持会议",
      minify: isPrd ? miniHtmlPluginConfig : {}
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["meetingPassword"],
      template: paths.appHtml,
      filename: 'meetingPassword.html',
      title: "主持会议",
      minify: isPrd ? miniHtmlPluginConfig : {}
    }),
  ]
};