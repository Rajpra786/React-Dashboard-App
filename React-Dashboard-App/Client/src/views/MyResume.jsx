/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    * 
 *                         React Dashboard                                                              *
 *                         About the file: component to display resume                                  *
 ********************************************************************************************************/

import React, { Component } from "react";
import PDFViewer from "pdf-viewer-reactjs";

import pdf from "./resume.pdf";

class MyResume extends Component {
  render() {
    return (
      <div className="col-sm-12 text-center">
        <div className="rounded">
          <PDFViewer
            document={{
              url: pdf,
            }}
            hideZoom
            hideRotation
            scale={1.5}
            pages={2}
          />
        </div>
      </div>
    );
  }
}

export default MyResume;

