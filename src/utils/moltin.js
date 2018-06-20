import { gateway as MoltinGateway } from '@moltin/sdk'
// const MoltinGateway = require("@moltin/sdk").gateway;

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

export const RemoveFromCart = (reference,productId,quantity) => Moltin.Cart(reference)
  .RemoveItem(productId, quantity)
  .then(cart => {
    return cart
  })
