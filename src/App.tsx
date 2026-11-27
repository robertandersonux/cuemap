import { useState } from 'react';
import { useCards } from './lib/useCards';
import { MapView } from './components/MapView';
import { CaptureView } from './components/CaptureView';
import type { Suggestion } from './lib/types';

type Tab = 'map' | 'capture';

export default function App() {
  const { cards, cardsByRoom, addCard, toggleDone, deleteCard, ready, storageFull } = useCards();
  const [tab, setTab] = useState<Tab>('map');

  function handleSave(suggestion: Suggestion, photo?: string) {
    addCard(suggestion, photo);
    setTab('map');
  }

  return (
    <div className="app">
      <header className="app-head">
        <h1>CueMap</h1>
        <p className="tagline">Change the room, not your willpower.</p>
      </header>

      <main>
        {!ready ? null : tab === 'map' ? (
          <MapView
            groups={cardsByRoom}
            total={cards.length}
            onToggle={toggleDone}
            onDelete={deleteCard}
            onStart={() => setTab('capture')}
            storageFull={storageFull}
          />
        ) : (
          <CaptureView onSave={handleSave} />
        )}
      </main>

      <nav className="tabs">
        <button
          className={tab === 'map' ? 'on' : ''}
          onClick={() => setTab('map')}
          aria-current={tab === 'map'}
        >
          My map
        </button>
        <button
          className={tab === 'capture' ? 'on' : ''}
          onClick={() => setTab('capture')}
          aria-current={tab === 'capture'}
        >
          Find a change
        </button>
      </nav>
    </div>
  );
}
