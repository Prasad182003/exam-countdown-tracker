/*
  Personal Exam Countdown + Syllabus Tracker
  Dates are kept here so the countdown stays fully client-side.
*/

const exams = [
  {
    id: "uiic-pre",
    name: "UIIC AO 2026",
    stage: "Preliminary Examination",
    date: "2026-10-22",
    tentative: true,
    priority: 1,
    syllabus: [
      ["English Language", ["Reading Comprehension", "Cloze Test", "Error Detection / Spotting", "Fill in the Blanks", "Sentence Improvement", "Para Jumbles / Sentence Rearrangement", "Vocabulary: Synonyms, Antonyms, Word Usage", "Grammar, Idioms & Phrases"]],
      ["Reasoning", ["Puzzles & Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Order & Ranking", "Alphanumeric / Number Series", "Analogy & Classification", "Input-Output", "Data Sufficiency", "Logical Reasoning"]],
      ["Quantitative Aptitude", ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Simple & Compound Interest", "Time & Work", "Time, Speed & Distance", "Mixture & Alligation", "Mensuration", "Data Interpretation", "Arithmetic Word Problems"]]
    ]
  },
  {
    id: "uiic-main",
    name: "UIIC AO 2026",
    stage: "Main Examination — Generalist",
    date: "2026-11-30",
    tentative: true,
    priority: 2,
    syllabus: [
      ["English Language", ["Reading Comprehension", "Error Detection", "Sentence Improvement", "Fillers / Cloze Test", "Para Jumbles", "Vocabulary & Word Usage", "Grammar", "Essay Writing", "Letter Writing"]],
      ["Reasoning", ["Puzzles & Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Ranking", "Series", "Input-Output", "Data Sufficiency", "Logical / Analytical Reasoning"]],
      ["Quantitative Aptitude", ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Arithmetic", "Percentage", "Ratio", "Average", "Profit & Loss", "Interest", "Time & Work", "Time-Speed-Distance", "Mixtures", "Mensuration", "Data Interpretation"]],
      ["General Awareness — Financial Sector", ["Current Affairs", "Banking & Insurance Awareness", "RBI & Monetary Policy", "Financial Markets", "Government Schemes", "Union Budget & Economic Survey", "Economic / Financial Terms", "Insurance Sector & Regulatory Awareness", "Important National & International Financial Developments"]],
      ["Computer Knowledge", ["Computer Fundamentals", "Hardware & Software", "Operating Systems", "MS Office", "Internet & Networking", "DBMS Basics", "Cyber Security", "Computer Abbreviations & Shortcuts"]]
    ]
  },
  {
    id: "rrb-officer-pre",
    name: "IBPS RRB Officer Scale I — XV",
    stage: "Preliminary Examination",
    date: "2026-11-21",
    tentative: false,
    priority: 3,
    syllabus: [
      ["Reasoning", ["Puzzles & Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Order & Ranking", "Alphanumeric Series", "Analogy", "Classification", "Input-Output", "Data Sufficiency", "Logical Reasoning"]],
      ["Quantitative Aptitude", ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Simple & Compound Interest", "Time & Work", "Pipes & Cisterns", "Time, Speed & Distance", "Boats & Streams", "Mixture & Alligation", "Mensuration", "Data Interpretation", "Probability & Permutation/Combination basics"]]
    ]
  },
  {
    id: "rrb-officer-main",
    name: "IBPS RRB Officer Scale I — XV",
    stage: "Main Examination",
    date: "2026-12-20",
    tentative: false,
    priority: 4,
    syllabus: [
      ["Reasoning", ["Puzzles & Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Ranking", "Series", "Input-Output", "Data Sufficiency", "Logical / Analytical Reasoning"]],
      ["Computer Knowledge", ["Computer Fundamentals", "Hardware & Software", "Operating Systems", "MS Office", "Internet & Networking", "DBMS Basics", "Cyber Security", "Computer Abbreviations & Shortcuts"]],
      ["General Awareness", ["Current Affairs — especially recent months", "Banking & Financial Awareness", "RBI & NABARD", "Regional Rural Banks", "Government Schemes", "Budget & Economic Survey", "Awards & Honours", "Sports", "Books & Authors", "Important Days", "National & International News", "Static GK"]],
      ["English Language / Hindi Language", ["Reading Comprehension", "Cloze Test", "Error Detection", "Sentence Improvement", "Fill in the Blanks", "Para Jumbles / Rearrangement", "Vocabulary", "Grammar", "For Hindi: अपठित गद्यांश, वाक्य क्रम, रिक्त स्थान, त्रुटि, पर्यायवाची/विलोम, मुहावरे, वर्तनी"]],
      ["Quantitative Aptitude", ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Data Interpretation", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Simple & Compound Interest", "Time & Work", "Time-Speed-Distance", "Mixtures & Alligation", "Partnership", "Mensuration", "Permutation & Combination", "Probability"]]
    ]
  },
  {
    id: "rrb-assistant-pre",
    name: "IBPS RRB Office Assistant — XV",
    stage: "Preliminary Examination",
    date: "2026-12-06",
    tentative: false,
    priority: 5,
    syllabus: [
      ["Reasoning", ["Puzzles & Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Order & Ranking", "Alphanumeric Series", "Analogy", "Classification", "Input-Output", "Data Sufficiency", "Logical Reasoning"]],
      ["Numerical Ability", ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Simple & Compound Interest", "Time & Work", "Pipes & Cisterns", "Time, Speed & Distance", "Boats & Streams", "Mixture & Alligation", "Mensuration", "Data Interpretation", "Probability & Permutation/Combination basics"]]
    ]
  },
  {
    id: "rrb-assistant-main",
    name: "IBPS RRB Office Assistant — XV",
    stage: "Main Examination",
    date: "2027-01-30",
    tentative: false,
    priority: 6,
    syllabus: [
      ["Reasoning", ["Puzzles & Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Ranking", "Series", "Input-Output", "Data Sufficiency", "Logical Reasoning"]],
      ["Computer Knowledge", ["Computer Fundamentals", "Hardware & Software", "Operating Systems", "MS Office", "Internet & Networking", "DBMS Basics", "Cyber Security", "Computer Abbreviations & Shortcuts"]],
      ["General Awareness", ["Current Affairs", "Banking & Financial Awareness", "RBI & NABARD", "Regional Rural Banks", "Government Schemes", "Budget & Economic Survey", "Awards & Sports", "Books & Authors", "Important Days", "National & International News", "Static GK"]],
      ["English Language / Hindi Language", ["Reading Comprehension", "Cloze Test", "Error Detection", "Sentence Improvement", "Fill in the Blanks", "Para Jumbles", "Vocabulary", "Grammar", "For Hindi: अपठित गद्यांश, वाक्य क्रम, रिक्त स्थान, त्रुटि, पर्यायवाची/विलोम, मुहावरे, वर्तनी"]],
      ["Numerical Ability", ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Data Interpretation", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Simple & Compound Interest", "Time & Work", "Time-Speed-Distance", "Mixtures & Alligation", "Partnership", "Mensuration", "Permutation & Combination", "Probability"]]
    ]
  },
  {
    id: "gate-cs",
    name: "GATE 2027 — Computer Science",
    stage: "CS Paper (target date: 7 Feb 2027)",
    date: "2027-02-07",
    tentative: true,
    priority: 7,
    syllabus: [
      ["General Aptitude", ["Verbal Aptitude", "Quantitative Aptitude", "Analytical Aptitude", "Spatial Aptitude"]],
      ["Engineering Mathematics", ["Discrete Mathematics", "Linear Algebra", "Calculus", "Probability & Statistics"]],
      ["Digital Logic", ["Boolean Algebra", "Combinational Circuits", "Sequential Circuits", "Number Representation", "Minimization", "Logic Families"]],
      ["Computer Organization & Architecture", ["Machine Instructions & Addressing Modes", "ALU & Control Unit", "Instruction Pipelining", "Memory Hierarchy", "Cache", "I/O Organization", "Interrupts", "RISC/CISC"]],
      ["Programming & Data Structures", ["C Programming", "Recursion", "Arrays & Strings", "Stacks & Queues", "Linked Lists", "Trees", "Heaps", "Graphs", "Hashing"]],
      ["Algorithms", ["Asymptotic Analysis", "Searching", "Sorting", "Hashing", "Greedy Algorithms", "Divide & Conquer", "Dynamic Programming", "Graph Algorithms", "Minimum Spanning Trees", "Shortest Paths"]],
      ["Theory of Computation", ["Regular Languages & Finite Automata", "Context-Free Grammars", "Pushdown Automata", "Regular Expressions", "Pumping Lemma", "Turing Machines", "Undecidability"]],
      ["Compiler Design", ["Lexical Analysis", "Parsing", "Syntax-Directed Translation", "Runtime Environments", "Intermediate Code", "Code Generation", "Code Optimization"]],
      ["Operating Systems", ["Processes & Threads", "CPU Scheduling", "Process Synchronization", "Deadlocks", "Memory Management", "Virtual Memory", "File Systems", "I/O Systems"]],
      ["Databases", ["ER Model", "Relational Model", "SQL", "Functional Dependencies", "Normalization", "Transactions", "Concurrency Control", "Indexing", "File Organization"]],
      ["Computer Networks", ["OSI & TCP/IP Models", "Data Link Layer", "MAC & Ethernet", "Routing", "IPv4/IPv6", "ARP/DHCP/ICMP", "TCP/UDP", "Congestion Control", "Application Layer Protocols", "Network Security Basics"]]
    ]
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
    weekday: "short", day: "numeric", month: "short", year: "numeric"
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
    weekday: "long", day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
}

function syllabusHTML(exam) {
  return exam.syllabus.map(([subject, topics]) => `
    <div class="syllabus-subject">
      <h4>${subject}</h4>
      <div class="topic-grid">
        ${topics.map((topic, i) => {
          const key = `topic-${exam.id}-${subject}-${i}`;
          const checked = localStorage.getItem(key) === "1";
          return `<label class="topic-item ${checked ? "checked" : ""}">
            <input type="checkbox" data-key="${key}" ${checked ? "checked" : ""}>
            <span>${topic}</span>
          </label>`;
        }).join("")}
      </div>
    </div>
  `).join("");
}

function bindSyllabusControls() {
  document.querySelectorAll(".syllabus-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.target);
      const open = panel.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.textContent = open ? "Hide syllabus ↑" : "View syllabus ↓";
    });
  });

  document.querySelectorAll(".topic-item input").forEach(input => {
    input.addEventListener("change", () => {
      localStorage.setItem(input.dataset.key, input.checked ? "1" : "0");
      input.closest(".topic-item").classList.toggle("checked", input.checked);
      updateProgress(input.closest(".syllabus-panel"));
    });
  });
}

