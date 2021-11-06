import React from 'react';
import {
  Route,
  Routes as Switch
} from "react-router-dom";

import { Home } from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/your-side" element={<h1>Hi</h1>} />
    </Switch>
  );
};

export default Routes;
