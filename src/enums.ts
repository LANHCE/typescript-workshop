enum Color {
  Mint = 'MINT',
  Purple = 'PURPLE',
  Orange = 'ORANGE',
}

function getColorName(color: Color): string {
  switch (color) {
    case Color.Mint:
      return 'Mint';
    case Color.Purple:
      return 'Purple';
    case Color.Orange:
      return 'Orange';
    default:
      return 'Unknown color';
  }
}

console.log(getColorName(Color.Purple));
