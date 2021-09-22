import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './layout.css';

interface LayoutProps {
  children: any
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Router>
    {children}
  </Router>
);

export default Layout;
