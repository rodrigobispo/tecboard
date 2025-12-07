import './combo-formulario.estilos.css'

export function ComboBox({ itens, ...rest }) {
  return (
    <select {...rest} className='combobox-form' defaultValue="">
      <option value="" disabled>Selecione uma opção</option>
      {itens.map(function (item) {
        return <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      })}
    </select>
  )
}