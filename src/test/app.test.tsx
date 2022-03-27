import * as React from 'react';
import App from '@/App';
import { fireEvent } from '@testing-library/react';
import { render } from '@/test/utils/render';

describe('<App /> test', () => {
    it('matches snapshopt', () => {
        const utils = render(<App />);
        expect(utils.container).toMatchSnapshot(); // snapshot match
    });

    it('screen test', () => {
        const utils = render(<App />);

        const h2 = utils.container.querySelector('h2'); // h2태그 DOM 가져오기
        h2 && expect(h2.innerHTML).toBe('Hello. Jest!!'); // h2의 innerHTML이 Hello, Jest!! 인지 테스트
    });

    it('button test', () => {
        const utils = render(<App />);

        const str = utils.getByText('number: 0'); // 텍스트가 number: 0인 DOM 가져오기
        const increaseButton = utils.getByText('증가'); // 텍스트가 증가인 DOM 가져오기
        const decreaseButton = utils.getByText('감소'); // 텍스트가 감소인 DOM 가져오기

        fireEvent.click(increaseButton); // 증가버튼 클릭이벤트 실행
        fireEvent.click(increaseButton); // 증가버튼 클릭이벤트 실행
        expect(str).toHaveTextContent('number: 6'); // str의 텍스트가 number: 6인지 확인

        fireEvent.click(decreaseButton); // 감소버튼 클릭이벤트 실행
        fireEvent.click(decreaseButton); // 감소버튼 클릭이벤트 실행
        expect(str).toHaveTextContent('number: 2'); // str의 텍스트가 number: 2인지 확인
    });
})