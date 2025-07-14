
import { Phone, Mail, CheckCircle, Calculator, FileText, Users, Clock, Star, MessageCircle, Calendar, Shield, Award, MapPin, ArrowRight, Sparkles, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Enhanced Header with Glass Effect */}
      <header className="bg-white/80 backdrop-blur-2xl border-b border-gradient-to-r from-blue-100/50 to-purple-100/50 sticky top-0 z-50 shadow-lg shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Easy Business Accounting
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-blue-200/60 text-blue-700 hover:bg-blue-50/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
              <a href="https://wa.me/07841511062">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30" asChild>
              <a href="https://calendly.com/larissa-easybusinessaccounting">
                <Calendar className="mr-2" size={18} />
                Book Free Audit
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with Floating Elements */}
      <section className="relative py-36 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/15 via-purple-400/10 to-pink-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-r from-indigo-400/12 via-cyan-400/8 to-emerald-400/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/6 via-indigo-400/4 to-purple-400/6 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-8 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 border-emerald-200/50 px-6 py-3 text-sm font-semibold shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <MapPin className="w-4 h-4 mr-2" />
              Proudly Serving Reading & Berkshire
              <Sparkles className="w-4 h-4 ml-2 text-emerald-600" />
            </Badge>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-10 leading-tight tracking-tight">
              Easy, Local Bookkeeping for<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
                Reading's Small Businesses
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              Simple, affordable support for sole traders, tradespeople, freelancers, cafés and shop owners — 
              <span className="font-semibold text-blue-700">with someone who speaks your language.</span>
            </p>
          </div>
          
          <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center mb-20" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-xl px-12 py-8 shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/30" asChild>
              <a href="https://calendly.com/larissa-easybusinessaccounting">
                <Calendar className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={28} />
                Book Your Free 30-Minute Audit Call
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group text-xl px-12 py-8 border-2 border-blue-200/60 text-blue-700 hover:bg-blue-50/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl" asChild>
              <a href="https://wa.me/07841511062">
                <MessageCircle className="mr-3 group-hover:bounce transition-transform duration-300" size={28} />
                Message on WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="animate-fade-in flex flex-wrap justify-center gap-12 text-lg text-gray-600" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Shield, text: "Fully Insured & Qualified", color: "text-emerald-600" },
              { icon: Award, text: "5+ Years Experience", color: "text-blue-600" },
              { icon: CheckCircle, text: "100% Confidential", color: "text-emerald-600" },
              { icon: Heart, text: "Local & Personal", color: "text-pink-600" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group hover:scale-110 transition-transform duration-300">
                <item.icon className={`w-6 h-6 ${item.color} group-hover:rotate-12 transition-transform duration-300`} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 animate-fade-in">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-[3rem] mx-auto lg:mx-0 flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-[3rem]"></div>
                  <div className="text-9xl relative z-10 animate-pulse">👋</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-[3rem]"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <Star className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Badge className="mb-8 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 border-emerald-200/50 shadow-lg">
                <Heart className="w-4 h-4 mr-2" />
                Your Local Bookkeeper
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">Meet Larissa</h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-10 font-light">
                Hi, I'm <strong className="text-blue-700 font-bold">Larissa</strong>, a friendly, Reading-based bookkeeper offering no-fuss, 
                affordable accounting help to small businesses. I work with people who want to stay compliant, 
                save time, and understand their numbers — <span className="italic text-indigo-600">without the jargon or the stress.</span>
              </p>
              <div className="flex gap-6">
                <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6 border-2 border-blue-200/60 text-blue-700 hover:bg-blue-50/80 shadow-lg transition-all duration-300 hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200/50 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">Everything Your Business Needs</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              From ongoing bookkeeping to one-off projects, we've got you covered with professional, reliable service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: Calculator, 
                title: "Ongoing Bookkeeping", 
                desc: "Monthly or quarterly bookkeeping services tailored to your business needs",
                highlight: "Most Popular",
                gradient: "from-blue-500 to-indigo-500"
              },
              { 
                icon: FileText, 
                title: "Self-Assessments", 
                desc: "Tax returns handled with care and attention to detail",
                gradient: "from-emerald-500 to-cyan-500"
              },
              { 
                icon: CheckCircle, 
                title: "VAT Returns", 
                desc: "Making Tax Digital compliance made simple and stress-free",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                icon: Users, 
                title: "Payroll & CIS", 
                desc: "Employee and contractor payments managed professionally",
                gradient: "from-orange-500 to-red-500"
              },
              { 
                icon: Clock, 
                title: "Catch-up Projects", 
                desc: "One-off cleanup and organization to get you back on track",
                gradient: "from-teal-500 to-blue-500"
              },
              { 
                icon: Award, 
                title: "Business Advice", 
                desc: "Practical guidance to help your business grow and thrive",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:-translate-y-4 relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {service.highlight && (
                  <Badge className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg z-10">
                    {service.highlight}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-8 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 border-emerald-200/50 shadow-lg">
              <CheckCircle className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Why Choose Easy Business Accounting?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Personal, local service",
                desc: "Face-to-face or remote, always 1:1 support with a real person who cares about your success",
                icon: Heart,
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "Clear, honest pricing",
                desc: "Simple packages with transparent pricing and no hidden extras or surprise fees",
                icon: Shield,
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Support you can trust",
                desc: "No agencies, no AI chatbots, just Larissa providing reliable, professional service",
                icon: Star,
                gradient: "from-blue-500 to-indigo-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <benefit.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xl font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-12 backdrop-blur-sm shadow-2xl">
              <Calendar className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">Free Bookkeeping Health Check</h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-95 leading-relaxed font-light max-w-4xl mx-auto">
              Not sure what state your books are in? Book a <strong className="font-bold">free 30-minute bookkeeping health check</strong>. 
              I'll review your records, flag any quick wins, and give you practical next steps — with zero pressure.
            </p>
            <Button size="lg" className="group bg-white text-blue-600 hover:bg-gray-100 text-2xl px-16 py-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl" asChild>
              <a href="https://calendly.com/larissa-easybusinessaccounting">
                <Calendar className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={28} />
                Book Your Free Audit Now
                <ArrowRight className="ml-4 group-hover:translate-x-1 transition-transform duration-300" size={28} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200/50 shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                quote: "I used to dread tax season. Now it's handled — and I finally understand where my money goes.",
                author: "Sanjay",
                business: "Barber",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                quote: "Larissa made my books make sense. Best decision I've made for my business.",
                author: "Ali",
                business: "Café Owner",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-12">
                  <div className="flex mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-2xl mb-10 italic leading-relaxed font-light">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mr-6 shadow-lg`}>
                      <span className="text-white font-bold text-xl">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-xl">{testimonial.author}</p>
                      <p className="text-blue-600 text-lg">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative animate-fade-in">
          <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200/50 shadow-lg">
            <TrendingUp className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">Affordable, Transparent Pricing</h2>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
            Packages starting from just <strong className="text-blue-600 text-4xl font-bold">£60/Month</strong> or flexible one-off help — 
            no long contracts, just support when you need it.
          </p>
        </div>
      </section>

      {/* Enhanced Local Trust Statement */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Serving Reading and Nearby</h3>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">
            Online or face-to-face. Quick replies, warm service, and no stress.
          </p>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-xl">
                <Calculator className="w-9 h-9 text-white" />
              </div>
              <div className="text-4xl font-bold">Easy Business Accounting</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-12 text-lg">
              <a href="mailto:info@easybusinessaccounting.com" className="flex items-center gap-3 hover:text-blue-300 transition-colors duration-300 hover:scale-105">
                <Mail size={24} />
                info@easybusinessaccounting.com
              </a>
              <div className="flex items-center gap-3">
                <Phone size={24} />
                Based in Reading, Berkshire
              </div>
            </div>
            <p className="text-blue-200 text-xl">© 2025 Easy Business Accounting</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
