// WithUs AI Counselor Co-Pilot - Competitor & Counseling Strategy Dataset
// Updated: 2026-06-21 (V2.9: Dual Theme & Competitor Info Update Modal Integration)

window.WithUsData = {
  name: "웨딩그룹 위더스 안양",
  baseRentalFee: 5000000,
  baseMealCost: 65000,
  minGuarantee: 200,
  advantages: [
    "안양 유일의 웨딩 전용 단독 빌딩 사용으로 동선 겹침 최소화",
    "동시 주차 1,000대 이상 가능한 초대형 자체 주차타워 완비",
    "라이브 키친 중심의 즉석 요리 비율이 매우 높은 프리미엄 뷔페",
    "층고가 높고 웅장한 극장식 웨딩홀 인테리어"
  ]
};

window.CompetitorsData = [
  {
    id: "withus",
    name: "웨딩그룹 위더스 안양",
    baseRentalFeeRange: { min: 5000000, max: 5000000 },
    baseMealCostRange: { min: 65000, max: 65000 },
    location: "안양 동안구 (명학역 도보 2분, 단독 전용 빌딩)",
    strengths: "안양 유일의 웨딩 전용 단독 빌딩 사용으로 동선 분리 극대화, 동시 주차 1,000대 자체 주차타워 완비, 안양 최고 수준의 25m 직선 버진로드와 웅장한 극장식 인테리어, 라이브 키친 중심의 즉석 요리 비율이 매우 높은 프리미엄 뷔페(140여 가지 메뉴)",
    weaknesses: [
      "KTX 역사(광명역)와 직접 연계되지 않아 지방 하객은 전철 환승 혹은 버스 탑승 등 대중교통 이동 동선 고려 필요",
      "단독 웨딩 빌딩 특성상 주말 피크 타임에 하객이 일시에 몰릴 경우 엘리베이터 혼잡도가 발생할 수 있어 에스컬레이터 병행 안내 필요",
      "단독 주차타워 진입로가 주말 골든타임 입차 차량으로 인해 진입 대기열이 일시적으로 형성될 수 있어 우회 안내 요망"
    ],
    reviews: [
      {
        title: "웨딩그룹 위더스 안양 단독주차빌딩 하객 주차 후기 (본식 솔직 후기)",
        source: "네이버 블로그",
        url: "https://blog.naver.com/o_jhee/224152211955",
        date: "2026-01-19",
        summary: "명학역과 매우 가깝고 단독 주차 타워에 주차 대기 없이 바로 진입해 혼주와 하객 모두 주차가 편리했다는 본식 솔직 후기입니다."
      },
      {
        title: "위더스 안양 메리엘홀 투어, 견적 및 당일계약 후기 (동선 만족)",
        source: "네이버 블로그",
        url: "https://blog.naver.com/loesmik/224123607536",
        date: "2025-12-26",
        summary: "다른 식장들과 다르게 단독 건물 전체를 웨딩홀로 써서 층마다 로비가 분리되어 겹치지 않아 대단히 만족스러웠습니다."
      },
      {
        title: "웨딩그룹 위더스 안양 메리엘홀 하객 시식 후기 (뷔페 메뉴 만족)",
        source: "네이버 블로그",
        url: "https://blog.naver.com/dilkusha119/224127933279",
        date: "2025-12-30",
        summary: "일식과 즉석 고기류 코너 퀄리티가 특히 높고, 단독 건물 분리 연회장이라 복잡하지 않게 시식할 수 있었다는 생생한 만족 후기입니다."
      },
      {
        title: "위더스 안양 메리엘홀 투어 및 계약 후기 (높은 층고 & 버진로드)",
        source: "네이버 BW",
        url: "https://blog.naver.com/narae4544/224217552593",
        date: "2026-03-15",
        summary: "어두운 호텔식 홀 무드와 안양권에서 가장 긴 25m 직선 버진로드가 우아하여 신부 입장 시 주목도가 높다는 분석입니다."
      }
    ],
    pricingModel: {
      peakMonths: [4, 5, 9, 10, 11],
      offPeakMonths: [1, 2, 7, 8],
      multipliers: {
        peak: { rental: 1.10, meal: 1.0 },
        offPeak: { rental: 0.80, meal: 0.954 },
        neutral: { rental: 1.0, meal: 1.0 }
      },
      timeSlots: {
        golden: { rentalMultiplier: 1.20, mealMultiplier: 1.0, minGuarantee: 200 },
        regular: { rentalMultiplier: 1.00, mealMultiplier: 1.0, minGuarantee: 200 },
        late: { rentalMultiplier: 0.70, mealMultiplier: 1.0, minGuarantee: 200 }
      }
    },
    overrides: {}
  },
  {
    id: "ibex",
    name: "광명 아이벡스컨벤션",
    baseRentalFeeRange: { min: 8000000, max: 12000000 },
    baseMealCostRange: { min: 75000, max: 85000 },
    location: "광명 일직동 (AK플라자 광명 5층)",
    strengths: "초대형 미디어 월, 압도적인 홀 규모와 영상 연출, 현대적인 시설",
    weaknesses: [
      "초대형 영상 연출에 따른 기본 단가 및 미디어 필수 옵션 비용이 가산되어 총예산 상승 요소 고려 필요",
      "피크 타임(토요일 골든타임) 계약 시 필수 최소 보증인원이 250~300명 수준으로 다소 높게 지정됨",
      "주말 대형 쇼핑몰 복합단지 유입 차량과 주차 진입 동선이 일부 겹쳐 주말 피크 타임 대기 시간 발생 우려"
    ],
    reviews: [
      {
        title: "광명 아이벡스컨벤션 공식 홈페이지 요금 정보",
        source: "공식 웹사이트",
        url: "https://ivexwed.co.kr",
        date: "2026-01-10",
        summary: "아이벡스컨벤션 공식 대관 규정 및 예식홀 규격 가이드라인입니다."
      },
      {
        title: "광명 아이벡스 견적 및 투어 후기",
        source: "네이버 블로그",
        url: "https://blog.naver.com/freshyoung2/224316965715",
        date: "2026-06-15",
        summary: "11m 높은 층고와 8K 미디어월은 최고인데 대관료와 식대 견적이 꽤 높게 잡혔다는 생생한 방문 후기입니다."
      },
      {
        title: "광명 아이벡스 하이퍼홀 버진로드 투어 후기",
        source: "네이버 블로그",
        url: "https://blog.naver.com/sjwkd28/224298300283",
        date: "2026-06-02",
        summary: "압도적인 미디어 스크린 웅장함에 대비해 미디어 연출비 및 옵션 가중으로 예산 협의가 필요하다는 피드백입니다."
      },
      {
        title: "아이웨딩 광명 아이벡스컨벤션 상세 투어 정보",
        source: "네이버 블로그",
        url: "https://blog.naver.com/coooo1_/224313266952",
        date: "2026-06-11",
        summary: "아이벡스컨벤션 웨딩홀의 연출 특징 및 견적 범위에 대한 상세 리뷰 가이드입니다."
      }
    ],
    pricingModel: {
      peakMonths: [4, 5, 9, 10, 11],
      offPeakMonths: [1, 2, 7, 8],
      multipliers: {
        peak: { rental: 1.25, meal: 1.05 },
        offPeak: { rental: 0.70, meal: 0.95 },
        neutral: { rental: 1.0, meal: 1.0 }
      },
      timeSlots: {
        golden: { rentalMultiplier: 1.40, mealMultiplier: 1.08, minGuarantee: 300 },
        regular: { rentalMultiplier: 1.00, mealMultiplier: 1.00, minGuarantee: 250 },
        late: { rentalMultiplier: 0.60, mealMultiplier: 0.90, minGuarantee: 200 }
      }
    },
    overrides: {}
  },
  {
    id: "gwangmyeong_trade",
    name: "광명무역센터컨벤션",
    baseRentalFeeRange: { min: 4000000, max: 6000000 },
    baseMealCostRange: { min: 68000, max: 75000 },
    location: "광명역 인근 (광명무역센터 3층)",
    strengths: "깔끔한 단독홀, KTX 광명역 역세권으로 지방 하객 수송 유리",
    weaknesses: [
      "메인 로비 and 축의대 공간이 단층에 집중되어 앞뒤 타임 하객이 겹칠 시 동선 혼잡 가능성 있음",
      "연회장의 통창 뷰가 주는 개방감에 비해 라이브 코너 및 즉석 뷔페 요리 가짓수가 다소 콤팩트하게 구성됨",
      "오피스 빌딩 주차장을 주말 공유하여 사용하므로 간혹 입출차 정체 및 주차 등록 지연 발생 우려"
    ],
    reviews: [
      {
        title: "광명무역센터컨벤션 공식 예약 안내",
        source: "공식 웹사이트",
        url: "https://www.gtcwedding.com/",
        date: "2026-01-05",
        summary: "광명무역센터컨벤션 단독홀 소개 및 층별 배치 안내 정보입니다."
      },
      {
        title: "네이버 블로그 '광명무역센터컨벤션 계약 및 견적' 공유",
        source: "네이버 블로그",
        url: "https://blog.naver.com/ashley700/224308023919",
        date: "2026-06-06",
        summary: "KTX 광명역에서 매우 가깝다는 교통의 강점 and 단독홀 은하수 조명 연출에 대한 예비신부의 세부 견적 포스팅입니다."
      },
      {
        title: "네이버 블로그 '광명무역센터컨벤션 하객 뷔페 시식' 후기",
        source: "네이버 블로그",
        url: "https://blog.naver.com/kokijuhy/224272508928",
        date: "2026-05-02",
        summary: "어두운 홀 분위기와 연회장 즉석 뷔페 음식 맛(산낙지 등)에 관한 솔직 하객 리뷰입니다."
      }
    ],
    pricingModel: {
      peakMonths: [4, 5, 9, 10, 11],
      offPeakMonths: [1, 2, 7, 8],
      multipliers: {
        peak: { rental: 1.20, meal: 1.04 },
        offPeak: { rental: 0.75, meal: 0.96 },
        neutral: { rental: 1.0, meal: 1.0 }
      },
      timeSlots: {
        golden: { rentalMultiplier: 1.35, mealMultiplier: 1.06, minGuarantee: 250 },
        regular: { rentalMultiplier: 1.00, mealMultiplier: 1.00, minGuarantee: 220 },
        late: { rentalMultiplier: 0.65, mealMultiplier: 0.92, minGuarantee: 180 }
      }
    },
    overrides: {}
  },
  {
    id: "luivis",
    name: "루이비스컨벤션 안양점",
    baseRentalFeeRange: { min: 3000000, max: 5500000 },
    baseMealCostRange: { min: 60000, max: 65000 },
    location: "안양역사 (엔터식스 안양점 8~9층)",
    strengths: "안양역과 전철 직통 연결로 대중교통 최적, 세련된 블랙 톤 어두운 홀",
    weaknesses: [
      "안양역사와 바로 연결된 대형 복합 쇼핑몰(엔터식스) 빌딩에 입점하여 주말 일반 쇼핑 이용객과의 주차장 병목 현상 우려",
      "주말 피크 타임 시 백화점/쇼핑몰 유입 인파와 하객 동선이 혼용되어 엘리베이터 이동 대기 시간이 다소 발생할 수 있음",
      "단독 예식홀 건물이 아니기 때문에 전용 예식 공간으로서의 독립성 및 혼주 귀빈 맞이 첫인상의 품격이 다소 약함"
    ],
    reviews: [],
    pricingModel: {
      peakMonths: [4, 5, 9, 10, 11],
      offPeakMonths: [1, 2, 7, 8],
      multipliers: {
        peak: { rental: 1.20, meal: 1.03 },
        offPeak: { rental: 0.70, meal: 0.95 },
        neutral: { rental: 1.0, meal: 1.0 }
      },
      timeSlots: {
        golden: { rentalMultiplier: 1.30, mealMultiplier: 1.05, minGuarantee: 250 },
        regular: { rentalMultiplier: 1.00, mealMultiplier: 1.00, minGuarantee: 200 },
        late: { rentalMultiplier: 0.55, mealMultiplier: 0.90, minGuarantee: 150 }
      }
    },
    overrides: {}
  },
  {
    id: "partyum",
    name: "더파티움 안양",
    baseRentalFeeRange: { min: 3500000, max: 5000000 },
    baseMealCostRange: { min: 63000, max: 68000 },
    location: "평촌역 도보 2분 (금강스마트빌딩 5~7층)",
    strengths: "평촌역 초역세권 교통 접근성 최강, 화려하고 파티 같은 파티홀 연출",
    weaknesses: [
      "독특하고 화려한 S자형 곡선 버진로드 연출의 희소성이 있으나, 드레스를 입고 굴곡진 버진로드를 걸어야 하므로 신부 입장 시 안정감 있는 보폭 집중이 필요함",
      "주차 공간이 본 건물(금강스마트빌딩) 지하 외에 외부 GIS(네온테크), 이마트 평촌점, 칼라힐 주차빌딩 등 총 4곳으로 분산 운영되어 주말 하객들의 주차 위치 혼동 및 도보 이동 유발 우려",
      "피크 타임 연회 시 인접 홀 하객 동선과 부분적으로 교차 운영되어 연회 배분 및 자리 정리 대기 현상 발생 우려"
    ],
    reviews: [
      {
        title: "안양 더파티움 투어 및 계약 후기 (브리에홀/라포레홀)",
        source: "네이버 블로그",
        url: "https://blog.naver.com/qnseol/224301788033",
        date: "2026-05-31",
        summary: "평촌역 초역세권이라 하객 이동이 편하고 S자형 버진로드가 유니크해서 당일 계약을 결정했다는 후기입니다."
      },
      {
        title: "평촌 더파티움 단독홀 뷔페 시식 및 분산 주차 후기",
        source: "네이버 블로그",
        url: "https://blog.naver.com/jiyeapink/224302070357",
        date: "2026-05-31",
        summary: "홀 분위기는 화려하고 뷔페 음식은 괜찮으나 주말 본관 만차 시 인근 주차빌딩 분산 주차가 조금 혼란스럽다는 의견입니다."
      }
    ],
    pricingModel: {
      peakMonths: [4, 5, 9, 10, 11],
      offPeakMonths: [1, 2, 7, 8],
      multipliers: {
        peak: { rental: 1.18, meal: 1.04 },
        offPeak: { rental: 0.72, meal: 0.95 },
        neutral: { rental: 1.0, meal: 1.0 }
      },
      timeSlots: {
        golden: { rentalMultiplier: 1.35, mealMultiplier: 1.06, minGuarantee: 250 },
        regular: { rentalMultiplier: 1.00, mealMultiplier: 1.00, minGuarantee: 200 },
        late: { rentalMultiplier: 0.60, mealMultiplier: 0.92, minGuarantee: 180 }
      }
    },
    overrides: {}
  },
  {
    id: "villadegd",
    name: "빌라드 지디 안양점",
    baseRentalFeeRange: { min: 5000000, max: 7000000 },
    baseMealCostRange: { min: 70000, max: 78000 },
    location: "비산동 (관악대로 254)",
    strengths: "1층 갤러리아 홀(미디어 파사드 및 4K 아트월 채플) 및 3층 크리스탈 캐슬 홀(자연 채광 천창과 샹들리에의 화사한 하우스 웨딩)의 독창적인 공간 구성",
    weaknesses: [
      "3층 크리스탈 캐슬 홀의 와이드 천창 자연광 연출은 아름다우나, 예식 당일 날씨(폭우, 폭설 등) 및 계절에 따른 실내 조도 밝기 편차 발생 가능성 존재",
      "지하철역(4호선 인덕원역 또는 안양역) 비도보권에 위치하여 예식 당일 하객들은 셔틀버스를 필수로 환승하거나 시내버스를 갈아타야 하는 대중교통 접근 제한성 존재",
      "소규모 예식에 최적화된 공간 설계로 하객 수가 200명 이상으로 늘어날 시 홀 내부 착석 및 서서 관람하는 동선이 다소 협소해질 우려",
      "양식 및 퓨전 뷔페 위주로 구성되어 정갈하고 대중적인 정통 한식 메뉴를 선호하시는 어르신 하객들의 메뉴 기호 편차 존재"
    ],
    reviews: [
      {
        title: "빌라드지디 안양 3층 크리스탈캐슬 하우스웨딩 투어 후기",
        source: "네이버 블로그",
        url: "https://blog.naver.com/ellyrama/224297376677",
        date: "2026-05-27",
        summary: "천창의 자연광 연출이 정말 예쁘지만 흐린 날에는 내부가 조금 어두울 수 있으며 지하철역에서 멀어 셔틀버스를 타야 합니다."
      },
      {
        title: "빌라드지디 안양 1층 갤러리아홀 계약 및 본식 후기",
        source: "네이버 블로그",
        url: "https://blog.naver.com/nyun_aa/224308599353",
        date: "2026-06-07",
        summary: "미디어 파사드 연출이 트렌디하고 화사하나 하객이 200명 이상일 때는 홀 내부와 로비가 조금 좁게 느껴진다는 아쉬움이 있습니다."
      }
    ],
    pricingModel: {
      peakMonths: [4, 5, 9, 10, 11],
      offPeakMonths: [1, 2, 7, 8],
      multipliers: {
        peak: { rental: 1.25, meal: 1.05 },
        offPeak: { rental: 0.75, meal: 0.95 },
        neutral: { rental: 1.0, meal: 1.0 }
      },
      timeSlots: {
        golden: { rentalMultiplier: 1.40, mealMultiplier: 1.08, minGuarantee: 200 },
        regular: { rentalMultiplier: 1.00, mealMultiplier: 1.00, minGuarantee: 150 },
        late: { rentalMultiplier: 0.65, mealMultiplier: 0.92, minGuarantee: 120 }
      }
    },
    overrides: {}
  }
];

