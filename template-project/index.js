import express from 'express'
import path from 'path'

const __dirname = path.resolve()

const app = express()

const PORT = 3000

app.use(express.json())
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

app.use('/', express.static(__dirname + '/dist'))

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/fibonacci', (req, res) => {
  const startTime = Date.now();
  const n = Math.max(getRandomInt(35),10); // Get the value from the query parameter
  const fibonacciNumber = fib(n);
  const endTime = Date.now();

  const executionTimeInSeconds = (endTime - startTime)/1000 // Convert milliseconds

  res.json({ n,fibonacciNumber, executionTimeInSeconds });
});

// Recursive function to calculate Fibonacci number
function fib(n) {
  if (n < 2) {
      return n;
  }
  return fib(n - 1) + fib(n - 2);
}

app.listen(PORT, function () {
    console.log(`listening on http://localhost:${PORT}`)
})
