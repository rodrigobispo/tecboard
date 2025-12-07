import './combo-formulario.estilos.css'

export function ComboBox(props) {
  return (
    <select {...props} className='combobox-form'>
      <option value=""></option>
    </select>
  )
}