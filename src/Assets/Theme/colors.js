export const COLORS = {
  primary: '#1F2732',
  secondary: '#E6936B',
  light_primary: '#E2F7EB',
  white: '#fff',
  black: '#1F2732',
  grey: '#929292',
  grey_underline: '#707070',
  icon_color: '#575352',
  green_approved: '#14A235',
  light_green_approved: '#14A2354D',
  error: '#e63946',
  background: '#F8F8F8',
  blackText: '#303030',
  pending: '#FFDD00',
  light_pending: '#FEF9E7',
  coupon_code_bg_color: '#E6936B4D',
  declined: '#ff3838',
  fav: '#FC4A4A',
  gradient_secondary: '#BE5532',
  border_light: '#DDDDDD',
  cb_rates: '#E6936B40',
  notch_bg: '#00000026',
  home_bg: '#F0F0F0',
};

export const get_status_light_color = (status) => {
  switch (status) {
    case 'confirmed':
    case 'answered':
    case 'completed':
      return COLORS.light_green_approved;
    case 'pending':
    case 'created':
    case 'open':
      return COLORS.light_pending;
    case 'declined':
      return COLORS.fav;
    default:
      return COLORS.blackText;
  }
};

export const get_status_dark_color = (status) => {
  switch (status) {
    case 'confirmed':
    case 'answered':
    case 'completed':
      return COLORS.green_approved;
    case 'pending':
    case 'created':
    case 'open':
      return COLORS.pending;
    case 'declined':
      return COLORS.declined;
    default:
      return COLORS.blackText;
  }
};

//improve random color logic
const COLORS_SET = [
  '#E9D783',
  '#4AA4BA80',
  '#F5F6FA',
  '#0000000D',
  '#E6936B40',
  '#CCE6F6',
  '#DDE6E1',
  '#F2AF5F', // remove this
  '#C0C0C0',
  '#0000001A',
];

const COLORS_SETS = {
  2: [
    '#CCE6F6',
    '#DDE6E1',
    '#F2AF5F',
    '#E9D783',
    '#4AA4BA80',
    '#F5F6FA',
    '#0000000D',
    '#E6936B40',
    '#C0C0C0',
    '#0000001A',
  ],
  4: [
    '#F5F6FA',
    '#0000000D',
    '#E6936B40',
    '#CCE6F6',
    '#E9D783',
    '#4AA4BA80',
    '#DDE6E1',
    '#F2AF5F', // remove this
    '#C0C0C0',
    '#0000001A',
  ],
  8: [
    '#E9D783',
    '#4AA4BA80',
    '#DDE6E1',
    '#F2AF5F', // remove this
    '#C0C0C0',
    '#0000001A',
    '#F5F6FA',
    '#0000000D',
    '#E6936B40',
    '#CCE6F6',
  ],
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const get_bg_color = (index = Math.random(), split_index) => {
  let new_colors = COLORS_SETS[split_index];
  let colors = [...new Set(new_colors)];
  // console.log(colors);
  let indexArr = index.toString().split('');
  return colors[indexArr[indexArr.length - 1]];
};
