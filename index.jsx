import React, { useState, useEffect } from 'react';

// Main App component for the entire website
export default function App() {
  const [activeScreen, setActiveScreen] = useState('home'); // 'home', 'game-products', 'contact', 'about'
  const [selectedGame, setSelectedGame] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [gameId, setGameId] = useState('');
  const [gameServerId, setGameServerId] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Data for all games and their products
  const gamesData = {
    'free-fire': {
      title: 'Free Fire',
      logo: 'https://files.catbox.moe/5jdbig.jpg',
      idPlaceholder: 'Masukkan ID Game',
      products: [
        { name: 'Membership Mingguan', price: 'Rp28.000' },
        { name: 'Membership Bulanan', price: 'Rp80.000' },
        { name: 'BP Card', price: 'Rp43.000' },
        { name: '💎 50 Diamond', price: 'Rp8.000' },
        { name: '💎 70 Diamond', price: 'Rp9.000' },
        { name: '💎 140 Diamond', price: 'Rp18.000' },
        { name: '💎 355 Diamond', price: 'Rp45.000' },
        { name: '💎 720 Diamond', price: 'Rp90.000' },
        { name: '💎 1050 Diamond', price: 'Rp133.000' },
      ],
    },
    'mobile-legend': {
      title: 'Mobile Legend',
      logo: 'https://files.catbox.moe/atj5sa.jpg',
      idPlaceholder: 'Masukkan ID Game',
      serverIdPlaceholder: 'Masukkan ID Server',
      products: [
        { name: 'Weakly Diamond Pass', price: 'Rp28.000' },
        { name: 'Weakly Diamond Pass x2', price: 'Rp58.000' },
        { name: 'Weakly Diamond Pass x3', price: 'Rp87.000' },
        { name: '💎 50 Diamond', price: 'Rp14.000' },
        { name: '💎 80 Diamond', price: 'Rp23.000' },
        { name: '💎 100 Diamond', price: 'Rp28.000' },
        { name: '💎 148 Diamond', price: 'Rp40.000' },
        { name: '💎 240 Diamond', price: 'Rp64.000' },
        { name: '💎 300 Diamond', price: 'Rp78.000' },
        { name: '💎 370 Diamond', price: 'Rp98.000' },
        { name: '💎 429 Diamond', price: 'Rp120.000' },
        { name: '💎 518 Diamond', price: 'Rp138.000' },
        { name: '💎 600 Diamond', price: 'Rp160.000' },
        { name: '💎 750 Diamond', price: 'Rp200.000' },
        { name: '💎 875 Diamond', price: 'Rp230.000' },
        { name: '💎 1045 Diamond', price: 'Rp265.000' },
        { name: '💎 1506 Diamond', price: 'Rp390.000' },
      ],
    },
    'roblox': {
      title: 'Roblox',
      logo: 'https://files.catbox.moe/xpjea7.jpg',
      idPlaceholder: 'Masukkan Username Roblox',
      products: [
        { type: 'Via Login', name: '80 Robux', price: 'Rp19.000' },
        { type: 'Via Login', name: '400 Robux', price: 'Rp98.000' },
        { type: 'Via Login', name: '800 Robux', price: 'Rp200.000' },
        { type: 'Via Robux 5-7 Hari', name: '100 Robux', price: 'Rp12.000' },
        { type: 'Via Robux 5-7 Hari', name: '200 Robux', price: 'Rp24.000' },
        { type: 'Via Robux 5-7 Hari', name: '300 Robux', price: 'Rp36.000' },
        { type: 'Via Robux 5-7 Hari', name: '400 Robux', price: 'Rp48.000' },
        { type: 'Via Robux 5-7 Hari', name: '500 Robux', price: 'Rp60.000' },
      ],
    },
    'pubg-mobile': {
      title: 'PUBG Mobile',
      logo: 'https://files.catbox.moe/ta4alo.jpg',
      idPlaceholder: 'Masukkan ID Game',
      products: [
        { name: 'Elite Pass Global', price: 'Rp163.000' },
        { name: 'Elite Pass Plus Global', price: 'Rp440.000' },
        { name: '60 UC - Indo', price: 'Rp15.000', ucImage: 'https://files.catbox.moe/vhamf2.png' },
        { name: '325 UC - Indo', price: 'Rp75.000', ucImage: 'https://files.catbox.moe/vhamf2.png' },
        { name: '660 UC - Indo', price: 'Rp146.000', ucImage: 'https://files.catbox.moe/vhamf2.png' },
        { name: '1800 UC - Indo', price: 'Rp365.000', ucImage: 'https://files.catbox.moe/vhamf2.png' },
        { name: '3850 UC - Indo', price: 'Rp720.000', ucImage: 'https://files.catbox.moe/vhamf2.png' },
        { name: '8100 UC - Indo', price: 'Rp1.480.000', ucImage: 'https://files.catbox.moe/vhamf2.png' },
      ],
    },
    'blood-strike': {
      title: 'Blood Strike',
      logo: 'https://files.catbox.moe/62vay9.jpg',
      idPlaceholder: 'Masukkan ID Game',
      products: [
        { name: 'Ultra Skin Lukcy Chest', price: 'Rp7.000' },
        { name: 'Lucky Bag Week', price: 'Rp14.000' },
        { name: 'Level Up Pass', price: 'Rp26.000' },
        { name: 'Strike Pass Elite', price: 'Rp52.000' },
        { name: 'Strike Pass Premium', price: 'Rp117.000' },
        { name: '100 + 5 Gold', price: 'Rp11.000' },
        { name: '300 + 20 Gold', price: 'Rp33.000' },
        { name: '500 + 40 Gold', price: 'Rp55.000' },
        { name: '1000 + 100 Gold', price: 'Rp110.000' },
        { name: '2000 + 200 Gold', price: 'Rp212.000' },
        { name: '5000 + 800 Gold', price: 'Rp530.000' },
      ],
    },
    'super-sus': {
      title: 'Super SUS',
      logo: 'https://files.catbox.moe/3po9bv.jpg',
      idPlaceholder: 'Masukkan ID Game',
      products: [
        { name: 'Weakly Card', price: 'Rp12.000' },
        { name: 'Super Pass', price: 'Rp54.000' },
        { name: 'Super Pass Bundle', price: 'Rp110.000' },
        { name: 'Monthly Card', price: 'Rp138.000' },
        { name: 'Super VIP Card', price: 'Rp155.000' },
        { name: '100 Goldstar', price: 'Rp11.000' },
        { name: '100 + 28 Goldstar', price: 'Rp12.000' },
        { name: '310 Goldstar', price: 'Rp32.000' },
        { name: '520 Goldstar', price: 'Rp54.000' },
        { name: '1060 Goldstar', price: 'Rp110.000' },
        { name: '2180 Goldstar', price: 'Rp220.000' },
        { name: '5600 Goldstar', price: 'Rp540.000' },
      ],
    },
  };

  // Handles navigation to the product page for a selected game
  const handleGameSelect = (gameKey) => {
    setSelectedGame(gameKey);
    setActiveScreen('game-products');
    setGameId('');
    setGameServerId('');
    setSelectedProduct(null);
  };

  // Handles clicking the order button
  const handleOrder = () => {
    if (!selectedProduct || (!gameId && selectedGame !== 'roblox') || (!gameId && !gameServerId && selectedGame === 'mobile-legend') || (!gameId && selectedGame === 'roblox')) {
      alert('Mohon lengkapi ID Game dan pilih produk terlebih dahulu.');
      return;
    }

    const gameIdInput = selectedGame === 'mobile-legend' ? `${gameId}(${gameServerId})` : gameId;
    const message = `Hallo Min, ingin Beli ${selectedProduct.name} dengan harga ${selectedProduct.price}, dan ini ID/Username Game Saya ${gameIdInput}`;
    const telegramUrl = `https://t.me/AlipzzyOfficiaL?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  // The main layout of the application
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      
      {/* Sidebar (Hamburger Menu) */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <h2 className="text-xl font-bold text-blue-400">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <button onClick={() => { setActiveScreen('home'); setIsSidebarOpen(false); }} className="block w-full text-left p-3 rounded-lg text-lg font-medium text-gray-200 hover:bg-gray-700 transition-colors duration-200">Home</button>
          <button onClick={() => { setActiveScreen('contact'); setIsSidebarOpen(false); }} className="block w-full text-left p-3 rounded-lg text-lg font-medium text-gray-200 hover:bg-gray-700 transition-colors duration-200">Hubungi CS</button>
          <button onClick={() => { setActiveScreen('about'); setIsSidebarOpen(false); }} className="block w-full text-left p-3 rounded-lg text-lg font-medium text-gray-200 hover:bg-gray-700 transition-colors duration-200">About</button>
        </nav>
      </div>

      {/* Main content with header */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-gray-800 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-40">
          {/* Hamburger menu button */}
          <button onClick={() => setIsSidebarOpen(true)} className="text-white focus:outline-none">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 text-center flex-grow">Top Up Games By AlipzzyOfficiaL</h1>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 pt-20 overflow-auto">
          {/* Home Screen: Game Selection */}
          {activeScreen === 'home' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.keys(gamesData).map((gameKey) => (
                <div
                  key={gameKey}
                  className="bg-gray-800 rounded-2xl shadow-xl p-4 flex flex-col items-center cursor-pointer hover:bg-gray-700 transition-transform transform hover:scale-105"
                  onClick={() => handleGameSelect(gameKey)}
                >
                  <img
                    src={gamesData[gameKey].logo}
                    alt={`${gamesData[gameKey].title} Logo`}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-blue-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/363636/ffffff?text=Logo" }}
                  />
                  <h2 className="mt-4 text-xl md:text-2xl font-semibold text-center">{gamesData[gameKey].title}</h2>
                </div>
              ))}
            </div>
          )}

          {/* Game Products Screen */}
          {activeScreen === 'game-products' && selectedGame && (
            <div className="flex flex-col items-center max-w-2xl mx-auto p-4">
              <button
                onClick={() => setActiveScreen('home')}
                className="self-start text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4 flex items-center"
              >
                <svg className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali
              </button>

              <h2 className="text-3xl font-bold text-blue-400 mb-6">{gamesData[selectedGame].title}</h2>

              {/* ID Input Form */}
              <div className="w-full bg-gray-800 p-6 rounded-2xl shadow-lg mb-6">
                <p className="text-gray-300 font-medium mb-3">
                  Masukkan {selectedGame === 'roblox' ? 'Username' : 'ID Game'} Anda
                  {selectedGame === 'mobile-legend' && ' dan ID Server Anda'}
                </p>
                <input
                  type="text"
                  placeholder={gamesData[selectedGame].idPlaceholder}
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedGame === 'mobile-legend' && (
                  <input
                    type="text"
                    placeholder={gamesData[selectedGame].serverIdPlaceholder}
                    value={gameServerId}
                    onChange={(e) => setGameServerId(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>

              {/* Product List */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gamesData[selectedGame].products.map((product, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProduct(product)}
                    className={`bg-gray-800 p-4 rounded-2xl shadow-md flex items-center justify-between cursor-pointer transition-colors duration-200 ${selectedProduct && selectedProduct.name === product.name ? 'border-4 border-blue-500' : 'border-4 border-transparent'}`}
                  >
                    <div className="flex items-center">
                      {product.ucImage && (
                        <img
                          src={product.ucImage}
                          alt="UC"
                          className="w-10 h-10 mr-3 object-contain"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/363636/ffffff?text=UC" }}
                        />
                      )}
                      <div>
                        <p className="text-lg font-medium">{product.name}</p>
                        {product.type && <span className="text-sm text-gray-400 italic">({product.type})</span>}
                      </div>
                    </div>
                    <p className="text-xl font-bold text-blue-300">{product.price}</p>
                  </div>
                ))}
              </div>
              
              {/* Roblox special note */}
              {selectedGame === 'roblox' && (
                <p className="mt-4 text-sm text-gray-400 italic text-center">
                  *Untuk Via Robux 5-7 Hari Menggunakan Gamepass Wajib Mengatur Robux Sesuai Arahan Admin
                </p>
              )}

              {/* Order Button */}
              {selectedProduct && (
                <button
                  onClick={handleOrder}
                  className="mt-6 w-full max-w-xs p-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transition-colors duration-300"
                >
                  Order
                </button>
              )}
            </div>
          )}

          {/* Contact Screen */}
          {activeScreen === 'contact' && (
            <div className="flex flex-col items-center max-w-sm mx-auto p-4 bg-gray-800 rounded-2xl shadow-lg text-center">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Hubungi CS</h2>
              <p className="text-gray-300 mb-4">Pilih salah satu opsi di bawah untuk menghubungi layanan pelanggan kami.</p>
              <a href="https://wa.me/6281399649577" target="_blank" rel="noopener noreferrer" className="w-full block p-4 mb-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full transition-colors duration-300">
                Via WhatsApp
              </a>
              <a href="https://t.me/AlipzzyOfficiaL" target="_blank" rel="noopener noreferrer" className="w-full block p-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full transition-colors duration-300">
                Via Telegram
              </a>
              <button
                onClick={() => setActiveScreen('home')}
                className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
              >
                <svg className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Beranda
              </button>
            </div>
          )}

          {/* About Screen */}
          {activeScreen === 'about' && (
            <div className="flex flex-col items-center max-w-sm mx-auto p-6 bg-gray-800 rounded-2xl shadow-lg text-center">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">About</h2>
              <p className="text-gray-200 text-lg mb-4">
                "Hallo Gua AlipzzyOfficiaL Website Ini Khusus Kalian Yg ingin Top Up Games Happy Shopping 🛍️"
              </p>
              <div className="w-full text-left mt-4 border-t border-gray-700 pt-4">
                <p className="font-semibold text-blue-400">Team:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li><span className="font-medium">AlipzzyOfficiaL</span> ( Developer )</li>
                  <li><span className="font-medium">Vampire Sagara</span> ( Friends )</li>
                  <li><span className="font-medium">Yukina Devils</span> ( Friends )</li>
                  <li><span className="font-medium">Dimzzzxz</span> ( Friends )</li>
                  <li><span className="font-medium">Tama Ryuichi</span> ( Support )</li>
                  <li><span className="font-medium">My Partner</span> ( Support )</li>
                </ul>
              </div>
              <button
                onClick={() => setActiveScreen('home')}
                className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
              >
                <svg className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Beranda
              </button>
            </div>
          )}

        </main>
      </div>

      {/* Tailwind CSS Script - For this environment to work */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}
