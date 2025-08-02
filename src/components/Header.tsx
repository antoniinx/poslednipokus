import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-8">
      <h1 className="text-4xl font-bold m-0 leading-none">
        <Link href="/" className="no-underline text-black hover:text-gray-700">
          tybl.eu
        </Link>
      </h1>
    </header>
  );
} 