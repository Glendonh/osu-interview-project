const getCities = async () => {
  const res = await fetch("cities")
  const cities = await res.json()
  const oregonCities = cities.filter((city) => city.State === "Oregon")
  return oregonCities
}

const onLoad = async () => {
  const cities = await getCities()
  const keys = Object.keys(cities[0])
  console.log(keys)
  tableHead = table.createTHead()
  const row = tableHead.insertRow()
  keys.forEach((key) => {
    const th = document.createElement("th")
    const text = document.createTextNode(key.toUpperCase())
    th.appendChild(text)
    row.appendChild(th)
  })
  cities.forEach((city) => {
    const row = table.insertRow()
    for (key in city) {
      const cell = row.insertCell()
      const text = document.createTextNode(city[key])
      cell.appendChild(text)
    }
  })
}

const table = document.querySelector("table")
table.onload = onLoad(table)
