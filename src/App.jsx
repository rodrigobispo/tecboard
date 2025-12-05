import './App.css'

// no react, componentes são FUNÇÕES

function TituloFormulario(props) {
  return (
    <h2>{props.children}</h2>
  )
}

function CampoDeFormulario({ children, htmlFor }) {
  return (
    <fieldset htmlFor={htmlFor}>
      {children}
    </fieldset>
  )
}

function Label({ children }) {
  return (
    <label>
      {children}
    </label>
  )
}

function CampoDeEntrada(props) {
  return <input {...props} />
}

function FormularioDeEvento() {
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

function App() {
  return (
    <main>
        <header>
            <img src="/logo.png" alt="" />
        </header>
        <section>
            <img src="/banner.png" alt="" />
        </section>
        <FormularioDeEvento />
    </main>
  )
}

export default App
