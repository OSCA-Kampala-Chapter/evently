export default function useFlatArray(obj: any) {
  return [].concat(...Object.keys(obj).map((item) => Object.values(obj[item])))
}
