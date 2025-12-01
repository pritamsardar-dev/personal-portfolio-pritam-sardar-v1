export const COLORS = [
  "#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5",
  "#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50",
  "#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722"
];

// get background color from first letter
export function getColorFromLetter(letter) {
  if (!letter) return COLORS[0];
  const charCode = letter.toUpperCase().charCodeAt(0); 
  const index = (charCode - 65) % COLORS.length;    
  return COLORS[index];
}

// get first letter from string
export function getInitialLetter(name) {
  if (!name) return "?";
  return name.trim()[0].toUpperCase();
}
