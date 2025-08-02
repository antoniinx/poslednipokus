import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { href: '/blog', text: 'blog', color: 'blue' },
    { href: '/portfolio', text: 'portfolio', color: 'yellow' },
    { href: '/youtube', text: 'youtube', color: 'orange' },
    { href: '/contact', text: 'contact', color: 'purple' },
    { href: '/newsletter', text: 'newsletter', color: 'green' },
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
      {navItems.map((item) => {
        const colors = getColorClasses(item.color);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${colors.text} hover:${colors.text}`}
          >
            <span className={`dot ${colors.dot}`}></span>
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
} 