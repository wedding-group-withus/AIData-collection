// WithUs AI Counselor Co-Pilot - Application Core Logic
// Modified: Global variables for CORS-free local execution (Double-Click setup)

// Application State
let currentYear = 2026;
let currentMonth = 10;
let currentTimeSlot = 'golden';
let activeNextMove = null;
let crawlIndex = 0;

// DOM Elements
const yearSelect = document.getElementById('wedding-year-select');
const monthSelect = document.getElementById('wedding-month-select');
const timeSlotBtnGroup = document.getElementById('time-slot-btn-group');
const aiMainAdviceText = document.getElementById('ai-main-advice-text');
const nextMoveBannerTrigger = document.getElementById('next-move-banner-trigger');
const nextMovePromptText = document.getElementById('next-move-prompt-text');
const nextMoveActionBtn = document.getElementById('next-move-action-btn');
const competitorsGridContainer = document.getElementById('competitors-grid-container');
const liveStreamFeedContainer = document.getElementById('live-stream-feed-container');
const aiVoiceStatus = document.getElementById('ai-voice-status');
const dateRangeWarning = document.getElementById('date-range-warning');

// Init application
document.addEventListener('DOMContentLoaded', () => {
  // 1. Setup Lucide Icons
  lucide.createIcons();

  // 2. Restore Theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon && themeText) {
      themeIcon.setAttribute('data-lucide', 'moon');
      themeText.textContent = '나이트 모드';
    }
  } else {
    document.body.classList.remove('light-theme');
    if (themeIcon && themeText) {
      themeIcon.setAttribute('data-lucide', 'sun');
      themeText.textContent = '라이트 모드';
    }
  }
  lucide.createIcons(); // render restored theme icon

  // 3. Restore Competitor Overrides from localStorage
  const savedOverrides = localStorage.getItem('competitor_overrides');
  if (savedOverrides) {
    try {
      const parsedOverrides = JSON.parse(savedOverrides);
      window.CompetitorsData.forEach(comp => {
        if (parsedOverrides[comp.id]) {
          comp.overrides = parsedOverrides[comp.id];
        }
      });
    } catch (e) {
      console.error("오버라이드 데이터를 불러오는 데 실패했습니다.", e);
    }
  }

  // Event Listeners
  yearSelect.addEventListener('change', (e) => {
    currentYear = Number(e.target.value);
    updateDashboard();
  });

  monthSelect.addEventListener('change', (e) => {
    currentMonth = Number(e.target.value);
    updateDashboard();
  });

  // Time slot buttons
  timeSlotBtnGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.time-btn');
    if (!btn) return;
    
    // Toggle active state
    timeSlotBtnGroup.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentTimeSlot = btn.dataset.slot;
    updateDashboard();
  });

  // Next move button action
  nextMoveActionBtn.addEventListener('click', () => {
    if (activeNextMove && typeof activeNextMove.action === 'function') {
      activeNextMove.action();
    }
  });

  // Theme Toggle Button Event Listener
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    if (isLight) {
      themeIcon.setAttribute('data-lucide', 'moon');
      themeText.textContent = '나이트 모드';
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.setAttribute('data-lucide', 'sun');
      themeText.textContent = '라이트 모드';
      localStorage.setItem('theme', 'dark');
    }
    // Re-render icons
    lucide.createIcons();
  });

  // Start Crawl Log Simulation
  startCrawlLogSimulation();

  // Start Mobile Blocker text animation loop
  startMobileBlockerTextRotation();

  // Initial Update
  updateDashboard();
});

// Update all components of the dashboard
function updateDashboard() {
  const isOutOfRange = checkDateRangeLimit();
  
  if (isOutOfRange) {
    // Show limit warning banner and apply blur/disable overlay on grid
    dateRangeWarning.style.display = 'block';
    competitorsGridContainer.classList.add('disabled-grid');
    aiMainAdviceText.textContent = `"선택하신 예식 일정(${currentYear}년 ${currentMonth}월)은 가용 조회 범위를 초과하였습니다. 현재(26년 6월) 기준 2년 이내(28년 6월까지)의 일정을 선택해 주십시오."`;
    nextMoveBannerTrigger.style.display = 'none';
  } else {
    // Hide warning banner and restore dashboard rendering
    dateRangeWarning.style.display = 'none';
    competitorsGridContainer.classList.remove('disabled-grid');
    renderAIAdvice();
    renderCompetitorCards();
  }
  
  // Re-initialize icons for dynamically created HTML elements
  lucide.createIcons();
}

