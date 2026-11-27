import type { SavedCard, Room } from '../lib/types';
import { RoomPlan } from './RoomPlan';

interface Props {
  groups: { room: Room; cards: SavedCard[] }[];
  total: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onStart: () => void;
  storageFull: boolean;
}

export function MapView({ groups, total, onToggle, onDelete, onStart, storageFull }: Props) {
  if (total === 0) {
    return (
      <section className="empty">
        <h2>Your home has no changes on it yet.</h2>
        <p>
          Pick a room and a habit, and you will get one thing to move. Each change you keep lands
          here, grouped by the room it belongs to.
        </p>
        <button className="btn primary" onClick={onStart}>
          Find my first change
        </button>
      </section>
    );
  }

  const done = groups.flatMap((g) => g.cards).filter((c) => c.done).length;

  return (
    <section className="map">
      <p className="annotation tally">
        {done} of {total} made
      </p>

      {storageFull && (
        <p className="error block">
          Storage filled up, so photos were dropped to keep your changes. The text is all here.
        </p>
      )}

      {groups.map((group) => (
        <div className="room-group" key={group.room}>
          <div className="room-head">
            <RoomPlan room={group.room} size={34} />
            <h2>{group.room}</h2>
            <span className="rule" />
            <span className="annotation">{group.cards.length}</span>
          </div>

          <ul className="cards">
            {group.cards.map((card) => (
              <li className={`card${card.done ? ' done' : ''}`} key={card.id}>
                {card.photo && <img className="card-photo" src={card.photo} alt="" />}
                <div className="card-body">
                  <p className="annotation">{card.habit}</p>
                  <p className="card-change">{card.cueChange}</p>
                  <p className="card-why">{card.why}</p>
                  <div className="card-actions">
                    <button
                      className={`btn small${card.done ? ' quiet' : ''}`}
                      onClick={() => onToggle(card.id)}
                    >
                      {card.done ? 'Made' : 'Mark as made'}
                    </button>
                    <button className="btn quiet small" onClick={() => onDelete(card.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
