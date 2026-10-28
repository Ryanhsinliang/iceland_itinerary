/**
 * 冰島自助自駕旅遊 2027/1/22–2/3 - 前端核心互動與渲染邏輯模組
 * 負責詳細行程、總覽對照表、住宿總覽、冬季自駕安全、互動打勾清單渲染與主題切換
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
  renderAccommodations(data.accommodations || data.days);
  renderWinterGuide(data);
  renderChecklistView(data.checklists);

  // 3. 初始化互動監聽
  initViewSwitcher();
  initSearchAndFilter(data.days);
  initScrollSpy();
  initExpandCollapseAll();
  initLightboxModal();
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
 * 2. 吸頂日期列渲染 (Sticky Date Navigation)
 */
function renderStickyNav(days) {
  const navContainer = document.getElementById("sticky-nav-container");
  if (!navContainer) return;

  navContainer.innerHTML = "";
  days.forEach((day) => {
    const btn = document.createElement("button");
    btn.className = `day-pill ${day.isFlightDay ? "fly" : ""}`;
    btn.dataset.day = day.dayNumber;
    btn.innerHTML = `Day ${day.dayNumber} <span style="font-size:11px;opacity:0.85;">${day.date}</span>`;
    btn.addEventListener("click", () => {
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

    // 地圖與縮圖
    const mapUrl = day.mapUrl || (window.M ? window.M[day.dayNumber] : null);
    const mapImg = day.mapImage || (window.IMG ? window.IMG[day.dayNumber] : null);

    // 景點列表 HTML
    let spotsHtml = "";
    if (day.spots && day.spots.length > 0) {
      const spotItems = day.spots.map((spot) => {
        // 照片 HTML
        let photoHtml = "";
        const imgSrc = spot.image || (spot.imgSrc ? spot.imgSrc : null);
        if (imgSrc) {
          const safeName = (spot.name || "").replace(/'/g, "\\'");
          photoHtml = `
            <div class="spot-photo-wrapper">
              <div class="spot-photo-thumb" onclick="openLightbox('${imgSrc}', '${safeName}')" title="點擊檢視高解析大圖">
                <img loading="lazy" src="${imgSrc}" alt="${spot.name}">
                <span class="spot-photo-badge">🔍 點擊看大圖</span>
              </div>
            </div>`;
        }

        // 結構化景點內容（由來、看點、提醒）
        let contentHtml = "";
        if (spot.origin || spot.highlights || spot.tips) {
          contentHtml = `
            <div class="spot-rich-desc">
              ${spot.sub ? `<div class="spot-sub-title">📍 ${spot.sub}</div>` : ""}
              ${spot.origin ? `
                <div class="spot-block origin-block">
                  <div class="block-label">🏛️ 由來典故</div>
                  <div class="block-text">${spot.origin}</div>
                </div>` : ""}
              ${spot.highlights ? `
                <div class="spot-block highlights-block">
                  <div class="block-label">🔭 核心看點</div>
                  <div class="block-text">${spot.highlights}</div>
                </div>` : ""}
              ${spot.tips ? `
                <div class="spot-block tips-block">
                  <div class="block-label">💡 參觀提醒與費用</div>
                  <div class="block-text">${spot.tips}</div>
                </div>` : ""}
            </div>`;
        } else if (spot.desc) {
          contentHtml = `<div class="spot-desc">${spot.desc}</div>`;
        }

        return `
          <div class="spot-item">
            <details class="spot-accordion" open>
              <summary>${spot.name}</summary>
              <div class="spot-content-body ${photoHtml ? 'has-photo' : ''}">
                ${photoHtml}
                ${contentHtml}
              </div>
            </details>
          </div>`;
      }).join("");

      spotsHtml = `
        <div class="spots-box">
          <div class="spots-label">
            <span>🚩</span> ${day.spotsSectionHeader || "景點與精彩活動安排"}
          </div>
          ${spotItems}
        </div>`;
    }

    // 地圖卡片 HTML
    let mapHtml = "";
    if (mapUrl) {
      mapHtml = `
        <div class="map-route-card">
          ${mapImg ? `
            <div class="map-preview-thumb" onclick="openLightbox('${mapImg}', 'Day ${day.dayNumber} 自駕行車路線地圖')" title="點擊檢視放大路線圖">
              <img loading="lazy" src="${mapImg}" alt="Day ${day.dayNumber} 路線地圖">
              <span class="map-thumb-tag">🔍 路線圖</span>
            </div>` : ""}
          <div class="map-text">
            <div class="map-title">🗺️ Day ${day.dayNumber} Google Maps 導航路線</div>
            <div class="map-sub">${day.driveInfo}・點擊開啟即時地圖路徑規劃</div>
          </div>
          <a class="map-cta" href="${mapUrl}" target="_blank" rel="noopener noreferrer">開啟路線 ↗</a>
        </div>`;
    }

    // 標籤 Pills
    const tagsHtml = (day.tags || []).map(t => `<span class="meta-pill">#${t}</span>`).join("");

    // 住宿連結（若 day.accommodation 內無 link，自動從全域 accommodations 比對 name 補齊）
    const accObj = (window.ICELAND_ITINERARY && window.ICELAND_ITINERARY.accommodations)
      ? window.ICELAND_ITINERARY.accommodations.find(a => a.name === day.accommodation.name)
      : null;
    const accLink = (day.accommodation && day.accommodation.link) || (accObj ? accObj.link : null);

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

      <!-- 每日三段時間軸 (依 PPTX 總覽標準結構) -->
      <div class="timeline-grid three-slots">
        <div class="timeline-slot">
          <div class="slot-title">🌅 出發 ～ 12:00（上午）</div>
          <div class="slot-content">${day.morningSchedule}</div>
        </div>
        <div class="timeline-slot">
          <div class="slot-title">🌇 12:00 ～ 回到住宿（下午）</div>
          <div class="slot-content">${day.afternoonSchedule}</div>
        </div>
        <div class="timeline-slot night-slot">
          <div class="slot-title">🌌 回到住宿 ～ 24:00（晚間）</div>
          <div class="slot-content">${day.nightSchedule || "自煮晚餐 ＋ 守候極光 ＋ 充足休息"}</div>
        </div>
      </div>

      <!-- 住宿模組 -->
      <div class="stay-box">
        <div class="stay-label">🏡 當夜精選住宿</div>
        <div class="stay-name">
          ${accLink ? `<a href="${accLink}" target="_blank" rel="noopener noreferrer">${day.accommodation.name} ↗</a>` : day.accommodation.name}
        </div>
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
 * 4. 行程總覽對照表渲染 (Overview Table View)
 */
function renderOverviewTable(days) {
  const tbody = document.getElementById("overview-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  days.forEach((day) => {
    const tr = document.createElement("tr");
    if (day.isFlightDay) tr.className = "row-flight";

    tr.innerHTML = `
      <td><span class="day-badge-small">Day ${day.dayNumber}</span></td>
      <td><strong>${day.date}</strong>（${day.weekday}）</td>
      <td>
        <div style="font-weight:700;color:var(--text-main);">${day.title}</div>
        <div style="font-size:12px;color:var(--text-subtle);margin-top:2px;">
          📍 ${day.region}・🚗 ${day.driveInfo}
        </div>
      </td>
      <td>${day.morningSchedule}</td>
      <td>${day.afternoonSchedule}</td>
      <td>${day.nightSchedule || "晚餐＋等極光＋休息"}</td>
      <td>
        <strong>${day.accommodation.name}</strong>
        <div style="font-size:12px;color:var(--text-muted);">${day.accommodation.specs}</div>
      </td>
    `;

    // 點擊整行跳轉至對應日詳細卡片
    tr.style.cursor = "pointer";
    tr.addEventListener("click", () => {
      switchView("detailed");
      scrollToDay(day.dayNumber);
    });

    tbody.appendChild(tr);
  });
}

/**
 * 5. 住宿清單模組渲染 (Accommodations View)
 */
function renderAccommodations(items) {
  const container = document.getElementById("accommodations-container");
  if (!container) return;

  container.innerHTML = "";

  items.forEach((acc) => {
    const card = document.createElement("div");
    card.className = "hotel-card";

    const featuresHtml = (acc.features || []).map(f => `<span class="hotel-feature-tag">✓ ${f}</span>`).join("");

    card.innerHTML = `
      <div class="hotel-header">
        <div class="hotel-name">
          ${acc.link ? `<a href="${acc.link}" target="_blank" rel="noopener noreferrer">${acc.name} ↗</a>` : acc.name}
        </div>
        <span class="hotel-stay-count">${acc.nights}</span>
      </div>
      <div class="hotel-meta">
        📍 <strong>${acc.location || acc.address}</strong>
      </div>
      <div class="hotel-meta" style="margin-top:4px;">
        🛏️ ${acc.specs}
      </div>
      <div class="hotel-features">
        ${featuresHtml}
      </div>
      <div class="hotel-desc">
        ${acc.desc || acc.notes}
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * 6. 冬季自駕與安全守則渲染 (Winter Driving & Safety View)
 */
function renderWinterGuide(data) {
  const container = document.getElementById("guide-rules-container");
  if (!container) return;

  let html = "";

  // 雙車配置與行李規則 (Slides 51, 58)
  if (data.vehicleInfo) {
    const v = data.vehicleInfo;
    html += `
      <div class="guide-vehicle-panel">
        <div class="panel-header">
          <h3>🚙 團隊自駕車輛配置（${v.teamSize} · 兩台四驅 SUV）</h3>
          <p>RAV4 與 Land Cruiser 車型特性不同，滿載 7 人時煞車距離變長，行車務必保守輕柔。</p>
        </div>
        <div class="vehicles-grid">
          ${v.vehicles.map(car => `
            <div class="vehicle-card">
              <div class="vehicle-model">${car.model}</div>
              <div class="vehicle-role">${car.role}</div>
              <div class="vehicle-features"><strong>特性：</strong>${car.features}</div>
              <div class="vehicle-cautions"><strong>操作注意：</strong>${car.cautions}</div>
            </div>
          `).join("")}
        </div>
        <div class="luggage-rules-box">
          <div class="box-title">🧳 行李空間與裝載黃金法則</div>
          <ul>
            ${v.luggageRules.map(r => `<li>${r}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  // 核心安全法則分類 (Slides 53–57, 59)
  if (data.winterDrivingRules) {
    html += `<div class="guide-grid-cards">`;
    data.winterDrivingRules.forEach(rule => {
      html += `
        <div class="guide-card">
          <h3>${rule.category}</h3>
          <ul>
            ${rule.items.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

/**
 * 7. 互動式行前準備打勾清單 (Interactive Checklist View)
 */
function renderChecklistView(checklists) {
  const container = document.getElementById("checklist-container");
  if (!container || !checklists) return;

  const savedState = JSON.parse(localStorage.getItem("iceland_checklist") || "{}");

  const buildSection = (title, items) => {
    // 依 category 分組
    const groups = {};
    items.forEach(item => {
      groups[item.cat] = groups[item.cat] || [];
      groups[item.cat].push(item);
    });

    let sectionHtml = `<div class="checklist-section"><h3 class="checklist-section-title">${title}</h3>`;
    for (const cat in groups) {
      sectionHtml += `
        <div class="checklist-category-card">
          <div class="category-title">📂 ${cat}</div>
          <div class="checklist-items-list">
            ${groups[cat].map(item => {
        const checked = !!savedState[item.id];
        return `
                <label class="check-item ${checked ? 'completed' : ''}" data-id="${item.id}">
                  <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleChecklistItem('${item.id}', this.checked)">
                  <span class="custom-checkmark"></span>
                  <span class="check-text">${item.text}</span>
                </label>`;
      }).join("")}
          </div>
        </div>`;
    }
    sectionHtml += `</div>`;
    return sectionHtml;
  };

  container.innerHTML = `
    <div class="checklist-dashboard">
      <div class="progress-wrap">
        <div class="progress-label">
          <span>🎒 行前打包與檢查進度</span>
          <span id="checklist-progress-text">0 / 0</span>
        </div>
        <div class="progress-bar-bg">
          <div id="checklist-progress-fill" class="progress-bar-fill" style="width:0%"></div>
        </div>
      </div>
      <button class="btn-reset-checklist" onclick="resetChecklist()" title="清除所有勾選狀態">重設打勾清單</button>
    </div>
    <div class="checklist-columns">
      ${buildSection("📄 證件、保險、憑證與手機 App", checklists.documentsAndApps || [])}
      ${buildSection("🧥 衣著裝備、隨身自炊與租車安全", checklists.clothingAndEquipment || [])}
    </div>
  `;

  updateChecklistProgress();
}

function toggleChecklistItem(id, isChecked) {
  const savedState = JSON.parse(localStorage.getItem("iceland_checklist") || "{}");
  savedState[id] = isChecked;
  localStorage.setItem("iceland_checklist", JSON.stringify(savedState));

  const label = document.querySelector(`.check-item[data-id="${id}"]`);
  if (label) {
    label.classList.toggle("completed", isChecked);
  }
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const allCheckboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
  const checkedBoxes = document.querySelectorAll('.check-item input[type="checkbox"]:checked');
  const total = allCheckboxes.length;
  const done = checkedBoxes.length;

  const textEl = document.getElementById("checklist-progress-text");
  const fillEl = document.getElementById("checklist-progress-fill");

  if (textEl && fillEl && total > 0) {
    const pct = Math.round((done / total) * 100);
    textEl.textContent = `已完成 ${done} / ${total} 項（${pct}%）`;
    fillEl.style.width = `${pct}%`;
  }
}

function resetChecklist() {
  if (confirm("確定要重設所有打勾清單嗎？已勾選狀態將會被清除。")) {
    localStorage.removeItem("iceland_checklist");
    if (window.ICELAND_ITINERARY && window.ICELAND_ITINERARY.checklists) {
      renderChecklistView(window.ICELAND_ITINERARY.checklists);
    }
  }
}

// 暴露全域給 HTML onchange/onclick
window.toggleChecklistItem = toggleChecklistItem;
window.resetChecklist = resetChecklist;

/**
 * 8. 視圖切換器 (View Switcher Tabs)
 */
function initViewSwitcher() {
  const tabs = document.querySelectorAll(".view-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const viewName = tab.dataset.view;
      switchView(viewName);
    });
  });
}

function switchView(viewName) {
  // 更新 Tabs 樣式
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  // 更新 View Sections 顯示
  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `view-${viewName}`);
  });

  // 控制吸頂日期快速切換列（只在詳細行程視圖顯示）
  const stickyNav = document.getElementById("sticky-nav-wrapper");
  if (stickyNav) {
    stickyNav.style.display = viewName === "detailed" ? "" : "none";
  }
}

/**
 * 9. 即時搜尋與篩選 (Search & Filter)
 */
function initSearchAndFilter(days) {
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  if (!searchInput) return;

  let debounceTimer = null;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = e.target.value.trim().toLowerCase();
      if (searchClear) searchClear.classList.toggle("show", q.length > 0);
      filterContent(q, days);
    }, 180);
  });

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.classList.remove("show");
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

  days.forEach((day, idx) => {
    const textBlob = [
      `Day ${day.dayNumber}`,
      day.date,
      day.title,
      day.region,
      day.morningSchedule,
      day.afternoonSchedule,
      day.nightSchedule,
      day.accommodation.name,
      day.accommodation.specs,
      ...(day.tags || []),
      ...(day.tips || []),
      ...(day.spots || []).map(s => `${s.name} ${s.sub || ''} ${s.origin || ''} ${s.highlights || ''} ${s.tips || ''} ${s.desc || ''}`)
    ].join(" ").toLowerCase();

    const matches = textBlob.includes(query);
    if (cards[idx]) cards[idx].style.display = matches ? "" : "none";
    if (rows[idx]) rows[idx].style.display = matches ? "" : "none";
  });
}

/**
 * 10. 滾動監聽吸頂日期高亮 (IntersectionObserver ScrollSpy)
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
 * 11. 全部展開 / 全部收合
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
 * 12. 圖片燈箱 Modal (Lightbox Modal)
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

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

/**
 * 13. 回頂部按鈕
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
 * 14. 列印最佳化
 */
function initPrintHelper() {
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll(".spot-accordion").forEach(d => d.open = true);
  });
}
