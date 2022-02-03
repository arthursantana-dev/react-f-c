import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"
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
