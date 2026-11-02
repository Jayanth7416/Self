const ESSAYS = [
  {
    id: 'copilot-paradox-ai-agents',
    category: 'AI & Productivity',
    date: 'November 2, 2026',
    readTime: '8 min read',
    claps: 142,
    title: 'The Co-Pilot Paradox: How AI Agents Are Rewiring Daily Workflows (And What Still Needs a Human Touch)',
    subtitle:
      'We are moving from prompt-and-paste chatbots to autonomous agents that read context, execute tools, and iterate. When execution becomes cheap, human taste, problem framing, and verification become the ultimate bottlenecks.',
    takeaway:
      '“AI agents don’t eliminate the need for senior judgment—they remove the friction that used to hide whether you had clear judgment in the first place.”',
    content: `
      <p class="lead">
        For the past three years, most knowledge workers interacted with AI like an eager intern sitting behind a glass window: you slid a prompt under the door, waited ten seconds, and copied a block of text or code back into your editor. If the output broke, you became the human clipboard—shuttling stack traces and clarifications back and forth.
      </p>
      <p>
        That era is rapidly ending. In 2026, the unit of AI interaction is no longer a <em>chat turn</em>; it is a <strong>closed-loop agentic workflow</strong>. Modern agents inspect repositories, run test suites, query live databases, verify their own hypotheses, and surface pull requests or structured artifacts ready for review.
      </p>
      <p>
        Yet this leap in autonomy has introduced what many builders now call <strong>The Co-Pilot Paradox</strong>: the faster an agent can generate a 500-line change or a 10-page strategy brief, the more precious—and exhausting—human verification, architectural taste, and problem framing become.
      </p>

      <h2 id="from-chatbots-to-closed-loops">1. From Chatbots to Closed-Loop Agents</h2>
      <p>
        Why does an agent feel fundamentally different from a chat assistant? Because a chatbot only predicts text, whereas an agent operates inside an <strong>Observe → Plan → Act → Verify</strong> loop.
      </p>
      <div class="code-block">// Traditional Chat Loop (Human as Router)
Human writes prompt -> LLM outputs code -> Human pastes & runs tests -> Human copies error -> LLM guesses fix

// Autonomous Agent Loop (Human as Director)
Human defines goal & constraints
  └─> Agent inspects codebase & schema
  └─> Agent edits files & runs test suite
  └─> Agent catches failure, reads logs, and self-corrects
  └─> Human reviews verified diff & architectural trade-offs</div>
      <p>
        When an AI can run the compiler, inspect the DOM, or query a staging table directly, roughly 70% of the tedious "glue work" evaporates. You stop micromanaging syntax and start managing outcomes.
      </p>

      <h2 id="where-agents-deliver-leverage">2. Where Agents Actually Deliver 10x Leverage</h2>
      <p>
        Not all tasks benefit equally from delegation. Across software engineering, data analytics, and product operations, autonomous agents consistently shine in four high-friction zones:
      </p>
      <div class="callout-grid">
        <div class="callout-box">
          <h4>🔍 Contextual Archaeology</h4>
          <p>Tracing how a legacy feature works across 40 files, summarizing git blame history, or mapping undocumented API payloads in minutes instead of an afternoon.</p>
        </div>
        <div class="callout-box">
          <h4>🧪 Verification &amp; Edge-Case Scaffolding</h4>
          <p>Writing property-based tests, generating realistic mock fixtures, and reproducing subtle regression bugs from a raw stack trace.</p>
        </div>
        <div class="callout-box">
          <h4>🔄 Multi-File Migrations</h4>
          <p>Upgrading SDK versions, converting REST endpoints to typed schemas, or standardizing design tokens across dozens of components.</p>
        </div>
        <div class="callout-box">
          <h4>📊 First-Draft Synthesis</h4>
          <p>Turning messy incident logs, customer interview transcripts, or SQL query outputs into structured post-mortems and executive briefs.</p>
        </div>
      </div>

      <h2 id="the-copilot-paradox">3. The Co-Pilot Paradox: When Generation Outpaces Comprehension</h2>
      <p>
        Here is the trap that catches almost every team adopting agentic workflows: <strong>writing code or prose was never the sole bottleneck—understanding the system was.</strong>
      </p>
      <blockquote>
        “If an agent writes 1,000 lines of plausible-looking code in two minutes, and it takes you 45 minutes to mentally model its subtle failure modes, velocity hasn’t necessarily increased—cognitive load has just shifted from creation to auditing.”
      </blockquote>
      <p>
        When generation cost drops near zero, teams risk flooding their repositories and roadmaps with what engineers call <em>high-plausibility debt</em>: solutions that pass happy-path tests today but introduce redundant abstractions, leaky state, or subtly misaligned business logic tomorrow.
      </p>

      <h2 id="what-still-needs-human-touch">4. What Still Demands a Human Touch</h2>
      <p>
        So where does the human remain irreplaceable? The boundary isn't defined by how "hard" a math or syntax problem is—it is defined by <strong>accountability, ambiguity, and taste</strong>.
      </p>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>AI Agent Strength</th>
              <th>Irreplaceable Human Touch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Problem Framing</strong></td>
              <td>Solving a well-specified ticket rapidly</td>
              <td>Deciding <em>which</em> problem is worth solving—or deleting the feature entirely</td>
            </tr>
            <tr>
              <td><strong>System Architecture</strong></td>
              <td>Implementing patterns already present in the repo</td>
              <td>Knowing when the existing pattern has hit a scaling wall and needs a paradigm shift</td>
            </tr>
            <tr>
              <td><strong>User Empathy</strong></td>
              <td>Generating polished UI layouts &amp; microcopy</td>
              <td>Feeling the subtle frustration of a workflow that is technically correct but emotionally clunky</td>
            </tr>
            <tr>
              <td><strong>Risk &amp; Accountability</strong></td>
              <td>Flagging known security anti-patterns</td>
              <td>Making high-stakes trade-offs between speed, compliance, cost, and customer trust</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="daily-playbook">5. A Practical Playbook for Working with Agents</h2>
      <p>
        The most effective practitioners in 2026 treat AI agents neither as magic oracles nor as threats, but as high-throughput junior partners. Three habits separate high-signal operators from the rest:
      </p>
      <ol>
        <li><strong>Write Specs, Not Just Prompts:</strong> Spend five extra minutes defining invariants, non-goals, and edge cases upfront. Agents amplify clarity just as fast as they amplify vagueness.</li>
        <li><strong>Keep Diffs Small and Verifiable:</strong> Ask agents to work in incremental checkpoints with automated tests rather than monolithic 30-file rewrites.</li>
        <li><strong>Protect Deep Thinking Blocks:</strong> Don't let parallel agent tabs turn your workday into a frantic casino of context-switching. Use agents to clear the brush so you can spend <em>more</em> uninterrupted hours on architecture, strategy, and craft.</li>
      </ol>
      <p>
        Ultimately, AI agents are the greatest leverage multiplier we have ever seen for curiosity. They reward builders who ask sharper questions, care deeply about how things work under the hood, and bring unmistakable human taste to everything they ship.
      </p>
    `
  },
  {
    id: 'boring-architecture-wins',
    category: 'Systems & Engineering',
    date: 'October 24, 2026',
    readTime: '6 min read',
    claps: 98,
    title: "Why 'Boring' Architecture Wins at 3 AM: Hidden Lessons from Debugging Production at Scale",
    subtitle:
      'Every distributed queue, custom cache layer, and microservice boundary feels clever on a whiteboard—until a cascading timeout wakes you up on a Sunday morning.',
    takeaway:
      '“Complexity is a loan you take out during design time and pay back with interest during incident response.”',
    content: `
      <p class="lead">
        There is a specific moment in every software engineer’s career when their taste in architecture permanently changes. It rarely happens at a conference or while reading a whitepaper. It happens at 3:14 AM while staring at a dashboard where three services are healthy, two queues are backed up, and customers cannot check out.
      </p>
      <p>
        In the daylight of a design review, novel abstractions feel empowering. At 3 AM, during a partial network partition, <strong>predictability is the only currency that matters</strong>.
      </p>

      <h2 id="innovation-tokens">1. Spend Your Innovation Tokens Wisely</h2>
      <p>
        Every engineering system has a finite budget for operational novelty. When you choose an battle-tested relational database, a monolith or modular service, and standard synchronous RPCs, you inherit decades of community knowledge about how those tools fail.
      </p>
      <blockquote>
        “Boring technology doesn’t mean stagnant technology. It means technology whose failure modes are already well-understood.”
      </blockquote>

      <h2 id="observability-over-cleverness">2. Design for Debuggability, Not Just Throughput</h2>
      <p>
        Before adding an asynchronous event bus or a multi-tiered caching layer, ask one question: <em>Can a tired engineer trace a single user request from ingress to database row in under 60 seconds?</em>
      </p>
      <ul>
        <li><strong>Propagate correlation IDs everywhere:</strong> Every log line, background job, and SQL comment should carry the originating request ID.</li>
        <li><strong>Prefer idempotent state transitions:</strong> When a job fails halfway through, retrying it should be safe and deterministic.</li>
        <li><strong>Make backpressure visible:</strong> Silent retries and unbounded in-memory queues turn minor hiccups into total outages.</li>
      </ul>

      <h2 id="the-senior-litmus-test">3. The Senior Engineer Litmus Test</h2>
      <p>
        Junior engineers often prove their skill by showing how sophisticated a system they can build. Principal engineers prove their value by showing how much accidental complexity they can safely delete while still meeting every business SLA.
      </p>
    `
  },
  {
    id: 'reclaiming-deep-work',
    category: 'Focus & Psychology',
    date: 'October 12, 2026',
    readTime: '5 min read',
    claps: 119,
    title: 'Reclaiming Deep Focus in an Always-On World: The Hidden Cost of Attention Residue',
    subtitle:
      'Why a 30-second Slack check during a coding or writing session actually costs you 22 minutes of cognitive clarity—and how to design rituals that protect flow.',
    takeaway:
      '“You cannot produce timeless work on a fragmented timeline. Protecting your attention is no longer a productivity hack; it is a survival skill.”',
    content: `
      <p class="lead">
        Look at a typical knowledge worker’s calendar and it might look half-empty: a standup at 10:00, a sync at 1:30, a quick review at 3:30. Yet by 5:00 PM, they feel completely drained and haven't made a dent in their hardest problem.
      </p>
      <p>
        The culprit is what cognitive psychologist Sophie Leroy termed <strong>Attention Residue</strong>. When you switch from Task A (reviewing a Slack thread) to Task B (architecting a system), a substantial portion of your working memory remains stuck processing Task A for up to 20 minutes.
      </p>

      <h2 id="the-myth-of-quick-checks">1. The Myth of the “Quick Check”</h2>
      <p>
        There is no such thing as a harmless 15-second glance at your inbox during deep work. Even if you don't reply, seeing an unresolved question loads a background thread into your prefrontal cortex.
      </p>
      <blockquote>
        “Treating your mind like an interrupt-driven CPU with zero context-switch overhead is the fastest path to shallow output and chronic burnout.”
      </blockquote>

      <h2 id="three-rituals-for-flow">2. Three Rituals That Actually Protect Flow</h2>
      <ol>
        <li><strong>The 90-Minute Airlock:</strong> Start the day with 90 minutes of creation <em>before</em> opening chat or email. Solve your hardest problem while your mental RAM is completely clean.</li>
        <li><strong>Batch Asynchronous Communication:</strong> Check messages at deliberate intervals (e.g., 11:30 AM and 4:00 PM) rather than keeping notification badges pulsing in your peripheral vision.</li>
        <li><strong>Leave a “Breadcrumb” When Stopping:</strong> End every deep-work session by writing a two-sentence note on the exact next step. Tomorrow morning’s ramp-up time drops from 25 minutes to 90 seconds.</li>
      </ol>
    `
  },
  {
    id: 'modern-data-stack-diet',
    category: 'Data & Cloud',
    date: 'September 29, 2026',
    readTime: '7 min read',
    claps: 87,
    title: 'The Modern Data Stack Diet: Cutting Cloud Warehouse Costs Without Slowing Down Analytics',
    subtitle:
      'How pragmatic teams are replacing bloated full-table refreshes and sprawling DAGs with incremental partitioning, clustering, and disciplined SQL hygiene.',
    takeaway:
      '“The cheapest query is the one that only scans the bytes that actually changed today.”',
    content: `
      <p class="lead">
        Cloud data warehouses made it effortlessly easy to spin up petabyte-scale compute in seconds. Unfortunately, they also made it effortlessly easy to accidentally run a full-table scan across three years of raw event logs every 15 minutes to power an executive dashboard that three people view once a week.
      </p>

      <h2 id="where-cloud-spend-leaks">1. Where 80% of Warehouse Spend Leaks</h2>
      <p>
        When teams audit their cloud analytics bill, the culprit is rarely exotic machine learning workloads. It is almost always three mundane patterns:
      </p>
      <ul>
        <li><strong>Unpartitioned <code>SELECT *</code> downstream views</strong> that scan terabytes of historical data for every BI refresh.</li>
        <li><strong>Full-refresh transformations</strong> rebuilding multi-year fact tables from scratch instead of merging incremental partitions.</li>
        <li><strong>High-cardinality joins prior to filtering</strong> that explode intermediate shuffle memory.</li>
      </ul>

      <h2 id="three-high-roi-fixes">2. Three High-ROI Patterns That Pay Off Immediately</h2>
      <div class="code-block">-- Instead of rebuilding the entire table daily:
-- Filter strictly on the partition column + cluster keys
SELECT
  event_date,
  user_id,
  COUNTIF(event_type = 'checkout_completed') AS conversions
FROM \`analytics_prod.events_partitioned\`
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
GROUP BY event_date, user_id;</div>
      <p>
        By combining <strong>date partitioning</strong>, <strong>clustering on high-filter columns</strong>, and <strong>incremental merge models</strong>, most data teams can cut compute spend by 40–65% in a single sprint—while making dashboards noticeably snappier for end users.
      </p>
    `
  }
];

