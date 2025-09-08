export default function FeatureCard(props: {
  title: string;               // your “What you’ll get:” headline
  children: React.ReactNode;   // the bullets
}) {
  const { title, children } = props;
  return (
    <div className="bg-white-900 border-gray/10 p-6  border-l">
      {/* Title at the very top */}
      <h3 className="text-3xl font-medium">{title}</h3>

      {/* Bullets styled like your old description */}
      <div className="mt-4 text-white/50 space-y-2">
        {children}
      </div>
    </div>
  );
}
