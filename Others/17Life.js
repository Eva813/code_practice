let Customer = {
  name: null,
  email: null
}

function HelloTest(name) {
  if (typeof name === 'string') {
    console.log('Hello ' + name)
    return 'Hello ' + name
  } else if (Array.isArray(name)) {
    name.forEach((item) => {
      console.log('Hello ' + item.name)
    })
  }
}

// console.log('Eva')

let Customers = [];
for (let i = 1; i <= 10; i++) {
  Customers.push({
    name: `name${i}`,
    email: `email${i}`
  })
}

HelloTest('Eva')
