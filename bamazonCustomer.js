var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",///////////////////////////// insert password
  database: "bamazon"
})

connection.connect(function(err){
  if(err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
    console.log('connected as id ' + connection.threadId);
    display();
    // connection.end();
})

function display(){
  connection.query('Select * FROM products', function(err, res){
    if(err) throw err;

    for(var i=0; i < res.length; i++){
    console.log('id: ' + res[i].item_id + '|| product: ' + res[i].product_name + '|| price: ' + res[i].price + '|| quantity: ' + res[i].quantity);
  }
  purchaseOrder();
  })
}

function purchaseOrder(){
  inquirer.prompt([
  {
    message:  'Choose and ID of a product you woud like to buy',
    name: 'id',
    default: 1,
  },
  {
    message: 'How many would you like to buy?',
    name: 'quantity',
    default: 0
  }
]).then(response=> {
  var id = parseInt(response.id);
  var quantity = parseInt(response.quantity);
  // console.log(response.id + ' ' + response.quantity)

  connection.query('SELECT *FROM products WHERE item_id = ?',[id], function(err, res){
    if (err) throw err;
    var productQuantity = parseInt(res[0].quantity)
    var price = parseInt(res[0].price)

    if(quantity < productQuantity){

      var query = 'UPDATE products SET quantity = ? WHERE item_id =?';
      connection.query(query, [productQuantity - quantity, id], function(err,res){
        if (err) throw err;
        console.log("it'll cost $"+ (quantity*price));
        connection.end();
      })
    }
    else{
      console.log('Insufficient quantity, there is only ' + productQuantity + ' left!')
      connection.end();

    }
  });
});
}