// Check if selected year and month exceeds 2-year boundary (June 2028)
function checkDateRangeLimit() {
  if (currentYear > 2028) {
    return true;
  }
  if (currentYear === 2028 && currentMonth > 6) {
    return true;
  }
  return false;
}

// Render AI main recommendation banner and configure "Next Move" proposal
function renderAIAdvice() {
  const isPeak = [4, 5, 9, 10, 11].includes(currentMonth);
  let mainAdvice = "";
  
  if (isPeak) {
    if (currentTimeSlot === 'golden') {
      mainAdvice = `"현재 ${currentMonth}월 성수기 골든타임(11:00~14:50) 상담입니다. 주변 경쟁사들은 높은 보증인원(250~300명)과 연출비 추가 옵션을 가산하는 추세입니다. 위더스는 단독 전용 빌딩의 쾌적한 동선과 보증인원 200명 선에서 유연하게 조율을 제안하여, 실속 있고 품격 높은 예식을 지향하는 상담이 유효합니다."`;
      activeNextMove = {
        text: "광명 아이벡스의 예산 상승 부담을 조율하고 위더스의 메리트를 소개하는 '타사 견적 대응 시뮬레이터'를 사용하시겠습니까?",
        action: () => openSimulatorModal('ibex')
      };
    } else {
      mainAdvice = `"성수기 일반/나이트 타임 상담입니다. 빌라드지디 안양점의 3층 자연 채광 조도 편차 및 셔틀 환승 동선 제약을 대조하여, 위더스 안양점의 날씨 제약 없는 기품 있는 조명 연출과 도보 접근성을 정중히 부각시키십시오."`;
      activeNextMove = {
        text: "빌라드지디 안양점의 날씨 의존 조도 편차 및 셔틀 환승 고려사항을 비교 설명하기 위한 '상담 대본'을 사용하시겠습니까?",
        action: () => openScriptModal('villadegd')
      };
    }
  } else {
    // Off-peak
    mainAdvice = `"${currentMonth}월 비수기 상담입니다. 타사에서 비수기 대관 할인 혜택을 집중 제안할 시기이므로 단순 단가 비교보다는, 안양역사 쇼핑몰 내 일반 유입 고객과의 주차/엘리베이터 동선 혼용 우려 등 하객 편의성 요소를 짚어드리며 '위더스 단독 웨딩빌딩의 쾌적함과 격조'를 차분히 대조하는 것이 좋습니다."`;
    activeNextMove = {
      text: "루이비스 안양점의 안양역 쇼핑몰 인파 교차 혼잡사항을 대조하는 '상담 대본'을 사용하시겠습니까?",
      action: () => openScriptModal('luivis')
    };
  }

  aiMainAdviceText.textContent = mainAdvice;

  // Show "Next Move" banner with the proposed tool launcher
  if (activeNextMove) {
    nextMovePromptText.textContent = activeNextMove.text;
    nextMoveBannerTrigger.style.display = 'flex';
  } else {
    nextMoveBannerTrigger.style.display = 'none';
  }
}

