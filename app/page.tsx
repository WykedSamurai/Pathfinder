import { campaignModules, sampleCampaigns, supportedSystems } from "@/lib/data";

const statusLabels = {
  active: "Active now",
  planned: "Planned",
  later: "Later phase",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:px-10">
        <header className="rounded-3xl border border-amber-900/50 bg-stone-900/80 p-8 shadow-2xl shadow-black/30">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Private Tabletop Platform</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Pathfinder</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
                A campaign hub for Pathfinder, D&D, Star Wars Saga, and custom roleplay systems. Each campaign keeps its characters, lore, rules, sessions, and AI context separate.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-700 bg-stone-950/70 p-5">
              <p className="text-sm font-semibold text-stone-300">Version 0.1 Focus</p>
              <p className="mt-2 text-2xl font-bold text-amber-300">Campaign Hub</p>
              <p className="mt-3 text-sm leading-6 text-stone-400">Start with the foundation: campaigns, systems, workspace areas, table expectations, and modular tools.</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Create Campaign</h2>
            <p className="mt-2 text-sm leading-6 text-stone-400">This is the first dashboard form placeholder. Database and login wiring come next.</p>
            <form className="mt-6 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-stone-300">Campaign Name</span>
                <input className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none ring-amber-500/30 focus:ring-4" placeholder="Example: Rise of the Runelords" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-stone-300">Game System</span>
                <select className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none ring-amber-500/30 focus:ring-4">
                  {supportedSystems.map((system) => (
                    <option key={system}>{system}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-stone-300">Campaign Tone</span>
                <textarea className="mt-2 min-h-28 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none ring-amber-500/30 focus:ring-4" placeholder="Intrigue, dungeon crawl, space opera, political sandbox..." />
              </label>
              <button type="button" className="w-full rounded-xl bg-amber-500 px-4 py-3 font-bold text-stone-950 transition hover:bg-amber-400">
                Save Campaign Draft
              </button>
            </form>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {campaignModules.map((module) => (
              <article key={module.title} className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <span className="rounded-full border border-amber-800 bg-amber-950/60 px-3 py-1 text-xs text-amber-300">
                    {statusLabels[module.status]}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-400">{module.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Campaign Workspace Preview</h2>
              <p className="mt-2 text-sm text-stone-400">Starter examples showing how separate campaigns will be represented.</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-stone-300">
              {supportedSystems.map((system) => (
                <span key={system} className="rounded-full border border-stone-700 px-3 py-1">{system}</span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sampleCampaigns.map((campaign) => (
              <article key={campaign.name} className="rounded-2xl border border-stone-800 bg-stone-950 p-5">
                <p className="text-sm text-amber-300">{campaign.system}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{campaign.name}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{campaign.tone}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
