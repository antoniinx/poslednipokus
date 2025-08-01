import Header from '../components/Header';
import ColorBar from '../components/ColorBar';
import AlbumNavigation from '../components/AlbumNavigation';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <Header />
      
      <ColorBar activeColor="red" />
      
      <div className="flex justify-between mt-25">
        <AlbumNavigation />
      </div>
    </div>
  );
}
