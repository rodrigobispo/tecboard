import './formulario-de-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario/index';
import { CampoDeFormulario } from '../CampoDeFormulario/index';
import { Label } from '../Label/index';
import { CampoDeEntrada } from '../CampoDeEntrada/index';

export function FormularioDeEvento() {
    return (
        <form className='form-evento'>
          <TituloFormulario>
            Preencha para criar um evento:
          </TituloFormulario>
          <CampoDeFormulario>
            <Label htmlFor="nome">Qual é o nome do evento?</Label>
            <CampoDeEntrada
              type="text"
              id='nome'
              placeholder='Summer dev hits'
              name='nomeEvento'
            />
          </CampoDeFormulario>
        </form>
    )
}
