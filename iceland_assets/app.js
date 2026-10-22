/**
 * 冰島自助自駕旅遊 2027/1/22–2/3 - 前端核心互動邏輯模組
 * 負責渲染、視圖切換、即時搜尋、主題管理、IntersectionObserver 監聽與燈箱彈窗
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  if (!window.ICELAND_ITINERARY) {
    console.error("找不到 ICELAND_ITINERARY 資料，請確認 itinerary-data.js 已載入。");
    return;
  }

  const data = window.ICELAND_ITINERARY;

  // 1. 初始化主題系統
  initThemeManager();

  // 2. 渲染各模組視圖
  renderStickyNav(data.days);
  renderDetailedCards(data.days);
  renderOverviewTable(data.days);
  renderAccommodations(data.days);

  // 3. 初始化互動監聽
  initViewSwitcher();
  initSearchAndFilter(data.days);
  initScrollSpy();
  initExpandCollapseAll();
  initLightboxModal();
  initLazyBase64Images();
  initBackToTop();
  initPrintHelper();
}

/**
 * 1. 主題管理員 (Theme Manager)
 */
function initThemeManager() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("iceland-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcon("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    updateThemeIcon("light");
  }

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("iceland-theme", next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) {
    btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("title", theme === "dark" ? "切換至日間淺色模式" : "切換至極光深色模式");
  }
}

/**
 * 2. 吸頂日期列渲染 (Sticky Date Pills)
 */
function renderStickyNav(days) {
  const navContainer = document.getElementById("sticky-nav-container");
  if (!navContainer) return;

  navContainer.innerHTML = "";
  days.forEach((day) => {
    const btn = document.createElement("button");
    btn.className = `day-pill ${day.isFlightDay ? "fly" : ""}`;
    btn.dataset.day = day.dayNumber;
    btn.innerHTML = `Day ${day.dayNumber} <span style="font-size:11px;opacity:0.8;">${day.date}</span>`;
    btn.addEventListener("click", () => {
      // 若非詳細行程視圖，自動切換至詳細行程
      switchView("detailed");
      scrollToDay(day.dayNumber);
    });
    navContainer.appendChild(btn);
  });
}

