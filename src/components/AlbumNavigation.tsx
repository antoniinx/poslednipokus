import Link from 'next/link';

export default function AlbumNavigation() {
  const albums = [
    { href: '/album/silvestr-2024', text: 'silvestr 2024', color: 'blue' },
    { href: '/album/italie-2025', text: 'itálie 2025', color: 'yellow' },
    { href: '/album/sazava-2025', text: 'sázava 2025', color: 'orange' },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { text: string; dot: string } } = {
      blue: { text: 'text-blue', dot: 'blue-dot' },
      yellow: { text: 'text-yellow', dot: 'yellow-dot' },
      orange: { text: 'text-orange', dot: 'orange-dot' },
      purple: { text: 'text-purple', dot: 'purple-dot' },
      green: { text: 'text-green', dot: 'green-dot' },
    };
    return colorMap[color] || { text: 'text-black', dot: 'bg-black' };
  };

  return (
    <nav className="flex-none">
      {albums.map((album) => {
        const colors = getColorClasses(album.color);
        return (
          <Link
            key={album.href}
            href={album.href}
            className={`nav-link ${colors.text} hover:${colors.text}`}
          >
            <span className={`dot ${colors.dot}`}></span>
            {album.text}
          </Link>
        );
      })}
    </nav>
  );
} 