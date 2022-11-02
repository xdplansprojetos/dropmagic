import logo from './logo.png';
import './App.css';
import MenuHeader from './Components/Layout/MenuHeader'
import Bloco1 from './Components/Blocos/Bloco1'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <Typography variant="h3" gutterBottom>
      Não montamos loja, montamos verdeiras máquinas de vendas
      </Typography>
      <Typography variant="h4" gutterBottom>
      Sua loja virtual mais atrativa
      </Typography>
      
      <Button variant="contained" size="large">
      Quero uma loja atrativa
        </Button>
      
        <Typography variant="body1" gutterBottom>
      Como funciona?
      </Typography>
        
        
        <Typography variant="body1" gutterBottom>
        Para que seu projeto tenha os melhores resultados, trabalhamos em 3 etapas:
</Typography>
        <Typography variant="body1" gutterBottom>
1- Em nosso primeiro contato: avaliamos os pontos de melhorias, realizamos o planejamento e criação dos temas, pensando na melhor experiência do usuário
</Typography>
        <Typography variant="body1" gutterBottom>
2- Começo da transformação: após a criação do novo visual, passamos para o teste das funcionalidades da sua loja. 
</Typography>
        <Typography variant="body1" gutterBottom>
3- Suporte técnico: ficamos a sua inteira disposição para auxiliar em caso de dúvidas. Pronto, agora é só aproveitar e começar a ver seus ganhos!
</Typography>
        

    </div>
  );
}

export default App;