// Render the competitor/venue cards
function renderCompetitorCards() {
  competitorsGridContainer.innerHTML = '';

  window.CompetitorsData.forEach(comp => {
    const strat = window.getStrategy(comp.id, currentMonth, currentTimeSlot);
    if (!strat) return;

    const isWithUs = comp.id === 'withus';
    const card = document.createElement('div');
    card.className = isWithUs ? 'competitor-card withus-card' : 'competitor-card';
    
    // Generate reviews html list
    let reviewsHtml = '';
    strat.links.forEach(link => {
      reviewsHtml += `
        <a href="${link.url}" target="_blank" class="ref-link-item" title="${link.title}">
          <i data-lucide="external-link" style="width: 12px; height: 12px; flex-shrink: 0;"></i>
          [${link.source}] ${link.title}
        </a>
      `;
    });

    const badgeHtml = isWithUs
      ? ''
      : `<span class="advice-badge" style="background: rgba(212, 175, 55, 0.1); border-color: var(--gold); color: var(--gold);">
          ${currentTimeSlot === 'golden' ? '골든' : currentTimeSlot === 'regular' ? '일반' : '나이트'} 타임
        </span>`;

    // Render overrides info badge and box if present
    const overrideInfoHtml = (strat.requiredOptions || strat.notes || strat.isOverridden)
      ? `
        <div class="override-info-box" style="margin-bottom: 20px; background: var(--feed-bg); border: 1.5px dashed var(--gold); padding: 12px; border-radius: 10px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--gold); display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px;">
            <i data-lucide="edit-3" style="width: 12px; height: 12px;"></i>
            수동 업데이트 반영 정보
          </div>
          ${strat.requiredOptions ? `<p style="font-size: 0.8rem; color: var(--text-primary); line-height: 1.4; margin-bottom: 6px;">• <strong>필수선택:</strong> ${strat.requiredOptions}</p>` : ''}
          ${strat.notes ? `<p style="font-size: 0.8rem; color: var(--text-primary); line-height: 1.4;">• <strong>특이사항:</strong> ${strat.notes}</p>` : ''}
        </div>
      `
      : '';

    card.innerHTML = `
      <div>
        <div class="card-header">
          <div>
            <h3 class="comp-name">${comp.name}</h3>
            <span class="comp-loc">
              <i data-lucide="map-pin" style="width: 12px; height: 12px;"></i>
              ${comp.location}
            </span>
          </div>
          ${badgeHtml}
        </div>

        <div class="pricing-box">
          <div class="price-item">
            <span class="price-lbl">${isWithUs ? '위더스 대관료' : '추정 대관료'}</span>
            <span class="price-val">${(strat.rentalFee).toLocaleString()}원</span>
          </div>
          <div class="price-item">
            <span class="price-lbl">${isWithUs ? '위더스 식대' : '추정 식대'}</span>
            <span class="price-val">${(strat.mealCost).toLocaleString()}원</span>
          </div>
          <div class="price-item">
            <span class="price-lbl">${isWithUs ? '기본 보증인원' : '최소 보증인원'}</span>
            <span class="price-val highlight">${strat.minGuarantee}명</span>
          </div>
        </div>

        <div class="strength-weakness-box">
          <div class="sw-item">
            <span class="sw-lbl str">
              <i data-lucide="award" style="width: 14px; height: 14px;"></i>
              고객 유입 강점
            </span>
            <p class="sw-desc">${comp.strengths}</p>
          </div>
          <div class="sw-item" style="margin-bottom: 0;">
            <span class="sw-lbl weak">
              <i data-lucide="info" style="width: 14px; height: 14px;"></i>
              ${isWithUs ? '객관적 고려/보완사항' : '수집된 고객 불편사항'}
            </span>
            <p class="sw-desc">
              ${comp.weaknesses[0]} 
              <span class="voc-link" onclick="openVocModal('${comp.id}')" style="white-space: nowrap;">(외 ${comp.weaknesses.length - 1}건)</span>
            </p>
          </div>
        </div>

        <!-- Overridden settings block -->
        ${overrideInfoHtml}

        <!-- Formula Accordion UI (V2.0 Pricing Spec) -->
        <div class="formula-accordion">
          <button class="formula-toggle-btn" onclick="toggleFormula(this)">
            <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
            ${isWithUs ? '위더스 견적 산출공식 확인' : '추정 견적 산출공식 확인'}
          </button>
          <div class="formula-detail-box">
            <div class="formula-detail-box-inner">
              <div class="formula-step">
                <div class="formula-step-title">
                  <i data-lucide="percent" style="width: 12px; height: 12px;"></i>
                  대관료 산출 수식
                </div>
                <div class="formula-step-expr">${isWithUs ? strat.formulas.withUsRental : strat.formulas.compRental}</div>
              </div>
              <div class="formula-step" style="margin-top: 8px;">
                <div class="formula-step-title">
                  <i data-lucide="percent" style="width: 12px; height: 12px;"></i>
                  식대 산출 수식
                </div>
                <div class="formula-step-expr">${isWithUs ? strat.formulas.withUsMeal : strat.formulas.compMeal}</div>
              </div>
              ${isWithUs ? '' : `
              <div class="formula-step" style="margin-top: 8px; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 8px;">
                <div class="formula-step-title" style="color: var(--gold);">
                  <i data-lucide="sparkles" style="width: 12px; height: 12px;"></i>
                  위더스 안양 대응 수식
                </div>
                <div class="formula-step-expr" style="color: var(--gold); font-size: 0.65rem;">
                  ${strat.formulas.withUsRental}<br>${strat.formulas.withUsMeal}
                </div>
              </div>
              `}
            </div>
          </div>
        </div>

        <div class="reference-box" style="margin-top: 15px;">
          <span class="ref-title">수집된 견적 근거 및 후기</span>
          <div class="ref-link-list">
            ${reviewsHtml}
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 15px;">
        ${isWithUs ? `
          <button class="card-action-btn" onclick="openScriptModal('${comp.id}')" style="border-color: var(--gold); color: var(--gold);">
            <i data-lucide="message-square" style="width: 16px; height: 16px;"></i>
            상담 기본 가이드
          </button>
          <a href="http://withusay.co.kr" target="_blank" class="card-action-btn" style="text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
            위더스 공식 홈페이지
          </a>
          <button class="card-action-btn" style="border-color: var(--gold); color: var(--gold);" onclick="openEditModal('${comp.id}')">
            <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
            정보 업데이트
          </button>
        ` : `
          <button class="card-action-btn" onclick="openScriptModal('${comp.id}')">
            <i data-lucide="message-square" style="width: 16px; height: 16px;"></i>
            정중한 비교대본
          </button>
          <button class="card-action-btn" style="border-color: var(--gold); color: var(--gold);" onclick="openSimulatorModal('${comp.id}')">
            <i data-lucide="calculator" style="width: 16px; height: 16px;"></i>
            견적 비교 계산기
          </button>
          <button class="card-action-btn" style="border-color: var(--gold); color: var(--gold);" onclick="openEditModal('${comp.id}')">
            <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
            정보 업데이트
          </button>
        `}
      </div>
    `;

    competitorsGridContainer.appendChild(card);
  });
}

