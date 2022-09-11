export const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60)
  const minutes = mins % 60
  return `${hours}ч ${minutes}м`
}
export const getTimeOfArrival = (mins: number, d: Date) => {
  const hours = Math.trunc(mins / 60)
  const minutes = mins % 60
  let hours1 = d.getUTCHours() + hours
  let minutes1 = d.getUTCMinutes() + minutes
  if (hours1 >= 24) {
    hours1 -= 24
  }
  if (minutes1 >= 60) {
    hours1 += 1
    minutes1 -= 60
    if (hours1 >= 24) {
      hours1 -= 24
    }
  }
  if (hours1 < 10) {
    return `0${hours1}:${minutes1}`
  }
  if (minutes1 < 10) {
    return `${hours1}:0${minutes1}`
  }
  return `${hours1}:${minutes1}`
}
export const getTime = (d: Date) => {
  const hours = d.getUTCHours()
  const minutes = d.getUTCMinutes()
  if (hours < 10 && minutes < 10) {
    return `0${hours}:0${minutes}`
  }
  if (hours < 10) {
    return `0${hours}:${minutes}`
  }
  if (minutes < 10) {
    return `${hours}:0${minutes}`
  }
  return `${hours}:${minutes}`
}

export const getStops = (stops: number) => {
  if (stops >= 2) {
    return `${stops} пересадки`
  }
  if (stops === 1) {
    return `${stops} пересадка`
  }
}
