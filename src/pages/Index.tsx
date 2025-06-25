
import { Phone, Mail, CheckCircle, Calculator, FileText, Users, Clock, Star, MessageCircle, Calendar, Shield, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
              Easy Business Accounting
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50">
              <MessageCircle size={18} />
              WhatsApp
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
              Book Free Audit
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-purple-900/5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2" />
            Proudly Serving Reading & Berkshire
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Easy, Local Bookkeeping for<br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Reading's Small Businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Simple, affordable support for sole traders, tradespeople, freelancers, cafés and shop owners — 
            with someone who speaks your language.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-10 py-6 shadow-xl">
              <Calendar className="mr-3" size={24} />
              Book Your Free 30-Minute Audit Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-lg">
              <MessageCircle className="mr-3" size={24} />
              Message on WhatsApp
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Fully Insured & Qualified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl mx-auto lg:mx-0 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-3xl"></div>
                  <div className="text-8xl relative z-10">👋</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
                  <Star className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                Your Local Bookkeeper
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Meet Larissa</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Hi, I'm <strong className="text-blue-700">Larissa</strong>, a friendly, Reading-based bookkeeper offering no-fuss, 
                affordable accounting help to small businesses. I work with people who want to stay compliant, 
                save time, and understand their numbers — without the jargon or the stress.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Started Today
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything Your Business Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ongoing bookkeeping to one-off projects, we've got you covered with professional, reliable service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Calculator, 
                title: "Ongoing Bookkeeping", 
                desc: "Monthly or quarterly bookkeeping services tailored to your business needs",
                highlight: "Most Popular"
              },
              { 
                icon: FileText, 
                title: "Self-Assessments", 
                desc: "Tax returns handled with care and attention to detail" 
              },
              { 
                icon: CheckCircle, 
                title: "VAT Returns", 
                desc: "Making Tax Digital compliance made simple and stress-free" 
              },
              { 
                icon: Users, 
                title: "Payroll & CIS", 
                desc: "Employee and contractor payments managed professionally" 
              },
              { 
                icon: Clock, 
                title: "Catch-up Projects", 
                desc: "One-off cleanup and organization to get you back on track" 
              },
              { 
                icon: Award, 
                title: "Business Advice", 
                desc: "Practical guidance to help your business grow and thrive" 
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                {service.highlight && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                    {service.highlight}
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Easy Business Accounting?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Personal, local service",
                desc: "Face-to-face or remote, always 1:1 support with a real person who cares about your success"
              },
              {
                title: "Clear, honest pricing",
                desc: "Simple packages with transparent pricing and no hidden extras or surprise fees"
              },
              {
                title: "Support you can trust",
                desc: "No agencies, no AI chatbots, just Larissa providing reliable, professional service"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Offer */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Free Bookkeeping Health Check</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
            Not sure what state your books are in? Book a <strong>free 30-minute bookkeeping health check</strong>. 
            I'll review your records, flag any quick wins, and give you practical next steps — with zero pressure.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 py-6 shadow-xl">
            <Calendar className="mr-3" size={24} />
            Book Your Free Audit Now
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "I used to dread tax season. Now it's handled — and I finally understand where my money goes.",
                author: "Sanjay",
                business: "Barber"
              },
              {
                quote: "Larissa made my books make sense. Best decision I've made for my business.",
                author: "Ali",
                business: "Café Owner"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-10">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-xl mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-lg">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-lg">{testimonial.author}</p>
                      <p className="text-blue-600">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Affordable, Transparent Pricing</h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Packages from just <strong className="text-blue-600 text-3xl">£XX/month</strong> or flexible one-off help — 
            no long contracts, just support when you need it.
          </p>
        </div>
      </section>

      {/* Local Trust Statement */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Serving Reading and Nearby</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Online or face-to-face. Quick replies, warm service, and no stress.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold">Easy Business Accounting</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <a href="mailto:info@easybusinessaccounting.com" className="flex items-center gap-3 text-lg hover:text-blue-300 transition-colors">
                <Mail size={20} />
                info@easybusinessaccounting.com
              </a>
              <div className="flex items-center gap-3 text-lg">
                <Phone size={20} />
                Based in Reading, Berkshire
              </div>
            </div>
            <p className="text-blue-200 text-lg">© 2025 Easy Business Accounting</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
