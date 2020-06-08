import formater from './format'

/**
 * 每一个
 * @param {*} obj 
 * @param {*} fn 
 */
export function each (obj, fn) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (fn.call(obj[key], key, obj[key]) === false) {
        break
      }
    }
  }
}

/**
 * 去掉数字前头的0
 * @param {*} val 
 */
export function trimZero (val) {
  val = String(val)
  val = val ? parseFloat(val.replace(/^0+/g, '')) : ''
  val = val || 0
  val = val + ''
  return val
}

/**
 * 根据开始和结束，补0后，组合成数组
 * @param {*} start 
 * @param {*} end 
 */
export function generateRange (start = 0, end) {
  let results = []
  for (let i = start; i <= end; i++) {
    results.push(addZero(i))
  }
  return results
}




/**
 * 是否是今天
 * @param {*} val1 
 * @param {*} val2 
 */
export function isToday (val1, val2) {
  return val1.getFullYear() === val2.getFullYear() && val1.getMonth() === val2.getMonth() && val1.getDate() === val2.getDate()
}


/**
 * 是否是闰年
 * @param {*} year 
 */
export function isLeapYear (year) {
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0
}


/**
 * 获取每年每月的天数
 * @param {*} year 
 * @param {*} month 
 */
export function getMaxDay (year, month) {
  year = parseFloat(year)
  month = parseFloat(month)
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31
}

/**
 * todo ?
 * @param {*} tmpl 
 * @param {*} value 
 */
export function parseRow (tmpl, value) {
  return tmpl.replace(/\{value\}/g, value)
}

// parse Date String
export function parseDate (format, value) {
  const formatParts = format.split(/[^A-Za-z]+/)
  let valueParts = value.replace(/\s/g, '-').replace(/:/g, '-').replace(/\//g, '-').split('-')
  if (formatParts.length !== valueParts.length) {
    // if it is error date, use current date
    const date = formater(new Date(), format)
    valueParts = date.split(/\D+/)
  }

  let result = {

  }

  for (let i = 0; i < formatParts.length; i++) {
    if (formatParts[i]) {
      result[formatParts[i]] = valueParts[i]
    }
  }
  return result
}

export const DEFAULT_CONFIG = {
  trigger: null,
  output: null,
  // currentYear: NOW.getFullYear(),
  // currentMonth: NOW.getMonth() + 1,
  minYear: 2010,
  maxYear: 2030,
  minHour: 0,
  maxHour: 23,
  hourList: null,
  minuteList: null,
  startDate: null,
  endDate: null,
  format: 'YYYY-MM-DD',
  onSelect () {},
  onConfirm () {},
  onClear () {},
  onShow () {},
  onHide () {},
  confirmText: 'ok',
  clearText: '',
  cancelText: 'cancel',
  destroyOnHide: false,
  renderInline: false,
  computeHoursFunction: null,
  computeDaysFunction: null,
  isOneInstance: false,
  orderMap: {}
}