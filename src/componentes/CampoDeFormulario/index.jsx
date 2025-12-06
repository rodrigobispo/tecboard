import './campo-formulario.estilos.css'

export function CampoDeFormulario({ children, htmlFor }) {
  return (
    <fieldset htmlFor={htmlFor} className='campo-form'>
      {children}
    </fieldset>
  )
}