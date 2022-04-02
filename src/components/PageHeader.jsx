import styled from 'styled-components';

const Container = styled.h1`
	margin-bottom: 40px;
`;

const PageHeader = ({ children }) => {
	return <Container>{children}</Container>;
};

export default PageHeader;
