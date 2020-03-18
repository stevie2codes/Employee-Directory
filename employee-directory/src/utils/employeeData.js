const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Mr. ",
    name: { first: "Stephen", last: " Webb" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    age: 34,
    email: "Stevo@example.com",
    location: "Nashville,Tn",
    picture: "https://picsum.photos/id/7/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Mr. ",
    name: { first: "Robert ", last: " paulsen" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "hisnamewas@example.com",
    location: "Detriot, MI",
    picture: "https://picsum.photos/id/50/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Mrs. ",
    name: { first: "Jennifer", last: " Smith" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "smith@example.com",
    location: "Orlando, FL",
    picture: "https://picsum.photos/id/9/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471ui9",
    title: "Mrs. ",
    name: { first: "Chloe", last: " Fuson" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "chloe@example.com",
    location: "Austin, Tx",
    picture: "https://picsum.photos/id/90/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718tr9",
    title: "Mrs. ",
    name: { first: "Sarah", last: " Johnson" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "Johnson@example.com",
    location: "Dallas, Tx",
    picture: "https://picsum.photos/id/95/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471ww9",
    title: "Mrs. ",
    name: { first: "Karlie", last: " Green" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "Green@example.com",
    location: "Seattle, WA",
    picture: "https://picsum.photos/id/1005/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471832",
    title: "Mr. ",
    name: { first: "David", last: " Myers" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "David@example.com",
    location: "Peoria, IL",
    picture: "https://picsum.photos/id/2/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471855",
    title: "Mr. ",
    name: { first: "Joe", last: " Rogan" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "Rogan@example.com",
    location: "Los Angeles,CA",
    picture: "https://picsum.photos/id/40/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471833",
    title: "Mr. ",
    name: { first: "Donnie", last: " Brasco" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "theDon@example.com",
    location: "Queens, NY",
    picture: "https://picsum.photos/id/10/55/55"
  }
];

export function getEmployees() {
  return employees;
}
