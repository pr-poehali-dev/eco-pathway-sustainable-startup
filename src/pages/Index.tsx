import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Бамбуковая тарелка',
      price: 890,
      material: 'bamboo',
      eco: 95,
      image: '🌿',
      description: 'Набор из 4 тарелок'
    },
    {
      id: 2,
      name: 'Сумка-шоппер',
      price: 1290,
      material: 'recycled',
      eco: 90,
      image: '♻️',
      description: 'Из переработанного пластика'
    },
    {
      id: 3,
      name: 'Многоразовая бутылка',
      price: 1590,
      material: 'steel',
      eco: 98,
      image: '💧',
      description: 'Нержавеющая сталь'
    },
    {
      id: 4,
      name: 'Бамбуковые столовые приборы',
      price: 690,
      material: 'bamboo',
      eco: 92,
      image: '🥢',
      description: 'Вилка, ложка, нож'
    },
    {
      id: 5,
      name: 'Хлопковая сетка для покупок',
      price: 590,
      material: 'cotton',
      eco: 88,
      image: '🛍️',
      description: 'Органический хлопок'
    },
    {
      id: 6,
      name: 'Соломинки из нержавейки',
      price: 490,
      material: 'steel',
      eco: 96,
      image: '🥤',
      description: 'Набор из 6 шт + ёршик'
    },
  ];

  const courses = [
    {
      title: 'Zero Waste для начинающих',
      duration: '4 недели',
      icon: 'Leaf',
      description: 'Основы экологичного образа жизни'
    },
    {
      title: 'Минимализм в быту',
      duration: '3 недели',
      icon: 'Home',
      description: 'Осознанное потребление'
    },
    {
      title: 'Переработка отходов',
      duration: '2 недели',
      icon: 'Recycle',
      description: 'Сортировка и утилизация'
    },
  ];

  const events = [
    {
      date: '15 янв',
      title: 'Уборка парка Сокольники',
      participants: 45,
      icon: 'Trees'
    },
    {
      date: '22 янв',
      title: 'Лекция: Пластик в океане',
      participants: 120,
      icon: 'Waves'
    },
    {
      date: '30 янв',
      title: 'Мастер-класс по компостированию',
      participants: 30,
      icon: 'Sprout'
    },
  ];

  const materialLabels: Record<string, string> = {
    bamboo: 'Бамбук',
    recycled: 'Переработанный',
    steel: 'Сталь',
    cotton: 'Хлопок',
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.material === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🌱</span>
            <span className="text-2xl font-bold text-primary">Эко-Тропинка</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Товары</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">События</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О проекте</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="ShoppingBag" size={20} />
          </Button>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Начни жить экологично
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Многоразовые товары, образовательные курсы и сообщество единомышленников для устойчивого образа жизни
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Смотреть товары
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Наши курсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Каталог товаров</h2>
            <p className="text-muted-foreground text-lg">Многоразовые товары для экологичной жизни</p>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="bamboo">Бамбук</TabsTrigger>
              <TabsTrigger value="recycled">Переработка</TabsTrigger>
              <TabsTrigger value="steel">Сталь</TabsTrigger>
              <TabsTrigger value="cotton">Хлопок</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover-scale overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">
                        <Icon name="Leaf" size={14} className="mr-1" />
                        {product.eco}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {materialLabels[product.material]}
                        </Badge>
                        <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      <section id="courses" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Образовательные курсы</h2>
            <p className="text-muted-foreground text-lg">Научитесь жить экологично с нашими экспертами</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name={course.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <Badge variant="outline" className="mb-4">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {course.duration}
                  </Badge>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ближайшие события</h2>
            <p className="text-muted-foreground text-lg">Присоединяйтесь к нашим эко-активностям</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {events.map((event, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={event.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">{event.date}</Badge>
                      <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Users" size={16} />
                        <span>{event.participants} участников</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Блог</h2>
            <p className="text-muted-foreground text-lg">Полезные статьи об экологии и устойчивом развитии</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">📚</div>
                <Badge variant="secondary" className="mb-3">Образ жизни</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  10 привычек для экологичной жизни
                </h3>
                <p className="text-muted-foreground mb-4">
                  Простые шаги, которые помогут уменьшить ваш экологический след
                </p>
                <Button variant="link" className="text-primary p-0">
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">🌍</div>
                <Badge variant="secondary" className="mb-3">Экология</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Как работает раздельный сбор в России
                </h3>
                <p className="text-muted-foreground mb-4">
                  Подробный гид по сортировке и переработке отходов
                </p>
                <Button variant="link" className="text-primary p-0">
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">О проекте</h2>
            <p className="text-lg text-muted-foreground mb-6">
              «Эко-Тропинка» — это стартап, который делает экологичный образ жизни доступным для каждого. 
              Мы верим, что небольшие изменения в повседневных привычках могут привести к большим результатам 
              для нашей планеты.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold text-primary mb-2">2000+</h3>
                <p className="text-muted-foreground">Экологичных товаров</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-primary mb-2">5000+</h3>
                <p className="text-muted-foreground">Участников сообщества</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
                <p className="text-muted-foreground">Проведённых уборок</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">Свяжитесь с нами любым удобным способом</p>
            </div>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@eco-tropinka.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Экологическая, д. 10</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground mb-4">Следите за нами в соцсетях</p>
                  <div className="flex justify-center gap-4">
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 hover:border-primary">
                      <Icon name="Instagram" size={20} className="text-primary" />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 hover:border-primary">
                      <Icon name="Facebook" size={20} className="text-primary" />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 hover:border-primary">
                      <Icon name="Youtube" size={20} className="text-primary" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold">Эко-Тропинка</span>
          </div>
          <p className="text-background/80">
            © 2024 Эко-Тропинка. Устойчивое развитие для всех.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
