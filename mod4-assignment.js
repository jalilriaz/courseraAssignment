var names = [
  "John",
  "Jane",
  "Smith",
  "Alice",
  "Bob Brown",
  "Emily Davis",
  "Pollard",
  "Peterson",
  "Watson",
  "James",
  "Johnsan",
  "David",
]

names.forEach(function (name) {
  if (name.charAt(0) === "J") {
    console.log(name + " " + name.charAt(0) + " Goodbye " + name)
  } else {
    console.log(name + " " + name.charAt(0) + " Hello " + name)
  }
})
