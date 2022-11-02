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


      <Button variant="contained" size="large">
        Solicitar orçamento
      </Button>

      <Typography variant="h3" gutterBottom>
        Vantagens de contratar nossos serviços
      </Typography>

      <Typography variant="body1" gutterBottom>
      Baixo investimento: Hoje para ter uma loja de alto nível você precisa investir muito dinheiro, contratando uma agência especializada e que entrega um serviço completo você economiza o dinheiro de 03 ou mais funcionários em um único serviço.
      </Typography>
      <Typography variant="body1" gutterBottom>
      Estratégia: todo o processo desenvolvido por nós para seu negócio é pensado em estratégias que gerem resultados logo nos primeiros dias.
      </Typography>

      <Button variant="contained" size="large">
        Solicitar orçamento
      </Button>


      <Typography variant="h3" gutterBottom>
       O que vamos fazer na sua loja
      </Typography>
      <Typography variant="h4" gutterBottom>
      Layout personalizado e responsivo
      </Typography>

      <Typography variant="body1" gutterBottom>
      Criação de layout personalizado e preparado para ser visualizado em tablets e smartphones.
      </Typography>
     
      <Typography variant="h4" gutterBottom>
      Cadastro de produtos
      </Typography>
      

      <Typography variant="body1" gutterBottom>
      Você poderá cadastrar, alterar e excluir produtos quando quiser, pelo painel de controle da sua loja.
      </Typography>
     

      <Typography variant="h4" gutterBottom>
      Diversas formas de pagamento
      </Typography>
      <Typography variant="body1" gutterBottom>
      Conosco, você terá muitas facilidades com as formas de pagamento.
      </Typography>
      <Typography variant="h4" gutterBottom>
      Integrações
      </Typography>
      <Typography variant="body1" gutterBottom>
      Auxiliamos você com diversas integrações e recursos para fortalecer ainda mais sua loja virtual.
      </Typography>

      <Button variant="contained" size="large">
        Solicitar orçamento
      </Button>
    </div>
  );
}

export default App;
