import { AppSidebar, AppFooter } from '../components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const AppContent = styled.div`
	position: relative;
	padding: 70px 40px 0 40px;
	width: calc(100vw-230px);
	overflow: hidden;

	.hamburger {
		svg {
			width: 30px;
			height: 30px;
		}
		display: block;
		position: absolute;
		left: 20px;
		top: 20px;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		margin-left: 230px;

		.hamburger {
			display: none;
		}
	}
`;

const DefaultLayout = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<>
			<div>
				<AppSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
				<AppContent>
					<div
						className='hamburger'
						onClick={() => setShowSidebar(!showSidebar)}
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z'
								fill='black'
							/>
						</svg>
					</div>
					<Outlet />
					<AppFooter />
				</AppContent>
			</div>
		</>
	);
};

export default DefaultLayout;
