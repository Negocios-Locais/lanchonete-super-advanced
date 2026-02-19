"use client";

import Image from "next/image";
import {
  Beer,
  Coffee,
  Music,
  Utensils,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Star,
  CheckCircle,
  Car,
  Baby,
  Wifi,
  CreditCard,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.514-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const whatsappLink = "https://wa.me/551150830466?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Lanchonete%20Super%20Advanced!%20Gostaria%20de%20fazer%20um%20pedido.";
  const instagramLink = "https://www.instagram.com/superadvanced01/";

  return (
    <main className="min-h-screen font-sans text-stone-900 bg-[#F5F5F4]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#1C1917]/95 backdrop-blur-sm text-[#F5F5F4] shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-md hover:scale-105 transition-transform">
              <Image
                src="/imagens/logo.jpg"
                alt="Logo Lanchonete Super Advanced"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            <a href="#inicio" className="hover:text-[#F59E0B] transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[#F59E0B] transition-colors">Sobre</a>
            <a href="#cardapio" className="hover:text-[#F59E0B] transition-colors">Cardápio</a>
            <a href="#contato" className="hover:text-[#F59E0B] transition-colors">Contato</a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 shadow-md"
            >
              Peça Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F5F5F4] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1C1917] border-t border-stone-800 absolute w-full left-0 top-full shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 gap-4 font-medium text-center">
              <a href="#inicio" className="py-2 hover:text-[#F59E0B]" onClick={toggleMenu}>Início</a>
              <a href="#sobre" className="py-2 hover:text-[#F59E0B]" onClick={toggleMenu}>Sobre</a>
              <a href="#cardapio" className="py-2 hover:text-[#F59E0B]" onClick={toggleMenu}>Cardápio</a>
              <a href="#contato" className="py-2 hover:text-[#F59E0B]" onClick={toggleMenu}>Contato</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B91C1C] text-white py-3 rounded-lg font-bold"
                onClick={toggleMenu}
              >
                Peça Pelo WhatsApp
              </a>
            </div>
            <div className="flex justify-center gap-6 pb-6 pt-2 border-t border-stone-800 mt-2">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B]"><Instagram className="w-6 h-6" /></a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B]"><WhatsAppIcon className="w-6 h-6" /></a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/imagens/faixada.png"
            alt="Fachada do Restaurante"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-black/60 opacity-90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5F5F4] mb-6 drop-shadow-lg leading-tight">
            Sabor Urbano <span className="text-[#F59E0B]">Clássico</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Comida de verdade, preço justo e o ambiente familiar que você merece na Vila Clementino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <a
              href="#cardapio"
              className="bg-[#F59E0B] text-[#1C1917] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D97706] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Ver Cardápio
            </a>
            <a
              href="#contato"
              className="bg-transparent border-2 border-[#F5F5F4] text-[#F5F5F4] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5F5F4] hover:text-[#1C1917] transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Onde Estamos
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-4 text-[#B91C1C] group-hover:scale-110 transition-transform shadow-sm">
                <Coffee className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1">Café & Manhã</h3>
              <p className="text-xs md:text-sm text-stone-500">Comece o dia bem</p>
            </div>
            <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-4 text-[#F59E0B] group-hover:scale-110 transition-transform shadow-sm">
                <Beer className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1">Happy Hour</h3>
              <p className="text-xs md:text-sm text-stone-500">Cervejas e drinks</p>
            </div>
            <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-4 text-[#B91C1C] group-hover:scale-110 transition-transform shadow-sm">
                <Utensils className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1">Buffet Variado</h3>
              <p className="text-xs md:text-sm text-stone-500">Almoço e Jantar</p>
            </div>
            <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-4 text-[#F59E0B] group-hover:scale-110 transition-transform shadow-sm">
                <Music className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1">Música Ao Vivo</h3>
              <p className="text-xs md:text-sm text-stone-500">Ambiente relaxado</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-20 bg-[#F5F5F4] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/imagens/buffet2.png"
                alt="Nosso Buffet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="text-[#B91C1C] font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Nossa História</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-[#1C1917] leading-tight">
                Mais que uma lanchonete, um ponto de encontro.
              </h2>
              <p className="text-base md:text-lg text-stone-600 mb-6 leading-relaxed">
                No coração de São Paulo, o <strong className="text-[#B91C1C]">Super Advanced</strong> é o refúgio para quem busca sabor autêntico e atendimento de verdade.
                Seja para um pão na chapa quentinho pela manhã, um buffet completo no almoço ou aquele happy hour merecido com os amigos.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-center sm:text-left max-w-md mx-auto md:max-w-none">
                <li className="flex items-center justify-center sm:justify-start gap-2 text-stone-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" /> Ambiente Familiar
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 text-stone-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" /> Preço Justo
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 text-stone-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" /> Música ao Vivo
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 text-stone-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" /> Acessibilidade Total
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="cardapio" className="py-16 md:py-20 bg-[#1C1917] text-[#F5F5F4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Destaques do Cardápio</h2>
            <p className="text-stone-400 max-w-2xl mx-auto px-4">Do café da manhã ao jantar, opções irresistíveis preparadas com ingredientes frescos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Item 1 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/hamburguer-maionese-verde-e-batata.png"
                  alt="Hambúrguer com Fritas"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full">NOVIDADE</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Hambúrguer Artesanal</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Suculento hambúrguer com maionese verde da casa e batatas fritas crocantes.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/feijoada.png"
                  alt="Feijoada Completa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#1C1917] text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Feijoada Tradicional</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Nossa feijoada completa servida com arroz, couve, farofa e laranja. Sabor inigualável.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/beirute.png"
                  alt="Beirute Especial"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Beirute Especial</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Pão sírio recheado, salada fresca, queijo derretido e molho especial.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/gin-tropical.png"
                  alt="Gin Tropical"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Drinks Refrescantes</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Gin Tropical e uma vasta seleção de coquetéis para seu happy hour.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/cafe-e-pao-de-queijo.png"
                  alt="Café e Pão de Queijo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Café da Manhã</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Pão de queijo quentinho com café coado na hora. O clássico paulistano.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/batata-frita-bacon.png"
                  alt="Porção de Fritas"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Porções Generosas</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Batata frita com cheddar e bacon, ideal para dividir com os amigos.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 7 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/balde-cerveja-petra.png"
                  alt="Balde de Cerveja"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Balde de Cerveja</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Cerveja Petra trincando no balde. A pedida ideal para acompanhar nossas porções no happy hour.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 8 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/buffet1.png"
                  alt="Buffet Variado"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Buffet Variado</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Grande variedade de saladas, pratos quentes e opções saudáveis todos os dias.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

            {/* Item 9 */}
            <div className="bg-[#292524] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/imagens/prato-de-comida-linguica.png"
                  alt="Prato do Dia"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl font-bold">Prato do Dia</h3>
                </div>
                <p className="text-stone-400 mb-4 text-sm">Almoço caseiro e bem servido. Opção com linguiça toscana e guarnições.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 border border-[#F59E0B] text-[#F59E0B] rounded-lg font-bold hover:bg-[#F59E0B] hover:text-[#1C1917] transition-colors"
                >
                  Peça Agora
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-[#B91C1C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
              <div className="flex gap-1 mb-4 text-[#F59E0B]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic mb-6 opacity-90 text-sm md:text-base">"Gosto muito da comida e do atendimento. Os funcionários são sempre muito prestativos e atenciosos!"</p>
              <div className="font-bold">- Samara Laia</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
              <div className="flex gap-1 mb-4 text-[#F59E0B]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic mb-6 opacity-90 text-sm md:text-base">"É a segunda vez que eu freguento. Achei o ambiente tudo limpo, sem falar no pão na chapa e a tapioca... maravilhoso"</p>
              <div className="font-bold">- Josiani Alencar</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
              <div className="flex gap-1 mb-4 text-[#F59E0B]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-4 h-5 fill-current opacity-50" />
              </div>
              <p className="italic mb-6 opacity-90 text-sm md:text-base">"Muito bom, ótimo preço, comida boa, muitas opções."</p>
              <div className="font-bold">- Viviani Shimada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Location */}
      <section id="contato" className="py-16 md:py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-[#1C1917] text-center md:text-left">Visite-nos</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm md:bg-transparent md:p-0 md:shadow-none">
                  <div className="bg-[#F59E0B] p-3 rounded-full text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Localização</h3>
                    <p className="text-stone-600 text-sm md:text-base">
                      Rua Pedro de Toledo, 1398<br />
                      Vila Clementino, São Paulo - SP<br />
                      CEP: 04039-003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm md:bg-transparent md:p-0 md:shadow-none">
                  <div className="bg-[#F59E0B] p-3 rounded-full text-white flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horário de Funcionamento</h3>
                    <p className="text-stone-600 text-sm md:text-base">
                      Segunda a Sábado: 06:00 - 22:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm md:bg-transparent md:p-0 md:shadow-none">
                  <div className="bg-[#F59E0B] p-3 rounded-full text-white flex-shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Formas de Pagamento</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-stone-600">
                      <span className="bg-white border px-2 py-1 rounded">Cartão de Crédito/Débito</span>
                      <span className="bg-white border px-2 py-1 rounded">Alelo</span>
                      <span className="bg-white border px-2 py-1 rounded">Ticket Restaurante</span>
                      <span className="bg-white border px-2 py-1 rounded">Pluxee</span>
                      <span className="bg-white border px-2 py-1 rounded">NFC</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-lg mt-8 mb-4 px-4 md:px-0">Comodidades</h3>
                <div className="grid grid-cols-2 gap-3 text-stone-700 px-4 md:px-0">
                  <span className="flex items-center gap-2"><Wifi className="w-4 h-4" /> Wi-Fi Gratuito</span>
                  <span className="flex items-center gap-2"><Baby className="w-4 h-4" /> Bom para Crianças</span>
                  <span className="flex items-center gap-2"><Car className="w-4 h-4" /> Estacionamento (Rua)</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Acessibilidade</span>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.666196155523!2d-46.6439!3d-23.5956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2ad6b0b55b%3A0x6b8f1b1b1b1b1b1b!2sRua%20Pedro%20de%20Toledo%2C%201398%20-%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004039-003!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C0A09] text-stone-500 py-12 border-t border-stone-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative rounded-full overflow-hidden border border-stone-700">
                <Image src="/imagens/logo.jpg" alt="Logo Footer" fill className="object-cover" />
              </div>
              <span className="font-serif font-bold text-stone-300">Lanchonete Super Advanced</span>
            </div>

            <div className="flex gap-6">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors"><Instagram className="w-6 h-6" /></a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
            </div>

            <div className="text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Lanchonete Super Advanced. <br className="sm:hidden" /> Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:hidden z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </main>
  );
}
