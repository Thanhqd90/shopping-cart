var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product ({
        imagePath: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/334000/620x/Super-Mario-Level-Up-Boardgame-605999.jpg',
        title: 'Super Mario',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam at dolore',
        price: 50
    }),
    new Product ({
        imagePath: 'https://venturebeat.com/wp-content/uploads/2018/05/donkeykong2.jpg?fit=400%2C261&strip=all',
        title: 'Donkey Kong',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam at dolore',
        price: 30
    }),
    new Product ({
        imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/743890/header.jpg?t=1535330384',
        title: 'Megaman X',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam at dolore',
        price: 25
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}