// Formula Accordion Toggle Handler
window.toggleFormula = (btn) => {
  const box = btn.nextElementSibling;
  const isExpanded = box.classList.contains('active');
  
  if (isExpanded) {
    box.classList.remove('active');
    btn.innerHTML = `<i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>추정 견적 산출공식 확인`;
  } else {
    box.classList.add('active');
    btn.innerHTML = `<i data-lucide="chevron-up" style="width: 14px; height: 14px;"></i>산출공식 접기`;
  }
  lucide.createIcons();
};

// Modal open helper: 약점 카운터 상담 스크립트 모달
window.openScriptModal = (competitorId) => {
  const strat = window.getStrategy(competitorId, currentMonth, currentTimeSlot);
  if (!strat) return;

  const modal = document.getElementById('script-modal-overlay');
  const title = document.getElementById('script-modal-title');
  const chatContainer = document.getElementById('script-chat-container');

  title.textContent = `${strat.competitorName} 불편사항 조율 상담 대본`;
  chatContainer.innerHTML = '';

  strat.counterScript.forEach(bubble => {
    const isCounselor = bubble.role === '위더스 상담원';
    const chatBubble = document.createElement('div');
    chatBubble.className = `chat-bubble ${isCounselor ? 'counselor' : 'customer'}`;
    
    chatBubble.innerHTML = `
      <div class="bubble-speaker">${bubble.role}</div>
      <div class="bubble-text">${bubble.text}</div>
    `;
    chatContainer.appendChild(chatBubble);
  });

  // Next move suggestion dialog inside the modal itself
  const nextMovePromptInModal = document.createElement('div');
  nextMovePromptInModal.className = 'next-move-trigger';
  nextMovePromptInModal.style.marginTop = '20px';
  nextMovePromptInModal.innerHTML = `
    <div class="next-move-text">
      <i data-lucide="calculator" style="width: 18px; height: 18px; color: var(--gold);"></i>
      <span>이 경쟁사 견적으로 실제 견적비교 계산기를 즉석 연동하시겠습니까?</span>
    </div>
    <button class="next-move-btn" onclick="closeModal('script-modal-overlay'); openSimulatorModal('${competitorId}')">
      계산기 오픈
      <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
    </button>
  `;
  chatContainer.appendChild(nextMovePromptInModal);
  
  modal.classList.add('active');
  lucide.createIcons();
};

