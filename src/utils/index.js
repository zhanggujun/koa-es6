/*
 @author zhanggujun
 @date 2022-01-12 10:42
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/

export const padding = n => n < 10 ? `0${ n }` : n

export const format = (date = Date.now(),fmt = 'yyyy-MM-dd HH:mm:ss') => {
  const now = new Date(date)
  const day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const days = ['周日','周一','周二','周三','周四','周五','周六']
  const obj = {
    'y+': now.getFullYear(),
    'M{2}': padding(now.getMonth() + 1),
    'd{2}': padding(now.getDate()),
    'H{2}': padding(now.getHours()),
    'h{2}': padding(now.getHours() % 12),
    'm{2}': padding(now.getMinutes()),
    's{2}': padding(now.getSeconds()),
    'M': now.getMonth() + 1,
    'd': now.getDate(),
    'H': now.getHours(),
    'h': now.getHours() % 12,
    'm': now.getMinutes(),
    's': now.getSeconds(),
    'CW': day[now.getDay()],
    'cw': days[now.getDay()],
    'W': now.getDay()
  }
  for (let [key, value] of Object.entries(obj)) {
    const regexp = new RegExp(`(${key})([^a-zA-Z])?`)
    if (regexp.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, obj[key])
    }
  }
  return fmt
}
