import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { searchPhotos } from "../../services/unsplash";
import Product from "../Product/Product";


function Shop () {
  const [productList, setProductList] = useState([
    {
      name: "Charcoal135",
      price: "$20",
      imageUrl: "assets/AllProducts/charcoal135Soap.jpg",
      description: "made of charcoal"
      },
    {
      name: "Mugwort24",
      price: "$28",
      imageUrl: "assets/AllProducts/mugwort24bSoap.jpg",
      description: "sdogijweg"
      },
    {
      name: "Natural Bleach",
      price: "$30",
      imageUrl: "assets/AllProducts/BestSellers/naturalBleach.jpg",
      description: "bleach made of.."
      },
    {
      name: "Charcoal1353",
      price: "$20",
      imageUrl: "assets/AllProducts/charcoal135Soap.jpg",
      description: "made of charcoal"
      },
    {
      name: "Mugwort243",
      price: "$28",
      imageUrl: "assets/AllProducts/mugwort24bSoap.jpg",
      description: "sdogijweg"
      },
    {
      name: "Natural Bleach3",
      price: "$30",
      imageUrl: "assets/AllProducts/BestSellers/naturalBleach.jpg",
      description: "bleach made of.."
      }
  ])
  
    return (
      <Container className="mt-3">
        <Row className="justify-content-md-around">
          {productList.map(product => (
            <Col xs={12} md={6} lg={4} >
              <Product
                product={product}
                key={product.name}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }


export default Shop

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
