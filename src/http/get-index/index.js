let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(http)

async function http(req) {

  return {
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Praise Cage</title>
</head>
<body>
<h1>Praise Cage</h1>

<p>Nicolas Cage is the One True God of the Internet </p>

</body>
</html>
`
  }
}
