import { ReactNode } from 'react';

import './style.css';

const Header = ({ children }: { children: ReactNode }): ReactNode => {
    return <header>{children}</header>;
};

export default Header;
