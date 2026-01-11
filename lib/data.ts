
export const projects = [
    {
        id: "finance-settlement-automation",
        title: "Finance Settlement Automation for KMRL",
        category: "Data Analytics",
        image: "/kmrl.png?height=600&width=800",
        description: "Developed a PyQt-based desktop application to automate financial settlement by processing AFC logs and daily reports. Streamlined data ingestion, ambiguity resolution, and pattern analysis using Pandas, significantly reducing manual intervention and improving operational efficiency.",
        detailedDescription: "This project addressed a critical bottleneck in the financial reconciliation process for KMRL (Kochi Metro Rail Limited). The existing manual process was prone to errors and time-consuming. I built a robust desktop solution that ingests complex AFC (Automated Fare Collection) logs, cleanses the data, and performs automated reconciliation against daily sales reports. The system includes a dashboard for visualizing discrepancies and generating audit-ready reports.",
        features: [
            "Automated log parsing and data cleaning",
            "Pattern recognition for ambiguity resolution",
            "One-click reconciliation report generation",
            "Interactive dashboard for financial prowess"
        ],
        tags: ["Python", "PyQt", "Pandas", "Data Processing", "Automation"],
        link: "",
        github: "",
        images: ["/kmrl.png?height=600&width=800"]
    },
    {
        id: "ones-platform-revamp",
        title: "ONES Platform Revamp",
        category: "Web & Desktop App",
        image: "/ONES.png?height=600&width=800",
        description: "Led the revamp of ONES (EdTech Startup) platform, covering both the Admin Dashboard and Student Website. Improved usability, responsiveness, and UI consistency across the system.",
        detailedDescription: "As the lead developer, I spearheaded the complete UI/UX overhaul of the ONES EdTech platform. The project involved reimagining the user journey for both administrators and students. We migrated legacy views to a modern component-based architecture, resulting in a 40% improvement in page load times and a significant boost in user engagement metrics.",
        features: [
            "Unified design system across Admin and Student portals",
            "Real-time analytics dashboard for admins",
            "Responsive video learning interface",
            "Integrated payment gateway and subscription management"
        ],
        tags: ["Vue.js", "Next.js", "Tailwind CSS", "REST APIs", "Django", "Postgres"],
        link: "",
        github: "",
        images: ["/ONES.png?height=600&width=800"]
    },
    {
        id: "mindathe-irikk",
        title: "Mindathe Irikk",
        category: "Chrome Extension",
        image: "/mindathe-irikk.png?height=600&width=800",
        description: "A sassy Mallu sound guardian for movie nights — this Chrome extension uses the Web Audio API to detect noise levels and respond with sarcastic Kerala-style audio warnings.",
        detailedDescription: "'Mindathe Irikk' (Stay Quiet!) is a fun, cultural take on noise control. Built as a Chrome Extension, it monitors ambient noise levels through the microphone during movie streaming. When the noise exceeds a threshold, it pauses the media and plays a humorous, sarcastic warning in Malayalam. It went viral in the local tech community for its quirky implementation of the Web Audio API.",
        features: [
            "Real-time audio frequency analysis",
            "Customizable sensitivity threshold",
            "Sarcastic audio feedback library",
            "Automatic media playback control"
        ],
        tags: ["JavaScript", "HTML", "CSS", "Web Audio API", "Chrome Extensions"],
        link: "https://mindaathe-irikku.vercel.app/",
        github: "https://github.com/kithu07/mindathe-irikK",
        images: ["/mindathe-irikk.png?height=600&width=800"]
    },
    {
        id: "arcade-app",
        title: "Arcade App",
        category: "Web App",
        image: "/arcade-room.png?height=600&width=800",
        description: "A dynamic and responsive leaderboard system for arcade games with player and volunteer login, QR-based score submission, and real-time updates — built using Next.js and MongoDB Atlas.",
        detailedDescription: "Built for a college tech fest, this application managed the scores for multiple arcade gaming booths. It features a real-time leaderboard that updates via websockets, a QR code scanner for quick score entry by volunteers, and a secure admin panel. The system handled over 500 concurrent users during the event without latency.",
        features: [
            "Real-time websocket-based leaderboards",
            "QR code integration for player identification",
            "Role-based access control (Admin/Volunteer/Player)",
            "Live event analytics"
        ],
        tags: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "React", "QR Scanner"],
        link: "https://vibhava-arcade.vercel.app/",
        github: "https://github.com/kithu07/vibhava-arcade",
        images: ["/arcade-room.png?height=600&width=800"]
    },
    {
        id: "ninte-kadha",
        title: "Ninte-Kadha",
        category: "GenAI",
        image: "/nitekadha.png?height=600&width=800",
        description: "A personalized storytelling app that transforms your search history into an aesthetically beautiful narrative using AI-generated insights and a sleek Next.js interface.",
        detailedDescription: "Ninte-Kadha (Your Story) explores the concept of digital footprints. It analyzes a user's mock search history or provided keywords and uses the Gemini API to weave a personalized, mythical narrative about their digital persona. The story is presented with generated imagery and parallax scrolling effects.",
        features: [
            "Gemini API integration for narrative generation",
            "Dynamic mood-based UI theming",
            "Text-to-speech narration",
            "Social sharing of generated stories"
        ],
        tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "GeminiAPI"],
        link: "https://ninte-kadha-frontend.vercel.app/",
        github: "https://github.com/kithu07/ninte-kadha-backend",
        images: ["/nitekadha.png?height=600&width=800"]
    },
    {
        id: "evolution-odyssey",
        title: "Evolution Odyssey",
        category: "Game Development",
        image: "/evod.png?height=600&width=800",
        description: "A 2D platformer game where players evolve through different stages while collecting coins and avoiding obstacles. Designed UI, implemented scoring systems, and integrated immersive sound effects.",
        detailedDescription: "This project explores game mechanics and state management. Players start as a simple organism and 'evolve' (gain new abilities like double jump or dash) as they collect DNA points. Built with LÖVE2D, it involved writing custom physics calculations and tile-map collision detection from scratch.",
        features: [
            "Custom physics engine implementation",
            "Dynamic character evolution system",
            "Level design using Tiled map editor",
            "Original pixel art assets"
        ],
        tags: ["Lua", "LOVE2D", "Tiled", "GIT"],
        link: "https://drive.google.com/file/d/1-RgOGPpiP6-XdbJuyUrfocmKvXcQb8Fy/view?usp=sharing",
        github: "https://gitlab.com/helloworld4324028/evolutionodyssey",
        images: ["/evod.png?height=600&width=800"]
    },
    {
        id: "premikoo",
        title: "Premikoo",
        category: "GenAI",
        image: "/premikoo.png?height=600&width=800",
        description: "Premikoo is a fun, interactive Valentine's Day-themed website that lets users generate their Love Resume, predict their romantic future, and test their relationship compatibility through an engaging quiz.",
        detailedDescription: "A viral marketing project launched for Valentine's Day. It uses generative AI (Groq) to create humorous 'Love Resumes' based on user inputs. The site features a highly interactive, pink-themed UI with heart animations and became a hit on social media for its sharable results.",
        features: [
            "AI-driven content generation with Groq",
            "Viral-optimized share cards",
            "Interactive quizzes",
            "Mobile-first responsive design"
        ],
        tags: ["React", "Tailwind CSS", "Groq"],
        link: "https://lucky-hotteok-464fb7.netlify.app/",
        github: "https://github.com/ThePyWizard/thatcringeproject",
        images: ["/premikoo.png?height=600&width=800"]
    },
    {
        id: "pixelperfect",
        title: "PixelPerfect",
        category: "Web Development",
        image: "/pixel.png?height=600&width=800",
        description: "An AI-powered UI testing platform featuring A/B testing, color contrast optimization, and real-time metric visualization. Built a dynamic frontend dashboard using Chart.js.",
        detailedDescription: "PixelPerfect aims to democratize UI testing. It allows developers to upload design screenshots and receive AI-powered feedback on accessibility, color contrast, and layout balance. It also includes an A/B testing simulator that predicts user engagement heatmaps.",
        features: [
            "Automated accessibility scoring",
            "Heatmap generation",
            "Real-time contrast checker",
            "Project dashboard with history"
        ],
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js", "Firebase", "Node", "Express", "Gemini"],
        link: "",
        github: "https://github.com/sachin136631/PixelPerfect",
        images: ["/pixel.png?height=600&width=800"]
    },
    {
        id: "rescuechain",
        title: "RescueChain",
        category: "Web App",
        image: "/rescue.png?height=600&width=800",
        description: "A disaster management platform connecting donors, volunteers, and relief camps with real-time updates, resource tracking, and transparent donation systems.",
        detailedDescription: "Built during a hackathon to address communication gaps during floods. RescueChain provides a centralized platform for relief camps to post requirements and for the public to pledge donations. It features a live map of affected areas and a volunteer coordination system.",
        features: [
            "Geo-tagged relief camp directory",
            "Inventory tracking for supplies",
            "Volunteer registration and task assignment",
            "transparent donation tracking"
        ],
        tags: ["Python", "HTML5", "CSS3", "Bootstrap", "Firebase", "FastAPI", "JavaScript", "Figma"],
        link: "",
        github: "https://github.com/kithu07/RescueChain",
        images: ["/rescue.png?height=600&width=800"]
    }
]
