export const Reset = (value: number | string | boolean) => {
  if (typeof value === 'number') {
    console.log('typeof number:', value)
    return 0
  }
  if (typeof value === 'string') {
    console.log('typeof string:', value)
    return ''
  }
  if (typeof value === 'boolean') {
    console.log('typeof boolean:', value)
    return false
  }
}