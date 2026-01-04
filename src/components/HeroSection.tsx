import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-primary" aria-label="Главная страница">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Вызвать эвакуатор 24/7 — Быстро и Надёжно
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Работаем круглосуточно. Прибытие за 20-30 минут. Опытные водители. Современная техника.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('order')} size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать эвакуатор
              </Button>
              <Button onClick={() => scrollToSection('pricing')} size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Узнать цены
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Круглосуточно</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">20 мин</div>
                <div className="text-xs sm:text-sm text-white/80">Среднее время</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">1500+</div>
                <div className="text-xs sm:text-sm text-white/80">Выполнено заказов</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://cdn.poehali.dev/projects/93bf9bc9-b4bd-4203-8b44-15199a552ff4/files/37d98ee8-dbb7-407d-b16f-b305ed72af7f.jpg" 
              alt="Эвакуатор для легковых автомобилей Москва - профессиональная эвакуация седанов и хэтчбеков" 
              className="rounded-lg shadow-2xl"
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}