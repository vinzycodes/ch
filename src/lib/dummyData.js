export const dummyData = [
{
  "category": "Coffee",
  "products": [
    {
      "name": "Espresso",
      "details": "A strong and rich single shot of coffee.",
      "price": 120,
      "modifications": [
        { 
          "type": "Shot Size", 
          "options": [
            {name: "Single",
             price: 0
            }, 
            {name: "Double",
             price: 20
            }
          ] 
        }
      ]
    },
    {
      "name": "Latte",
      "details": "Espresso with steamed milk and light foam.",
      "price": 160,
      "modifications": [
        { "type": "Size", "options": [{name: "Small", price: 0}, {name: "Medium", price: 20}, {name: "Large", price: 40}] },
        { "type": "Milk Type", "options": [{name: "Whole Milk", price: 0}, {name: "Oat Milk", price: 15}, {name: "Soy Milk", price: 10}] },
        { "type": "Add Espresso Shot", "options": [{name: "None", price: 0}, {name: "1 Extra Shot", price: 25}] }
      ]
    },
    {
      "name": "Cappuccino",
      "details": "Equal parts espresso, steamed milk, and foam.",
      "price": 150,
      "modifications": [
        { "type": "Foam Preference", "options": [{name: "Regular", price: 0}, {name: "Extra Foam", price: 0}] },
        { "type": "Milk Type", "options": [{name: "Whole Milk", price: 0}, {name: "Almond Milk", price: 15}] }
      ]
    },
    {
      "name": "Americano",
      "details": "Espresso diluted with hot water.",
      "price": 130,
      "modifications": [
        { "type": "Size", "options": [{name: "Small", price: 0}, {name: "Large", price: 20}] },
        { "type": "Add Milk", "options": [{name: "None", price: 0}, {name: "Add Milk", price: 10}] }
      ]
    },
    {
      "name": "Mocha",
      "details": "Espresso with chocolate syrup and steamed milk.",
      "price": 170,
      "modifications": [
        { 
          "type": "Milk Type", 
          "options": [
            {
              name: "Whole",
              price: 0
            }, 
            { name: "Oat (+₱15)",
              price: 15
            }
          ] 
        },
        { 
          "type": "Whipped Cream", 
          "options": [
            {
              name: "Yes (+₱15)",
              price: 15
            }, 
            {
              name: "No",
              price: 0
            }
          ] 
        }
      ]
    },
    {
      "name": "Flat White",
      "details": "Espresso with velvety steamed milk.",
      "price": 155,
      "modifications": [
        { 
          "type": "Size", 
          "options": [
            {
              name: "Small",
              price: 0
            }, 
            {
              name: "Medium (+₱20)",
              price: 20
            }, 
            {
              name: "Large (+₱25)",
              price: 25
            }
          ] 
        },
        { 
          "type": "Milk Type", 
          "options": [
            {
              name: "Whole Milk",
              price: 0
            },
            {
              name: "Soy Milk (+₱10)",
              price: 10
            }
          ]
        },
        { 
          "type": "Sweetener", 
          "options": [
            {
              name: "None",
              price: 0
            },
            {
              name: "Sugar Syrup (+₱5)",
              price: 5
            },
            {
              name: "Honey (+₱10)",
              price: 10
            }
          ]
        }
      ]
    },
    {
      "name": "Macchiato",
      "details": "Espresso marked with a small amount of milk foam.",
      "price": 140,
      "modifications": [
        { 
          "type": "Milk Type", 
          "options": [
            {
              name: "Whole",
              price: 0
            },
            {
              name: "Oat Milk (+₱15)",
              price: 15
            }
          ]
        },
      ]
    },
    {
      "name": "Macchiato",
      "details": "Espresso marked with a small amount of milk foam.",
      "price": 140,
      "modifications": [
        { 
          "type": "Sweetener", 
          "options": [
            { 
              name: "None", 
              price: 0 
            },
            { 
              name: "Sugar Syrup", 
              price: 0 
            },
            { 
              name: "Brown Sugar", 
              price: 0 
            }
          ]
        },
        { "type": "Milk", 
          "options": [
            { 
              name: "None", 
              price: 0 
            },
            { 
              name: "Oat Milk (+₱15)", 
              price: 15 
            }
          ] 
        }
      ]
    },
    {
      "name": "Iced Coffee",
      "details": "Brewed coffee served cold over ice.",
      "price": 150,
      "modifications": [
        { 
          "type": "Sweetness", 
          "options": [
            { name: "No Sugar", price: 0 }, 
            { name: "Regular", price: 5 }, 
            { name: "Extra Sweet", price: 10 } 
          ],
        },
        { 
          "type": "Add Milk", 
          "options": [
            { name: "No", price: 0 }, 
            { name: "Yes (+₱10)", price: 10 } 
          ] 
        } 
      ]
    },
    {
      "name": "Spanish Latte",
      "details": "Sweetened condensed milk with espresso and steamed milk.",
      "price": 180,
      "modifications": [
        { "type": "Size", "options": 
          [
            { name: "Medium", price: 0 }, 
            { name: "Large (+₱20)", price: 20 }
          ] 
        },
        { "type": "Milk Type", "options": [
            { name: "Whole Milk", price: 0 },
            { name: "Oat Milk (+₱15)", price: 15 }
          ] }
      ]
    }
  ]
},
{
  "category": "Non-Coffee",
  "products": [
    {
      "name": "Matcha Latte",
      "details": "Creamy Japanese matcha with steamed milk.",
      "price": 170,
      "modifications": [
        { 
          "type": "Milk Type", 
          "options": [
            { name: "Whole Milk", price: 0 },
            { name: "Oat Milk (+₱15)", price: 15 }
          ]
        },
        { "type": "Sweetener", "options": [
            { name: "Regular", price: 0 },
            { name: "Less Sweet", price: 0 },
            { name: "Add Honey (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Hot Chocolate",
      "details": "Rich dark chocolate with steamed milk.",
      "price": 140,
      "modifications": [
        { 
          "type": "Toppings", 
          "options": [
            { name: "None", price: 0 },
            { name: "Whipped Cream (+₱10)", price: 10 },
            { name: "Marshmallows (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Chai Latte",
      "details": "Spiced black tea with milk and sweetener.",
      "price": 160,
      "modifications": [
        { 
          "type": "Sweetness Level", 
          "options": [
            { name: "Regular", price: 0 },
            { name: "Less Sweet", price: 0 }
          ]
        },
        { 
          "type": "Milk Type", 
          "options": [
            { name: "Whole Milk", price: 0 },
            { name: "Oat Milk (+₱15)", price: 15 }
          ]
        }
      ]
    },
    {
      "name": "Iced Tea",
      "details": "Classic black tea served cold with lemon.",
      "price": 100,
      "modifications": [
        { 
          "type": "Sweetness", 
          "options": [
            { name: "Unsweetened", price: 0 },
            { name: "Regular", price: 5 },
            { name: "Sweet", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Lemonade",
      "details": "Freshly squeezed lemons and sugar.",
      "price": 110,
      "modifications": [
        { 
          "type": "Add Flavors", "options": [
            { name: "Classic", price: 0 },
            { name: "Mint (+₱10)", price: 10 },
            { name: "Ginger (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Fruit Smoothie",
      "details": "Blended fruit with yogurt or milk.",
      "price": 180,
      "modifications": [
        { 
          "type": "Fruit Combo", 
          "options": [
            { name: "Mango-Banana", price: 0 },
            { name: "Berry Mix", price: 0 },
            { name: "Avocado", price: 0 }
          ]
        },
        { 
          "type": "Base", "options": [
            { name: "Yogurt", price: 0 },
            { name: "Milk", price: 0 },
            { name: "Oat Milk (+₱15)", price: 15 }
          ]
        }
      ]
    },
    {
      "name": "Iced Matcha",
      "details": "Cold version of our matcha latte.",
      "price": 175,
      "modifications": [
        { 
          "type": "Milk", 
          "options": [
            { name: "Whole", price: 0 },
            { name: "Oat (+₱15)", price: 15 }
          ]
        }
      ]
    },
    {
      "name": "Iced Chocolate",
      "details": "Chilled chocolate drink topped with cream.",
      "price": 160,
      "modifications": [
        { 
          "type": "Toppings", 
          "options": [
            { name: "None", price: 0 },
            { name: "Whipped Cream (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Milk Tea",
      "details": "Black tea with milk and chewy pearls.",
      "price": 150,
      "modifications": [
        { "type": "Sweetness", "options": [
            { name: "0%", price: 0 },
            { name: "50%", price: 0 },
            { name: "100%", price: 0 }
          ]
        },
        { "type": "Pearls", "options": [
            { name: "None", price: 0 },
            { name: "Add Pearls (+₱15)", price: 15 }
          ]
        }
      ]
    },
    {
      "name": "Yogurt Drink",
      "details": "Chilled yogurt-based smoothie.",
      "price": 140,
      "modifications": [
        { 
          "type": "Flavor", "options": [
            { name: "Strawberry", price: 0 },
            { name: "Mango", price: 0 },
            { name: "Blueberry", price: 0 }
          ]
        }
      ]
    }
  ]
},
{
  "category": "Pastry",
  "products": [
    {
      "name": "Croissant",
      "details": "Buttery and flaky French pastry.",
      "price": 85,
      "modifications": [
        { 
          "type": "Flavor", "options": [
            { name: "Plain", price: 0 },
            { name: "Almond (+₱15)", price: 15 },
            { name: "Chocolate (+₱20)", price: 20 }
          ]
        }
      ]
    },
    {
      "name": "Muffin",
      "details": "Soft and moist baked muffin with assorted flavors.",
      "price": 75,
      "modifications": [
        { 
          "type": "Flavor", "options": [
            { name: "Blueberry", price: 0 },
            { name: "Banana Nut", price: 0 },
            { name: "Chocolate Chip", price: 0 }
          ]
        }
      ]
    },
    {
      "name": "Scone",
      "details": "Crumbly British-style pastry served warm.",
      "price": 90,
      "modifications": [
        { 
          "type": "Flavor", "options": [
            { name: "Raisin", price: 0 },
            { name: "Cranberry Orange", price: 0 },
            { name: "Plain", price: 0 }
          ]
        },
        { "type": "Add Butter", "options": [
            { name: "No", price: 0 },
            { name: "Yes (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Danish Pastry",
      "details": "Laminated dough pastry filled with fruit or custard.",
      "price": 95,
      "modifications": [
        { 
          "type": "Filling", 
          "options": [
            { name: "Apple", price: 0 },
            { name: "Cream Cheese", price: 0 },
            { name: "Blueberry", price: 0 }
          ]
        }
      ]
    },
    {
      "name": "Cinnamon Roll",
      "details": "Sweet roll swirled with cinnamon and topped with glaze.",
      "price": 105,
      "modifications": [
        { 
          "type": "Icing", "options": [
            { name: "None", price: 0 },
            { name: "Vanilla Glaze", price: 0 },
            { name: "Cream Cheese (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Chocolate Chip Cookie",
      "details": "Classic cookie with generous chocolate chips.",
      "price": 60,
      "modifications": [
        {
          "type": "Add-ons", 
          "options": [
            { name: "None", price: 0 },
            { name: "Extra Chips (+₱10)", price: 10 },
            { name: "Sea Salt (+₱5)", price: 5 }
          ]
        }
      ]
    },
    {
      "name": "Brownie",
      "details": "Fudgy chocolate brownie with a rich cocoa taste.",
      "price": 70,
      "modifications": [
        { 
          "type": "Toppings", 
          "options": [
            { name: "Plain", price: 0 },
            { name: "Walnuts (+₱10)", price: 10 },
            { name: "Choco Chips (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Banana Bread",
      "details": "Moist banana bread with a hint of cinnamon.",
      "price": 80,
      "modifications": [
        { 
          "type": "Add-ons", "options": [
            { name: "None", price: 0 },
            { name: "Walnuts (+₱10)", price: 10 },
            { name: "Chocolate Chips (+₱10)", price: 10 }
          ]
        }
      ]
    },
    {
      "name": "Pain au Chocolat",
      "details": "French pastry with layers of dough and chocolate filling.",
      "price": 95,
      "modifications": [
        { 
          "type": "Size", 
          "options": [
            { name: "Regular", price: 0 },
            { name: "Mini (₱10 off)", price: -10 }
          ]
        }
      ]
    },
    {
      "name": "Cheesecake Bar",
      "details": "Dense and creamy cheesecake slice on a biscuit crust.",
      "price": 120,
      "modifications": [
        { "type": "Flavor", 
          "options": [
            { name: "Classic", price: 0 },
            { name: "Strawberry (+₱10)", price: 10 },
            { name: "Mango (+₱10)", price: 10 }
          ]
        }
      ]
    }
  ]
}]