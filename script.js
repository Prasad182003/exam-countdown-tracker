/*
  Exam dates used in this dashboard:
  - UIIC AO 2026: Prelims 22 Oct 2026; Mains 30 Nov 2026 (tentative)
  - IBPS RRB Officer Scale I XV: Prelims 21 Nov 2026; Main 20 Dec 2026
  - IBPS RRB Office Assistant XV: Prelims 6 Dec 2026; Main 30 Jan 2027
  - GATE 2027 CSE: Feb 7 2027 (GATE exam window is Feb 6, 7, 13, 14, 20, 21;
    paper-specific allocation should be confirmed from the final admit card)
*/

const exams = [
  {
    name: "UIIC AO 2026",
    stage: "Preliminary Examination",
    date: "2026-10-22",
    tentative: true,
    priority: 1
  },
  {
    name: "UIIC AO 2026",
    stage: "Main Examination",
    date: "2026-11-30",
    tentative: true,
    priority: 2
  },
  {
    name: "IBPS RRB Officer Scale I — XV",
    stage: "Preliminary Examination",
    date: "2026-11-21",
    tentative: false,
    priority: 3
  },
  {
    name: "IBPS RRB Officer Scale I — XV",
    stage: "Main Examination",
    date: "2026-12-20",
    tentative: false,
    priority: 4
  },
  {
    name: "IBPS RRB Office Assistant — XV",
    stage: "Preliminary Examination",
    date: "2026-12-06",
    tentative: false,
    priority: 5
  },
  {
    name: "IBPS RRB Office Assistant — XV",
    stage: "Main Examination",
    date: "2027-01-30",
    tentative: false,
    priority: 6
  },
  {
    name: "GATE 2027 — Computer Science",
    stage: "CS Paper (target date: 7 Feb 2027)",
    date: "2027-02-07",
    tentative: true,
    priority: 7
  }
];

const $ = (id) => document.getElementById(id);

function startOfLocalDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseDateOnly(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysUntil(iso, now = new Date()) {
  const target = parseDateOnly(iso);
  const today = startOfLocalDay(now);
  return Math.ceil((target - today) / 86400000);
}

function formatDate(iso) {
  return parseDateOnly(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function updateYear() {
  const now = new Date();
  const end = new Date(2026, 11, 31, 23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  $("yearDays").textContent = Math.floor(diff / 86400000);
}

function updateToday() {
  $("today").textContent = new Date().toLocaleString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function render() {
  const now = new Date();
  const upcoming = exams
    .map(e => ({ ...e, days: daysUntil(e.date, now) }))
    .sort((a, b) => a.days - b.days || a.priority - b.priority);

  const next = upcoming.find(e => e.days >= 0);

  if (next) {
    $("nextName").textContent = next.name;
    $("nextCount").textContent = next.days === 0 ? "TODAY" : `${next.days} days`;
    $("nextDate").textContent = `${next.stage} • ${formatDate(next.date)}${next.tentative ? " • Tentative" : ""}`;
  } else {
    $("nextName").textContent = "All listed exams completed";
    $("nextCount").textContent = "✓";
    $("nextDate").textContent = "";
  }

  $("examCount").textContent = `${exams.length} milestones`;

  $("examList").innerHTML = upcoming.map(e => {
    const completed = e.days < 0;
    const dayText = completed ? "Completed" : e.days === 0 ? "Today" : e.days;
    return `
      <article class="exam-card ${completed ? "completed" : ""}">
        <div class="exam-top">
          <div>
            <h3 class="exam-title">${e.name}</h3>
            <div class="exam-stage">${e.stage}</div>
          </div>
          ${e.tentative && !completed ? '<span class="badge">Tentative</span>' : ""}
        </div>
        <div class="exam-bottom">
          <div class="days">${dayText}${typeof dayText === "number" ? ' <span>days left</span>' : ""}</div>
          <div class="exam-date">${formatDate(e.date)}</div>
        </div>
      </article>
    `;
  }).join("");

  updateToday();
  updateYear();
}

render();
setInterval(render, 1000);
