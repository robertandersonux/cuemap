export const ROOMS = [
  'Bedroom',
  'Kitchen',
  'Living Room',
  'Office',
  'Entryway',
] as const;

export const HABITS = [
  'Drink more water',
  'Read more',
  'Exercise daily',
  'Eat healthier',
  'Reduce phone use',
  'Sleep better',
  'Tidy up regularly',
  'Meditate',
] as const;

export type Room = (typeof ROOMS)[number];
export type Habit = (typeof HABITS)[number];

/** One environment change, keyed by the room it applies to and the habit it serves. */
export interface Suggestion {
  room: Room;
  habit: Habit;
  /** The change itself. One imperative sentence. */
  cueChange: string;
  /** Why it works — the friction it removes or the trigger it creates. */
  why: string;
}

/** A suggestion the user has committed to, saved to their map. */
export interface SavedCard {
  id: string;
  room: Room;
  habit: Habit;
  cueChange: string;
  why: string;
  /** Resized JPEG data URL. Optional — cards work without a photo. */
  photo?: string;
  done: boolean;
  createdAt: string;
}
