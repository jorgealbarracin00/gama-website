export default function Footer() {
  return (
    <footer className="mt-10 text-center text-xs text-slate-500">
      (c) {new Date().getFullYear()} Gama Dynamics - Built with Next.js + Tailwind
      - Deployed on Vercel
    </footer>
  );
}
