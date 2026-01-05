import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tokenomics', 'dashboard', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '$2.4M', label: 'Total Trading Fees', icon: 'TrendingUp' },
    { value: '$1.68M', label: 'Distributed to Holders', icon: 'Users' },
    { value: '$720K', label: 'Buyback & Partnerships', icon: 'Rocket' },
    { value: '15.2K', label: 'Token Holders', icon: 'Award' },
  ];

  const chartData = [
    { month: 'Jan', fees: 180000, distributed: 126000, buyback: 54000 },
    { month: 'Feb', fees: 220000, distributed: 154000, buyback: 66000 },
    { month: 'Mar', fees: 280000, distributed: 196000, buyback: 84000 },
    { month: 'Apr', fees: 340000, distributed: 238000, buyback: 102000 },
    { month: 'May', fees: 420000, distributed: 294000, buyback: 126000 },
    { month: 'Jun', fees: 500000, distributed: 350000, buyback: 150000 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg rotate-45" />
                <div className="absolute inset-0.5 bg-background rounded-lg rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-gradient z-10">Z</span>
                </div>
              </div>
              <span className="text-2xl font-heading font-semibold tracking-wide">ZENT</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Tokenomics', 'Dashboard', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('dashboard')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Launch Dashboard
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
              Powered by Solana
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight">
              <span className="text-gradient glow">ZENT</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-heading font-semibold text-muted-foreground max-w-2xl mx-auto">
              Transparency That Pays
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionary revenue-sharing model: 70% to holders, 30% to growth. 
              Real-time transparency. Zero compromises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8"
              >
                Learn More
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              
              <Button
                onClick={() => scrollToSection('dashboard')}
                size="lg"
                variant="outline"
                className="border-primary/20 text-foreground hover:bg-primary/10 font-semibold text-lg px-8"
              >
                <Icon name="BarChart3" className="mr-2" size={20} />
                View Dashboard
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-counter-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <Icon name={stat.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              About <span className="text-gradient">ZENT</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zenith Entry Network redefines crypto transparency through automated, 
              on-chain revenue distribution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Full Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every transaction, every distribution, every decision — visible on-chain. 
                No hidden fees, no surprises.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Icon name="Zap" className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Solana Speed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on Solana for lightning-fast transactions and minimal fees. 
                Enterprise-grade performance.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="TrendingUp" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Sustainable Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                30% allocated to strategic buybacks and partnerships. 
                Long-term value for all holders.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              <span className="text-gradient">Tokenomics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fair, transparent, and aligned with holder interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-10 bg-card border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-6xl font-heading font-bold text-gradient mb-2">70%</div>
                    <h3 className="text-2xl font-heading font-bold">To Holders</h3>
                  </div>
                  <Icon name="Users" className="text-primary" size={48} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Majority of trading fees distributed directly to token holders. 
                  Automatic, proportional, transparent.
                </p>
              </div>
            </Card>

            <Card className="p-10 bg-card border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-6xl font-heading font-bold text-gradient mb-2">30%</div>
                    <h3 className="text-2xl font-heading font-bold">To Growth</h3>
                  </div>
                  <Icon name="Rocket" className="text-secondary" size={48} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic buybacks, partnerships, and ecosystem development. 
                  Building long-term value.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-card border-border">
            <h3 className="text-3xl font-heading font-bold mb-8 text-center">Distribution Breakdown</h3>
            <div className="space-y-6">
              {[
                { label: 'Holder Rewards', percent: 70, color: 'bg-primary' },
                { label: 'Buyback Program', percent: 20, color: 'bg-secondary' },
                { label: 'Partnerships', percent: 10, color: 'bg-primary/50' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.label}</span>
                    <span className="font-bold text-primary">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="dashboard" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              <span className="text-gradient">Dashboard</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time metrics and transparent distribution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={stat.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border mb-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Revenue Distribution Over Time</h3>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{data.month}</span>
                    <span className="text-muted-foreground">${(data.fees / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="h-12 bg-muted rounded-lg overflow-hidden flex">
                    <div
                      className="bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground"
                      style={{ width: `${(data.distributed / data.fees) * 100}%` }}
                    >
                      70%
                    </div>
                    <div
                      className="bg-secondary flex items-center justify-center text-xs font-semibold text-secondary-foreground"
                      style={{ width: `${(data.buyback / data.fees) * 100}%` }}
                    >
                      30%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="PieChart" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold">Distribution Model</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="font-semibold">Holder Rewards</span>
                  <span className="text-2xl font-heading font-bold text-primary">70%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="font-semibold">Buyback & Growth</span>
                  <span className="text-2xl font-heading font-bold text-secondary">30%</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Activity" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold">Network Activity</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="font-semibold">24h Volume</span>
                  <span className="text-2xl font-heading font-bold text-primary">$1.2M</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="font-semibold">Active Traders</span>
                  <span className="text-2xl font-heading font-bold text-secondary">3,847</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Join the <span className="text-gradient">Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be part of the most transparent revenue-sharing protocol in crypto
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'MessageCircle', label: 'Telegram', value: '@ZENTofficial' },
              { icon: 'Twitter', label: 'Twitter', value: '@ZENT_Network' },
              { icon: 'Mail', label: 'Email', value: 'hello@zent.network' },
            ].map((contact, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover-scale"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon as any} className="text-primary" size={28} />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{contact.label}</div>
                <div className="font-semibold">{contact.value}</div>
              </Card>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('dashboard')}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 font-semibold text-lg px-12 animate-pulse-glow"
          >
            Get Started Now
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg rotate-45" />
                <div className="absolute inset-0.5 bg-background rounded-lg rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-heading font-bold text-gradient z-10">Z</span>
                </div>
              </div>
              <span className="text-xl font-heading font-semibold tracking-wide">ZENT</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 ZENT Network. Transparency That Pays.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;