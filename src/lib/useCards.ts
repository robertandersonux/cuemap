import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Room, SavedCard, Suggestion } from './types';
import { ROOMS } from './types';

const STORAGE_KEY = 'cuemap.cards.v1';

function makeId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function readCards(): SavedCard[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (c): c is SavedCard =>
        typeof c === 'object' &&
        c !== null &&
        typeof (c as SavedCard).id === 'string' &&
        typeof (c as SavedCard).cueChange === 'string',
    );
  } catch {
    return [];
  }
}

export interface UseCards {
  cards: SavedCard[];
  cardsByRoom: { room: Room; cards: SavedCard[] }[];
  addCard: (suggestion: Suggestion, photo?: string) => SavedCard;
  toggleDone: (id: string) => void;
  deleteCard: (id: string) => void;
  ready: boolean;
  storageFull: boolean;
}

export function useCards(): UseCards {
  const [cards, setCards] = useState<SavedCard[]>([]);
  const [ready, setReady] = useState(false);
  const [storageFull, setStorageFull] = useState(false);
  const hydrated = useRef(false);

  useEffect(() => {
    setCards(readCards());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
      setStorageFull(false);
    } catch {
      // Quota. Keep the cards, drop the images, tell the UI.
      const stripped = cards.map(({ photo: _photo, ...rest }) => rest);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stripped));
        setCards(stripped);
        setStorageFull(true);
      } catch {
        setStorageFull(true);
      }
    }
  }, [cards, ready]);

  const addCard = useCallback((suggestion: Suggestion, photo?: string): SavedCard => {
    const card: SavedCard = {
      id: makeId(),
      room: suggestion.room,
      habit: suggestion.habit,
      cueChange: suggestion.cueChange,
      why: suggestion.why,
      photo,
      done: false,
      createdAt: new Date().toISOString(),
    };
    setCards((prev) => [card, ...prev]);
    return card;
  }, []);

  const toggleDone = useCallback((id: string) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, done: !c.done } : c)));
  }, []);

  const deleteCard = useCallback((id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const cardsByRoom = useMemo(
    () =>
      ROOMS.map((room) => ({
        room: room as Room,
        cards: cards.filter((c) => c.room === room),
      })).filter((g) => g.cards.length > 0),
    [cards],
  );

  return { cards, cardsByRoom, addCard, toggleDone, deleteCard, ready, storageFull };
}
