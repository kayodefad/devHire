import { PageHeader } from '../../components';
import styled from 'styled-components';
import FreelancerCard from '../../components/FreelancerCard';

const Container = styled.div``;
const Wrapper = styled.div`
	.freelancers-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
	}
`;

const Favorites = () => {
	return (
		<Container>
			<Wrapper>
				<PageHeader>Favorites</PageHeader>
				<div className='freelancers-container'>
					{Array(3)
						.fill(1)
						.map((el, i) => {
							return <FreelancerCard />;
						})}
				</div>
			</Wrapper>
		</Container>
	);
};

export default Favorites;
