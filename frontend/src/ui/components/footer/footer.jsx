import Logo from '../../../assets/logo.svg'
import { Switcher } from '../../../utils';
export function Footer() {
  return (
    <div className=" bg-primary-light-100">
      <div className="container">
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-evenly">
            <h3>Sobre</h3>
            <h3>Equipe</h3>
            <h3>Contato</h3>
            <h3>Termos de Uso</h3>
          </div>
          <div className="flex flex-col justify-evenly">
            <h3>Relatar Erros/Sugestões</h3>
            <h3>Política de Privacidade</h3>
            <h3>FAQ</h3>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={Logo} className='w-12'></img>
            <Switcher/>
          </div>
        </div>

        <div className="flex justify-center">
          <h2>2024 Connecting Hope, Todos os direitos reservados</h2>
        </div>
      </div>
    </div>
  );
}
