import { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import styles from './Calculator.module.scss';

function Calculator() {

  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [IMC, setIMC] = useState();

  const calculateIMC = () => {
    const alturaEmM = altura / 100;
    setIMC((peso / (alturaEmM * alturaEmM)).toFixed(2));

  }

  const verifyIMC = () => {

    if (IMC < 18.5) return "Abaixo do peso";
    if (IMC < 24.5) return "Peso normal";
    if (IMC < 29.9) return "Sobrepeso";
    if (IMC < 34.9) return "Obesidade 1";
    if (IMC < 34.9) return "Obesidade 2";

    return "Obesidade 3";

  }

  return (
    <div className={styles.calculator}>
      <Container maxWidth="sm">
        <Typography variant="h4" className={styles.calculator__title}>Calculadora</Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Altura em CM"
              variant="filled"
              fullWidth
              type="number"
              value={altura}
              onChange={(e) => {
                setAltura(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Peso em KG"
              variant="filled"
              fullWidth
              type="number"
              value={peso}
              onChange={(e) => {
                setPeso(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => calculateIMC()} fullWidth>Calcular</Button>
          </Grid>
          {IMC &&
            <Grid item>
              <Typography>O seu IMC é: {IMC} kg/m2 - <strong>{verifyIMC()}</strong></Typography>
            </Grid>}

        </Grid>
      </Container>
    </div >
  )
}

export default Calculator;