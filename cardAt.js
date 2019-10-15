const cardAt = n => {
  const DECK_LABEL = ['C', 'D', 'H', 'S'];
  const ORDER_LABEL = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'J',
    'Q',
    'K',
    'A'
  ];
  const orderIndex = n % ORDER_LABEL.length;
  const orderLabel = ORDER_LABEL[orderIndex];
  const deckTempIndex = Math.floor(n / ORDER_LABEL.length);
  const deckIndex = deckTempIndex % DECK_LABEL.length;
  const deckLabel = DECK_LABEL[deckIndex];
  return `${orderLabel}${deckLabel}`;
};

module.export = cardAt;
