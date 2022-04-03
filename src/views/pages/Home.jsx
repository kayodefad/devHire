import { PageHeader } from '../../components';
import styled from 'styled-components';
import FreelancerCard, {
	FreeLancerLoader,
} from '../../components/FreelancerCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFreelancers } from '../../dataService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Container = styled.div`
	margin-bottom: 40px;
`;
const Wrapper = styled.div`
	.freelancers-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 40px;
	}

	@media (min-width: 768px) {
		.freelancers-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.freelancers-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;

const Home = () => {
	const [freelancers, setFreelancers] = useState([]);
	const [loading, setLoading] = useState(false);

	const getAllFreelancers = () => {
		setLoading(true);
		getFreelancers()
			.then((res) => {
				setFreelancers(res);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	};

	useEffect(() => {
		getAllFreelancers();
	}, []);

	return (
		<Container>
			<Wrapper>
				<PageHeader>Hire Top Developers</PageHeader>
				{loading ? (
					<div className='freelancers-container'>
						{Array(10)
							.fill(undefined)
							.map((_, i) => {
								return <FreeLancerLoader key={i} />;
							})}
					</div>
				) : (
					<div className='freelancers-container'>
						{freelancers.map((freelancer) => {
							return freelancer.id % 2 === 0 ? (
								<FreelancerCard data={freelancer} key={freelancer.id} />
							) : (
								<FreelancerCard data={freelancer} filled key={freelancer.id} />
							);
						})}
					</div>
				)}
			</Wrapper>
		</Container>
	);
};

export default Home;
