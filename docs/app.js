const tableNorth = document.querySelector(".tableNorth");
const tableSouth = document.querySelector(".tableSouth");
const tableRockMan = document.querySelector(".tableRockMan");
const table = document.querySelector(".table");

const tableTitle = `
  <thead>
    <tr>
      <th>Suburbs</th>
      <th>Houses</th>
      <th>Links</th>
    </tr>
  </thead>
  `;

// let northHtml = tableTitle;
// let southHtml = tableTitle;
// let rockManHtml = tableTitle;
// let html = tableTitle;

// function showTab(area) {
//   for (const item of document.querySelectorAll(".table")) {
//     item.setAttribute("style", "display:none;");
//   }
//   document
//     .querySelector(`.table${area}`)
//     .setAttribute("style", "display:inherit");
// }
// function setTabAct(area) {
//   for (const item of document.querySelectorAll(".list")) {
//     item.classList.remove("is-active");
//   }
//   document.querySelector(`.list-${area}`).classList.add("is-active");
// }

function showSouth() {
  // showTab("South");
  // setTabAct("south");
  fetchData("South");
}
function showNorth() {
  // showTab("North");
  // setTabAct("north");
  fetchData("North");
}
function showRockMan() {
  // showTab("RockMan");
  // setTabAct("rock");
  fetchData("Rockingham/Mandurah");
}

// const data = fetch("suburbs.json")
//   .then(data => data.json())
//   .then(data => {
//     return data.forEach(item => {
//       if (item.Area === "North") {
//         northHtml += `
//           <tbody>
//             <tr>
//               <td>${item.Suburb}</td>
//               <td>${item.Houses}</td>
//               <td><a href="${item.Links}" target="_blank">Map</a></td>
//             </tr>
//           </tbody>
//         `;
//         tableNorth.innerHTML = northHtml;
//       }
//       if (item.Area === "South") {
//         southHtml += `
//           <tbody>
//             <tr>
//               <td>${item.Suburb}</td>
//               <td>${item.Houses}</td>
//               <td><a href="${item.Links}" target="_blank">Map</a></td>
//             </tr>
//           </tbody>
//         `;
//         tableSouth.innerHTML = southHtml;
//       }
//       if (item.Area === "Rockingham/Mandurah") {
//         rockManHtml += `
//           <tbody>
//             <tr>
//               <td>${Capitalize(item.Suburb.toLowerCase())}</td>
//               <td>${item.Houses}</td>
//               <td><a href="${item.Links}" target="_blank">Map</a></td>
//             </tr>
//           </tbody>
//         `;
//         tableRockMan.innerHTML = rockManHtml;
//       }
//     });
//   });

function fetchData(prop) {
  fetch("suburbs.json")
    .then(data => data.json())
    .then(data => {
      html = tableTitle;
      return data.forEach(item => {
        if (item.Area === prop) {
          html += `
          <tbody>
            <tr>
              <td>${Capitalize(item.Suburb)}</td>
              <td>${item.Houses}</td>
              <td><a href="${item.Links}" target="_blank">Map</a></td>
            </tr>
          </tbody>
        `;
        }
        table.innerHTML = html;
      });
    });
}

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

showNorth();
