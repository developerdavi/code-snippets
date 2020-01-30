export function ReadableDate(ISODate, options = { offset: { years: 0, months: 0, days: 0 }, showHours: true }) {

  // Edit this for custom time zone or just a offset
  const OFFSET = 0

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
  ISODate.setHours(ISODate.getHours() + OFFSET)

  const day = ISODate.getDate() < 10 ? '0' + ISODate.getDate() : ISODate.getDate()
  const month = (ISODate.getMonth() + 1) < 10 ? '0' + (ISODate.getMonth() + 1) : ISODate.getMonth() + 1
  const year = ISODate.getFullYear()
  const hour = ISODate.getHours() < 10 ? '0' + ISODate.getHours() : ISODate.getHours()
  const minutes = ISODate.getMinutes() < 10 ? '0' + ISODate.getMinutes() : ISODate.getMinutes()

  return `${day}/${month}/${year} ${options.showHours ? `às ${hour}h${minutes}min` : ''}`
}