// Modal open helper: 견적 비교 시뮬레이터 모달
window.openSimulatorModal = (competitorId) => {
  const strat = window.getStrategy(competitorId, currentMonth, currentTimeSlot);
  if (!strat) return;

  const modal = document.getElementById('simulator-modal-overlay');
  const title = document.getElementById('simulator-modal-title');
  const compNameLbl = document.getElementById('sim-comp-name-lbl');
  
  // Set target inputs
  const compRentalInput = document.getElementById('sim-comp-rental');
  const compMealInput = document.getElementById('sim-comp-meal');
  const compGuaranteeInput = document.getElementById('sim-comp-guarantee');

  title.textContent = `${strat.competitorName} vs 위더스 안양 견적 시뮬레이션`;
  compNameLbl.textContent = `${strat.competitorName} 총액`;

  // Set default values matching the current filtered states
  compRentalInput.value = strat.rentalFee;
  compMealInput.value = strat.mealCost;
  compGuaranteeInput.value = strat.minGuarantee;

  // Add event listeners for dynamic updates
  const updateHandler = () => {
    updateSimulation(competitorId);
  };

  compRentalInput.oninput = updateHandler;
  compMealInput.oninput = updateHandler;
  compGuaranteeInput.oninput = updateHandler;

  // Run initial simulation calculation
  updateSimulation(competitorId);

  modal.classList.add('active');
};

// Calculate and render visual bar graphs in simulator
function updateSimulation(competitorId) {
  const strat = window.getStrategy(competitorId, currentMonth, currentTimeSlot);
  if (!strat) return;

  const compRental = Number(document.getElementById('sim-comp-rental').value) || 0;
  const compMeal = Number(document.getElementById('sim-comp-meal').value) || 0;
  const compGuarantee = Number(document.getElementById('sim-comp-guarantee').value) || 0;

  const compTotal = compRental + (compMeal * compGuarantee);

  // We fetch WithUs equivalent pricing
  const withUsRental = strat.withUsEquivalent.rentalFee;
  const withUsMeal = strat.withUsEquivalent.mealCost;
  const withUsGuarantee = Math.min(compGuarantee, strat.withUsEquivalent.minGuarantee); // matching guarantee comparison

  const withUsTotal = withUsRental + (withUsMeal * withUsGuarantee);
  const saveAmount = compTotal - withUsTotal;

  // Render text results
  document.getElementById('sim-comp-total-lbl').textContent = `${compTotal.toLocaleString()}원`;
  document.getElementById('sim-withus-total-lbl').textContent = `${withUsTotal.toLocaleString()}원`;
  
  const saveAmountBox = document.getElementById('sim-save-amount');
  if (saveAmount > 0) {
    saveAmountBox.innerHTML = `위더스 안양점 계약 시 <span style="font-size: 1.3rem; font-weight: 700; color: #81C784;">약 ${saveAmount.toLocaleString()}원</span> 절감 효과`;
  } else if (saveAmount === 0) {
    saveAmountBox.textContent = `두 베뉴의 견적이 동일하게 매칭됩니다.`;
  } else {
    saveAmountBox.innerHTML = `위더스가 약 ${Math.abs(saveAmount).toLocaleString()}원 추가되나, <span style="color: var(--gold);">단독 전용 주차타워와 고품격 즉석 연회 퀄리티</span>로 충분히 극복 가능합니다.`;
  }

  // Adjust bar widths
  const maxTotal = Math.max(compTotal, withUsTotal) || 1;
  const compBarWidth = (compTotal / maxTotal) * 100;
  const withUsBarWidth = (withUsTotal / maxTotal) * 100;

  document.getElementById('sim-comp-bar').style.width = `${compBarWidth}%`;
  document.getElementById('sim-withus-bar').style.width = `${withUsBarWidth}%`;
}

// Modal close helper
window.closeModal = (modalId) => {
  document.getElementById(modalId).classList.remove('active');
};

// Simulated crawling stream logic
function startCrawlLogSimulation() {
  // Seed initial logs
  for (let i = 0; i < 4; i++) {
    addCrawlLog();
  }

  // Set interval to push a new crawl log entry every 30 seconds
  setInterval(() => {
    addCrawlLog();
    triggerWaveformPulse();
  }, 30000);
}