function scrollToDay(dayNum) {
  const card = document.getElementById(`day-card-${dayNum}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * 3. 每日詳細卡片渲染 (Detailed Cards View)
 */
function renderDetailedCards(days) {
  const container = document.getElementById("detailed-cards-container");
  if (!container) return;

  container.innerHTML = "";

  days.forEach((day) => {
    const card = document.createElement("section");
    card.className = `day-card ${day.isFlightDay ? "flight-day" : ""}`;
    card.id = `day-card-${day.dayNumber}`;
    card.dataset.dayNumber = day.dayNumber;
    card.dataset.region = day.region;

    // 檢查是否有地圖與照片
    const mapUrl = window.M ? window.M[day.dayNumber] : null;
    const mapThumb = window.IMG ? window.IMG[day.dayNumber] : null;

    // 景點列表 HTML
    let spotsHtml = "";
    if (day.spots && day.spots.length > 0) {
      const spotItems = day.spots.map((spot, idx) => {
        // Day 2 景點附帶照片（使用延遲載入與全域索引，避免 Base64 塞爆 DOM）
        let photoHtml = "";
        if (day.dayNumber === 2 && ((window.SP && window.SP[idx]) || idx < 4)) {
          photoHtml = `
            <div class="spot-photo-wrapper">
              <div class="spot-photo-thumb" onclick="openSpotLightbox(${idx}, '${spot.name.replace(/'/g, "\\'")}')" title="點擊檢視高解析大圖">
                <img class="lazy-base64" data-sp-idx="${idx}" alt="${spot.name}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E">
                <span class="spot-photo-badge">🔍 點擊放大</span>
              </div>
            </div>`;
        }

        if (spot.desc) {
          return `
            <div class="spot-item">
              <details class="spot-accordion" open>
                <summary>${spot.name}</summary>
                <div class="spot-content-body ${photoHtml ? 'has-photo' : ''}">
                  ${photoHtml}
                  <div class="spot-desc">${spot.desc}</div>
                </div>
              </details>
            </div>`;
        } else {
          return `
            <div class="spot-item">
              <div style="font-weight:600;font-size:14.5px;">📍 ${spot.name}</div>
              ${photoHtml ? `<div class="spot-content-body has-photo">${photoHtml}</div>` : ""}
            </div>`;
        }
      }).join("");

      spotsHtml = `
        <div class="spots-box">
          <div class="spots-label">
            <span>🚩</span> ${day.spotsSectionHeader || "景點與精彩活動安排"}
          </div>
          ${spotItems}
        </div>`;
    }

    // 地圖卡片 HTML（使用按需索引，杜絕數十萬字元 Base64 塞入 onclick）
    let mapHtml = "";
    if (mapUrl) {
      mapHtml = `
        <a class="map-route-card" href="${mapUrl}" target="_blank" rel="noopener noreferrer">
          ${mapThumb ? `
            <div class="map-preview-thumb" onclick="event.preventDefault(); openMapLightbox(${day.dayNumber})" title="點擊檢視放大路線圖">
              <img class="lazy-base64" data-day="${day.dayNumber}" alt="路線預覽" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3C/svg%3E">
              <span class="map-thumb-tag">🔍 路線圖</span>
            </div>` : ""}
          <div class="map-text">
            <div class="map-title">🗺️ Day ${day.dayNumber} Google Maps 導航路線</div>
            <div class="map-sub">${day.driveInfo}・點擊開啟即時地圖規劃</div>
          </div>
          <div class="map-cta">開啟路線 ↗</div>
        </a>`;
    }

    // 標籤 Pills
    const tagsHtml = (day.tags || []).map(t => `<span class="meta-pill">#${t}</span>`).join("");

    card.innerHTML = `
      <!-- 卡片頭部 -->
      <div class="day-header">
        <div class="day-title-group">
          <span class="day-number-badge">Day ${String(day.dayNumber).padStart(2, '0')}</span>
          <div>
            <h2 class="day-heading">
              <span class="day-date-tag">${day.date}（週${day.weekday}）</span>
              ${day.title}
            </h2>
            <div style="font-size:13px;color:var(--text-subtle);margin-top:2px;">
              區域：<strong>${day.region}</strong>
            </div>
          </div>
        </div>
        <div class="day-meta-pills">
          <span class="meta-pill drive">🚗 ${day.driveInfo}</span>
          ${tagsHtml}
        </div>
      </div>

      <!-- 航班與轉機特殊告示 (若有) -->
      ${day.flightOrTransitInfo ? `
        <div class="flight-info-banner">
          <span>✈️</span>
          <div>${day.flightOrTransitInfo}</div>
        </div>` : ""}

      <!-- 自駕路線地圖卡片 (若有) -->
      ${mapHtml}

      <!-- 上午與下午時間軸切塊 -->
      <div class="timeline-grid">
        <div class="timeline-slot">
          <div class="slot-title">🌅 出發 ～ 12:00（上午）</div>
          <div class="slot-content">${day.morningSchedule}</div>
        </div>
        <div class="timeline-slot">
          <div class="slot-title">🌇 12:00 ～ 入住（下午）</div>
          <div class="slot-content">${day.afternoonSchedule}</div>
        </div>
      </div>

      <!-- 住宿模組 -->
      <div class="stay-box">
        <div class="stay-label">🏡 當夜精選住宿</div>
        <div class="stay-name">${day.accommodation.name}</div>
        <div class="stay-details">
          📍 ${day.accommodation.address || day.accommodation.specs}
          ${day.accommodation.notes ? `・<span style="color:var(--text-main);font-weight:600;">${day.accommodation.notes}</span>` : ""}
        </div>
      </div>

      <!-- 冬季出門提醒模組 -->
      <div class="tip-box">
        <div class="tip-label">⚠️ 冬季安全與出門提醒</div>
        <ul>
          ${day.tips.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      <!-- 景點活動清單模組 -->
      ${spotsHtml}
    `;

    container.appendChild(card);
  });
}

/**
 * 4. 行程總覽表格渲染 (Overview Table View)
 */
