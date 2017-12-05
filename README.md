# bamazon_mysql

##### This bamazon project is to practice mysql with node.js 
##### I initially created a database in mysql called bamazon and created a table called products. In the products table, I added 4 columns and displayed them in the terminal using node.js as shown below. 
![bamazon display](https://github.com/yjeong19/bamazon_mysql/blob/master/images/bamazon1.jpg)

##### Then there are 2 questions that needs to be answered, this query was created using the inquirer npm. The first question asks for the ID of the product that you would like to purchase. The second questions asks for the quantity that you would like to purchase. After receiving the user response, the bamazonCustomer.js file runs a loop and displays the price of the purchase and then subtracts the quantity from the database. 

###### below hows 550 sunglasses being purchased for $100, each, totaling $55,000. 

![bamazon display](https://github.com/yjeong19/bamazon_mysql/blob/master/images/bamazon2.png)

###### below shows the database display after the quantity has been subtracted from item_id 4: now there is only 250 quantity. 

![bamazon display](https://github.com/yjeong19/bamazon_mysql/blob/master/images/database.png)

##### If the user inputs a number for questions 2 that is greater than the quantity that is left, then the user is notified that there is an insufficient quantity and displays the number of quantity. 

![bamazon display](https://github.com/yjeong19/bamazon_mysql/blob/master/images/insufficient.png)


