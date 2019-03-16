var inside_n = 0
var outside_n = 0

function setup()
{
  createCanvas(500, 500).parent("content")


  background(200)

  stroke(100)
  fill(0, 0, 0, 0)
  ellipse(width / 2, height / 2, width, height)

}

function draw()
{
  for (var i = 0; i < 100; i++)
    random_point()

  let pi_val = (inside_n / (inside_n + outside_n)) * 4
  document.getElementById("pi_val").innerText = Math.round(pi_val * 10000) / 10000
}

function random_point()
{
  let x = random(0, width)
  let y = random(0, height)

  if ( Math.pow((width / 2) - x, 2) + Math.pow((height / 2) - y, 2) < Math.pow(width / 2, 2) )
  {
    fill(23, 109, 169)
    inside_n += 1
  } else {
    fill(200, 100, 100)
    outside_n += 1
  }
  noStroke()
  ellipse(x, y, 3, 3)
}
