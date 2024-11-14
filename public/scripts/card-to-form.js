const EVENTS = [
  '$1,250 Thrilling Thursday',
  'MGM Grand Poker',
  'Dragon’s Voyage',
  'VIP Baccarat Buy-in',
  '£20,000 Jackpot Cash Connection',
  'MGM Grand’s Mystery Gridiron Giveaways',
  '$400 No Limit Texas Hold’em',
  'Puck Drop Payout $5K Slot Tournament',
  'Friday Night Frenzy at Casino Del Sol',
  'Leaves of Loot. $5K Slot Tournament',
];

const $selectElement = document.getElementById('events-select');

EVENTS.forEach(id => {
  const event = document.getElementById(id);

  event.addEventListener('click', () => {
    $selectElement.value = id;
  });
});
