import React, { useState, useEffect } from 'react';

function App() {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSentAway, setIsSentAway] = useState(false);
  const [baggageItems, setBaggageItems] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [currentLongText, setCurrentLongText] = useState('');
  const [chaosLevel, setChaosLevel] = useState(0);
  const [randomMessages] = useState([
    "Your problems are now someone else's problem!",
    "The ant is probably judging your life choices!",
    "Your baggage is now floating in the digital void!",
    "The ant dropped your problems in a volcano!",
    "Your worries are now part of the ant's collection!",
    "The ant sold your problems on eBay!",
    "Your baggage is now haunting a different dimension!",
    "The ant fed your problems to a dragon!",
    "Your worries are now stuck in a time loop!",
    "The ant used your problems as fuel for a rocket!"
  ]);

  const addTextItem = () => {
    if (currentText.trim()) {
      const sillyPrefixes = ["🤡", "💩", "🤪", "😵", "🤯", "👻", "🤖", "👽", "🦄", "🐸"];
      const randomPrefix = sillyPrefixes[Math.floor(Math.random() * sillyPrefixes.length)];
      setBaggageItems([...baggageItems, { type: 'text', content: `${randomPrefix} ${currentText}`, id: Date.now() }]);
      setCurrentText('');
      setChaosLevel(chaosLevel + 1);
    }
  };

  const addImageItem = () => {
    const sillyImageNames = [
      "My Face When I Realize I'm an Adult.jpg",
      "That One Time I Tried to Adult.png",
      "My Life in a Nutshell.gif",
      "When Monday Hits Like a Truck.jpg",
      "My Bank Account After Shopping.webp",
      "My Brain on 2 Hours of Sleep.png",
      "When I Remember I Have Responsibilities.jpg",
      "My Social Skills in Action.gif"
    ];
    const randomImage = sillyImageNames[Math.floor(Math.random() * sillyImageNames.length)];
    setBaggageItems([...baggageItems, { type: 'image', content: `📷 ${randomImage}`, id: Date.now() }]);
    setChaosLevel(chaosLevel + 2);
  };

  const addLongTextItem = () => {
    if (currentLongText.trim()) {
      const dramaticEndings = [
        "...and that's why I can't have nice things!",
        "...but honestly, who even cares anymore?",
        "...and then I realized I was overthinking it.",
        "...but plot twist: it doesn't even matter!",
        "...and that's the story of my life!",
        "...but hey, at least I'm not a robot!",
        "...and that's when I knew I was doomed!",
        "...but whatever, I'm just vibing!"
      ];
      const randomEnding = dramaticEndings[Math.floor(Math.random() * dramaticEndings.length)];
      setBaggageItems([...baggageItems, { type: 'longText', content: `${currentLongText} ${randomEnding}`, id: Date.now() }]);
      setCurrentLongText('');
      setChaosLevel(chaosLevel + 3);
    }
  };

  const removeItem = (id) => {
    setBaggageItems(baggageItems.filter(item => item.id !== id));
  };

  const openBag = () => {
    setIsBagOpen(true);
    setIsSentAway(false);
    setChaosLevel(0);
  };

  const closeBagAndSend = () => {
    setBaggageItems([]);
    setIsSentAway(true);
    setIsBagOpen(false);
    // Add some chaos to the chaos level
    setChaosLevel(chaosLevel + Math.floor(Math.random() * 10) + 5);
  };

  const startNewDrop = () => {
    setIsBagOpen(false);
    setIsSentAway(false);
    setBaggageItems([]);
    setCurrentText('');
    setCurrentLongText('');
    setChaosLevel(0);
  };

  // Add some chaotic background effects
  useEffect(() => {
    if (chaosLevel > 5) {
      document.body.style.animation = 'chaos 0.5s infinite alternate';
    } else {
      document.body.style.animation = 'none';
    }
  }, [chaosLevel]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Windows XP Style Title Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-blue-500 border-b-blue-800 mb-4">
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-400 border border-yellow-500 rounded-sm"></div>
              <div className="w-4 h-4 bg-green-400 border border-green-500 rounded-sm"></div>
              <div className="w-4 h-4 bg-red-400 border border-red-500 rounded-sm"></div>
            </div>
            <h1 className="text-white font-bold text-lg">🤪 CHAOTIC BAGGAGE CHAOS 🤪</h1>
            <div className="w-4 h-4"></div>
          </div>
        </div>

        {/* Main Content Window */}
        <div className="bg-gray-200 border-2 border-gray-400 border-b-gray-600 shadow-lg">
          <div className="bg-gradient-to-r from-gray-300 to-gray-200 border-b border-gray-400 px-3 py-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 border border-yellow-500 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-400 border border-green-500 rounded-sm"></div>
              <div className="w-3 h-3 bg-red-400 border border-red-500 rounded-sm"></div>
            </div>
          </div>
          
          <div className="p-6 bg-gray-100">
            {!isBagOpen && !isSentAway && (
              /* Main Bag View */
              <div className="text-center">
                <div className="mb-8">
                  <img 
                    src="bag.jpg" 
                    alt="Closed Bag" 
                    className="mx-auto w-64 h-64 object-contain drop-shadow-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🤡 CHAOTIC BAGGAGE CHAOS 🤡
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Throw your problems into this digital void! 
                  The ant will probably lose them anyway! 🐜💥
                </p>
                <div className="mb-4">
                  <p className="text-sm text-red-600 font-bold">
                    CHAOS LEVEL: {chaosLevel} 🔥
                  </p>
                </div>
                <button
                  onClick={openBag}
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg border-2 border-red-400 border-b-red-700 shadow-lg transform hover:scale-105 transition-all duration-200 animate-bounce"
                >
                  🎪 OPEN THE CHAOS BAG! 🎪
                </button>
              </div>
            )}

            {isBagOpen && !isSentAway && (
              /* Drop Interface */
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    🎭 CHAOS MODE ACTIVATED! 🎭
                  </h2>
                  <p className="text-gray-600">
                    Throw your problems into the void! The ant is judging you! 🐜👀
                  </p>
                  <div className="mt-2">
                    <p className="text-lg text-red-600 font-bold">
                      CHAOS LEVEL: {chaosLevel} 🔥💥
                    </p>
                  </div>
                </div>

                {/* Text Input */}
                <div className="mb-6 bg-white border-2 border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">🤪 Random Chaos Thoughts</h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={currentText}
                      onChange={(e) => setCurrentText(e.target.value)}
                      placeholder="Type something chaotic and stupid..."
                      className="flex-1 px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                      onKeyPress={(e) => e.key === 'Enter' && addTextItem()}
                    />
                    <button
                      onClick={addTextItem}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded border border-red-600 animate-pulse"
                    >
                      🤡 CHAOS!
                    </button>
                  </div>
                </div>

                {/* Image Upload Mock */}
                <div className="mb-6 bg-white border-2 border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">📸 Fake Image Chaos</h3>
                  <button
                    onClick={addImageItem}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded border border-purple-600 animate-bounce"
                  >
                    🎭 Add Fake Image!
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    (Adds a completely made-up image name because why not?)
                  </p>
                </div>

                {/* Long Form Text */}
                <div className="mb-6 bg-white border-2 border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">📝 Dramatic Rants</h3>
                  <textarea
                    value={currentLongText}
                    onChange={(e) => setCurrentLongText(e.target.value)}
                    placeholder="Write a dramatic rant about your life... it will get a silly ending!"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-orange-500 mb-2"
                  />
                  <button
                    onClick={addLongTextItem}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded border border-orange-600 animate-pulse"
                  >
                    🎪 ADD DRAMA!
                  </button>
                </div>

                {/* Baggage Items List */}
                {baggageItems.length > 0 && (
                  <div className="mb-6 bg-white border-2 border-gray-300 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      🎒 Chaos Items in Bag ({baggageItems.length}) 🎒
                    </h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {baggageItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-gray-50 p-2 rounded border">
                          <span className="text-sm text-gray-700 flex-1">
                            {item.type === 'text' && `💭 ${item.content}`}
                            {item.type === 'image' && `📷 ${item.content}`}
                            {item.type === 'longText' && `📝 ${item.content.substring(0, 50)}${item.content.length > 50 ? '...' : ''}`}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Close Bag Button */}
                <div className="text-center">
                  <button
                    onClick={closeBagAndSend}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg border-2 border-red-400 border-b-red-700 shadow-lg transform hover:scale-105 transition-all duration-200 animate-bounce"
                  >
                    🚀 LAUNCH CHAOS INTO THE VOID! 🚀
                  </button>
                </div>
              </div>
            )}

            {isSentAway && (
              /* Send-off Sequence */
              <div className="text-center">
                <div className="mb-8">
                  <img 
                    src="sad-ant-with-bindle.jpg" 
                    alt="Ant carrying bag into sunset" 
                    className="mx-auto w-80 h-64 object-contain drop-shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎉 CHAOS LAUNCHED INTO THE VOID! 🎉
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  {randomMessages[Math.floor(Math.random() * randomMessages.length)]}
                </p>
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-6 max-w-md mx-auto">
                  <p className="text-red-800 font-semibold">
                    🎪 The ant is probably confused about your life choices! 🐜🤯
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl text-red-600 font-bold">
                    FINAL CHAOS LEVEL: {chaosLevel} 🔥💥🎭
                  </p>
                </div>
                <button
                  onClick={startNewDrop}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg border-2 border-green-400 border-b-green-700 shadow-lg transform hover:scale-105 transition-all duration-200 animate-bounce"
                >
                  🎪 START MORE CHAOS! 🎪
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Windows XP Style Status Bar */}
        <div className="bg-gray-300 border-2 border-gray-400 border-t-gray-600 mt-4">
          <div className="flex items-center justify-between px-3 py-1">
            <div className="text-sm text-gray-700">
              {!isBagOpen && !isSentAway && "🤪 Ready to create digital chaos!"}
              {isBagOpen && !isSentAway && `🎒 Chaos items in bag: ${baggageItems.length} | Chaos Level: ${chaosLevel}`}
              {isSentAway && "🚀 Your chaos has been launched into the void!"}
            </div>
            <div className="text-sm text-gray-700">
              🤡 Chaotic Baggage Chaos v1.0 🤡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
