import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell py-24 text-center">
      <h1 className="text-3xl font-extralight tracking-[0.08em]">Not found</h1>
      <p className="mt-4 text-sm text-muted">
        That page does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-xs tracking-[0.18em] text-accent uppercase"
      >
        Back home
      </Link>
    </div>
  );
}
