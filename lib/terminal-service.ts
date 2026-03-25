// lib/terminal-service.ts

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `[ SYS.DIAGNOSTIC_PROTOCOL_v9.9.4 ]
=================================================================
AVAILABLE DIAGNOSTIC COMMANDS:
-----------------------------------------------------------------
[STATUS]   System active daemons, node health & uptime check
[CORE]     Frontend diagnostics, UI engine specs & DOM telemetry
[SPEC]     Hardware, Robotics, ROS2 capabilities & Low-level
[ENV]      Environment variables, networking & configuration
[DEVOPS]   Toolchain, CI/CD pipeline, caching & deployment stats
[LORE]     Database query for personal memory entities & traits
[CLEAR]    Wipe terminal buffer & reset display matrix
[HELP]     Print this manual
=================================================================
Type a command and press [ENTER] to execute.`,

  status: `● itz_dev_node.service - Portfolio Main Diagnostics Daemon
   Loaded: loaded (/etc/systemd/system/itz_dev_node.service; enabled)
   Active: active (running) since Wed 2026-03-25 01:00:00 UTC
   Docs:   man:systemd-sysv-generator(8)
   Main PID: 8492 (node)
   Tasks: 23 (limit: 4915)
   Memory: 142.8M
   CPU: 12ms

   [ OK ] Started UI Component Tree (Hydration latency: 12ms).
   [ OK ] Started Navigation ROS2 Node Bridge (TCP/IP socket active).
   [ OK ] Initialized Cyber-Aesthetic CSS Engine (Tailwind JIT).
   [ OK ] Loaded Memory Banks & Lore (Query latency: 0.04ms).
   [ OK ] Synced with GitHub Actions CI/CD (Pipeline: GREEN).

   Warning: 0 vulnerabilities found. System integrity at 100%.`,

  core: `[ FETCHING ENGINE DIAGNOSTICS... ]
=================================================================
[TYPE_SAFETY_ENGINE]   : TS_v5.x (Strict Mode: ENABLED, Any: REJECTED)
[UI_FRAMEWORK]         : NEXT_14.x_REACT (App Router, RSC, Suspense)
[STYLING_ENGINE]       : TAILWIND_v3.4 (Utility-first, JIT Compilation)
[STATE_MANAGEMENT]     : REACT_HOOKS & CONTEXT_API (Immutable architecture)
[ANIMATION_PHYSICS]    : FRAMER_MOTION (Spring physics, GPU-accelerated)

> LIVE TELEMETRY DATA:
  - Bundle Size (Gzipped) : 42.1kb
  - First Contentful Paint: 0.6s
  - Cumulative Layout Shift: 0.00
  - DOM Nodes Allocated   : 1024 (Optimal)
=================================================================`,

  spec: `[ HARDWARE_&_LOW_LEVEL_CAPABILITIES ]
=================================================================
[ROBOTICS_WS]          : ROS2_Humble (Nav2, RCLPY, RCLCPP, TF2)
[TESI_FOCUS]           : Autonomous Navigation (TiagoPro_Pal)
[ALGORITHM_COMPLEXITY] : O(log n) optimization priority
[CS_FUNDAMENTALS]      : C/C++, Data Structures, Memory Pointers
[OS_LEVEL]             : Linux (Ubuntu 22.04 LTS), Bash Scripting
[DB_ARCHITECTURE]      : Relational (PostgreSQL), Graph concepts

> ACTIVE SENSORS / TOPICS:
  /scan          [sensor_msgs/LaserScan]       - ACTIVE
  /odom          [nav_msgs/Odometry]           - ACTIVE
  /cmd_vel       [geometry_msgs/Twist]         - STANDBY
=================================================================`,

  env: `[ SECURE ENVIRONMENT_VARIABLES ]
=================================================================
USER                 = Emanuele Lionetti
ROLE                 = Frontend_Engineer_&_AI_Enthusiast
OS                   = Linux_Ubuntu_22.04_LTS (Kernel: 6.5.0-generic)
VCS                  = Git_GitHub (Branch: main, Detached HEAD: false)
RUNTIME              = Docker_Engine (Containers: 4 running)
CI_CD                = GitHub_Actions (Runners: ubuntu-latest)
DB_DRIVER            = PostgreSQL_Prisma (Connection Pool: 10)
DEPLOYMENT           = Vercel_Edge (Region: fra1)
AUTH_TOKEN           = ************************ (Redacted)
=================================================================`,

  devops: `[ DEVOPS_TOOLCHAIN_&_INFRASTRUCTURE ]
=================================================================
[PIPELINE]           : GitHub Actions (Automated CI/CD, Lint, Test)
[CONTAINERIZATION]   : Docker (Multi-stage builds, Alpine base)
[HOSTING]            : Vercel (Edge functions, Serverless compute)
[MONITORING]         : Web Vitals, Custom Telemetry, Vercel Speed Insights
[LIFECYCLE]          : Agile/SCRUM (Jira, Trello, Sprint Planning)

> LAST BUILD LOG (EMANUELE_LIONETTI_PORTFOLIO):
  - Typecheck: PASS (0 errors)
  - Linting: PASS (0 warnings)
  - Build Time: 42.4s
  - Cache Hit Rate: 94.2%
=================================================================`,

  lore: `[ QUERYING_LORE_DATABASE ]
Establishing secure connection to memory banks... DONE.
Executing deep scan... Found 4 main entities.
-----------------------------------------------------------------
► LORE.manga         : Reading latest chapters (One Piece, etc.)
                       [STATUS: Waiting for next release]
► LORE.chitarra      : Acoustic & Electric strumming
                       [SKILL: Fingerstyle, Riffs]
► LORE.minecraft     : Redstone architecture & Automation
                       [BUILD: Logic Gates, Mob Farms]
► LORE.steam         : Achievement hunting & Strategy games
                       [HOURS_LOGGED: Too many to count]
-----------------------------------------------------------------
Query executed successfully in 0.012ms.`
};

export const parseCommandText = (cmd: string): string => {
  const rawCmd = cmd.trim().toLowerCase();

  if (rawCmd === "") return "";

  // Ritorna il testo formattato o un errore di fallback stilizzato
  if (TERMINAL_COMMANDS[rawCmd]) {
    return TERMINAL_COMMANDS[rawCmd];
  } else {
    return `bash: ${cmd}: command not found\nType 'help' to see available commands.`;
  }
};