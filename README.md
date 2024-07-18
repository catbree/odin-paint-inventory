# Inventory Application
This is an inventory management app for an imaginary store written in Express (Node).

## Acceptance Criteria
The inventory app has categories and items.
When the user goes to the homepage, they can choose a category to view.
Clicking on a category gets them a list of every item in said category.
CRUD method is available for items and categories.
Anyone can CRUD.

## Model
Item
    name: string
    description: string
    category: Category[0..*]
    price: number
    number_in_stock: number
    
    status: enum
    url: string

Category
    name: string
    description: string
    
    url: string
