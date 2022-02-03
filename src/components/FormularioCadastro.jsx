import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
          let inputValue = e.target.value;
          if (inputValue.length >= 3) {
            inputValue = inputValue.substring(0, 3);
          }
          setNome(inputValue);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <FormGroup row>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Promoções"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
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
