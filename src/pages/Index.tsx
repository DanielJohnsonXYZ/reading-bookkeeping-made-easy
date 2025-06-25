
import { Phone, Mail, CheckCircle, Calculator, FileText, Users, Clock, Star, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            Easy Business Accounting
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Free Audit
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Easy, Local Bookkeeping for<br />
            <span className="text-blue-600">Reading's Small Businesses</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Simple, affordable support for sole traders, tradespeople, freelancers, cafés and shop owners — 
            with someone who speaks your language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Calendar className="mr-2" size={20} />
              Book Your Free 30-Minute Audit Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-50">
              <MessageCircle className="mr-2" size={20} />
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto lg:mx-0 flex items-center justify-center">
                <div className="text-6xl">👋</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Meet Larissa</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm <strong>Larissa</strong>, a friendly, Reading-based bookkeeper offering no-fuss, 
                affordable accounting help to small businesses. I work with people who want to stay compliant, 
                save time, and understand their numbers — without the jargon or the stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Services Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calculator, title: "Ongoing Bookkeeping", desc: "Monthly or quarterly bookkeeping services" },
              { icon: FileText, title: "Self-Assessments", desc: "Tax returns handled with care" },
              { icon: CheckCircle, title: "VAT Returns", desc: "Making Tax Digital compliance" },
              { icon: Users, title: "Payroll & CIS", desc: "Employee and contractor payments" },
              { icon: Clock, title: "Catch-up Projects", desc: "One-off cleanup and organization" }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Easy Business Accounting?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal, local service",
                desc: "Face-to-face or remote, always 1:1"
              },
              {
                title: "Clear, honest pricing",
                desc: "Simple packages and no hidden extras"
              },
              {
                title: "Support you can trust",
                desc: "No agencies, no AI, just Larissa"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Offer */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Free Bookkeeping Health Check</h2>
          <p className="text-xl mb-8 opacity-90">
            Not sure what state your books are in? Book a <strong>free 30-minute bookkeeping health check</strong>. 
            I'll review your records, flag any quick wins, and give you practical next steps — with zero pressure.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Book Your Free Audit Now
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I used to dread tax season. Now it's handled — and I finally understand where my money goes.",
                author: "Sanjay, Barber"
              },
              {
                quote: "Larissa made my books make sense. Best decision I've made for my business.",
                author: "Ali, Café Owner"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-blue-900 font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Affordable, Transparent Pricing</h2>
          <p className="text-xl text-gray-700">
            Packages from just <strong className="text-blue-600">£XX/month</strong> or flexible one-off help — 
            no long contracts, just support when you need it.
          </p>
        </div>
      </section>

      {/* Local Trust Statement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serving Reading and Nearby</h3>
          <p className="text-lg text-gray-700">
            Online or face-to-face. Quick replies, warm service, and no stress.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-6">Easy Business Accounting</div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <a href="mailto:info@easybusinessaccounting.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <Mail size={18} />
                info@easybusinessaccounting.com
              </a>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                Based in Reading, Berkshire
              </div>
            </div>
            <p className="text-blue-200">© 2025 Easy Business Accounting</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
