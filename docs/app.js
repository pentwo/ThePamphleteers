const tableNorth = document.querySelector('.tableNorth');
const tableSouth = document.querySelector('.tableSouth');
const tableRockMan = document.querySelector('.tableRockMan');

const tableTitle = `
  <thead>
    <tr>
      <th>Suburbs</th>
      <th>Houses</th>
      <th>Links</th>
    </tr>
  </thead>
  `;

let northHtml = tableTitle;
let southHtml = tableTitle;
let rockManHtml = tableTitle;

function showTab(area) {
  for (const item of document.querySelectorAll('.table')) {
    item.setAttribute('style', 'display:none;');
  }
  document.querySelector(`.table${area}`).setAttribute('style', 'display:inherit');
}
function setTabAct(area) {
  for (const item of document.querySelectorAll('.list')) {
    item.classList.remove('is-active');
  }
  document.querySelector(`.list-${area}`).classList.add('is-active');
}



function showSouth() {
  showTab('South');
  setTabAct('south');
  console.log(this);
}
function showNorth() {
  showTab('North');
  setTabAct('north');
}
function showRockMan() {
  showTab('RockMan');
  setTabAct('rock');
}

const data = fetch('suburbs.json')
  .then(data => data.json())
  .then(data => {
    return data.forEach((item) => {
      if (item.Area === 'North') {
        northHtml += `
          <tbody>
            <tr>
              <td>${item.Suburb}</td>
              <td>${item.Houses}</td>
              <td><a href="${item.Links}" target="_blank">Map</a></td>
            </tr>
          </tbody>
        `;
        tableNorth.innerHTML = northHtml;
      }
      if (item.Area === 'South') {
        southHtml += `
          <tbody>
            <tr>
              <td>${item.Suburb}</td>
              <td>${item.Houses}</td>
              <td><a href="${item.Links}" target="_blank">Map</a></td>
            </tr>
          </tbody>
        `;
        tableSouth.innerHTML = southHtml;
      }
      if (item.Area === 'Rockingham/Mandurah') {
        rockManHtml += `
          <tbody>
            <tr>
              <td>${item.Suburb}</td>
              <td>${item.Houses}</td>
              <td><a href="${item.Links}" target="_blank">Map</a></td>
            </tr>
          </tbody>
        `;
        tableRockMan.innerHTML = rockManHtml
      }



    });
  });
