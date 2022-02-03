import { Container } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro.jsx'

function App() {
	function submitHandler(dados){
		console.log(dados);
	}

  return (
	  <Container component='article' maxWidth='sm'>
		  <h1>Formulário de Cadastro</h1>
		  <FormularioCadastro submit={submitHandler}/>
	  </Container>
  );
}

export default App;
