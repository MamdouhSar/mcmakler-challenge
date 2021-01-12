const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const formatDate = (date: Date) => {
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${month} ${hours <=9 ? 0 : ''}${hours}:${minutes <=9 ? 0 : ''}${minutes}`;
}

