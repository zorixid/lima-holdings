export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="inline-block w-full justify-center text-center">
        {children}
      </div>
    </section>
  );
}
