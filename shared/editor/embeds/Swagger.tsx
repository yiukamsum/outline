import * as React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
// import css from "swagger-ui-react/swagger-ui.css"
import { EmbedProps as Props } from ".";

const URL_REGEX = new RegExp("^https?://.*.json$");

export default class Swagger extends React.Component<Props> {
  static ENABLED = [URL_REGEX];

  render() {
    // console.log(css);
    return <SwaggerUI url={this.props.attrs.href} />;
  }
}
