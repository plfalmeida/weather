import { fromUnixTime } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import ptBr from 'date-fns/locale/pt-BR'

export const unixToDate = (unix = 1594629265) => {
  return fromUnixTime(unix)
}

export const zoneDateFromUnix = (unix = 1594629265, timeZone: string) => {
  const znDate = utcToZonedTime(unixToDate(unix), timeZone)
  return znDate
}

export const dateTimeFormat = (date: Date, timeZone: string) => {
  const znDate = utcToZonedTime(date, timeZone)
  const formatedDate = format(znDate, 'HH:mm', {
    timeZone,
    locale: ptBr,
  })
  return formatedDate
}

export const getHour = (date: Date, timeZone: string, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date)
}
