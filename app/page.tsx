"use client";

import React, { useState, useEffect } from 'react';
import {Music, Calendar, MapPin, Users, Clock, ChevronDown, ChevronUp, Star} from 'lucide-react';

const SummerTapaPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teams = [
    {
      id: 1,
      name: "루키팀",
      member: "장현하 심인규 이지영 이시영 정용환 이승미",
      setlist: [
        "Pretender - Official髭男dism",
        "비틀비틀 짝짜꿍 - 한로로",
        "너에게 닿기를 - 10CM",
        "Mature Voice - 토스터즈"
      ],
      color: "from-blue-400 to-cyan-500",
      isRookie: true
    },
    {
      id: 2,
      name: "SURGE",
      member: "유형근 안유민 김강태 박승원 오정훈 민수빈 박상아 박윤설",
      setlist: [
        "Pink+White - FRANK OCEAN",
        "OD - SURGE",
        "지각 - SURGE",
        "Dive - Olivia Dean",
        "My favorite day - SURGE",
        "마루노우치 새디스틱 - 시이나링고"
      ],
      color: "from-orange-400 to-pink-500"
    },
    {
      id: 3,
      name: "단국대",
      member: "유민 은성 류시현 김기범 이도연",
      setlist: [
        "stay with me - 자우림",
        "집 - 한로로",
        "불 - 유다빈 밴드",
        "유영 - 카더가든",
        "beautiful things - Benson Boone",
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      name: "한손에 총들고",
      member: "이성훈 길민규 김강태 임성렬 김동호",
      setlist: [
        "청색증 - ThornApple",
        "12가지 말들 - 봉제인간",
        "세상만사 - 라이프 앤 타임",
        "Robbed The Bank - 너드 커넥션",
        "Answer Me - 브로큰 발렌타인",
        "Mozambique Drill - 브로큰 발렌타인",
        "Get Your Gun - 브로큰 발렌타인",
      ],
      color: "from-purple-400 to-pink-500"
    }
  ];

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // 네이버 지도 앱 열기 함수
  const openNaverMap = () => {
    const naverMapUrl = "nmap://place?lat=37.5476&lng=126.9227&name=플렉스%203호점&appname=com.example.myapp";
    const webUrl = "https://map.naver.com/p/entry/place/1735781356?c=16.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202508050512&locale=ko&svcName=map_pcv5";

    // 모바일에서 네이버 지도 앱 시도
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // 앱 열기 시도
      window.location.href = naverMapUrl;

      // 3초 후에도 페이지가 그대로 있으면 웹 버전으로 이동
      setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 3000);
    } else {
      // 데스크톱에서는 바로 웹 버전 열기
      window.open(webUrl, '_blank');
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Hero Section - 패럴랙스 효과 */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
              style={{
                backgroundImage: 'url(/summer.jpeg)',
                filter: 'brightness(0.7)',
              }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

          <div className="relative z-10 text-center text-white px-4">
            {/* 감각적인 타이틀 - 패럴랙스 효과 */}
            <div
                className="flex flex-col items-center justify-center -space-y-4 sm:-space-y-6 md:-space-y-10"
            >
              <span
                  className="text-[12em] sm:text-[18em] md:text-[24em] lg:text-[32em] font-black tracking-tighter text-[#D43939] leading-none"
                  style={{
                    fontFamily: "'Noto Serif KR', 'Playfair Display', serif",
                  }}
              >
                夏
              </span>
              <div
                  className="text-[8em] sm:text-[12em] md:text-[16em] lg:text-[22em] text-white font-black leading-none -space-x-2 sm:-space-x-4 md:-space-x-8 flex"
                  style={{
                    fontFamily: "'Noto Serif KR', 'Playfair Display', serif",
                  }}
              >
                <span>打 破</span>
              </div>
            </div>

            {/* 반응형 정보 섹션 */}
            <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base sm:text-lg md:text-xl mt-20 sm:mt-8 opacity-0"
                style={{
                  animation: 'fadeInUp 1s ease-out 1.5s forwards',
                }}
            >
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-medium">2025년 8월 29일(금) 19:00</span>
              </div>
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-medium">FLEX LOUNGE 3호점</span>
              </div>
            </div>
          </div>

          {/* 스크롤 유도 애니메이션 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button
                onClick={scrollToNext}
                className="flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 group"
            >
              <span className="text-sm font-light mb-2 opacity-0 animate-fade-in" style={{ animation: 'fadeInUp 2s ease-out 2s forwards' }}>
                Scroll Down
              </span>
              <ChevronDown className="w-8 h-8 animate-bounce group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* About Section - 모바일 최적화 */}
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
            <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-800 mb-12 sm:mb-16 md:mb-20"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", letterSpacing: '-0.02em' }}
            >
              오시는 길
            </h3>

            {/* 반응형 지도 이미지 - 클릭 가능 */}
            <div className="w-full max-w-4xl mb-8 sm:mb-12">
              <div
                  className="relative w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow transition-all duration-500 cursor-pointer hover:shadow-xl hover:scale-105 group"
                  onClick={openNaverMap}
              >
                <img
                    src="/map.png"
                    alt="FLEX LOUNGE 3호점 위치 지도"
                    className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                />

                {/* 클릭 유도 오버레이 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 text-gray-800 font-bold">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>네이버 지도에서 보기</span>
                  </div>
                </div>

                {/* 이미지 로드 실패 시 대체 컨텐츠 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 hidden">
                  <div className="text-center px-4">
                    <MapPin className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-gray-400" />
                    <p className="text-xl sm:text-2xl font-semibold mb-2">지도 이미지를 불러올 수 없습니다</p>
                    <p className="text-lg">FLEX LOUNGE 3호점</p>
                    <button
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                        onClick={openNaverMap}
                    >
                      네이버 지도에서 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 위치 정보 - 모바일 최적화 */}
            <div className="w-full max-w-4xl space-y-6">
              <div className="flex items-center gap-4 sm:gap-6 text-black bg-white p-6 rounded-2xl shadow">
                <MapPin className="w-5 h-5 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0" />
                <span className="font-bold text-gray-700 sm:text-2xl md:text-3xl" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  상수역 4번 출구로 나와서 도보 2분 거리
                </span>
              </div>

              {/* 추가 정보 카드 - 모바일 최적화 */}
              <div className="bg-white rounded-2xl shadow p-6 sm:p-8 shadow transition-shadow duration-300">
                <h4 className="font-black text- sm:text-2xl mb-6 text-gray-800" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  상세 위치 정보
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold sm:text-xl">FLEX LOUNGE 3호점</p>
                      <p className=" text-gray-600">서울 마포구 독막로 68 지층</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 sm:w-7 sm:h-7 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold sm:text-xl">2025년 8월 29일(금) 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <button
                        onClick={openNaverMap}
                        className="flex items-center gap-3 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors font-bold text-sm sm:text-base"
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      네이버 지도에서 길찾기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Section - 모바일 최적화 */}
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-6xl mx-auto">
            <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-12 sm:mb-16 md:mb-20"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}
            >
              TEAMS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {teams.map((team, index) => (
                  <div
                      key={team.id}
                      className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative"
                      onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
                      style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Rookie Badge */}
                    {team.isRookie && (
                        <div className={`absolute -top-3 -right-3 z-10 transition-all duration-700 ease-in-out ${
                            selectedTeam === team.id ? 'scale-105 -translate-y-2 translate-x-1' : ''
                        }`}>
                          <div className={`bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-black flex items-center gap-1 shadow-lg transition-all duration-700 ${
                              selectedTeam === team.id ? 'shadow-2xl' : ''
                          }`}>
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                            ROOKIE
                          </div>
                        </div>
                    )}

                    <div className={`bg-gradient-to-br ${team.color} p-8 sm:p-10 rounded-3xl shadow-2xl text-white transition-all duration-700 ease-in-out hover:shadow-3xl ${
                        selectedTeam === team.id ? 'shadow-3xl scale-105' : ''
                    }`}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <h4
                              className="text-2xl sm:text-3xl font-black"
                              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em' }}
                          >
                            {team.name}
                          </h4>
                        </div>
                        <Music className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 ${
                            selectedTeam === team.id ? 'rotate-12 scale-125' : ''
                        }`} />
                      </div>
                      <p className="text-base sm:text-lg opacity-95 mb-3 leading-relaxed font-medium">{team.member}</p>

                      {/* 애니메이션이 적용된 셋리스트 섹션 */}
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                          selectedTeam === team.id
                              ? 'max-h-96 opacity-100 transform translate-y-0'
                              : 'max-h-0 opacity-0 transform -translate-y-4'
                      }`}>
                        <div className="bg-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-md border border-white/20">
                          <h5 className="font-bold mb-4 flex items-center gap-3 text-base sm:text-lg">
                            <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                            셋리스트
                          </h5>
                          <ul className="space-y-3">
                            {team.setlist.map((song, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center gap-3 transition-all duration-300 ease-in-out hover:bg-white/10 p-2 rounded-lg ${
                                        selectedTeam === team.id
                                            ? 'opacity-100 transform translate-x-0'
                                            : 'opacity-0 transform translate-x-4'
                                    }`}
                                    style={{
                                      transitionDelay: selectedTeam === team.id ? `${index * 100}ms` : '0ms'
                                    }}
                                >
                            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white/25 rounded-full flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 hover:bg-white/40 hover:scale-110 flex-shrink-0">
                              {index + 1}
                            </span>
                                  <span className="transition-all duration-300 hover:text-yellow-200 text-sm sm:text-base leading-relaxed font-medium">
                                      {song}
                                    </span>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-center items-center text-center mt-6">
                        <span className="text-sm sm:text-base opacity-80 transition-all duration-100 ">
                          {selectedTeam === team.id ? `셋리스트 접기` : `셋리스트 보기`}
                        </span>
                        <div className={"text-sm sm:text-base opacity-80 transition-all duration-100 "}>
                          { selectedTeam === team.id ? <ChevronUp/> : <ChevronDown/> }
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section - 모바일 최적화 */}
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto">
            <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-800 mb-12 sm:mb-16 md:mb-20"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", letterSpacing: '-0.02em' }}
            >
              Schedule
            </h3>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
              <div className="space-y-6 sm:space-y-8">
                {teams.map((team, index) => (
                    <div
                        key={team.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-500 hover:bg-white/90 hover:shadow-xl hover:scale-102 gap-4 sm:gap-6 border border-gray-100 relative"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Rookie Badge for Schedule */}
                      {team.isRookie && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                              <Star className="w-3 h-3 fill-current" />
                              ROOKIE
                            </div>
                          </div>
                      )}

                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${team.color} rounded-2xl flex items-center justify-center text-white font-black text-lg transition-all duration-500 hover:scale-110 hover:shadow-lg flex-shrink-0 relative`}>
                          {index + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4
                                className="font-black text-lg sm:text-xl text-black transition-colors duration-300 hover:text-gray-700"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {team.name}
                            </h4>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">{team.member}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right ml-16 sm:ml-0">
                        <p
                            className="font-black text-lg sm:text-xl text-gray-800 mb-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {19 + index}:00 - {19 + index + 1}:00
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">45분 공연</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .hover\\:scale-102:hover {
            transform: scale(1.02);
          }

          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </div>
  );
};

export default SummerTapaPage;