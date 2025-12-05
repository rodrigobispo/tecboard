export function CampoDeFormulario({ children, htmlFor }) {
  return (
    <fieldset htmlFor={htmlFor}>
      {children}
    </fieldset>
  )
}