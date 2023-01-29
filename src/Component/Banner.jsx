import { Container, Typography } from "@material-ui/core";
import React from "react";
import "../Style/banner.css";
export default function Banner() {
  return (
    <div className="banner">
      <Container className="Content">
        <div className="tagname">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat"
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="substitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat"
            }}
          >
            Get all the Info regarding hour favorite Crypto coins
          </Typography>
        </div>
      </Container>
    </div>
  );
}