// 월별/시간대별 실시간 전략 매핑
window.getStrategy = (competitorId, month, timeSlot, year = 2026) => {
  const competitor = window.CompetitorsData.find(c => c.id === competitorId);
  if (!competitor) return null;

  // Ensure overrides object exists
  if (!competitor.overrides) {
    competitor.overrides = {};
  }

  const isPeak = competitor.pricingModel.peakMonths.includes(Number(month));
  const isOffPeak = competitor.pricingModel.offPeakMonths.includes(Number(month));
  
  // 가중치 객체 매핑
  let seasonType = "neutral";
  let seasonLabel = "평달 (기본)";
  if (isPeak) {
    seasonType = "peak";
    seasonLabel = "성수기 할증";
  } else if (isOffPeak) {
    seasonType = "offPeak";
    seasonLabel = "비수기 할인";
  }

  const sMult = competitor.pricingModel.multipliers[seasonType];
  const slotConfig = competitor.pricingModel.timeSlots[timeSlot] || competitor.pricingModel.timeSlots.regular;

  // Check for manual overrides for current month, time slot, and year
  const overrideKey = `${year}-${month}-${timeSlot}`;
  const override = competitor.overrides[overrideKey];

  let calculatedRental, calculatedMeal, calculatedGuarantee;
  let requiredOptions = "";
  let notes = "";
  let isOverridden = false;

  const ceilTo500 = (val) => Math.ceil(val / 500) * 500;
  const ceilTo500000 = (val) => Math.ceil(val / 500000) * 500000;

  if (override) {
    calculatedRental = Number(override.rentalFee);
    calculatedMeal = Number(override.mealCost);
    calculatedGuarantee = Number(override.minGuarantee);
    requiredOptions = override.requiredOptions || "";
    notes = override.notes || "";
    isOverridden = true;
  } else {
    // 기본 평균 가격 산출
    const avgBaseRental = (competitor.baseRentalFeeRange.min + competitor.baseRentalFeeRange.max) / 2;
    const avgBaseMeal = (competitor.baseMealCostRange.min + competitor.baseMealCostRange.max) / 2;

    // 가중치 적용 최종 견적 및 50만 원 단위 올림 정렬
    calculatedRental = ceilTo500000(avgBaseRental * sMult.rental * slotConfig.rentalMultiplier);
    calculatedMeal = ceilTo500(avgBaseMeal * sMult.meal * slotConfig.mealMultiplier);
    calculatedGuarantee = slotConfig.minGuarantee;
  }

  // 위더스 안양점 견적 대응 (골든타임 가격 차이 조절)
  const withUsSeasonMult = isPeak ? 1.10 : isOffPeak ? 0.80 : 1.0;
  const withUsTimeMult = timeSlot === 'golden' ? 1.20 : timeSlot === 'regular' ? 1.0 : 0.70;
  
  const withUsComp = window.CompetitorsData.find(c => c.id === 'withus');
  if (withUsComp && !withUsComp.overrides) {
    withUsComp.overrides = {};
  }
  const withUsOverride = withUsComp ? withUsComp.overrides[overrideKey] : null;

  let withUsRental, withUsMeal, withUsGuarantee;
  if (withUsOverride) {
    withUsRental = Number(withUsOverride.rentalFee);
    withUsMeal = Number(withUsOverride.mealCost);
    withUsGuarantee = Number(withUsOverride.minGuarantee);
  } else {
    withUsRental = ceilTo500000(window.WithUsData.baseRentalFee * withUsSeasonMult * withUsTimeMult);
    withUsMeal = ceilTo500(window.WithUsData.baseMealCost - (isOffPeak ? 3000 : 0));
    withUsGuarantee = Math.min(200, calculatedGuarantee);
  }

  // '한끗' 카운터 멘트 도출
  let adviseMent = "";
  let detailReason = "";
  let counterScript = [];

  switch (competitorId) {
    case "withus":
      adviseMent = "위더스 안양점의 강점(단독 전용 빌딩, 단독 주차타워)과 객관적 특징을 종합하여, 신랑신부님께 최상의 가치를 선사하는 기본 제안입니다.";
      detailReason = `위더스 안양점은 ${month}월 및 ${timeSlot === 'golden' ? '골든타임' : '일반타임'} 조건에서 대관료 ${(withUsRental/10000).toFixed(0)}만 원, 식대 ${(withUsMeal).toLocaleString()}원, 보증인원 ${withUsGuarantee}명으로 운영됩니다. 전용 단독 빌딩을 사용하는 만큼 타사 쇼핑몰/복합센터 혼잡 우려를 완전히 불식시키는 안정적인 장점을 보유하고 있습니다.`;
      counterScript = [
        { role: "신랑신부", text: "위더스 안양점의 전용 빌딩이나 주차 시설은 마음에 드는데, 혹시 다른 추가 조율 혜택이 있을까요?" },
        { role: "위더스 상담원", text: "네, 저희 위더스는 안양 지역 유일의 단독 예식 전용 빌딩으로서 하객분들의 쾌적한 주차와 품격 있는 라이브 연회 음식을 기본으로 선사해 드립니다. 오늘 내방 상담 고객님께는 성수기/골든타임의 혜택 조율 및 잔여 타임 특별 혜택을 추가로 결합하여 최상의 조건으로 진행하실 수 있도록 특별히 조율해 드리겠습니다." }
      ];
      break;

    case "ibex":
      adviseMent = "대관비와 연출비 옵션을 객관적으로 비교해 드리고, 위더스 안양점 단독 전용 빌딩의 편리한 주차 동선 및 실속 견적을 정중하게 안내하세요.";
      detailReason = `${competitor.name}은 현재 ${month}월 및 ${timeSlot === 'golden' ? '골든타임(11:00~14:50)' : '일반타임'} 조건에서 대관료가 약 ${(calculatedRental/10000).toFixed(0)}만 원, 식대가 ${(calculatedMeal).toLocaleString()}원에 달하며 최소 보증인원이 ${calculatedGuarantee}명으로 높게 잡혀있습니다. 위더스 안양점과의 총 견적 격차는 약 ${((calculatedRental + (calculatedMeal * calculatedGuarantee)) - (withUsRental + (withUsMeal * withUsGuarantee))) / 10000}만 원 수준으로 상당합니다. 화려한 미디어 연출의 장점을 인정하면서도, 하객 중심의 물리적 편리성(단독 주차타워)과 효율적인 예산 배분 가치를 조율해 드리는 것이 좋습니다.`;
      counterScript = [
        { role: "신랑신부", text: "아이벡스는 확실히 미디어홀 연출이 웅장하고 트렌디해서 마음에 들더라고요." },
        { role: "위더스 상담원", text: "네, 맞습니다. 아이벡스의 초대형 미디어 월 연출은 예비 신랑신부님뿐만 아니라 하객분들께도 강렬한 첫인상을 남겨드리는 아주 훌륭한 시스템입니다. 다만, 이러한 특수 연출의 경우 미디어 연출비가 대관료와 별개로 추가 적용되는 경우가 많고 기본 식대 단가가 다소 높아, 전체 예산 배분을 꼼꼼히 기획하셔야 하는 부분이 있습니다. 예식 당일 하객분들께서 오랜 시간 기억하시는 주차의 편리함과 음식의 정갈한 맛을 고려하신다면, 동선이 쾌적한 단독 전용 빌딩에 1,000대 동시 주차가 가능하고 즉석 요리 비중이 높은 저희 위더스 역시 훌륭한 품격을 선사합니다. 실리적인 비용 절감 혜택까지 더해 정성껏 조율해 드리겠습니다." }
      ];
      break;
    case "gwangmyeong_trade":
      adviseMent = "교통 편의성을 높이 평가하되, 피크타임 단층 로비 동선의 쾌적함 and 뷔페 요리 가짓수의 넉넉함을 대비하여 상담을 이끄세요.";
      detailReason = `${competitor.name}은 KTX 역세권이라는 확실한 교통 편의성이 있으나 주말 인근 쇼핑몰 정체로 도로 진입이 다소 혼잡할 수 있고 단층 로비의 하객 집중 시간대 혼잡 우려가 있습니다. 또한 연회 가짓수가 위더스에 비해 콤팩트한 편이므로 위더스의 단독 층별 로비 구성과 140여 가지 고품격 라이브 메뉴 구성을 객관적으로 대조해 주십시오.`;
      counterScript = [
        { role: "신랑신부", text: "광명무역센터는 KTX역 근처라 멀리서 오는 친척들이 오기 편할 것 같아요." },
        { role: "위더스 상담원", text: "네, 지방에서 오시는 KTX 이용 하객분들이 많으시다면 교통의 접근성 면에서 아주 훌륭한 선택이 되실 수 있습니다. 다만 주말 광명역 주변은 대형 쇼핑몰 유입 차량으로 인해 도로 정체가 빈번한 편입니다. 또한 단층 로비 구조 특성상 앞뒤 예식 하객분들이 다소 겹칠 때 축의대 주변의 동선 혼잡이 있을 수 있습니다. 저희 위더스 안양점은 층별로 예식홀과 연회 공간이 분리된 완전한 독립 층별 로비를 사용하여 하객분들께 보다 여유로운 분위기를 선사합니다. 식사 또한 안양권에서 즉석 뷔페 라이브 코너가 가장 다양하게 준비되어 있어, 귀빈 대접의 품격을 높여 드립니다." }
      ];
      break;
    case "luivis":
      adviseMent = "루이비스 안양점의 안양역 전철 연계 장점을 존중하되, 백화점/쇼핑몰 복합 공간에 따른 혼선과 위더스의 웨딩 전용 격조를 비교 제안하세요.";
      detailReason = `${competitor.name}은 안양역 엔터식스에 위치해 대중교통 접근성이 우수하고 혜택이 크지만, 쇼핑몰 복합 건물 내 주차장과 엘리베이터를 쇼핑 하객들과 함께 이용해야 해 주말 피크타임 이동에 다소 지체가 있을 수 있습니다. 혼주분들이 격조 있게 하객을 맞이하시는 첫인상의 차이를 정중히 설명하는 것이 좋습니다.`;
      counterScript = [
        { role: "신랑신부", text: "안양 루이비스 견적을 받았는데 식대랑 대관료가 꽤 저렴하고 교통도 편하더라고요." },
        { role: "위더스 상담원", text: "네, 대중교통 접근성과 실속 있는 견적을 동시에 고려하신다면 루이비스 안양점은 확실히 매력적인 선택이 되실 수 있습니다. 특히 안양역과 바로 연결되어 있어 하객분들의 하차가 매우 편리한 것이 큰 강점입니다. 다만, 엔터식스 백화점식 쇼핑몰 내부에 입점해 있다 보니, 주말에 예식 하객분들과 일반 쇼핑 이용 고객들의 차량 및 유입 인파가 한곳으로 집중되게 됩니다. 이로 인해 주말 피크 타임에 주차장 진입과 엘리베이터 동선이 다소 혼잡해지거나 대기 시간이 걸릴 수 있습니다. 평생 단 한 번뿐인 결혼식 날, 양가 부모님의 소중한 귀빈들을 복잡한 상가 혼용 없이 오롯이 우리만을 위해 마련된 단독 전용 웨딩빌딩에서 쾌적하게 맞이하시는 가치를 위더스에서 경험해 보시기를 추천해 드립니다. 오늘 루이비스 못지않게 조율해 드리는 스페셜 조율 견적도 함께 비교해 보세요." }
      ];
      break;
    case "partyum":
      adviseMent = "더파티움만의 S자형 곡선 버진로드 연출을 높이 평가하되, 드레스 착용 시 긴 직선 버진로드가 주는 우아함과 안정적인 동선 편의성을 안내하세요.";
      detailReason = `${competitor.name}은 평촌역 인근 초역세권이나 주차 공간이 본 건물 외에 네온테크, 이마트, 칼라힐 등 총 4곳의 분산 주차 구역으로 지정되어 하객들의 주말 주차 혼동 우려가 존재합니다. 또한 독특한 S자형 곡선 버진로드 보폭 조절 팩트를 안내하여 직선 버진로드의 안정성을 선호하는 신부님들의 편의를 비교하세요.`;
      counterScript = [
        { role: "신랑신부", text: "더파티움은 홀 장식이 되게 화려하고 입장할 때 S자형으로 도는 버진로드가 독특해 보이는군요." },
        { role: "위더스 상담원", text: "네, 더파티움의 S자형 곡선 버진로드는 다른 베뉴에서 보기 힘든 아주 유니크하고 화려한 연출이라 많은 신부님들의 시선을 사로잡는 장점이 있습니다. 다만, 실제 부피가 큰 드레스를 입고 높은 힐을 신은 채 굴곡진 S자형 버진로드를 걷는 것은 생각보다 시야 확보와 발걸음 템포 조절에 세심한 집중이 필요합니다. 저희 위더스 안양점은 신부님께서 하객분들의 따뜻한 축하를 받으며 가장 안정적이고 우아하게 집중받으실 수 있는 안양 최고 길이 25m의 직선 버진로드를 구성하고 있습니다. 또한, 주차가 본 건물 외에 외부 4곳 주차장으로 다소 분산되어 있는 경쟁사 구조에 비해, 위더스는 단독 건물 자체 주차타워에 1,000대 일괄 수용이 가능해 하객분들의 혼선이 없다는 장점이 있습니다." }
      ];
      break;
    case "villadegd":
      adviseMent = "빌라드지디의 다채로운 홀 컨셉을 존중하되, 날씨 리스크 없는 안정적 동선 및 어르신 선호 프리미엄 한식 연회 퀄리티를 안내하세요.";
      detailReason = `${competitor.name}은 1층 갤러리아(미디어) 및 3층 크리스탈 캐슬(자연 채광) 등 독창적인 컨셉이 훌륭하나, 3층의 경우 주말 예식 당일 날씨에 따라 채광과 실내 조도 편차가 발생할 수 있습니다. 또한 인덕원역 비도보권으로 하객들의 셔틀버스 필수 탑승 제약이 존재합니다. 위더스의 날씨 제약 없는 기품 있는 극장식 단독 홀 구조와 풍성한 연회 구성의 안정적 밸류를 강조하십시오.`;
      counterScript = [
        { role: "신랑신부", text: "빌라드지디 안양이 하우스 웨딩이나 자연 채광 느낌이 참 예뻐서 끌려요." },
        { role: "위더스 상담원", text: "네, 빌라드지디의 1층 미디어 갤러리아 홀이나 3층 자연 채광 중심의 크리스탈 캐슬 홀은 신부님께 매우 예쁘고 인기가 높은 독창적인 베뉴입니다. 특히 자연 채광을 선호하시는 신부님들이 많은 관심을 가지십니다. 다만, 3층 크리스탈 캐슬처럼 천창 자연 채광 중심의 하우스 홀은 예식 당일 눈이나 비가 오거나 흐린 가을/겨울에는 실내 조도가 사진과 달리 다소 어둡게 비쳐 실시간 조도 편차가 발생할 수 있는 날씨 의존성이 있습니다. 또한, 지하철역에서 내려 셔틀버스를 반드시 탑승하셔야 하는 동선상의 대중교통 번거로움도 하객분들 입장에서는 고려 요소가 됩니다. 날씨 리스크 없이 언제나 최상의 조명 세팅과 편안한 입장을 선사하는 위더스의 25m 직선 버진로드, 그리고 호불호 없는 안양 최고 수준의 라이브 연회 구성을 선택하셔서 귀빈들께 신뢰와 품격을 보여주시는 것을 추천해 드립니다." }
      ];
      break;
  }

  // 공식 산출 텍스트 생성
  const timeSlotLabel = timeSlot === 'golden' ? '골든타임 할증' : timeSlot === 'regular' ? '일반타임 표준' : '나이트타임 할인';
  
  let rentalFormula, mealFormula;
  if (isOverridden) {
    rentalFormula = `[정보 업데이트 반영] 대관료: ${(calculatedRental).toLocaleString()}원 (${requiredOptions ? requiredOptions : '기본 조건'})`;
    mealFormula = `[정보 업데이트 반영] 식대: ${(calculatedMeal).toLocaleString()}원 (보증인원 ${calculatedGuarantee}명, 특이사항: ${notes ? notes : '없음'})`;
  } else {
    const avgBaseRental = (competitor.baseRentalFeeRange.min + competitor.baseRentalFeeRange.max) / 2;
    const avgBaseMeal = (competitor.baseMealCostRange.min + competitor.baseMealCostRange.max) / 2;
    rentalFormula = `기본 평균 대관료 (${(avgBaseRental/10000).toFixed(0)}만) x ${seasonLabel} (${sMult.rental.toFixed(2)}) x ${timeSlotLabel} (${slotConfig.rentalMultiplier.toFixed(2)}) [50만 원 단위 올림] = ${(calculatedRental/10000).toFixed(0)}만 원`;
    mealFormula = `기본 평균 식대 (${(avgBaseMeal/1000).toFixed(0)}천) x ${seasonLabel} (${sMult.meal.toFixed(2)}) x ${timeSlotLabel} (${slotConfig.mealMultiplier.toFixed(2)}) = ${(calculatedMeal/1000).toFixed(0)}천 원`;
  }

  // 위더스 산출 공식
  let withUsRentalFormula, withUsMealFormula;
  const isWithUsOverridden = !!(withUsComp && withUsComp.overrides && withUsComp.overrides[overrideKey]);
  if (isWithUsOverridden) {
    const withUsOverrideObj = withUsComp.overrides[overrideKey];
    withUsRentalFormula = `[정보 업데이트 반영] 위더스 대관료: ${(withUsRental).toLocaleString()}원 (${withUsOverrideObj.requiredOptions ? withUsOverrideObj.requiredOptions : '기본 조건'})`;
    withUsMealFormula = `[정보 업데이트 반영] 위더스 식대: ${(withUsMeal).toLocaleString()}원 (보증인원 ${withUsGuarantee}명, 특이사항: ${withUsOverrideObj.notes ? withUsOverrideObj.notes : '없음'})`;
  } else {
    withUsRentalFormula = `위더스 기본 대관료 (${(window.WithUsData.baseRentalFee/10000).toFixed(0)}만) x ${seasonLabel} (${withUsSeasonMult.toFixed(2)}) x ${timeSlotLabel} (${withUsTimeMult.toFixed(2)}) [50만 원 단위 올림] = ${(withUsRental/10000).toFixed(0)}만 원`;
    withUsMealFormula = `위더스 기본 식대 (${(window.WithUsData.baseMealCost/1000).toFixed(0)}천) ${isOffPeak ? 'x 비수기 혜택 (-3천)' : 'x 표준가'} = ${(withUsMeal/1000).toFixed(0)}천 원`;
  }

  return {
    competitorName: competitor.name,
    rentalFee: calculatedRental,
    mealCost: calculatedMeal,
    minGuarantee: calculatedGuarantee,
    totalEstimatedCost: (calculatedRental + (calculatedMeal * calculatedGuarantee)),
    adviseMent,
    detailReason,
    counterScript,
    links: competitor.reviews,
    isOverridden,
    requiredOptions,
    notes,
    formulas: {
      compRental: rentalFormula,
      compMeal: mealFormula,
      withUsRental: withUsRentalFormula,
      withUsMeal: withUsMealFormula
    },
    withUsEquivalent: {
      rentalFee: withUsRental,
      mealCost: withUsMeal,
      minGuarantee: withUsGuarantee,
      totalEstimatedCost: (withUsRental + (withUsMeal * withUsGuarantee))
    }
  };
};

