import type { Habit, Room, Suggestion } from './types';

/**
 * The suggestion library. Complete matrix: 5 rooms x 8 habits = 40 entries.
 * Every room/habit pair resolves, so lookup never returns undefined.
 *
 * Writing rules for anything added here:
 *   - target the FIRST action of the habit, not the habit itself
 *   - use objects already likely in the room, or one common household item
 *   - executable in under five minutes
 *   - cueChange stays under ~15 words and reads as an instruction
 */
export const SUGGESTIONS: Suggestion[] = [
  // Bedroom
  { room: 'Bedroom', habit: 'Drink more water', cueChange: 'Put a full water bottle on your nightstand before you get in bed.', why: 'Waking up thirsty means the first thing you reach for is water, not your phone.' },
  { room: 'Bedroom', habit: 'Read more', cueChange: 'Move your phone charger across the room and set your book on the pillow.', why: 'Removing the phone as the easy option makes the book the path of least resistance.' },
  { room: 'Bedroom', habit: 'Exercise daily', cueChange: "Lay tomorrow's workout clothes on top of your shoes beside the bed.", why: 'Getting dressed becomes the decision instead of whether to work out.' },
  { room: 'Bedroom', habit: 'Eat healthier', cueChange: 'Move the snack stash out of your nightstand drawer into the kitchen.', why: "Late-night eating usually happens because the food is within arm's reach." },
  { room: 'Bedroom', habit: 'Reduce phone use', cueChange: 'Charge your phone in another room and use a cheap alarm clock instead.', why: "The phone can't be the first and last thing you touch if it isn't there." },
  { room: 'Bedroom', habit: 'Sleep better', cueChange: 'Set a small lamp by the bed and stop using the overhead light.', why: 'Dim light signals your body to wind down without you having to remember.' },
  { room: 'Bedroom', habit: 'Tidy up regularly', cueChange: 'Put a laundry basket exactly where your clothes usually land on the floor.', why: "The pile forms wherever there's no container, so put the container there." },
  { room: 'Bedroom', habit: 'Meditate', cueChange: 'Place a cushion at the foot of the bed where you step down each morning.', why: 'You meditate when the spot exists and you physically walk into it.' },

  // Kitchen
  { room: 'Kitchen', habit: 'Drink more water', cueChange: 'Leave a filled pitcher on the counter next to the coffee maker.', why: 'Pairing water with a habit you already do every morning makes it automatic.' },
  { room: 'Kitchen', habit: 'Read more', cueChange: 'Keep one book on the counter where you stand waiting for the kettle.', why: 'Three minutes of waiting becomes three minutes of reading.' },
  { room: 'Kitchen', habit: 'Exercise daily', cueChange: 'Hang a resistance band on the pantry door handle.', why: 'Visible equipment in a room you enter often turns waiting time into reps.' },
  { room: 'Kitchen', habit: 'Eat healthier', cueChange: 'Move fruit to the counter and put packaged snacks in a high cabinet.', why: 'You eat what you see first. Eye level does most of the deciding for you.' },
  { room: 'Kitchen', habit: 'Reduce phone use', cueChange: 'Set a bowl by the kettle and drop your phone in it while you cook.', why: 'A designated parking spot beats willpower every time.' },
  { room: 'Kitchen', habit: 'Sleep better', cueChange: 'Move the coffee to a top shelf and put tea at eye level.', why: 'Afternoon caffeine is usually convenience, not craving.' },
  { room: 'Kitchen', habit: 'Tidy up regularly', cueChange: 'Keep a spray bottle and cloth on the counter, not under the sink.', why: 'A ten-second wipe only happens if the supplies are already out.' },
  { room: 'Kitchen', habit: 'Meditate', cueChange: 'Put a chair by the window facing away from the sink.', why: 'Facing away from the dishes removes the visual to-do list.' },

  // Living Room
  { room: 'Living Room', habit: 'Drink more water', cueChange: 'Set a water carafe on the coffee table where the remote lives.', why: 'You reach for the remote every time you sit down, so the water comes with it.' },
  { room: 'Living Room', habit: 'Read more', cueChange: 'Put a book on the couch cushion where you normally sit.', why: 'You have to move the book to sit down, which makes you notice it.' },
  { room: 'Living Room', habit: 'Exercise daily', cueChange: 'Roll out a mat in front of the TV and leave it there.', why: 'The mat underfoot turns a screen session into a stretch session.' },
  { room: 'Living Room', habit: 'Eat healthier', cueChange: 'Move the snack bowl off the coffee table and back to the kitchen.', why: "Mindless eating tracks with arm's reach, not with hunger." },
  { room: 'Living Room', habit: 'Reduce phone use', cueChange: 'Put a book where your phone usually sits on the armrest.', why: 'Your hand reaches for whatever is in that spot.' },
  { room: 'Living Room', habit: 'Sleep better', cueChange: 'Swap the overhead bulb for a warm lamp you switch on at eight.', why: 'Warm light after dark cues your body toward sleep automatically.' },
  { room: 'Living Room', habit: 'Tidy up regularly', cueChange: 'Place one empty basket beside the couch for stray items.', why: "Clutter accumulates where there's no home for it. Give it one." },
  { room: 'Living Room', habit: 'Meditate', cueChange: 'Clear one chair of everything and keep it empty.', why: 'An empty chair is an invitation. A covered one is just furniture.' },

  // Office
  { room: 'Office', habit: 'Drink more water', cueChange: 'Put a large bottle to the left of your keyboard, not behind the monitor.', why: 'In your field of view means you drink without deciding to.' },
  { room: 'Office', habit: 'Read more', cueChange: 'Stand one book upright against your monitor at the end of the day.', why: 'It blocks the screen when you return, so reading happens first.' },
  { room: 'Office', habit: 'Exercise daily', cueChange: 'Put a kettlebell or band beside your chair where your feet rest.', why: 'Bumping into it during calls is the reminder.' },
  { room: 'Office', habit: 'Eat healthier', cueChange: 'Empty the desk snack drawer and move everything to the kitchen.', why: 'Desk snacking is proximity, not appetite.' },
  { room: 'Office', habit: 'Reduce phone use', cueChange: 'Put your phone face down in a drawer the moment you sit down.', why: 'Out of sight cuts the glance loop that breaks focus.' },
  { room: 'Office', habit: 'Sleep better', cueChange: 'Keep your laptop charger here and never let it go to the bedroom.', why: "If work can't follow you to bed, your day gets an ending." },
  { room: 'Office', habit: 'Tidy up regularly', cueChange: "Keep one tray on the desk for everything that isn't your laptop.", why: 'One container is faster than deciding where each item goes.' },
  { room: 'Office', habit: 'Meditate', cueChange: 'Turn your chair to face the window and clear the sill.', why: 'A different direction signals a different mode.' },

  // Entryway
  { room: 'Entryway', habit: 'Drink more water', cueChange: 'Leave a filled bottle next to your keys.', why: 'You never leave without your keys, so the bottle leaves with you.' },
  { room: 'Entryway', habit: 'Read more', cueChange: 'Put your current book on top of your bag by the door.', why: 'It travels with you to the places where you actually have waiting time.' },
  { room: 'Entryway', habit: 'Exercise daily', cueChange: 'Set your gym shoes directly in front of the door, not on the rack.', why: 'You have to step over them, which forces the decision.' },
  { room: 'Entryway', habit: 'Eat healthier', cueChange: 'Keep a bowl of portable fruit by the door.', why: 'Grabbing food on the way out prevents the drive-through decision.' },
  { room: 'Entryway', habit: 'Reduce phone use', cueChange: 'Mount a small hook and hang your phone there when you walk in.', why: 'The habit ends at the threshold instead of following you inside.' },
  { room: 'Entryway', habit: 'Sleep better', cueChange: "Hang tomorrow's clothes on a hook by the door tonight.", why: 'Decisions made the night before protect your last hour of sleep.' },
  { room: 'Entryway', habit: 'Tidy up regularly', cueChange: 'Put a shoe tray exactly where you kick your shoes off.', why: 'Shoes scatter where there is no boundary, so draw the boundary.' },
  { room: 'Entryway', habit: 'Meditate', cueChange: 'Place a small chair by the door and sit for one minute when you get home.', why: 'The threshold is a natural pause point your body already recognizes.' },
];

/**
 * Look up the change for a room/habit pair.
 * The matrix is complete, so this always resolves — the fallback exists only
 * to keep the return type non-nullable if the library is ever edited down.
 */
export function findSuggestion(room: Room, habit: Habit): Suggestion {
  const match = SUGGESTIONS.find((s) => s.room === room && s.habit === habit);
  if (match) return match;
  return {
    room,
    habit,
    cueChange: 'No change written for this space yet.',
    why: 'Pick another room or habit while this one gets written.',
  };
}
