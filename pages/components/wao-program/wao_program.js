import React, { useState } from 'react';
import { Pagination, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import Link from 'next/link'
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import { connect } from "react-redux";
import { AddToCart, ProductReduxData } from '../../../shared/Redux/action';
import { ItemData } from '../../../shared/data/data-ecommerce/reduxdata';
import Seo from '@/shared/layout-components/seo/seo';

const Wishlist = ({ local_varaiable, AddToCart, ProductReduxData }) => {

  //search function

  const [allData, setAllData] = useState(ItemData)

  function handleRemove(id) {
    const newList = allData.filter((idx) => idx.id !== id);
    setAllData(newList);
  }

  let allElement2 = [];

  let myfunction = (InputData) => {
    let allElement
    for (allElement of allData) {
      if (allElement.heading[0] == " ") {
        allElement.heading = allElement.heading.trim()
      }
      if (allElement.heading.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.heading.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }

    }
    setAllData(allElement2);
  };

  return (

    <div>
		  <Seo title="WAO Program"/>
      <PageHeader titles="WAO Program" active="Program" items={['ALL']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row className="row-cards">
        {/* <!-- COL-END --> */}
        <Col xl={12} lg={12}>
          <div className="tab-content">
            <div className="tab-pane active" id="tab-11">
              <Row>
                {allData ? allData.map((idx) => (
                  <Col sm={6} md={6} xl={3} className="alert" key={Math.random()}>
                    <Card>
                      <div className="product-grid6">
                        <div className="product-image6 p-5">
                          <ul className="icons-wishlist">
                            <li><Link href='#' onClick={() => handleRemove(idx.id)} className="btn btn-danger"><i className="fe fe-heart"></i></Link></li>
                          </ul>
                          <Link href={`/components/e-commerce/shopping-cart`} className="bg-light">
                            <img className="img-fluid br-7 w-100" src={idx.preview} alt="img" />
                          </Link>
                        </div>
                        <Card.Body className="pt-0">
                          <div className="product-content text-center">
                            <h1 className="title fw-bold fs-20"><Link href={`/components/e-commerce/shopping-cart`}>{idx.heading}</Link></h1>
                            <div className="price mb-2">{idx.price1}<span className="ms-4">{idx.price2}</span></div>
                            <span className={`text-${idx.bg} fs-18 fw-semibold`}>{idx.status}</span>
                          </div>
                        </Card.Body>
                        <Card.Footer className="text-center">
                          <Link href={`/components/e-commerce/shopping-cart`} onClick={() => { AddToCart(idx.id) }} className="btn btn-primary ms-2 mb-1"><i className="fe fe-help"></i>Sign Up</Link>
                          <Link href="#" className="btn btn-light ms-2 mb-1"><i className="fe fe-share-2 me-2 text-dark"></i>Share</Link>
                        </Card.Footer>
                      </div>
                    </Card>
                  </Col>
                )) : ""}
              </Row>

              <div className="mb-5">
              </div>
            </div>
          </div>
          {/* <!-- COL-END --> */}
        </Col>
        {/* <!-- ROW-1 CLOSED --> */}
      </Row>
      {/* <!-- ROW-1 END--> */}
    </div>
  )
};

Wishlist.layout = "Contentlayout"
const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);