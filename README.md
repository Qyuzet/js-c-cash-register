# Cash Register Application

This is a simple **Cash Register** application that calculates and displays the change due to a customer after a purchase. The app simulates a cash drawer with various denominations and ensures that the change is provided accurately based on the cash in the drawer.



## 🛠 Features

- **Dynamic Cash Drawer Display:** Shows the current cash in the drawer across different denominations.
- **Change Calculation:** Calculates the exact change or notifies if the cash drawer can't provide the required change.
- **User Alerts:** Informs the user about insufficient funds, exact cash payment, or closed drawer status when needed.
- **Responsive UI:** Clean, responsive design with clear messaging for a seamless user experience.

## 🚀 Demo

Try the live demo [here](link-to-demo).

## 💻 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

## 📂 Project Structure

- `index.html`: The main HTML structure for the app.
- `styles.css`: Contains the styling and layout for the app’s UI.
- `script.js`: JavaScript logic for calculating and displaying change, as well as handling cash drawer operations.

## 🧮 How It Works

1. **Price Display:** The item price is displayed at the top of the app.
2. **Drawer Contents:** The app shows the cash in drawer (CID), detailing each denomination and its available amount.
3. **User Input:** Users enter the cash amount they are paying with.
4. **Change Calculation:** Upon clicking the "Purchase" button, the app calculates if change can be given:
   - If **exact cash** is provided, it confirms the exact payment.
   - If **insufficient funds** are available in the drawer, it displays an error.
   - If **change is due**, it displays the denominations and amounts required for the transaction.
5. **Status Display:** The app updates the status to reflect whether the drawer is **open** or **closed** based on the transaction.

## 📜 Code Overview

### Global Variables

- **`price`**: Set as the item's price.
- **`cid`**: Represents the cash in drawer with denominations and amounts.

### Key Functions

- **`displayDrawerContents()`**: Displays the contents of the cash drawer.
- **`calculateChange()`**: Main logic for change calculation, checking for sufficient funds and calculating the denominations needed for the transaction.
- **`roundToTwo()`**: Utility function for rounding to two decimal places to ensure precision.

## 📋 Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/cash-register.git
   cd cash-register
   ```
2. Open `index.html` in your browser to run the app locally.

## 📝 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as per the license terms.

## 🌟 Acknowledgments

Thanks to everyone who provides support and guidance for beginner-friendly projects like this. Special thanks to the open-source community!
