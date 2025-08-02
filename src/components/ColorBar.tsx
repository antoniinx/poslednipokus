interface ColorBarProps {
  activeColor?: 'blue' | 'pink' | 'purple' | 'red' | 'orange' | 'yellow' | 'green';
}

export default function ColorBar({ activeColor = 'red' }: ColorBarProps) {
  const colors = [
    { name: 'blue', bg: 'bg-blue' },
    { name: 'pink', bg: 'bg-pink' },
    { name: 'purple', bg: 'bg-purple' },
    { name: 'red', bg: 'bg-red' },
    { name: 'orange', bg: 'bg-orange' },
    { name: 'yellow', bg: 'bg-yellow' },
    { name: 'green', bg: 'bg-green' },
  ];

  return (
    <div className="flex justify-center my-30">
      {colors.map((color) => (
        <div
          key={color.name}
          className={`color-block ${color.bg} ${
            color.name === activeColor ? 'active' : ''
          }`}
        />
      ))}
    </div>
  );
} 