function addCrawlLog() {
  if (!window.CrawlLogExamples || window.CrawlLogExamples.length === 0) return;
  
  // Use sequential index loop to avoid duplicates
  const log = window.CrawlLogExamples[crawlIndex];
  crawlIndex = (crawlIndex + 1) % window.CrawlLogExamples.length;
  
  const feedContainer = liveStreamFeedContainer;

  const item = document.createElement('a');
  item.href = log.url;
  item.target = '_blank';
  item.className = 'feed-item';
  item.style.textDecoration = 'none';
  item.style.display = 'block';

  // Parse tag brackets like [견적 분석] from log text using regular expression
  let tagHtml = '';
  let displayText = log.text;
  
  const tagMatch = log.text.match(/^\[(.*?)\]\s*(.*)$/);
  if (tagMatch) {
    const tagText = tagMatch[1];
    displayText = tagMatch[2];
    tagHtml = `<span class="feed-tag-badge">${tagText}</span>`;
  }

  item.innerHTML = `
    <div class="feed-header">
      <span class="feed-source">${log.source}</span>
      <span>${log.uploadedAt} 작성</span>
    </div>
    <div class="feed-body-layout" style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
      <div style="display: flex; justify-content: flex-start;">
        ${tagHtml}
      </div>
      <div class="feed-text" style="font-size: 0.78rem; line-height: 1.4;">${displayText}</div>
    </div>
  `;

  feedContainer.insertBefore(item, feedContainer.firstChild);

  // Keep max logs to 12 to avoid memory bloat
  if (feedContainer.children.length > 12) {
    feedContainer.removeChild(feedContainer.lastChild);
  }
}

// Make AI waveform flash briefly when new data is parsed
function triggerWaveformPulse() {
  aiVoiceStatus.textContent = "새로운 커뮤니티 VOC 데이터를 분석하여 대시보드 및 공략 포인트를 업데이트했습니다.";
  aiVoiceStatus.style.color = 'var(--gold)';
  
  // Set status tag pulse speed
  const statusDot = document.querySelector('.ai-status-dot');
  if (statusDot) {
    statusDot.style.animationDuration = '0.3s';
  }

  setTimeout(() => {
    aiVoiceStatus.textContent = "상담 조건에 맞춰 최선의 상담 전략 and 가격 우위 제안을 분석 중입니다.";
    aiVoiceStatus.style.color = 'var(--text-secondary)';
    if (statusDot) {
      statusDot.style.animationDuration = '1.5s';
    }
  }, 4000);
}

// 정보 업데이트 모달 열기
window.openEditModal = (competitorId) => {
  const competitor = window.CompetitorsData.find(c => c.id === competitorId);
  if (!competitor) return;

  const modal = document.getElementById('edit-modal-overlay');
  const title = document.getElementById('edit-modal-title');
  const compIdInput = document.getElementById('edit-comp-id');
  
  const monthInput = document.getElementById('edit-comp-month');
  const timeInput = document.getElementById('edit-comp-time');

  title.textContent = `${competitor.name} 정보 수정`;
  compIdInput.value = competitorId;

  // 기본적으로 현재 대시보드의 필터 월 및 시간대를 기본값으로 세팅
  monthInput.value = currentMonth;
  timeInput.value = currentTimeSlot;

  // 해당 월/시간대의 기존 데이터 로드
  loadCurrentOverrideData();

  modal.classList.add('active');
};

// 현재 모달에 선택된 월/시간대에 맞춰 인풋 필드 채우기
window.loadCurrentOverrideData = () => {
  const competitorId = document.getElementById('edit-comp-id').value;
  const competitor = window.CompetitorsData.find(c => c.id === competitorId);
  if (!competitor) return;

  const targetMonth = document.getElementById('edit-comp-month').value;
  const targetTime = document.getElementById('edit-comp-time').value;

  // getStrategy를 활용해 현재 시점의 최종 가격(오버라이드 적용 또는 기본 계산 가격)을 조회
  const currentStrat = window.getStrategy(competitorId, targetMonth, targetTime);
  
  const rentalInput = document.getElementById('edit-comp-rental');
  const mealInput = document.getElementById('edit-comp-meal');
  const guaranteeInput = document.getElementById('edit-comp-guarantee');
  const requiredInput = document.getElementById('edit-comp-required');
  const notesInput = document.getElementById('edit-comp-notes');

  if (currentStrat) {
    rentalInput.value = currentStrat.rentalFee;
    mealInput.value = currentStrat.mealCost;
    guaranteeInput.value = currentStrat.minGuarantee;
    requiredInput.value = currentStrat.requiredOptions || "";
    notesInput.value = currentStrat.notes || "";
  }
};

