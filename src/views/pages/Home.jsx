import { PageHeader } from '../../components';
import styled from 'styled-components';
import FreelancerCard from '../../components/FreelancerCard';

const Container = styled.div`
	margin-bottom: 40px;
`;
const Wrapper = styled.div`
	.freelancers-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;
	}
`;

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<PageHeader>Hire Top Developers</PageHeader>
				<div className='freelancers-container'>
					{Array(20)
						.fill(1)
						.map((el, i) => {
							return i % 2 === 0 ? (
								<FreelancerCard key={i} />
							) : (
								<FreelancerCard filled key={i} />
							);
						})}
				</div>
			</Wrapper>
		</Container>
	);
};

export default Home;
