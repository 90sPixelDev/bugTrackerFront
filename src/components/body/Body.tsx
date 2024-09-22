import { ReactNode } from 'react';
import './body.css';

type Props = {
	children: ReactNode;
};

export default function Body({ children }: Props) {
	return <div className='main-content-wrapper'>{children}</div>;
}