window.CrawlLogExamples = [
  { 
    source: "다이렉트 결혼준비 카페", 
    text: "[견적 분석] 광명 아이벡스컨벤션 투어 및 견적 - 11m 높은 층고랑 8K 미디어월은 최고인데 미디어 연출 비용이랑 식대가 꽤 높게 잡혔네요.",
    url: "https://blog.naver.com/freshyoung2/224316965715",
    uploadedAt: "2026-06-15"
  },
  { 
    source: "네이버 블로그", 
    text: "[계약/견적] 광명무역센터컨벤션 계약 및 견적 - KTX 광명역 바로 코앞이라 대중교통 접근성이 최고고 단독홀 은하수 조명 연출이 너무 예쁩니다.",
    url: "https://blog.naver.com/ashley700/224308023919",
    uploadedAt: "2026-06-06"
  },
  { 
    source: "다이렉트 결혼준비 카페", 
    text: "[공간/주차] 안양 위더스 단독 건물 투어 - 안양에서 유일한 단독 전용 웨딩빌딩이라 동선이 엄청 편하고 단독 주차빌딩 1000대 수용이라 주차 스트레스 전혀 없었어요.",
    url: "https://blog.naver.com/loesmik/224123607536",
    uploadedAt: "2025-12-26"
  },
  { 
    source: "네이버 블로그", 
    text: "[식사/주차] 평촌 더파티움 단독홀 뷔페 시식 - 평촌역 접근성은 좋은데 주말 본관 만차 시 인근 주차빌딩 분산 주차가 조금 혼란스럽다는 의견입니다.",
    url: "https://blog.naver.com/jiyeapink/224302070357",
    uploadedAt: "2026-05-31"
  },
  { 
    source: "네이버 블로그", 
    text: "[날씨/조도] 빌라드지디 안양 3층 크리스탈캐슬 하우스웨딩 - 천창의 자연광 연출이 정말 예쁘지만 흐린 날에는 내부가 조금 어두울 수 있으며 지하철역에서 멀어 셔틀버스를 타야 합니다.",
    url: "https://blog.naver.com/ellyrama/224297376677",
    uploadedAt: "2026-05-27"
  },
  { 
    source: "네이버 블로그", 
    text: "[식사/연회] 웨딩그룹 위더스 안양 연회장 시식 - 가짓수가 140가지나 되고 라이브 키친 스테이크랑 즉석 요리들이 바로 구워져서 나와 퀄리티가 상당히 만족스럽습니다.",
    url: "https://blog.naver.com/dilkusha119/224127933279",
    uploadedAt: "2025-12-30"
  },
  { 
    source: "네이버 블로그", 
    text: "[교통/주차] 웨딩그룹 위더스 안양 단독주차빌딩 하객 주차 후기 - 명학역과 매우 가깝고 단독 주차 타워에 주차 대기 없이 바로 진입해 혼주와 하객 모두 주차가 편리했다는 후기입니다.",
    url: "https://blog.naver.com/o_jhee/224152211955",
    uploadedAt: "2026-01-19"
  },
  { 
    source: "네이버 블로그", 
    text: "[동선/본식] 빌라드지디 안양 1층 갤러리아홀 계약 및 본식 후기 - 미디어 파사드 연출이 트렌디하고 화사하나 하객이 200명 이상일 때는 홀 내부와 로비가 조금 좁게 느껴집니다.",
    url: "https://blog.naver.com/nyun_aa/224308599353",
    uploadedAt: "2026-06-07"
  },
  { 
    source: "네이버 블로그", 
    text: "[동선/본식] 안양 더파티움 투어 및 계약 후기 - 평촌역 초역세권이라 하객 이동이 편하고 S자형 버진로드가 유니크해서 당일 계약을 결정했다는 후기입니다.",
    url: "https://blog.naver.com/qnseol/224301788033",
    uploadedAt: "2026-05-31"
  },
  { 
    source: "네이버 블로그", 
    text: "[공간/옵션] 광명 아이벡스컨벤션 하이퍼홀 투어 - 웅장한 8K 미디어월 연출에 어울리게 필수 미디어 연출비 등 옵션 견적이 추가되는 부분이 있어 예산 계획 시 고려해야 합니다.",
    url: "https://blog.naver.com/sjwkd28/224298300283",
    uploadedAt: "2026-06-02"
  },
  { 
    source: "네이버 블로그", 
    text: "[교통/주차] 광명무역센터컨벤션 주말 주차 후기 - KTX역 인근으로 하객 이동은 무난하나 주말 오피스 차량 진입 동선이 병합되어 주차 대기시간 지연 발생.",
    url: "https://blog.naver.com/kokijuhy/224272508928",
    uploadedAt: "2026-05-02"
  },
  { 
    source: "네이버 블로그", 
    text: "[공간/본식] 위더스 안양 메리엘홀 투어 및 계약 후기 - 어두운 호텔식 홀 무드와 안양권에서 가장 긴 25m 직선 버진로드가 우아하여 신부 입장 시 주목도가 높습니다.",
    url: "https://blog.naver.com/narae4544/224217552593",
    uploadedAt: "2026-03-15"
  }
];
