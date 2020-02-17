# news-warehouse

### What is _News Warehouse_?

News Warehouse takes user provided site urls and turns each homepage into a pdf file where users can then click on the article and it will open in a browser.

### Why _News Warehouse_?

I tend to miss out on news sites I enjoy due to life so I created _News Warehouse_ so I can take a look over what I've missed the past few days.

### Installation and usage

Clone the repository and run, ```npm install``` in both the root directory. Edit the `urls` array in the `index.js` file to include the sitess you'd like to save. Run `npm run setup` to create the required subdirectories and run `node index.js` to run the application. Users can set app the application to run daily to create a repository of their favorite sites.

If you want to delete all the pdfs, run `npm run delete` to remove all of them.

---

By Nicholas Altunian
