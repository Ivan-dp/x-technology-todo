import "./MyRoutes.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { TodoPage, Assignment } from "../../pages";

const MyRoutes = () => {
  return (
    <div className="MyRoutes">
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/assignment" element={<Assignment />} />
        </Routes>
      </div>
    </div>
  );
};

export { MyRoutes };
