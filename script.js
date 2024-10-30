// Global variables
let price = 19.5; // Sample price (can be changed)
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

// Display the price on page load
document.getElementById("price").textContent = price.toFixed(2);

// Function to display drawer contents
function displayDrawerContents() {
  const drawerContents = document.getElementById("drawer-contents");
  drawerContents.innerHTML = ""; // Clear previous contents
  cid.forEach(([denomination, amount]) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${denomination}:</span> <span>$${amount.toFixed(
      2
    )}</span>`;
    drawerContents.appendChild(listItem);
  });
}

// Initial display of drawer contents
displayDrawerContents();

// Function to calculate change
function calculateChange(price, cash, cid) {
  let change = cash - price;
  let totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);

  if (change < 0) {
    alert("Customer does not have enough money to purchase the item");
    return "Status: INSUFFICIENT_FUNDS";
  } else if (change === 0) {
    return "No change due - customer paid with exact cash";
  } else if (change > totalCashInDrawer) {
    return "Status: INSUFFICIENT_FUNDS";
  }

  let changeArray = [];
  let status = "OPEN";

  // Define denominations and their values in cents
  const currencyUnits = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1],
  ];

  let changeCents = Math.round(change * 100);
  let drawer = cid.map((item) => [item[0], Math.round(item[1] * 100)]);

  for (let [unit, value] of currencyUnits) {
    let amountInDrawer = drawer.find((item) => item[0] === unit)[1];

    let amountToReturn = 0;

    while (changeCents >= value && amountInDrawer > 0) {
      changeCents -= value;
      amountInDrawer -= value;
      amountToReturn += value;
    }

    if (amountToReturn > 0) {
      changeArray.push([unit, amountToReturn / 100]);
    }
  }

  if (changeCents > 0) {
    status = "INSUFFICIENT_FUNDS";
    changeArray = [];
  } else if (totalCashInDrawer === change) {
    status = "CLOSED";
  }

  let result = `Status: ${status}`;
  changeArray.forEach(([unit, amount]) => {
    result += ` ${unit}: $${amount.toFixed(2)}`;
  });

  return result;
}

// Event listener for the purchase button
document.getElementById("purchase-btn").addEventListener("click", function () {
  const cash = parseFloat(document.getElementById("cash").value);
  if (isNaN(cash)) {
    alert("Please enter a valid cash amount");
    return;
  }
  const result = calculateChange(price, cash, cid);

  document.getElementById("change-due").textContent = result;

  // Refresh drawer contents display
  displayDrawerContents();
});
