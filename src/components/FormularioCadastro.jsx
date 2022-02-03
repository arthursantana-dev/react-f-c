import React, { useState } from "react";
import {
	Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

function FormularioCadastro({ submit, validarCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { eValido: true, msgAjuda: "" },
  });

  const dados = {
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf,
    promocoes: promocoes,
    novidades: novidades,
  };

  const [submitValido, setSubmitValido] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
		if (!submitValido) return
        submit(dados);
      }}
    >
		<Box textAlign='center'>
			<Typography variant='h4'>Formulário de cadastro</Typography>
		</Box>
		

      {submitValido ? (
        ""
      ) : (
        <Alert severity="error">
          {" "}
          <AlertTitle>Erro!</AlertTitle> Há campos vazios ou inválidos{" "}
        </Alert>
      )}

      <TextField
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <TextField
        value={sobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
      />

      <TextField
        value={cpf}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="dense"
        error={!erros.cpf.eValido}
        helperText={erros.cpf.msgAjuda}
        onBlur={(e) => {
          if (
            cpf.replaceAll(".", "").replaceAll("-", "").replaceAll(" ", "")
              .length != 11
          ) {
            setErros({
              cpf: { eValido: false, msgAjuda: "CPF deve ter 11 dígitos." },
            });
          } else {
            validarCpf(cpf)
              ? setErros({ cpf: { eValido: true, msgAjuda: "" } })
              : setErros({
                  cpf: { eValido: false, msgAjuda: "CPF inválido." },
                });
          }
          setSubmitValido(erros.cpf.eValido);
        }}
        onChange={(e) => {
          setCpf(
            e.target.value
              .replaceAll(".", "")
              .replaceAll("-", "")
              .replaceAll(" ", "")
          );
        }}
      />

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={promocoes}
              color="primary"
              onChange={(e) => {
                setPromocoes(e.target.checked);
              }}
            />
          }
          label="Promoções"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={novidades}
              color="primary"
              onChange={(e) => {
                setNovidades(e.target.checked);
              }}
            />
          }
          label="Novidades"
        />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => {
          !validarCpf(cpf) || nome.length == 0 || sobrenome.length == 0
            ? setSubmitValido(false)
            : setSubmitValido(true);
        }}
      >
        Enviar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
