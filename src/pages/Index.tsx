import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    address: '',
    carModel: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Заявка принята! Мы свяжемся с вами в ближайшее время.');
    setFormData({ address: '', carModel: '', problem: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">Эвакуатор 24/7</span>
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

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Быстрая и надежная эвакуация автомобилей
              </h1>
              <p className="text-xl text-white/90">
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
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80">Круглосуточно</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">20 мин</div>
                  <div className="text-white/80">Среднее время</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1500+</div>
                  <div className="text-white/80">Выполнено заказов</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/93bf9bc9-b4bd-4203-8b44-15199a552ff4/files/9281237e-c4d7-4478-bbbf-583c4017422e.jpg" 
                alt="Эвакуатор" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр эвакуационных услуг для любых ситуаций</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Car" size={48} className="text-primary mb-4" />
                <CardTitle>Эвакуация легковых авто</CardTitle>
                <CardDescription>Быстрая и безопасная транспортировка легковых автомобилей любых марок</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={48} className="text-primary mb-4" />
                <CardTitle>Эвакуация грузовых авто</CardTitle>
                <CardDescription>Специализированные эвакуаторы для грузовых автомобилей и спецтехники</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" size={48} className="text-primary mb-4" />
                <CardTitle>Техпомощь на дороге</CardTitle>
                <CardDescription>Мелкий ремонт, подзарядка аккумулятора, замена колес на месте</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="AlertTriangle" size={48} className="text-primary mb-4" />
                <CardTitle>Эвакуация после ДТП</CardTitle>
                <CardDescription>Аккуратная транспортировка поврежденных автомобилей после аварии</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mb-4" />
                <CardTitle>Межгород</CardTitle>
                <CardDescription>Перевозка автомобилей между городами на любые расстояния</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mb-4" />
                <CardTitle>Срочная эвакуация</CardTitle>
                <CardDescription>Приоритетное обслуживание с минимальным временем ожидания</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы предоставляем профессиональные услуги эвакуации автомобилей с 2015 года. 
                За это время мы заслужили доверие тысяч клиентов благодаря надежности, 
                оперативности и профессионализму наших сотрудников.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Современное оборудование</h3>
                    <p className="text-muted-foreground">Парк эвакуаторов последнего поколения с грузоподъемностью до 5 тонн</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Опытные водители</h3>
                    <p className="text-muted-foreground">Все специалисты имеют стаж работы от 5 лет и регулярно проходят обучение</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Прозрачное ценообразование</h3>
                    <p className="text-muted-foreground">Фиксированные цены без скрытых доплат и комиссий</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="Shield" className="text-primary" size={32} />
                    <span>Гарантии</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Страхование ответственности, документальное оформление, 
                    видеофиксация погрузки и разгрузки автомобиля
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="Award" className="text-primary" size={32} />
                    <span>Сертификаты</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все необходимые лицензии и разрешения на осуществление 
                    деятельности по эвакуации транспортных средств
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены на все виды услуг</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">Эвакуация легкового авто (в черте города)</h3>
                    <p className="text-muted-foreground text-sm">До 5 км включительно</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">от 2000 ₽</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">Эвакуация внедорожника</h3>
                    <p className="text-muted-foreground text-sm">До 5 км включительно</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">от 2500 ₽</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">Эвакуация грузового авто</h3>
                    <p className="text-muted-foreground text-sm">До 5 км включительно</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">от 4000 ₽</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">Межгород</h3>
                    <p className="text-muted-foreground text-sm">Стоимость за 1 км пути</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">от 50 ₽/км</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">Техпомощь на месте</h3>
                    <p className="text-muted-foreground text-sm">Мелкий ремонт, подзарядка</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">от 1000 ₽</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 text-primary">
                  <Icon name="Info" size={24} />
                  <p className="font-medium">
                    Точная стоимость рассчитывается индивидуально в зависимости от расстояния, 
                    типа автомобиля и сложности ситуации
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-4">Заказать эвакуатор</h2>
              <p className="text-muted-foreground text-lg">Заполните форму, и мы свяжемся с вами в течение 2 минут</p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Адрес подачи эвакуатора *</label>
                    <Input 
                      placeholder="Укажите точный адрес или ближайший ориентир"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Марка и модель автомобиля *</label>
                    <Input 
                      placeholder="Например: Toyota Camry"
                      value={formData.carModel}
                      onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание проблемы *</label>
                    <Textarea 
                      placeholder="Опишите ситуацию: поломка, ДТП, застрял в грязи и т.д."
                      rows={4}
                      value={formData.problem}
                      onChange={(e) => setFormData({...formData, problem: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-white/90 text-xl">+7 (999) 123-45-67</p>
                    <p className="text-white/70 text-sm">Круглосуточно, без выходных</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-white/90">info@evakuator24.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-white/90">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">График работы</h3>
                    <p className="text-white/90">24 часа в сутки, 7 дней в неделю</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Почему выбирают нас</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-white/90">Быстрое прибытие — в среднем 20-30 минут</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-white/90">Профессиональные водители с большим опытом</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-white/90">Современные эвакуаторы с полной комплектацией</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-white/90">Фиксированные цены без скрытых доплат</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-white/90">Страхование и документальное оформление</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-white/90">Работаем по всему городу и области</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white/70 py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Truck" size={24} className="text-primary" />
              <span className="font-semibold text-white">Эвакуатор 24/7</span>
            </div>
            <p className="text-sm">© 2024 Все права защищены. Эвакуаторная служба.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