const SIMULATOR_TASKS = [
  {
    id: 'log-triage',
    title: 'Incident Log Triage & Root-Cause Search',
    badge: 'Agent-Heavy (85%)',
    badgeClass: 'agent-heavy',
    desc: 'Agent correlates stack traces, recent commits, and metrics; human validates the final root-cause hypothesis.',
    hoursSaved: 3.0,
    focusBoost: 9,
    enabled: true
  },
  {
    id: 'test-scaffolding',
    title: 'Unit & Edge-Case Test Generation',
    badge: 'Agent-Heavy (80%)',
    badgeClass: 'agent-heavy',
    desc: 'Agent generates property tests and regression suites; human reviews assertion quality and business invariants.',
    hoursSaved: 3.5,
    focusBoost: 11,
    enabled: true
  },
  {
    id: 'multi-file-refactor',
    title: 'SDK Upgrades & Multi-File Refactoring',
    badge: 'Hybrid Loop (65%)',
    badgeClass: 'hybrid',
    desc: 'Agent executes mechanical migrations across files and runs typechecks; human approves API boundaries.',
    hoursSaved: 2.5,
    focusBoost: 8,
    enabled: true
  },
  {
    id: 'data-pipeline-sql',
    title: 'Data Cleaning & SQL Query Optimization',
    badge: 'Hybrid Loop (70%)',
    badgeClass: 'hybrid',
    desc: 'Agent profiles schema and rewrites partition-pruned queries; human verifies metric definitions.',
    hoursSaved: 2.5,
    focusBoost: 10,
    enabled: true
  },
  {
    id: 'system-arch',
    title: 'System Architecture & Trade-Off Design',
    badge: 'Human-Core (25% AI)',
    badgeClass: 'human-core',
    desc: 'Agent drafts sequence diagrams and explores options; human owns failure-mode judgment and long-term simplicity.',
    hoursSaved: 1.0,
    focusBoost: 5,
    enabled: false
  },
  {
    id: 'product-strategy',
    title: 'Problem Framing & User Empathy',
    badge: 'Human-Core (15% AI)',
    badgeClass: 'human-core',
    desc: 'Agent synthesizes user feedback clusters; human decides what NOT to build and shapes the product soul.',
    hoursSaved: 1.0,
    focusBoost: 4,
    enabled: false
  }
];

function safeGetJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage quota or private-mode restrictions
  }
}

let currentEssayId = ESSAYS[0].id;
let activeCategory = 'all';
let bookmarkedIds = new Set(safeGetJSON('sc_bookmarks', []));
let clapCounts = safeGetJSON('sc_claps', {});

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2400);
}

function renderArticle(essayId, scrollToTop = false) {
  const essay = ESSAYS.find((e) => e.id === essayId) || ESSAYS[0];
  currentEssayId = essay.id;

  document.getElementById('heroCategory').textContent = essay.category;
  document.getElementById('heroDate').textContent = essay.date;
  document.getElementById('heroReadTime').textContent = essay.readTime;
  document.getElementById('heroTitle').textContent = essay.title;
  document.getElementById('heroSubtitle').textContent = essay.subtitle;
  document.getElementById('sidebarTakeaway').textContent = essay.takeaway;

  const totalClaps = clapCounts[essay.id] ?? essay.claps;
  document.getElementById('clapCount').textContent = totalClaps;

  const bookmarkBtn = document.getElementById('bookmarkBtn');
  const bookmarkLabel = document.getElementById('bookmarkLabel');
  if (bookmarkedIds.has(essay.id)) {
    bookmarkBtn.classList.add('active');
    bookmarkLabel.textContent = '★ Bookmarked';
  } else {
    bookmarkBtn.classList.remove('active');
    bookmarkLabel.textContent = 'Bookmark';
  }

  const contentEl = document.getElementById('articleContent');
  contentEl.innerHTML = essay.content;

  // Build Table of Contents
  const tocEl = document.getElementById('tocList');
  tocEl.innerHTML = '';
  const headings = contentEl.querySelectorAll('h2');
  headings.forEach((h2, idx) => {
    const link = document.createElement('a');
    link.href = `#${h2.id}`;
    link.className = `toc-link ${idx === 0 ? 'active' : ''}`;
    link.textContent = h2.textContent;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      tocEl.querySelectorAll('.toc-link').forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      h2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tocEl.appendChild(link);
  });

  // Render Sidebar Mini Post List
  const sidebarList = document.getElementById('sidebarPostList');
  sidebarList.innerHTML = '';
  ESSAYS.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = `mini-post-btn ${item.id === currentEssayId ? 'current' : ''}`;
    btn.innerHTML = `
      <span class="mini-post-cat">${item.category}</span>
      <span class="mini-post-title">${item.title}</span>
    `;
    btn.addEventListener('click', () => {
      renderArticle(item.id, true);
      renderEssaysGrid();
    });
    sidebarList.appendChild(btn);
  });

  history.replaceState(null, '', `#${essay.id}`);

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderEssaysGrid() {
  const grid = document.getElementById('essaysGrid');
  grid.innerHTML = '';

  const filtered =
    activeCategory === 'all'
      ? ESSAYS
      : ESSAYS.filter((e) => e.category === activeCategory);

  filtered.forEach((essay) => {
    const card = document.createElement('article');
    card.className = `essay-card ${essay.id === currentEssayId ? 'selected' : ''}`;
    card.innerHTML = `
      <div>
        <span class="category-pill">${essay.category}</span>
        <h3>${essay.title}</h3>
        <p>${essay.subtitle}</p>
      </div>
      <div class="essay-card-footer">
        <span>${essay.date} • ${essay.readTime}</span>
        <span class="read-cta">${essay.id === currentEssayId ? 'Reading Now ✓' : 'Read Essay →'}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      renderArticle(essay.id, true);
      renderEssaysGrid();
    });
    grid.appendChild(card);
  });
}

function renderSimulator() {
  const matrix = document.getElementById('taskMatrix');
  matrix.innerHTML = '';

  let totalHours = 0;
  let totalFocus = 0;

  SIMULATOR_TASKS.forEach((task) => {
    if (task.enabled) {
      totalHours += task.hoursSaved;
      totalFocus += task.focusBoost;
    }

    const item = document.createElement('div');
    item.className = `task-item ${task.enabled ? 'active' : ''}`;
    item.innerHTML = `
      <div>
        <div class="task-top">
          <span class="task-title">${task.title}</span>
          <span class="task-badge ${task.badgeClass}">${task.badge}</span>
        </div>
        <p class="task-desc">${task.desc}</p>
      </div>
      <div class="task-footer">
        <span>Est. Leverage: <strong>+${task.hoursSaved.toFixed(1)}h / wk</strong></span>
        <span>${task.enabled ? '✅ Delegated to Agent Loop' : '⭕ Click to Include'}</span>
      </div>
    `;
    item.addEventListener('click', () => {
      task.enabled = !task.enabled;
      renderSimulator();
    });
    matrix.appendChild(item);
  });

  document.getElementById('hoursSavedVal').textContent = `${totalHours.toFixed(1)}h`;
  document.getElementById('deepWorkGainVal').textContent = `+${totalFocus}%`;
}

function initEvents() {
  // Reading Progress & TOC Spy
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    document.getElementById('readingProgress').style.width = `${progress}%`;

    const headings = document.querySelectorAll('#articleContent h2');
    const tocLinks = document.querySelectorAll('.toc-link');
    let activeIdx = 0;
    headings.forEach((h2, idx) => {
      if (h2.getBoundingClientRect().top <= 140) {
        activeIdx = idx;
      }
    });
    tocLinks.forEach((link, idx) => {
      link.classList.toggle('active', idx === activeIdx);
    });
  });

  // Theme Toggle
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('sc_theme') || 'dark';
  } catch {
    savedTheme = 'dark';
  }
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    safeSetItem('sc_theme', next);
  });

  // Brand Home Link
  const brandLink = document.getElementById('brandHomeLink');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.view === 'featured');
      });
      renderArticle(ESSAYS[0].id, true);
      renderEssaysGrid();
    });
  }

  // Share Button
  document.getElementById('sharePageBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!');
    } catch {
      showToast('Link ready in address bar!');
    }
  });

  // Applaud Button
  document.getElementById('applaudBtn').addEventListener('click', () => {
    const essay = ESSAYS.find((e) => e.id === currentEssayId);
    const current = clapCounts[currentEssayId] ?? essay.claps;
    clapCounts[currentEssayId] = current + 1;
    safeSetItem('sc_claps', JSON.stringify(clapCounts));
    document.getElementById('clapCount').textContent = clapCounts[currentEssayId];
    document.getElementById('applaudBtn').classList.add('active');
    showToast('Thanks for applauding this essay! 👏');
  });

  // Bookmark Button
  document.getElementById('bookmarkBtn').addEventListener('click', () => {
    if (bookmarkedIds.has(currentEssayId)) {
      bookmarkedIds.delete(currentEssayId);
      showToast('Removed from bookmarks');
    } else {
      bookmarkedIds.add(currentEssayId);
      showToast('Saved to your reading bookmarks ★');
    }
    safeSetItem('sc_bookmarks', JSON.stringify([...bookmarkedIds]));
    renderArticle(currentEssayId, false);
  });

  // Category Filters
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      renderEssaysGrid();
    });
  });

  // Top Nav Quick Jumps
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      if (view === 'featured') {
        renderArticle(ESSAYS[0].id, true);
        renderEssaysGrid();
      } else if (view === 'all-posts') {
        document.getElementById('allPostsSection').scrollIntoView({ behavior: 'smooth' });
      } else if (view === 'interactive') {
        document.getElementById('simulatorSection').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initApp() {
  const hashId = window.location.hash.replace('#', '');
  const initialEssay = ESSAYS.find((e) => e.id === hashId) ? hashId : ESSAYS[0].id;
  renderArticle(initialEssay, false);
  renderSimulator();
  renderEssaysGrid();
  initEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
