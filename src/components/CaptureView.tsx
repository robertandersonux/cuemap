import { useRef, useState } from 'react';
import { HABITS, ROOMS } from '../lib/types';
import type { Habit, Room, Suggestion } from '../lib/types';
import { findSuggestion } from '../lib/suggestions';
import { resizeImage } from '../lib/resizeImage';
import { RoomPlan } from './RoomPlan';

interface Props {
  onSave: (suggestion: Suggestion, photo?: string) => void;
}

export function CaptureView({ onSave }: Props) {
  const [photo, setPhoto] = useState<string | undefined>();
  const [room, setRoom] = useState<Room | undefined>();
  const [habit, setHabit] = useState<Habit | undefined>();
  const [result, setResult] = useState<Suggestion | undefined>();
  const [photoError, setPhotoError] = useState<string | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoError(undefined);
    try {
      setPhoto(await resizeImage(file));
    } catch (err) {
      setPhotoError(err instanceof Error ? err.message : 'That image would not open.');
    }
  }

  function generate() {
    if (!room || !habit) return;
    setResult(findSuggestion(room, habit));
  }

  function save() {
    if (!result) return;
    onSave(result, photo);
    setPhoto(undefined);
    setRoom(undefined);
    setHabit(undefined);
    setResult(undefined);
    if (fileRef.current) fileRef.current.value = '';
  }

  if (result) {
    return (
      <section className="result">
        <div className="result-head">
          <RoomPlan room={result.room} size={56} />
          <p className="annotation">
            {result.room} / {result.habit}
          </p>
        </div>

        <h2 className="change">{result.cueChange}</h2>
        <p className="why">{result.why}</p>

        {photo && <img className="result-photo" src={photo} alt="The space you captured" />}

        <div className="result-actions">
          <button className="btn primary" onClick={save}>
            Save to my map
          </button>
          <button className="btn quiet" onClick={() => setResult(undefined)}>
            Change room or habit
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="capture">
      <div className="field">
        <h2 className="field-title">The space</h2>
        <p className="field-note">Optional. A photo makes the card easier to recognise later.</p>
        {photo ? (
          <div className="shot">
            <img src={photo} alt="The space you captured" />
            <button className="btn quiet small" onClick={() => setPhoto(undefined)}>
              Remove
            </button>
          </div>
        ) : (
          <label className="shot-empty">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFile}
            />
            <span>Add a photo</span>
          </label>
        )}
        {photoError && <p className="error">{photoError}</p>}
      </div>

      <div className="field">
        <h2 className="field-title">Which room</h2>
        <div className="rooms">
          {ROOMS.map((r) => (
            <button
              key={r}
              className={`room-chip${room === r ? ' on' : ''}`}
              onClick={() => setRoom(r)}
              aria-pressed={room === r}
            >
              <RoomPlan room={r} size={40} />
              <span>{r}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <h2 className="field-title">What you want to start doing</h2>
        <div className="habits">
          {HABITS.map((h) => (
            <button
              key={h}
              className={`habit-chip${habit === h ? ' on' : ''}`}
              onClick={() => setHabit(h)}
              aria-pressed={habit === h}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      <button className="btn primary wide" disabled={!room || !habit} onClick={generate}>
        {!room ? 'Pick a room' : !habit ? 'Pick a habit' : 'Find the change'}
      </button>
    </section>
  );
}