function renderOverviewTable(days) {
  const tbody = document.getElementById("overview-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  days.forEach((day) => {
    const tr = document.createElement("tr");
    if (day.isFlightDay) tr.className = "flight-row";

    tr.innerHTML = `
      <td class="col-day">Day ${day.dayNumber}</td>
      <td><strong>${day.date}</strong>（${day.weekday}）</td>
      <td>
        <strong>${day.title}</strong>
        <div style="font-size:12px;color:var(--text-subtle);margin-top:2px;">🚗 ${day.driveInfo}・${day.region}</div>
      </td>
      <td>${day.morningSchedule}</td>
      <td>${day.afternoonSchedule}</td>
      <td>
        <strong>${day.accommodation.name}</strong>
        <div style="font-size:12px;color:var(--text-subtle);">${day.accommodation.specs || ""}</div>
      </td>
    `;

    tr.addEventListener("click", () => {
      switchView("detailed");
      scrollToDay(day.dayNumber);
    });

    tbody.appendChild(tr);
  });
}

/**
 * 5. 住宿清單渲染 (Accommodations View)
 */
function renderAccommodations(days) {
  const container = document.getElementById("accommodations-container");
  if (!container) return;

  container.innerHTML = "";

  // 依住宿名稱去重但保留入住天數
  const stayMap = new Map();

  days.forEach((day) => {
    const acc = day.accommodation;
    if (!stayMap.has(acc.name)) {
      stayMap.set(acc.name, {
        name: acc.name,
        address: acc.address || "",
        specs: acc.specs || "",
        notes: acc.notes || "",
        days: [`Day ${day.dayNumber} (${day.date})`]
      });
    } else {
      stayMap.get(acc.name).days.push(`Day ${day.dayNumber} (${day.date})`);
    }
  });

  stayMap.forEach((stay) => {
    const card = document.createElement("div");
    card.className = "acc-card";

    card.innerHTML = `
      <div class="acc-card-header">
        <span class="acc-day-badge">${stay.days.join("、")}</span>
      </div>
      <h3 class="acc-name">${stay.name}</h3>
      <div class="acc-address">📍 ${stay.address || "冰島地區"}</div>
      <div class="acc-features">
        🛏️ 規格：${stay.specs}
      </div>
      ${stay.notes ? `<div class="acc-note">💡 特色提醒：${stay.notes}</div>` : ""}
    `;

    container.appendChild(card);
  });
}

/**
 * 6. 視圖切換邏輯 (View Switcher)
 */
function initViewSwitcher() {
  const tabs = document.querySelectorAll(".view-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const viewKey = tab.dataset.view;
      switchView(viewKey);
    });
  });
}

function switchView(viewKey) {
  // 切換 Tab 狀態
  document.querySelectorAll(".view-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.view === viewKey);
  });

  // 切換 View Section 顯示
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const targetSection = document.getElementById(`view-${viewKey}`);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // 只有詳細視圖顯示吸頂日期條
  const stickyNav = document.getElementById("sticky-nav-wrapper");
  if (stickyNav) {
    stickyNav.style.display = (viewKey === "detailed") ? "block" : "none";
  }
}

/**
 * 7. 即時搜尋與篩選 (Search & Filter)
 */
function initSearchAndFilter(days) {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (clearBtn) clearBtn.classList.toggle("show", query.length > 0);
    filterContent(query, days);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.remove("show");
      filterContent("", days);
      searchInput.focus();
    });
  }
}

function filterContent(query, days) {
  const cards = document.querySelectorAll(".day-card");
  const rows = document.querySelectorAll("#overview-tbody tr");

  if (!query) {
    cards.forEach(c => c.style.display = "");
    rows.forEach(r => r.style.display = "");
    return;
  }

  // 搜尋比對
  days.forEach((day, idx) => {
    const textBlob = [
      `Day ${day.dayNumber}`,
      day.date,
      day.title,
      day.region,
      day.morningSchedule,
      day.afternoonSchedule,
      day.accommodation.name,
      day.accommodation.specs,
      ...(day.tags || []),
      ...(day.tips || []),
      ...(day.spots || []).map(s => s.name + " " + (s.desc || ""))
    ].join(" ").toLowerCase();

    const matches = textBlob.includes(query);
    if (cards[idx]) cards[idx].style.display = matches ? "" : "none";
    if (rows[idx]) rows[idx].style.display = matches ? "" : "none";
  });
}

/**
 * 8. 滾動監聽吸頂日期高亮 (IntersectionObserver ScrollSpy)
 */
