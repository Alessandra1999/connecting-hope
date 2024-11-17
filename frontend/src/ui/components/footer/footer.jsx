import Logo from '../../../assets/logo.svg'
import { Switcher } from '../../../utils';

export function Footer() {
  return (
    <div className="w-full bg-primary-light-400 dark:bg-primary-dark-500 text-[#1E1E1E] dark:text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-evenly">
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-lg">Sobre</h3>
            <h3 className="text-lg">Equipe</h3>
            <h3 className="text-lg">Contato</h3>
            <h3 className="text-lg">Termos de Uso</h3>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-lg">Relatar Erros/Sugestões</h3>
            <h3 className="text-lg">Política de Privacidade</h3>
            <h3 className="text-lg">FAQ</h3>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={Logo} alt="Logo" className="w-12 dark:invert" />
            <Switcher />
          </div>
        </div>
        <div className="mt-4 flex justify-center text-center text-sm">
          <h2>2024 Connecting Hope, Todos os direitos reservados</h2>
        </div>
      </div>
    </div>
  );
}
