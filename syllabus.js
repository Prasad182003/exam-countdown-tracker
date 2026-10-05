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

const select = document.getElementById("examSelect");
const content = document.getElementById("syllabusContent");

function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

function renderExam(exam) {
  const total = exam.syllabus.reduce((sum, [, topics]) => sum + topics.length, 0);
  content.innerHTML = `
    <section class="syllabus-page-card">
      <div class="syllabus-page-head">
        <div><div class="eyebrow">${exam.tentative ? "TENTATIVE DATE" : "EXAM"}</div><h2>${exam.name}</h2><p>${exam.stage} • ${new Date(exam.date + "T00:00:00").toLocaleDateString("en-IN", {day:"numeric", month:"short", year:"numeric"})}</p></div>
        <div class="progress-summary"><strong id="doneCount">0/${total}</strong><span>topics</span></div>
      </div>
      <div class="progress-track"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
      <div class="subject-list">
        ${exam.syllabus.map(([subject, topics]) => `
          <details class="subject-card" open>
            <summary><span>${subject}</span><small>0/${topics.length}</small></summary>
            <div class="topic-grid">
              ${topics.map((topic, i) => { const key = `topic-${exam.id}-${subject}-${i}`; const checked = localStorage.getItem(key) === "1"; return `<label class="topic-item ${checked ? "checked" : ""}"><input type="checkbox" data-key="${key}" ${checked ? "checked" : ""}><span>${topic}</span></label>`; }).join("")}
            </div>
          </details>`).join("")}
      </div>
      <div class="source-note">Topic list is a practical preparation checklist based on the exam structure used in this tracker. Always follow the latest official notification for the final scope.</div>
    </section>`;
  content.querySelectorAll("input[type=checkbox]").forEach(input => input.addEventListener("change", () => {
    localStorage.setItem(input.dataset.key, input.checked ? "1" : "0");
    input.closest(".topic-item").classList.toggle("checked", input.checked);
    updateProgress(); updateSubjectCounts();
  }));
  updateProgress(); updateSubjectCounts();
}

function updateProgress() {
  const boxes = [...content.querySelectorAll("input[type=checkbox]")];
  const done = boxes.filter(b => b.checked).length, total = boxes.length;
  document.getElementById("doneCount").textContent = `${done}/${total}`;
  document.getElementById("progressFill").style.width = total ? `${done/total*100}%` : "0%";
}
function updateSubjectCounts() {
  content.querySelectorAll(".subject-card").forEach(card => { const boxes=[...card.querySelectorAll("input")]; card.querySelector("summary small").textContent=`${boxes.filter(b=>b.checked).length}/${boxes.length}`; });
}

exams.forEach(exam => { const option=document.createElement("option"); option.value=exam.id; option.textContent=`${exam.name} — ${exam.stage}`; select.appendChild(option); });
select.addEventListener("change", () => renderExam(exams.find(e=>e.id===select.value)));
renderExam(exams[0]);