function updateProgress(panel) {
  if (!panel) return;
  const boxes = [...panel.querySelectorAll("input[type=checkbox]")];
  const done = boxes.filter(x => x.checked).length;
  const total = boxes.length;
  const progress = panel.querySelector(".progress-text");
  const bar = panel.querySelector(".progress-fill");
  if (progress) progress.textContent = `${done}/${total} topics completed`;
  if (bar) bar.style.width = total ? `${(done / total) * 100}%` : "0%";
}

function render() {
  const openPanels = new Set(
    [...document.querySelectorAll(".syllabus-panel.open")].map(panel => panel.id)
  );
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
    const panelId = `syllabus-${e.id}`;
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
        <button class="syllabus-toggle" data-target="${panelId}" aria-expanded="false">View syllabus ↓</button>
        <div id="${panelId}" class="syllabus-panel">
          <div class="progress-row"><span class="progress-text">0/0 topics completed</span></div>
          <div class="progress-track"><div class="progress-fill"></div></div>
          ${syllabusHTML(e)}
          <div class="source-note">Topic list is a practical preparation checklist based on the published exam structure and commonly specified topic areas. Always follow the latest official notification for final scope.</div>
        </div>
      </article>
    `;
  }).join("");

  updateToday();
  updateYear();
  bindSyllabusControls();
  openPanels.forEach(id => {
    const panel = document.getElementById(id);
    const button = document.querySelector(`.syllabus-toggle[data-target="${id}"]`);
    if (panel && button) {
      panel.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.textContent = "Hide syllabus ↑";
    }
  });
  document.querySelectorAll(".syllabus-panel").forEach(updateProgress);
}

render();
setInterval(render, 1000);
