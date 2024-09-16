# Programming task – Vending machine
А task for applying for a front-end position.

This is a basic application with 3 components products, checkout and payment. 
At the beginning the application request the products from node.js server and load them in array of objects.
The received products are rendered at the first page where the user can select from them. The next step is the checkout, where the user can remove products or continue to payment. At the payment page, the user must insert coins to complete the payment and receive the products. The machine returns change and allows reset (cancel) the buying process.

## Start the project
1. Install node.js
    - for windows just download it from their site and hit next, next...
    - for linux ask copilot for command for your distribution
    - for EndeavourOS is sudo pacman -S nodejs npm
2. Clone the repository in some empty folder
3. Enter in folder nodejs-part and start the cmd/console
4. Type npm install
5. Type node index.js
6. Now the server should work on http://localhost:3000/products it could be tested with postman and get method
7. Leave the console to work and go in folder react-part
8. Open new cmd/console
9. Type npm install
10. Type npm run dev
11. Now the React application should work on http://localhost:5173/

### Back End - Node.js
- API server to handle the products requests
### Front End - React
- React application receiving products from API and rendering the content

#### Coins
- Coins denominations used in the application
10 st, 20 st, 50 st, 1 lv, 2 lv.