// 정보 업데이트 저장
window.saveCompetitorOverride = () => {
  const competitorId = document.getElementById('edit-comp-id').value;
  const competitor = window.CompetitorsData.find(c => c.id === competitorId);
  if (!competitor) return;

  const targetMonth = document.getElementById('edit-comp-month').value;
  const targetTime = document.getElementById('edit-comp-time').value;

  const rentalFee = Number(document.getElementById('edit-comp-rental').value) || 0;
  const mealCost = Number(document.getElementById('edit-comp-meal').value) || 0;
  const minGuarantee = Number(document.getElementById('edit-comp-guarantee').value) || 0;
  const requiredOptions = document.getElementById('edit-comp-required').value.trim();
  const notes = document.getElementById('edit-comp-notes').value.trim();

  if (!competitor.overrides) {
    competitor.overrides = {};
  }

  const overrideKey = `${targetMonth}-${targetTime}`;
  competitor.overrides[overrideKey] = {
    rentalFee,
    mealCost,
    minGuarantee,
    requiredOptions,
    notes
  };

  // localStorage에 전체 overrides 보관
  const allOverrides = {};
  window.CompetitorsData.forEach(c => {
    if (c.overrides && Object.keys(c.overrides).length > 0) {
      allOverrides[c.id] = c.overrides;
    }
  });
  localStorage.setItem('competitor_overrides', JSON.stringify(allOverrides));

  // 대시보드 및 연동된 계산기/요소 갱신
  updateDashboard();

  // 모달 닫기
  closeModal('edit-modal-overlay');
};

// 경쟁사 VOC 상세 모달 열기
window.openVocModal = (competitorId) => {
  const competitor = window.CompetitorsData.find(c => c.id === competitorId);
  if (!competitor) return;

  const modal = document.getElementById('voc-modal-overlay');
  const title = document.getElementById('voc-modal-title');
  const listContainer = document.getElementById('voc-list-container');

  title.textContent = `${competitor.name} 불편사항`;
  listContainer.innerHTML = '';

  competitor.weaknesses.forEach((weak, idx) => {
    const item = document.createElement('div');
    item.className = 'voc-item';
    item.style.padding = '12px';
    item.style.background = 'var(--inner-bg)';
    item.style.border = '1px solid var(--inner-border)';
    item.style.borderRadius = '8px';
    item.style.fontSize = '0.85rem';
    item.style.lineHeight = '1.5';
    item.style.color = 'var(--text-primary)';
    item.style.textAlign = 'justify';
    item.style.wordBreak = 'keep-all';
    
    item.innerHTML = `<strong style="color: var(--rose-gold); margin-right: 6px;">[사례 ${idx + 1}]</strong> ${weak}`;
    listContainer.appendChild(item);
  });

  modal.classList.add('active');
  lucide.createIcons();
};

// V5.0: Mobile Blocker Overlay Text Rotation Animation
function startMobileBlockerTextRotation() {
  const textEl = document.getElementById('mobile-blocker-text');
  if (!textEl) return;
  
  const messages = [
    "[모바일 환경에서는 사용하실수 없습니다.]",
    "[데스크탑 에서 사용하시길 바랍니다.]"
  ];
  let index = 0;
  
  // Apply initial inline styles for transition
  textEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  textEl.style.opacity = '1';
  textEl.style.transform = 'translateY(0)';
  
  setInterval(() => {
    // Slide down & Fade out
    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(8px)';
    
    setTimeout(() => {
      index = (index + 1) % messages.length;
      textEl.textContent = messages[index];
      
      // Set starting position for slide in (from top)
      textEl.style.transform = 'translateY(-8px)';
      
      // Force repaint to make the sudden jump register before transitioning
      textEl.offsetHeight;
      
      // Slide back to normal & Fade in
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateY(0)';
    }, 400);
  }, 3000);
}
