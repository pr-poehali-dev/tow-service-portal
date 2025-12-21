import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServicesSectionProps {
  formData: {
    address: string;
    carModel: string;
    problem: string;
  };
  setFormData: (data: { address: string; carModel: string; problem: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ServicesSection({ formData, setFormData, handleSubmit }: ServicesSectionProps) {
  return (
    <>
      <section id="services" className="py-20 bg-muted" aria-label="Услуги эвакуации">
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

      <section id="about" className="py-20 bg-white" aria-label="О компании">
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

      <section id="pricing" className="py-20 bg-muted" aria-label="Цены на эвакуацию">
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

      <section id="order" className="py-20 bg-white" aria-label="Форма заказа эвакуатора">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow" itemScope itemType="https://schema.org/Review">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <meta itemProp="ratingValue" content="5" />
                </div>
                <CardTitle itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Александр М.</span>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground" itemProp="datePublished" content="2024-12-15">15 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" itemProp="reviewBody">
                  Машина сломалась ночью на МКАД. Приехали за 25 минут, погрузили аккуратно. 
                  Водитель профессионал, помог с документами. Цена как договаривались, без доплат. Рекомендую!
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow" itemScope itemType="https://schema.org/Review">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <meta itemProp="ratingValue" content="5" />
                </div>
                <CardTitle itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Елена К.</span>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground" itemProp="datePublished" content="2024-12-10">10 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" itemProp="reviewBody">
                  После ДТП нужен был срочно эвакуатор. Позвонила, приехали быстро, погрузили очень аккуратно. 
                  Спасибо за помощь в трудную минуту. Сервис на высоте!
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow" itemScope itemType="https://schema.org/Review">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <meta itemProp="ratingValue" content="5" />
                </div>
                <CardTitle itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Дмитрий П.</span>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground" itemProp="datePublished" content="2024-12-05">5 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" itemProp="reviewBody">
                  Отличная служба! Нужно было перевезти авто на дальнее расстояние. Приехали вовремя, 
                  машину довезли в целости. Цены адекватные. Буду обращаться еще.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
