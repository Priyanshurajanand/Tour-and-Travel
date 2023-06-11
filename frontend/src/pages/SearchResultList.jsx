import React, { useState } from "react";
import CommonSection from "../components/shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../components/shared/TourCard";

const SearchResultList = () => {
  const location = useLocation();
  const data1 = useState(location.state);
  const data = data1[0]

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data?.length === 0 ? (
              <h4 className="text-center">No Tour Found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
