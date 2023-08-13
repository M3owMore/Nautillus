

const H1 = (props:any) => {
  return (
    <h1 className="text-secondary font-alkSanet font-bold text-4xl text-center">{props.children}</h1>
  )
}
const H2 = (props:any) => {
    return (
      <h1 className="text-secondary font-alkSanet font-bold text-3xl text-center">{props.children}</h1>
    )
}
const H3 = (props:any) => {
    return (
        <h1 className="text-secondary font-alkSanet font-bold text-2xl text-center">{props.children}</h1>
    )
}
const H4 = (props:any) => {
    return (
    <h1 className="text-secondary font-alkSanet font-bold text-xl text-center">{props.children}</h1>
    )
}
export {H1, H2, H3, H4}