import { borderRadius } from "@mui/system";
import React from "react";

const DownloadProductBox = () => {
  return (
    <div>
      <div className="downloadProductBox">فهرت درس ها و دانلود هر بخش</div>
      <div className="downloadProductBox-parent shadow-sm">
        
        <div className="downloadProductBox-download-box">
          <div className="downloadProductBox-download-button d-flex flex-row-reverse">
            <div className=" downloadProductBox-download-number">1</div>
            <div className="ml-auto p-2">
              <span>معرفی دوره</span>
            </div>
            <button type="button" className="btn btn-success">
              <span>
                دانلود{" "}
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>


        <div className="downloadProductBox-download-box">
          <div className="downloadProductBox-download-button d-flex flex-row-reverse">
            <div className=" downloadProductBox-download-number">2</div>
            <div className="ml-auto p-2">
              <span> هیپنوتیزم چیست</span>
            </div>
            <button type="button" className="btn btn-success">
              <span>
                دانلود {"  "}
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DownloadProductBox;
