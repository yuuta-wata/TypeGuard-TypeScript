export const TypeofTypeGuard = (value: number | string | boolean) => {
  if (typeof value === 'number') {
    console.log('typeof:', typeof value)
    return 0
  }
  if (typeof value === 'string') {
    console.log('typeof:', typeof value)
    return ''
  }
  if (typeof value === 'boolean') {
    console.log('typeof:', typeof value)
    return false
  }
}