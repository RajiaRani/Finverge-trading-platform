import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="container p-5">
        <div className="row p-5 text-center">
          <h1 className="mb-4">Page Not Found</h1>
          <p className="text-mute mb-4">
           Sorry this page does't exists.
          </p>
          <Link to="/">
          <button className="btn btn-primary m-auto" style={{ width: "20%" }}>
           Go Home Page
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
