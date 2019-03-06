import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { getAllProducts } from "../../services/productList"
import { searchPhotos } from "../../services/unsplash";
import Product from "../Product/Product";


function Products () {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(getAllProducts);
    // searchPhotos("handmade soap")
    // .then(res => {
    //   res.map(re => {
    //     console.log(re.url)
      // })
    // })
  }) 
  
    return (
      <Container className="mt-3">
        <Row className="justify-content-md-around">
          {productList.map(product => (
            <Col xs={12} sm={6} md={6} lg={4} key={product.name}>
              <Product
                product={product}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }


export default Products

// export class AllProducts extends Component {
//   state = {
//     productList: [
//       {
//         name: "Charcoal135",
//         price: "$20",
//         imageUrl: "assets/AllProducts/charcoal135Soap.jpg",
//         description: "made of charcoal"
//       },
//       {
//         name: "Mugwort24",
//         price: "$28",
//         imageUrl: "assets/AllProducts/mugwort24bSoap.jpg",
//         description: "sdogijweg"
//       },
//       {
//         name: "Natural Bleach",
//         price: "$30",
//         imageUrl: "assets/AllProducts/BestSellers/naturalBleach.jpg",
//         description: "bleach made of.."
//       },
//       {
//         name: "Charcoal1353",
//         price: "$20",
//         imageUrl: "assets/AllProducts/charcoal135Soap.jpg",
//         description: "made of charcoal"
//       },
//       {
//         name: "Mugwort243",
//         price: "$28",
//         imageUrl: "assets/AllProducts/mugwort24bSoap.jpg",
//         description: "sdogijweg"
//       },
//       {
//         name: "Natural Bleach3",
//         price: "$30",
//         imageUrl: "assets/AllProducts/BestSellers/naturalBleach.jpg",
//         description: "bleach made of.."
//       }
//     ]
//   };

// export default AllProducts;
