import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <>
      <section id="contacts" className="py-20 bg-secondary text-white" aria-label="Контакты">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-white/90 text-xl">+7 (993) 917-76-24</p>
                    <p className="text-white/70 text-sm">Круглосуточно, без выходных</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-white/90">79939177624@mail.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-white/90">Союз эвакуаторов России</p>
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

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/79939177624" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <Icon name="MessageCircle" size={28} />
        </a>
        <a 
          href="tel:+79939177624" 
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Позвонить"
        >
          <Icon name="Phone" size={28} />
        </a>
      </div>
    </>
  );
}