const minYear = 2010 // 开始年份
const maxYear = 2030 // 结束年份
const yearsArr = [] // picker 第一列 年份数组

// 所有年份的集合
for (let minYear = 2010; minYear <= maxYear; minYear++) {
  yearsArr.push(minYear) 
}


/**
 * 补0
 * @param {*} val 
 */
function addZero (val) {
  val = String(val)
  return val.length < 2 ? '0' + val : val
}


/**
 * picker第二列
 */
const monthsArr = []

for(let i = 1; i <= 12; i++) {
  monthsArr.push(addZero(i))
}


/**
 * 当前的年、月、日
 * @param {*} year 
 */
const NOW = new Date()
const currentYear = NOW.getFullYear() // 年
const currentMonth = addZero(NOW.getMonth() + 1) // 月
const currentDay = addZero(NOW.getDate()) // 日


/**
 * 当前的月的总天数，piceker 第三列 天的数组
 */
const days = getMaxDay(currentYear, currentMonth)
const daysArr = []
for(let i = 1; i <= days; i++) {
  daysArr.push(addZero(i))
}

function daysArrHandle (days) {
    const daysArr = []
    for(let i = 1; i <= days; i++) {
      daysArr.push(addZero(i))
    }
    return daysArr
}

/**
 * 默认当前的年月日，在picker中的默认位置
 */
const defalutYear = yearsArr.indexOf(currentYear)
const defalutMonth = monthsArr.indexOf(currentMonth)
const defalutDay = daysArr.indexOf(currentDay)
const noonArr = ['上午', '下午']

// console.log(defalutYear, defalutMonth, defalutDay)
// console.log(currentYear)
// console.log(currentMonth)
// console.log(currentDay)
// console.log(days)
// console.log(daysArr)
// console.log(years)

/**
 * 是否是闰年
 * @param {*} year 
 */
function isLeapYear (year) {
  // 如果年份数字可以被4整除而不能被100整除，或者能被400整除，那么该年便是闰年
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0
}


/**
 * 计算每年的每个月的天数 getMonthEndDay
 * @param {*} year 
 * @param {*} month 
 */
function getMaxDay (year, month) {
  year = parseFloat(year)
  month = parseFloat(month)
  // 2月份 是闰年29天
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28
  }

  // 1，3，5，7，8，10，腊 31天永不差，其它月份非二月份是 30天
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31
}


/**
 * 根据开始时间，结束时间计算出最小年，最大年
 * @param {*} startDate 
 * @param {*} endDate 
 */
function getYears (startDate, endDate) {
  let startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  let rs = []

  while (startYear <= endYear) {
    rs.push(startYear)
    startYear++
  }

  return {
    minYear: rs[0],
    maxYear: rs[rs.length - 1]
  }
}


/**
 * 根据开始时间、结束时间、年份计算出最小月份和最大月份，
 * 既计算每年的月份的开始，和结束
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} year 
 */
function getMonths (startDate, endDate, year) {
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  const startMonth = startDate.getMonth() + 1
  const endMonth = endDate.getMonth() + 1
  let start = 1
  let end = 12

  if (year === startYear) {
    start = startMonth
  }

  if (year === endYear) {
    end = endMonth
  }

  return {
    minMonth: start,
    maxMonth: end
  }
}


/**
 * 计算天数的开始和结束时间
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} year 
 * @param {*} month 
 */
function getDays (startDate, endDate, year, month) {
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  const startMonth = startDate.getMonth() + 1
  const endMonth = endDate.getMonth() + 1
  const startDay = startDate.getDate()
  const endDay = endDate.getDate()

  let start = 1
  let end = getMaxDay(year, month)

  if (year === startYear && month === startMonth) {
    start = startDay
  }
  if (year === endYear && month === endMonth) {
    end = endDay
  }
  return {
    minDay: start,
    maxDay: end
  }
}


// 😂 导出年月日的计算器
export {
  getYears,
  getMonths,
  getDays,
  yearsArr,
  monthsArr,
  daysArr,
  noonArr,
  defalutYear,
  defalutMonth,
  defalutDay,
  getMaxDay,
  daysArrHandle
}