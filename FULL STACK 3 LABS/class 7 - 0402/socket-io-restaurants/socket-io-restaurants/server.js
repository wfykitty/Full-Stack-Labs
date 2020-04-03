const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");

const Restaurant = require('./model/Restaurant')
const Order = require("./model/Order");
const mongoose = require("mongoose");

mongoose.connect("mongodb://feiya:Feiya126@cluster0-shard-00-00-h9bay.azure.mongodb.net:27017,cluster0-shard-00-01-h9bay.azure.mongodb.net:27017,cluster0-shard-00-02-h9bay.azure.mongodb.net:27017/admin_data?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority");
// const connectionString = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false" ;
const connectionString =
"mongodb://feiya:Feiya126@cluster0-shard-00-00-h9bay.azure.mongodb.net:27017,cluster0-shard-00-01-h9bay.azure.mongodb.net:27017,cluster0-shard-00-02-h9bay.azure.mongodb.net:27017/admin_data?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"


mongoose
  .connect(connectionString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  } )
  .then( () => { console.log( "Mongoose connected successfully " ); },
  error => { console.log( "Mongoose could not connected to database: " + error); }
  );

const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function(res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

  //get restaurant data 
socket.on("get-restaurants", () => {
  console.log("server - get-restarants called");

  Restaurant.find((error, documents) => {
    if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
    else {
      console.log(`Restaurant.find() returned documents: ${documents}`);
      const data = documents.map(x => x.name);
     socket.emit("restaurants-data", data); 
    }
  });

//Getting Order 
socket.on("get-orders", () => {
  console.log("server - get-orders called");

  Order.find((error, documents) => {
    if (error) console.log(`Error occurred on Order.find(): ${error}`);
    else {
      console.log(`Order.find() returned documents: ${documents}`);
      const data = documents.map(x => x.item);
      socket.emit("orders-data", data); 
    }
  });
    });

//place an order 

 socket.on('add-order', ()=> {
  console.log("server - add-orders called");
  Order.create(
    {
      item: 'New Item',
      customer_name: 'New Customer'
    },
    (error, order) => {
      if (error) console.log(`Error occurend on Order.create(): ${error}`);
      else {
        console.log(`Order.create() returned documents: ${order}`);
        socket.emit("order-data-added", order);
    };
  });
})
})
});
