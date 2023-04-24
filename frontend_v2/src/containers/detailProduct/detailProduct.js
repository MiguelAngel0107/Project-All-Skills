import ViewProduct from "@/containers/tienda/viewProduct";

function DetailProduct(props) {
  const product = {
    id: 1,
    name: "Tomate",
    photo: "/media/photos/2023/04/backiee-130192.jpg",
    description: "awfa",
    price: "35.00",
    compare_price: "34.00",
    quantity: 6,
    sold: 2,
    date_created: "2023-04-11T18:47:06-05:00",
    category: "Food",
  };

  const related = [
    {
      id: 4,
      name: "Monitor FullHd",
      photo: "/media/photos/2023/04/backiee-228081.jpg",
      description: "Altaresolucionnitedestotal",
      price: "342.00",
      compare_price: "123.00",
      quantity: 46,
      sold: 4,
      date_created: "2023-04-12T17:28:01-05:00",
      category: 2,
    },
    {
      id: 3,
      name: "Tarjeta Grafica",
      photo: "/media/photos/2023/04/backiee-203829.jpg",
      description: "La mejor tarjeta del mercado",
      price: "345.00",
      compare_price: "323.00",
      quantity: 6,
      sold: 3,
      date_created: "2023-04-12T17:27:32-05:00",
      category: 2,
    },
    {
      id: 6,
      name: "Disco solido",
      photo: "/media/photos/2023/04/backiee-245136.jpg",
      description: "wafagwwagwagw",
      price: "32.00",
      compare_price: "31.00",
      quantity: 6,
      sold: 3,
      date_created: "2023-04-12T17:29:01-05:00",
      category: 2,
    },
    {
      id: 7,
      name: "PlacaMAdreUltraFuerte",
      photo: "/media/photos/2023/04/backiee-243897.jpg",
      description: "fawfwafawf",
      price: "456.00",
      compare_price: "321.00",
      quantity: 5,
      sold: 3,
      date_created: "2023-04-12T17:33:55-05:00",
      category: 2,
    },
  ];

  let ProductoView;
  props.producto ? (ProductoView = props.producto) : (ProductoView = product);

  let RelatedProducts;
  props.related_products
    ? (RelatedProducts = props.related_products)
    : (RelatedProducts = related);

  return (
    <ViewProduct
      Producto={ProductoView}
      RelatedProducts={RelatedProducts}
      add_item={props.add_item}
      get_items={props.get_items}
      get_total={props.get_total}
      get_item_total={props.get_item_total}
      idUser={props.idUser}
    />
  );
}

export default DetailProduct;
