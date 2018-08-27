const table = document.querySelector(".table");

const tableTitle = `
  <thead class="thead-dark">
    <tr>
      <th>Suburbs</th>
      <th>Houses</th>
      <th>Links</th>
    </tr>
  </thead>
  <tbody>
  `;

function showSouth() {
  fetchData("South");
}
function showNorth() {
  fetchData("North");
}
function showRockMan() {
  fetchData("Rockingham/Mandurah");
}

function fetchData(prop) {
  fetch("suburbs.json")
    .then(data => data.json())
    .then(data => {
      html = tableTitle;
      return data.forEach(item => {
        if (item.Area === prop) {
          html += `

            <tr>
              <th scope="row" class="text-capitalize">${item.Suburb}</th>
              <td>${item.Houses}</td>
              <td><a href="${item.Links}" target="_blank">Map</a></td>
            </tr>

        `;
        }
        document.querySelector(".table-title").innerHTML = prop;
        table.innerHTML = html + `</tbody>`;
      });
    });
}

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

showNorth();
