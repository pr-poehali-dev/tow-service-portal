import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">Эвакуатор 24/7</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">Услуги</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">О компании</button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors font-medium">Прайс</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('order')} className="hidden md:flex">
            Заказать эвакуатор
          </Button>
        </nav>
      </div>
    </header>
  );
}