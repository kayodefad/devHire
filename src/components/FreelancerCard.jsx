import styled from 'styled-components';
import favIconFilled from '../assets/images/fav-icon-filled.svg';

const Container = styled.div``;
const Wrapper = styled.div`
	position: relative;
	background: #fff;
	padding: 10px;
	.thumbnail {
		width: 100%;
		img {
			width: 100%;
			border-radius: 10px;
		}
	}
`;

const FreelancerCard = () => {
	return (
		<Container>
			<Wrapper>
				<div className='thumbnail'>
					<img src='https://picsum.photos/400/200' alt='random pic' />
				</div>
				<div className='favorite-icon'>
					<img src='https://picsum.photos/100/100' alt='avatar' />
				</div>
				<div className='fav-icon'>
					<img src={favIconFilled} alt='fav-icon' />
				</div>
			</Wrapper>
		</Container>
	);
};

export default FreelancerCard;
