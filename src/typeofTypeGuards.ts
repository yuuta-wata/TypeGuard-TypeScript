export const TypeofTypeGuard = (value: number | string | boolean) => {
  if (typeof value === 'number') {
    console.log('typeof:', typeof value)
  }
  if (typeof value === 'string') {
    console.log('typeof:', typeof value)
  }
  if (typeof value === 'boolean') {
    console.log('typeof:', typeof value)
  }
}