"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function NidhiPortfolio() {
  const [page, setPage] = useState("about");
  const [showImage, setShowImage] = useState(false);
  const [showYogaImage, setShowYogaImage] = useState(false);

  const navItems = ["about", "projects", "achievements", "contact"];

  const coreSkills = [
  "C#",
  ".NET Core",
  "Web API",
  "Azure",
  "SQL Server",
  "Oracle",
  "Microservices",
  "CI/CD",
  "Agile",
  "DevOps"
];

const aiSkills = [
  "Azure OpenAI",
  "RAG",
  "FastAPI",
  "Cosmos DB",
  "LLM Concepts"
];

  const projects = [
    {
      title: "AI Decision Engine",
      desc: "Multi-source AI routing across RAG, SQL, NoSQL, and LLM fallback.",
      github: "#",
      live: "#",
    },
    {
      title: "Enterprise AI Chatbot",
      desc: "AI-powered chatbot using RAG and Azure OpenAI, explored for enterprise knowledge systems and intelligent data access.",
      github: "#",
      live: "#",
    },
    {
      title: "AI CMDB Prototype",
      desc: "GenAI system for enterprise metadata insights.",
      github: "#",
      live: "#",
    },
  ];

  const PageWrap = ({ children }: any) => (
    <motion.div
      key={page}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#07122b] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-3">
            <button onClick={() => setShowImage(true)}>
              <img src="/nidhi-photo.jpg" className="w-10 h-10 rounded-full border border-cyan-400"/>
            </button>

            <div>
              <div className="text-cyan-400 font-semibold">Nidhi Mowar</div>
              <div className="text-sm text-gray-300">
                Senior .NET Technical Manager | Azure | Enterprise Modernization
              </div>
            </div>
          </div>

          <nav className="flex gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`capitalize ${
                  page === item
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence mode="wait">

        {/* ABOUT */}
        {page === "about" && (
          <PageWrap>
            <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6 py-24 pb-32 items-center">

              {/* LEFT */}
              <div>
                <p className="text-cyan-400 mb-4">SENIOR TECHNICAL MANAGER</p>

                <h1 className="text-5xl font-bold">
                  Building scalable,
                  <br />
                  <span className="text-cyan-400">Modern Enterprise Systems</span>
                </h1>

                <p className="mt-6 text-gray-300 leading-7">
                  I lead large-scale modernization programs, transforming legacy systems into scalable .NET and cloud-based platforms.
                </p>

                <p className="mt-3 text-gray-300 leading-7">
                  With 17+ years of experience across global teams, I specialize in solution architecture, Azure DevOps, microservices, and delivering high-quality enterprise systems.
                </p>

                <div className="mt-8 flex gap-4">
                  <button onClick={() => setPage("contact")}
                    className="px-6 py-3 bg-cyan-500 text-black rounded-xl">
                    Contact
                  </button>

                  <button onClick={() => setPage("projects")}
                    className="px-6 py-3 border border-cyan-400 rounded-xl">
                    Projects
                  </button>

                  <a href="/Nidhi_Mowar_Resume.pdf" target="_blank"
                    className="px-6 py-3 border border-white/20 rounded-xl">
                    Resume
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">

                {/* CORE EXPERTISE */}
                <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10">
                  <div className="text-gray-400 mb-3">Core Expertise</div>

                  <div className="text-sm text-gray-300 space-y-2 mb-4">
                    <div><span className="text-cyan-400">Role:</span> Senior Technical Manager</div>
                    <div><span className="text-cyan-400">Focus:</span> .NET Modernization + Enterprise AI</div>
                    <div><span className="text-cyan-400">Strength:</span> Enterprise-scale delivery</div>
                  </div>

                  {/* 🔥 PREMIUM CERTIFICATION */}
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-us/NidhiMowar-6749/12CEDB1669C0499B?sharingId=585B9E237CDF914A"
                    target="_blank"
                    className="inline-block mb-2"
                  >
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg text-cyan-300 text-sm hover:bg-cyan-500/20 transition">
                      🏆 Microsoft Certified: Azure AI Fundamentals (AI-900)
                    </div>
                  </a>

                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-us/NidhiMowar/92CD1285FC43AB0F?sharingId=FFEFC76164B67DA6"
                    target="_blank"
                  >
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg text-cyan-300 text-sm hover:bg-cyan-500/20 transition">
                      ☁️ Microsoft Certified: Azure Fundamentals (AZ-900)
                    </div>
                  </a>

                  {/* SKILLS */}
                  <div className="space-y-3">

                    {/* CORE STACK */}
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Core Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {coreSkills.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 text-xs bg-white/10 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* AI EXPOSURE */}
                    <div>
                      <div className="text-xs text-gray-400 mb-1">AI Exposure</div>
                      <div className="flex flex-wrap gap-2">
                        {aiSkills.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 text-xs bg-cyan-500/10 rounded-full text-cyan-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* YOGA */}
                <div className="bg-[#0f172a] p-4 rounded-xl border border-white/10 flex gap-4 items-center">

                  <img
                    src="/yoga.jpg"
                    onClick={() => setShowYogaImage(true)}
                    className="w-28 h-28 object-cover rounded-lg cursor-pointer"
                  />

                  <div>
                    <div className="text-cyan-400 font-semibold">
                      More Than Code
                    </div>

                    <p className="text-sm text-gray-300 mt-1">
                      I practice Yoga regularly, focusing on balance, discipline, and mental clarity. It helps me stay grounded and consistent—qualities I bring into leadership and engineering.
                    </p>

                    <div className="flex gap-2 mt-2 text-xs">
                      <span className="bg-white/10 px-2 py-1 rounded">🧘 Yoga</span>
                      <span className="bg-white/10 px-2 py-1 rounded">⚖️ Balance</span>
                      <span className="bg-white/10 px-2 py-1 rounded">🧠 Focus</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </PageWrap>
        )}

        {/* PROJECTS */}
        {page === "projects" && (
          <PageWrap>
            <section className="max-w-7xl mx-auto px-6 py-20">
              <h2 className="text-3xl mb-10">Projects</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <div key={p.title} className="bg-[#0f172a] p-5 rounded-xl">
                    <h3 className="text-cyan-400">{p.title}</h3>
                    <p className="text-gray-300 mt-3">{p.desc}</p>

                    <div className="mt-4 flex gap-3">
                      <a href={p.github} className="border px-3 py-1 text-sm rounded hover:text-cyan-400">
                        GitHub
                      </a>
                      <a href={p.live} className="bg-cyan-500 px-3 py-1 text-sm rounded text-black">
                        Live Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </PageWrap>
        )}

        {/* ACHIEVEMENTS */}
        {page === "achievements" && (
          <PageWrap>
            <section className="max-w-6xl mx-auto px-6 py-20">
              <h2 className="text-3xl mb-10">Achievements</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0f172a] p-5 rounded-xl">
                  Microsoft Certified: Azure AI Fundamentals (AI-900)
                </div>
                <div className="bg-[#0f172a] p-5 rounded-xl">
                  Built multi-source AI system
                </div>
                <div className="bg-[#0f172a] p-5 rounded-xl">
                  Enterprise AI chatbot delivered
                </div>
                <div className="bg-[#0f172a] p-5 rounded-xl">
                  Microsoft Certified: Azure Fundamentals (AZ-900)
                </div>
              </div>
            </section>
          </PageWrap>
        )}

        {/* CONTACT */}
        {page === "contact" && (
          <PageWrap>
            <section className="max-w-5xl mx-auto px-6 py-20">
              <h2 className="text-3xl mb-10">Contact</h2>

              <div className="bg-[#0f172a] p-6 rounded-xl grid md:grid-cols-3 gap-4">

                <div>
                  <div className="text-cyan-400 text-sm">Location</div>
                  <div>Torrance, CA, USA</div>
                </div>

                <div>
                  <div className="text-cyan-400 text-sm">Email</div>
                  <a href="mailto:nidhimowar@hotmail.com" className="text-cyan-300 hover:underline">
                    nidhimowar@hotmail.com
                  </a>
                </div>

                <div>
                  <div className="text-cyan-400 text-sm">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/nidhi-mowar-523274330/"
                    target="_blank"
                    className="text-cyan-300 hover:underline"
                  >
                    View Profile →
                  </a>
                </div>

              </div>
            </section>
          </PageWrap>
        )}

      </AnimatePresence>

      {/* MODALS */}
      {showImage && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center"
          onClick={() => setShowImage(false)}>
          <img src="/nidhi-photo.jpg" className="w-[250px] rounded-xl"/>
        </div>
      )}

      {showYogaImage && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center"
          onClick={() => setShowYogaImage(false)}>
          <img src="/yoga.jpg" className="w-[350px] rounded-xl"/>
        </div>
      )}

    </div>
  );
}