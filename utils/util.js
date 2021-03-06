const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatDateUnit).join('/')} ${[hour, minute, second].map(formatDateUnit).join(':')}`
}

const formatDateUnit = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatDateUnit,
  formatDate
}
