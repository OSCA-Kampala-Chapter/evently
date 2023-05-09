export default function useFlatArray(obj: any) {
  return ([] as unknown[]).concat(
    ...Object.keys(obj).map((item) => Object.values(obj[item]) as unknown[]),
  )
}
