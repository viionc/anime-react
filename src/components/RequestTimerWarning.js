import React from "react";

function RequestTimerWarning({requestTimer}) {
    return <div className="warning">You can make another request in {requestTimer} seconds.</div>;
}

export default RequestTimerWarning;
