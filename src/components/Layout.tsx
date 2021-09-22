import { FC } from 'react';
import './layout.css';

interface LayoutProps {
  children: any
}

const Layout: FC<LayoutProps> = ({ children }) => (
  children
);

export default Layout;
