import styled from 'styled-components';
import favIconFilled from '../assets/images/fav-icon-filled.svg';
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
			height: 200px;
			object-fit: cover;
			border-radius: 10px;
		}

		.avatar {
			position: absolute;
			left: 10px;
			bottom: -25px;

			img {
				width: 60px;
				height: 60px;
				border: 2px solid #fff;
				border-radius: 50%;
			}
		}
	}

	.fav-icon {
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 20px;
		right: 20px;
		padding: 12px;
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
			font-size: 16px;
			.name {
				font-weight: 700;
			}
			.rate {
				color: rgba(0, 0, 0, 0.49);
			}
		}

		.right {
			color: #1d9bf0;
			font-weight: 700;
		}
	}
`;

const FreelancerCard = () => {
	return (
		<Container>
			<Wrapper>
				<div className='thumbnail'>
					<img src={thumbnail} alt='random pic' />
					<div className='avatar'>
						<img src='https://picsum.photos/100/100' alt='avatar' />
					</div>
				</div>
				<div className='fav-icon'>
					<img src={favIconFilled} alt='fav-icon' />
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
