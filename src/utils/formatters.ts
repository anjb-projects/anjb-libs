import * as moment from "moment"

export const formatBool = (value?: boolean): string => value ? 'Sim' : 'Não'


/**
 * Ouputs: '14/06/2020, 23:12'
 */
export const formatToDateAndHour = (
  str?: string,
): string => {
  if (!str) {
    return ''
  }

  return moment(str).format('DD/MM/YY[,] HH:MM')
}

/**
 * Ouputs: '14/05'
 */
export const formatToDayAndMonth = (
  str: string,
): string => moment(str).format('DD / MM')
