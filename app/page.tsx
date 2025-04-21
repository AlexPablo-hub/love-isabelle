"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [lanternas, setLanternas] = useState<React.ReactElement[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${i * 2}s`;
      const animationDuration = `${10 + Math.random() * 10}s`;
      const width = `${30 + Math.random() * 30}px`;
      const height = `${50 + Math.random() * 30}px`;
      const opacity = Math.random() * 0.7 + 0.3;
  
      return (
        <div
          key={i}
          className="lanterna"
          style={{
            left,
            animationDelay,
            animationDuration,
            width,
            height,
            opacity,
          }}
        />
      );
    });
  
    setLanternas(generated);
  }, []);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date().toLocaleDateString("pt-BR", options);
  };

  return (
    <main className="min-h-screen pb-12 relative text-white">
      {lanternas}

      <div className="space-y-14">
        {/* Background with gradient */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-pink-900 opacity-95" />
        </div>

        {/* Header */}
        <div className="text-center pt-8">
          <h1 className="font-dancing-script text-5xl font-bold text-pink-300">
            Alex e Isabelle
          </h1>
          <p className="font-nunito text-lg mt-2 text-pink-100">
            Um mês de amor e descobertas...
          </p>
          <p className="font-nunito text-sm text-pink-200 italic mt-1">
            {getCurrentDate()}
          </p>
        </div>

{/* Player musical */}
<div className="flex items-center justify-center gap-5 -mt-11 rounded-2xl p-1"
     style={{
       background: "linear-gradient(to top, rgba(219, 39, 119, 0.9), rgba(219, 39, 119, 0))",
     }}>
  {/* Ícone de pular1 */}
  <img src="/love-isabelle/img/pular1.png" alt="voltar" className="w-6 h-6 opacity-50" />

  {/* Ondas animadas (ativa quando tocando) */}
  <div className="barra-container">
    {[...Array(7)].map((_, i) => (
      <div key={i} className={`barra ${!isPlaying ? "opacity-20" : ""}`} />
    ))}
  </div>

  {/* Botão play/pause */}
  <button
    onClick={() => {
      const audio = document.getElementById("player-audio") as HTMLAudioElement;
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }}
    className="w-14 h-14 rounded-full bg-pink-200 hover:bg-pink-300 flex items-center justify-center shadow-lg transition"
  >
    <img
      src={isPlaying ? "/love-isabelle/img/pause.png" : "/love-isabelle/img/play-buttton.png"}
      alt={isPlaying ? "Pausar música" : "Tocar música"}
      className="w-6 h-6"
    />
  </button>

  {/* Ondas do outro lado */}
  <div className="barra-container">
    {[...Array(7)].map((_, i) => (
      <div key={i} className={`barra ${!isPlaying ? "opacity-20" : ""}`} />
    ))}
  </div>

  {/* Ícone de pular2 */}
  <img src="/love-isabelle/img/pular2.png" alt="avançar" className="w-6 h-6 opacity-50" />

  <audio id="player-audio" src="/love-isabelle/audio/SeeTheLight.mp3" preload="auto" />
</div>



        {/* Main photo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs text-center">
            <Image
              src="/love-isabelle/img/foto4.jpg"
              alt="Isa linda"
              width={500}
              height={0}
              className="rounded-2xl shadow-lg mx-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900 to-transparent p-4 rounded-b-2xl">
              <div className="bg-pink-200 text-pink-900 font-bold pr-1 pl-1 py-2 rounded-full text-sm inline-block mb-2 tracking-wide mx-auto">
                era uma vez... a melhor escolha que já fiz
              </div>
              <p className="text-sm text-white leading-relaxed text-center">
                Quando nossos caminhos se cruzaram, algo especial aconteceu. Era
                como se o universo tivesse planejado esse encontro desde o
                início dos tempos.
              </p>
            </div>
          </div>
        </div>

        {/* esqueda */}
        <div className="px-4 mt-5 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Foto pequena à esquerda */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto6.jpg"
                alt="Alex e Isa"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>

            {/* Texto ao lado */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold rounded-full inline-block text-base mb-3">
                momentos que se transformam em memórias eternas
              </div>
              <p className="leading-relaxed">
                Cada momento ao seu lado parece mágico. É como se o tempo
                parasse e só existíssemos nós dois no mundo. Seus abraços são
                meu lugar seguro, onde encontro paz e aconchego.
              </p>
            </div>
          </div>
        </div>

        {/* direita */}
        <div className="px-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Texto à esquerda */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold rounded-full inline-block text-base mb-3">
                um mês de descobertas e alegrias
              </div>
              <p className="leading-relaxed">
                Este primeiro mês juntos foi como descobrir um tesouro
                escondido. A cada dia, aprendo algo novo sobre você que me faz
                te admirar ainda mais. Sua risada contagiante, seu jeito único
                de ver o mundo, a maneira como você se importa com as pessoas ao
                seu redor. Você trouxe cor para minha vida quando eu nem
                percebia que vivia em preto e branco.
              </p>
            </div>

            {/* Foto à direita */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto12.jpg"
                alt="Isa e Alex sorrindo"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* esqueda */}
        <div className="px-4 mt-5 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Foto pequena à esquerda */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto13.jpg"
                alt="Alex e Isa"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>

            {/* Texto ao lado */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                a melodia mais bonita que já ouvi
              </div>
              <p className="leading-relaxed">
                Sua voz é como música para meus ouvidos. Quando você fala sobre
                seus sonhos, seus olhos brilham de um jeito que me fascina.
                Guardarei para sempre em meu coração cada conversa até tarde da
                noite, cada segredo compartilhado, cada risada que demos juntos.
              </p>
            </div>
          </div>
        </div>

        {/* direita */}
        <div className="px-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Texto à esquerda */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                paz e alegria ao seu lado
              </div>
              <p className="leading-relaxed">
                É incrível como, ao seu lado, tudo parece mais leve e mais
                bonito. Encontrei em você uma paz que nunca imaginei ser
                possível. Meu lugar favorito no mundo não é um local, é estar
                onde você está.
              </p>
            </div>

            {/* Foto à direita */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto14.jpg"
                alt="Isa e Alex sorrindo"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* esqueda */}
        <div className="px-4 mt-5 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Foto pequena à esquerda */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto1.jpg"
                alt="Alex e Isa"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>

            {/* Texto ao lado */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                cada dia uma nova aventura
              </div>
              <p className="leading-relaxed">
                A vida ao seu lado é uma aventura constante. Mesmo nas coisas
                mais simples do cotidiano, você encontra uma maneira de tornar
                tudo especial. Estou animado para construir mais memórias ao seu
                lado, memórias que durarão para sempre em nossos corações.
              </p>
            </div>
          </div>
        </div>

        {/* direita */}
        <div className="px-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Texto à esquerda */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                inspiração diária
              </div>
              <p className="leading-relaxed">
                Você me inspira a ser uma pessoa melhor a cada dia. Sua força,
                sua determinação me ensinam tanto. Quando estou com você, meu
                coração bate mais forte, como se quisesse sair do peito.
              </p>
            </div>

            {/* Foto à direita */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto10.jpg"
                alt="Isa e Alex sorrindo"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* esqueda */}
        <div className="px-4 mt-5 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Foto pequena à esquerda */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto11.jpg"
                alt="Alex e Isa"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>

            {/* Texto ao lado */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                o verdadeiro significado do amor
              </div>
              <p className="leading-relaxed">
                Com você, aprendi o verdadeiro significado do amor. Não é apenas
                sobre os momentos bonitos e fáceis, mas sobre estar presente em
                todos os momentos. É sobre crescer junto, superar desafios e
                celebrar conquistas. É sobre ser parceiro, ser confidente. Nós
                contra o mundo, sempre.
              </p>
            </div>
          </div>
        </div>

        {/* direita */}
        <div className="px-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Texto à esquerda */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                luz nos dias mais escuros
              </div>
              <p className="leading-relaxed">
                Seu sorriso tem o poder de iluminar até os dias mais escuros. É
                como um raio de sol que atravessa as nuvens mais densas. O tempo
                parece parar quando estamos juntos, como se o universo quisesse
                nos dar a oportunidade de aproveitar cada segundo ao máximo. E
                mesmo assim, nunca parece suficiente.
              </p>
            </div>

            {/* Foto à direita */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto5.jpg"
                alt="Isa e Alex sorrindo"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* esqueda */}
        <div className="px-4 mt-5 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Foto pequena à esquerda */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto9.jpg"
                alt="Alex e Isa"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>

            {/* Texto ao lado */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                gratidão por compartilhar sua vida comigo
              </div>
              <p className="leading-relaxed">
                Obrigado por compartilhar sua vida comigo, por me permitir fazer
                parte dos seus dias nas nossas conversas, fazer parte dos seus
                sonhos, dos seus planos. Você é o desejo que eu faço todas as
                noites quando eu durmo. e um dia espero estar ao seu lado.
              </p>
            </div>
          </div>
        </div>

        {/* direita */}
        <div className="px-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-row items-center justify-center gap-4 p-4 flex-wrap text-center">
            {/* Texto à esquerda */}
            <div className="text-white text-sm flex-1 min-w-[200px]">
              <div className="bg-pink-200 text-pink-900 font-bold pl-2 pr-2 rounded-full inline-block text-base mb-3">
                apenas o começo da nossa história
              </div>
              <p className="leading-relaxed">
                Este é apenas o começo da nossa história. Ainda temos tantas
                páginas para escrever juntos, tantos lugares para conhecer,
                tantas experiências para compartilhar. Nosso amor é como uma
                planta que cresce a cada dia, se fortalece com cada dia.
              </p>
            </div>

            {/* Foto à direita */}
            <div className="flex-shrink-0">
              <Image
                src="/love-isabelle/img/foto2.png"
                alt="Isa e Alex sorrindo"
                width={100}
                height={100}
                className="rounded-xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Meu sol */}
        {/* Meu sol */}
        <div className="text-center px-4 mb-8">
          <h1 className="font-dancing-script text-5xl font-bold text-pink-300 mb-2">
            Meu sol ☀️
          </h1>
          <p className="font-nunito text-sm text-pink-100 mb-4 max-w-xl mx-auto">
            Você é meu sol, iluminando meus dias com seu brilho único. E eu sou
            apenas um girassol, sempre me virando em sua direção, buscando sua
            luz, seu calor. Em um mundo cheio de incertezas, você é minha
            constante, meu ponto de equilíbrio. Para sempre seu, em cada
            amanhecer, em cada entardecer...
          </p>
          <Image
            src="/love-isabelle/img/foto7.jpg"
            alt="Meu sol"
            width={500}
            height={300}
            className="w-full object-cover h-64 rounded-xl"
          />
        </div>

        {/* Final message */}
        <div className="text-center px-4 mt-6">
          <p className="font-dancing-script text-3xl text-pink-300 mb-1">
            Eu te amo, Isabelle
          </p>
          <p className="text-white text-sm">
            Obrigado por esse primeiro mês incrível!
          </p>
        </div>
      </div>
    </main>
  );
}
