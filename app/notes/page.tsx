import { createClient } from "@/utils/supabase/server";

type Note = {
  id: number;
  title: string;
};

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: notes, error } = await supabase.from("notes").select("id, title").order("id", { ascending: true });

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-10 text-stone-100">
      <section className="mx-auto max-w-4xl rounded-3xl border border-stone-800 bg-stone-900 p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Supabase Test</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Notes</h1>
        <p className="mt-3 text-stone-400">This page confirms that Next.js can read from your Supabase notes table.</p>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-900 bg-red-950/50 p-4 text-red-200">
            <p className="font-semibold">Supabase query error</p>
            <p className="mt-2 text-sm">{error.message}</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-3">
            {(notes as Note[] | null)?.map((note) => (
              <article key={note.id} className="rounded-2xl border border-stone-800 bg-stone-950 p-4">
                <p className="text-sm text-stone-500">Note #{note.id}</p>
                <h2 className="mt-1 text-lg font-semibold text-white">{note.title}</h2>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
