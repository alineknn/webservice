// src/app/about/page.tsx
export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">About</h1>
      <p>Short blurb about the project.</p>
    </main>
  );
}