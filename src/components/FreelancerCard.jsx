import styled from 'styled-components';
import favIconFilled from '../assets/images/fav-icon-filled.svg';
import favIcon from '../assets/images/fav-icon.svg';
import thumbnail from '../assets/images/thumbnail.svg';

const Container = styled.div``;
const Wrapper = styled.div`
	position: relative;
	background: #fff;
	border-radius: 10px;
	padding: 10px;

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

const FreelancerCard = ({ filled }) => {
	return (
		<Container>
			<Wrapper filled={filled}>
				<div className='thumbnail'>
					<img src={thumbnail} alt='random pic' />
					<div className='avatar'>
						<img src='https://picsum.photos/100/100' alt='avatar' />
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
						<p className='name'>Donnienos</p>
						<p className='rate'>₦30,000</p>
					</div>
					<div className='right'>Hire</div>
				</div>
			</Wrapper>
		</Container>
	);
};

export default FreelancerCard;
