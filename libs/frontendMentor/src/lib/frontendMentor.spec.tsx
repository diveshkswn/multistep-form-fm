import { render } from '@testing-library/react';

import FrontendMentor from './frontendMentor';

describe('FrontendMentor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendMentor />);
    expect(baseElement).toBeTruthy();
  });
});
