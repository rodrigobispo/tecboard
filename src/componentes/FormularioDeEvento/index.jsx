import './formulario-de-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario/index';
import { CampoDeFormulario } from '../CampoDeFormulario/index';
import { Label } from '../Label/index';
import { CampoDeEntrada } from '../CampoDeEntrada/index';
import { ComboBox } from '../ComboBox/index';
import { Botao } from '../Botao/index';

export function FormularioDeEvento({ temas }) {
    return (
        <form className='form-evento'>
          <TituloFormulario>
            Preencha para criar um evento:
          </TituloFormulario>
          <div className='campos'>
            <CampoDeFormulario>
              <Label htmlFor="nome">
                Qual é o nome do evento?
              </Label>
              <CampoDeEntrada
                type="text"
                id='nome'
                placeholder='Summer dev hits'
                name='nomeEvento'
              />
            </CampoDeFormulario>
            <CampoDeFormulario>
              <Label htmlFor="capa">
                Qual o endereço da imagem da capa?
              </Label>
              <CampoDeEntrada
                type="text"
                id='capa'
                placeholder='http://...'
                name='capa'
              />
            </CampoDeFormulario>
            <CampoDeFormulario>
              <Label htmlFor="dataEvento">
                Data do evento
              </Label>
              <CampoDeEntrada
                type="date"
                id='dataEvento'
                name='dataEvento'
              />
            </CampoDeFormulario>
            <CampoDeFormulario>
              <Label htmlFor="temasEventos">
                Tema do evento
              </Label>
              <ComboBox id="temasEventos" name="temasEventos" itens={temas} />
            </CampoDeFormulario>
          </div>
          <div className='acoes'>
            <Botao>
              Criar evento
            </Botao>
          </div>
        </form>
    )
}
