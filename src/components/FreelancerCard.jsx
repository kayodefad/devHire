import styled from 'styled-components';
import favIconFilled from '../assets/images/fav-icon-filled.svg';
import favIcon from '../assets/images/fav-icon.svg';
import thumbnail from '../assets/images/thumbnail.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Container = styled.div``;
const Wrapper = styled.div`
	position: relative;
	background: #fff;
	border-radius: 10px;
	padding: 10px;
	box-shadow: 0px 0px 40px rgba(14, 31, 53, 0.1);

	.thumbnail {
		position: relative;
		width: 100%;

		img {
			width: 100%;
			height: 140px;
			object-fit: cover;
			border-radius: 10px;
		}

		.avatar {
			position: absolute;
			left: 10px;
			bottom: -20px;

			img {
				width: 40px;
				height: 40px;
				border: 2px solid #fff;
				border-radius: 50%;
				background-color: #369bf0;
			}
		}
	}

	.fav-icon {
		background: ${({ filled }) => (filled ? '#fff' : '#BBB')};
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 20px;
		right: 20px;
		padding: 10px;
		border-radius: 10px;
		cursor: pointer;

		img {
			width: 15px;
		}
	}

	.dev-info {
		margin-top: 25px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left {
			.name {
				font-weight: 700;
				font-size: 13px;
			}
			.rate {
				color: rgba(0, 0, 0, 0.49);
				font-size: 11px;
			}
		}

		.right {
			color: #1d9bf0;
			font-weight: 700;
			font-size: 13px;
		}
	}
`;

export const FreeLancerLoader = () => {
	return (
		<Container>
			<Wrapper>
				<div className='thumbnail'>
					<Skeleton height={140} />
					<div className='avatar'>
						<Skeleton circle width={40} height={40} />
					</div>
				</div>
				<div className='fav-icon'>
					<Skeleton width={15} />
				</div>
				<div className='dev-info'>
					<div className='left'>
						<Skeleton width={60} />
						<Skeleton width={50} />
					</div>
					<div className='right'>
						<Skeleton width={50} />
					</div>
				</div>
			</Wrapper>
		</Container>
	);
};

const FreelancerCard = ({ filled, data }) => {
	return (
		<Container>
			<Wrapper filled={filled}>
				<div className='thumbnail'>
					<img src={data.thumbnail} alt='random pic' />
					<div className='avatar'>
						<img src={data.avatar} alt='avatar' />
					</div>
				</div>
				<div className='fav-icon'>
					{filled ? (
						<img src={favIconFilled} alt='fav-icon filled' />
					) : (
						<img src={favIcon} alt='fav-icon' />
					)}
				</div>
				<div className='dev-info'>
					<div className='left'>
						<p className='name'>{data.name}</p>
						<p className='rate'>{data.price}</p>
					</div>
					<div className='right'>Hire</div>
				</div>
			</Wrapper>
		</Container>
	);
};

export default FreelancerCard;
