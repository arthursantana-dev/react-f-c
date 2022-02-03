import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";

function FormularioCadastro({ submit }) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(dados);
      }}
    >
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
          if (cpf.length != 11) {
            setErros({
              cpf: { eValido: false, msgAjuda: "O CPF deve ter 11 dígitos." },
            });
          } else {
            setErros({ cpf: { eValido: true, msgAjuda: "" } });
          }
        }}
        onChange={(e) => {
          setCpf(e.target.value);
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

      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
