import Logo from '../../../assets/logo.svg'
import { Switcher } from '../../../utils';

export function Footer() {
  return (
    <div className="w-full bg-primary-light-400 dark:bg-primary-dark-500 text-[#1E1E1E] dark:text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-evenly">
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-lg"><Link to="/about" relative="path" reloadDocument>Sobre</Link></h3>
            <h3 className="text-lg"><Link to="/about" relative="path" reloadDocument>Equipe</Link></h3>
            <h3 className="text-lg"><Link to="/about" relative="path" reloadDocument>Contato</Link></h3>
            <h3 className="text-lg"><Link to="/terms-of-use" relative="path" reloadDocument>Termos de Uso</Link></h3>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-lg"><Link to="/privacy-policy" relative="path" reloadDocument>Relatar Erros/Sugestões</Link></h3>
            <h3 className="text-lg"><Link to="/about" relative="path" reloadDocument>Política de Privacidade</Link></h3>
            <h3 className="text-lg"><Link to="/about" relative="path" reloadDocument>FAQ</Link></h3>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link to="/" relative="path" reloadDocument>
              <img src={Logo} alt="Logo" className="w-12 dark:invert" />
              <Switcher />
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-center text-center text-sm">
          <h2>2024 Connecting Hope, Todos os direitos reservados</h2>
        </div>
      </div>
    </div>
  );
}
