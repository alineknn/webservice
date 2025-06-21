export default function FeatureCard(props: {
  title: string;               // your “What you’ll get:” headline
  children: React.ReactNode;   // the bullets
}) {
  const { title, children } = props;
  return (
    <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl">
      {/* Title at the very top */}
      <h3 className="text-3xl font-medium">{title}</h3>

      {/* Bullets styled like your old description */}
      <div className="mt-4 text-white/50 space-y-2">
        {children}
      </div>
    </div>
  );
}
