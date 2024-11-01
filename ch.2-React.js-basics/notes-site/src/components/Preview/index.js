import React from "react";

const Preview = (props = 'wessam') => (
    <div className="preview-section col-lg-9 col-sm-8">
        <div>
                {props.children}
        </div>
    </div>
)

export default Preview;