function initScrollSpy() {
  const dayCards = document.querySelectorAll(".day-card");
  const navContainer = document.getElementById("sticky-nav-container");
  if (!navContainer || dayCards.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const dayNumber = entry.target.dataset.dayNumber;
        const pills = navContainer.querySelectorAll(".day-pill");
        pills.forEach((p) => {
          const isActive = p.dataset.day === dayNumber;
          p.classList.toggle("active", isActive);
          if (isActive) {
            // 平滑捲動 nav
            navContainer.scrollTo({
              left: p.offsetLeft - navContainer.offsetWidth / 2 + p.offsetWidth / 2,
              behavior: "smooth"
            });
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -70% 0px"
  });

  dayCards.forEach(card => observer.observe(card));
}

/**
 * 9. 全部展開 / 收合景點
 */
function initExpandCollapseAll() {
  const btn = document.getElementById("expand-collapse-btn");
  if (!btn) return;

  let isAllExpanded = true;
  btn.addEventListener("click", () => {
    const details = document.querySelectorAll(".spot-accordion");
    isAllExpanded = !isAllExpanded;
    details.forEach(d => d.open = isAllExpanded);
    btn.innerHTML = isAllExpanded ? "🔼 全部收合" : "🔽 全部展開";
  });
}

/**
 * 10. 圖片燈箱 Modal (Lightbox Modal)
 */
function initLightboxModal() {
  const backdrop = document.getElementById("modal-backdrop");
  const closeBtn = document.getElementById("modal-close");
  if (!backdrop) return;

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop || e.target === closeBtn) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("active")) {
      closeLightbox();
    }
  });
}

function openLightbox(src, title) {
  const backdrop = document.getElementById("modal-backdrop");
  const img = document.getElementById("modal-img");
  const titleEl = document.getElementById("modal-title");
  if (!backdrop || !img) return;

  img.src = src;
  if (titleEl) titleEl.textContent = title || "圖片預覽";
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const backdrop = document.getElementById("modal-backdrop");
  if (!backdrop) return;
  backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function openMapLightbox(dayNum) {
  if (window.IMG && window.IMG[dayNum]) {
    openLightbox(window.IMG[dayNum], `Day ${dayNum} 自駕行車路線地圖`);
  }
}

function openSpotLightbox(spotIdx, spotName) {
  if (window.SP && window.SP[spotIdx]) {
    openLightbox(window.SP[spotIdx], spotName);
  }
}

// 暴露給全域 HTML onclick 使用
window.openLightbox = openLightbox;
window.openMapLightbox = openMapLightbox;
window.openSpotLightbox = openSpotLightbox;

/**
 * 11. 手機極速最佳化：Base64 圖片懶加載 (Lazy Load Base64)
 * 只有滑入可視範圍時才塞入 Base64 進行圖片解碼，徹底解決手機開啟時卡死問題
 */
function initLazyBase64Images() {
  const lazyImages = document.querySelectorAll("img.lazy-base64");
  if (!lazyImages.length) return;

  if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dayNum = img.dataset.day;
          const spIdx = img.dataset.spIdx;

          if (dayNum && window.IMG && window.IMG[dayNum]) {
            img.src = window.IMG[dayNum];
          } else if (spIdx !== undefined && window.SP && window.SP[spIdx]) {
            img.src = window.SP[spIdx];
          }
          img.classList.remove("lazy-base64");
          observer.unobserve(img);
        }
      });
    }, { rootMargin: "150px 0px" });

    lazyImages.forEach(img => imgObserver.observe(img));
  } else {
    // 降級兼容
    lazyImages.forEach((img) => {
      const dayNum = img.dataset.day;
      const spIdx = img.dataset.spIdx;
      if (dayNum && window.IMG && window.IMG[dayNum]) {
        img.src = window.IMG[dayNum];
      } else if (spIdx !== undefined && window.SP && window.SP[spIdx]) {
        img.src = window.SP[spIdx];
      }
    });
  }
}

/**
 * 12. 回頂部按鈕
 */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * 13. 列印優化協助
 */
function initPrintHelper() {
  window.addEventListener("beforeprint", () => {
    // 列印前展開所有摺疊
    document.querySelectorAll(".spot-accordion").forEach(d => d.open = true);
    // 確保所有地圖在列印時被載入
    document.querySelectorAll("img.lazy-base64").forEach((img) => {
      const dayNum = img.dataset.day;
      const spIdx = img.dataset.spIdx;
      if (dayNum && window.IMG && window.IMG[dayNum]) {
        img.src = window.IMG[dayNum];
      } else if (spIdx !== undefined && window.SP && window.SP[spIdx]) {
        img.src = window.SP[spIdx];
      }
    });
  });
}
