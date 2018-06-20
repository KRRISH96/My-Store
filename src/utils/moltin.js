import { gateway as MoltinGateway } from '@moltin/sdk'


const Moltin = MoltinGateway({
  client_id: 'JVnNlxLA8lEh7hMb7pxBjLu6LInKYMhQ33pNT31cMJ'
})

export const GetAllProducts = Moltin.Products.With('files, main_images').All().then(products => {
  return products
});

export const GetProduct = (Id) => Moltin.Products.Get(Id);

export const GetCart = (reference) => Moltin.Cart(reference)
  .Items()
  .then(cart => {
    return cart
  })

export const AddtoCart = (reference,productId,quantity) => Moltin.Cart(reference)
  .AddProduct(productId, quantity)
  .then(cart => {
    return cart
  })

export const RemoveFromCart = (reference,itemId,quantity) => Moltin.Cart(reference)
  .RemoveItem(itemId, quantity)
  .then(cart => {
    return cart
  })

export const Checking = (reference, customer, billing) =>  Moltin.Cart(reference)
    .Checkout(customer, billing)
    .then(order => {
      return order
    })
