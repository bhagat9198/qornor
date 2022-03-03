const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const dateData = (date) => {
  const year = date.split('-')[0];
  let month = +date.split('-')[1];
  month = monthNames[month].substring(0, 3)
  const day = date.split('-')[2];
  return { year, month, day }
}

export const getDay = day => {
  if (+day < 10) {
    day = day.substring(1, 2)
  }
  return day;
} 