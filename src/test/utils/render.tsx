import * as React from 'react';
import { ReactElement } from 'react';
import { render as reactRender } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const render = (ui: ReactElement, { ...options } = {}) =>
    reactRender(ui, {
        wrapper: ({ children }) => (
            <RecoilRoot>
                {children}
            </RecoilRoot>
        ),
        ...options
    });

export * from '@testing-library/react';
export { render };
