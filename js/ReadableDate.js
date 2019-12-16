export function ReadableDate(ISODate, options = { offset: { years: 0, months: 0, days: 0 }, showHours: true }) {

  // Edit this for custom time zone
  const TIME_ZONE = 0

  ISODate = new Date(ISODate)

  if (options.offset) {
    if (options.offset.days)
      ISODate.setDate(ISODate.getDate() + options.offset.days)
  
    if (options.offset.months)
      ISODate.setMonth(ISODate.getMonth() + options.offset.months)
  
    if (options.offset.years)
      ISODate.setYear(ISODate.getFullYear() + options.offset.years)
  }

  // Changes the time zone
  ISODate.setHours(ISODate.getHours() + TIME_ZONE)

  const day = ISODate.getDate()
  const month = ISODate.getMonth() + 1
  const year = ISODate.getFullYear()
  const hour = ISODate.getHours()
  const minutes = ISODate.getMinutes()

  return `${day}/${month}/${year} ${options.showHours ? `às ${hour}h${minutes}min` : ''}`
}
