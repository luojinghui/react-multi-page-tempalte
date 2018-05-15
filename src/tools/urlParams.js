/**
 *
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/5/3
 * @Description:
 */

export const getParam = (url = window.location.href) => {
  if (null == url || url.indexOf("?") === -1) {
    return null;
  }

  let argsUrl = url.split("?")[1];

  if (argsUrl.indexOf("=") === -1) {
    return null;
  }

  let properties = argsUrl.replace(/&/g, "',").replace(/=/g, ":'") + "'";
  let obj = null;
  let template = "obj = {p}";

  eval(template.replace(/p/g, properties));
  return obj;
};
