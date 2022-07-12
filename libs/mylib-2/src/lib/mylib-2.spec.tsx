import { render } from '@testing-library/react';

import Mylib2 from './mylib-2';

describe('Mylib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mylib2 />);
    expect(baseElement).toBeTruthy();
  });
});
