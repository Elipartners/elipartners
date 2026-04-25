'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NetworkCanvas from "../components/home/NetworkCanvas";
import CityCanvas from "../components/home/CityCanvas";
import ConsultingCanvas from "../components/home/ConsultingCanvas";
import HomePopups from "../components/home/HomePopups";

const slides = [
  {
    id: 1,
    canvasType: "consulting",
    title: "신뢰받는 IT 컨설팅으로 비즈니스의 힘을 더합니다",
    subtitle: "Empowering Business through\nTrusted IT Consulting",
    desc: ""
  },
  {
    id: 2,
    canvasType: "city",
    title: "공간의 가치와 투자의 성공을 설계합니다",
    subtitle: "Architecting Spatial Worth\n& Investment Success",
    desc: ""
  },
  {
    id: 3,
    canvasType: "network",
    title: "함께 성장의 미래를 디자인합니다",
    subtitle: "Designing the Future\nof Growth, Together",
    desc: ""
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <HomePopups />
      {/* Hero Slider Section */}
      <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
        {slides.map((slide: any, index: number) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 min-h-full" : "opacity-0"
              }`}
          >
            {slide.canvasType === 'network' ? (
              <NetworkCanvas />
            ) : slide.canvasType === 'city' ? (
              <CityCanvas />
            ) : slide.canvasType === 'consulting' ? (
              <ConsultingCanvas />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={slide.image!}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply" />
              </div>
            )}

            <div
              className={`absolute inset-0 flex items-center justify-center pointer-events-none ${slide.canvasType === 'network' ? 'bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_100%)] z-10' :
                slide.canvasType === 'city' ? 'bg-[radial-gradient(circle_at_center,rgba(10,14,23,0)_0%,rgba(10,14,23,0.5)_100%)] z-10' :
                  slide.canvasType === 'consulting' ? 'bg-[radial-gradient(circle_at_center,rgba(4,8,19,0)_0%,rgba(4,8,19,0.7)_100%)] z-10' : ''
                }`}
            >
              <div className="text-center text-white px-4 mt-20 pointer-events-auto w-full">
                {slide.canvasType ? (
                  <>
                    <h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight mb-6 leading-[1.1] whitespace-pre-wrap opacity-0"
                      style={{
                        transform: 'translateY(30px)',
                        animation: index === currentSlide ? 'fadeInUp 1.2s ease-out forwards 0.5s' : 'none',
                        background: slide.canvasType === 'city'
                          ? 'linear-gradient(to right, #ffffff, #7c3aed, #3b82f6)'
                          : slide.canvasType === 'consulting'
                            ? 'linear-gradient(to right, #ffffff, #60a5fa, #34d399)'
                            : 'linear-gradient(to right, #ffffff, #60a5fa, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                      }}
                    >
                      {slide.subtitle}
                    </h1>
                    <p
                      className="text-lg md:text-2xl font-light text-slate-400 tracking-[0.2em] opacity-0"
                      style={{
                        transform: 'translateY(20px)',
                        animation: index === currentSlide ? 'fadeInUp 1.2s ease-out forwards 0.9s' : 'none'
                      }}
                    >
                      {slide.title}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-teal tracking-wider uppercase">
                      {slide.title}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-wrap">
                      {slide.subtitle}
                    </h1>
                    {slide.desc && (
                      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        {slide.desc}
                      </p>
                    )}
                    <Link
                      href="/company"
                      className="inline-block bg-brand-teal hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1"
                    >
                      자세히 보기
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-brand-teal w-8" : "bg-white/50 hover:bg-white"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              엘리파트너스의 <span className="text-brand-teal">핵심 역량</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              급변하는 비즈니스 환경 속에서 고객의 성공을 위해 최고의 전문성과 맞춤형 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ICT & 솔루션</h3>
              <p className="text-gray-600 mb-6">
                최신 IT 기술 동향을 반영한 최적의 시스템 구축과 통합 유지보수 솔루션을 제공하여 업무 효율을 극대화합니다.
              </p>
              <Link href="/business/solution" className="text-brand-teal font-medium flex items-center gap-1 hover:gap-2 transition-all">
                알아보기 <span>&rarr;</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">부동산 개발</h3>
              <p className="text-gray-600 mb-6">
                입지 분석부터 시행, 시공, 분양에 이르기까지 부동산 개발 전 과정에 걸쳐 투명하고 전문적인 서비스를 제공합니다.
              </p>
              <Link href="/business/real-estate" className="text-brand-teal font-medium flex items-center gap-1 hover:gap-2 transition-all">
                알아보기 <span>&rarr;</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">경영 컨설팅</h3>
              <p className="text-gray-600 mb-6">
                기업의 비전과 목표 달성을 위한 전략 수립, 조직 활성화, 재무 구조 개선 등 종합적인 경영 컨설팅을 지원합니다.
              </p>
              <Link href="/business/consulting" className="text-brand-teal font-medium flex items-center gap-1 hover:gap-2 transition-all">
                알아보기 <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">신속한 고객 지원 서비스</h2>
              <p className="text-blue-200">
                1:1 문의 및 원격 지원 등 도움이 필요하신 부분을 빠르게 해결해 드립니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/support#inquiry" className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
                1:1 문의 접수
              </Link>
              <Link href="/support" className="border border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full transition-all backdrop-blur-sm">
                원격 지원 연결
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
