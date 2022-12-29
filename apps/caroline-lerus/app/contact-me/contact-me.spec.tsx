import { render } from '@testing-library/react';

import ContactMe from './contact-me';

describe('ContactMe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactMe />);
    expect(baseElement).toBeTruthy();
  });
});
