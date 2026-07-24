import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="label mb-6">Folded</p>
      <h1 className="h-display text-[clamp(3rem,12vw,9rem)]">
        <span className="gold-text">404</span>
      </h1>
      <p className="lede mt-6 max-w-md">
        That page isn&rsquo;t in the deck. Head back to the table.
      </p>
      <Link href="/" className="btn btn-solid mt-10">
        Back to the room
      </Link>
    </section>
  );
}
