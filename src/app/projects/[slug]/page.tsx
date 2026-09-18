import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";

// Mock database for projects
const projectsData = {
  "nobox-chat": {
    title: "Nobox.Chat",
    subtitle: "A fast, secure, and modern chat application",
    desc: "Nobox.Chat is a comprehensive messaging platform built with Flutter and Firebase. It features real-time messaging, end-to-end encryption, and a sleek user interface designed for modern communication needs. The backend is supported by robust C# servers for handling complex logic and high traffic.",
    tags: ["Flutter", "Server", "C#", "Firebase"],
    img: "/assets/images/nobox-logo.png",
    link: "https://github.com/juhrii/nobox",
    features: [
      "End-to-End Encryption for all messages",
      "Real-time status updates and typing indicators",
      "Cross-platform support (iOS, Android, Web)",
      "Media sharing (Images, Voice Notes, Files)"
    ],
    role: "Lead Mobile Developer"
  },
  "absensiku": {
    title: "Absensiku",
    subtitle: "Smart employee attendance tracking system",
    desc: "Absensiku simplifies employee time tracking by utilizing location services (GPS) and biometric authentication. It streamlines leave requests, payroll calculations, and generates comprehensive reports for HR departments.",
    tags: ["Flutter", "Dart", "DB", "REST API"],
    img: "/assets/images/app_icon_new.png",
    link: "https://github.com/juhrii/Absensimassal",
    features: [
      "Geofencing for accurate check-ins",
      "Face recognition integration",
      "Automated monthly reports",
      "Leave and overtime management"
    ],
    role: "Fullstack Developer"
  },
  "juresep": {
    title: "Juresep",
    subtitle: "Your digital recipe book and cooking assistant",
    desc: "Juresep is an elegant digital recipe book. Users can browse thousands of recipes, save their favorites, and follow step-by-step guides with integrated timers. The app is built with a focus on an intuitive, beautiful UI that makes cooking a joy.",
    tags: ["Flutter", "REST API", "UI/UX"],
    img: "/assets/images/juresep-logo.jpg",
    link: "https://github.com/juhrii",
    features: [
      "Curated recipe collections",
      "Step-by-step cooking mode",
      "Ingredient shopping list generator",
      "User-submitted recipes and reviews"
    ],
    role: "Frontend Developer & UI Designer"
  }
};

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full relative bg-[#0B0914] text-[#f5f5f5]">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center text-[#A855F7] hover:text-white transition-colors mb-8 font-mono text-sm tracking-widest uppercase">
            &larr; Back to Projects
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl md:text-3xl text-gray-400">{project.subtitle}</p>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video relative rounded-3xl overflow-hidden bg-[#151030] border border-white/5 mb-16 flex items-center justify-center p-8">
          <img src={project.img} alt={project.title} className="max-w-full max-h-full object-contain" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#A855F7] mb-4">Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.desc}
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#A855F7] mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-lg">
                    <span className="text-[#A855F7] mt-1">✦</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8 p-8 bg-white/5 rounded-2xl border border-white/10 h-fit">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Role</h3>
              <p className="text-white font-medium">{project.role}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] text-xs font-mono uppercase tracking-wider rounded-full border border-[#A855F7]/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-4 bg-[#A855F7] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#A855F7]/80 transition-colors">
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
