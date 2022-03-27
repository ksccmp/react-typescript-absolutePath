import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { _number } from '@/number';

const App = (): JSX.Element => {

    const [number, setNumber] = React.useState<number>(0);
    const recoilNumber = useRecoilValue(_number);

    return (
        <div>
            <h2>Hello. Jest!!</h2>
            <h4>number: {number}</h4>
            <h4>recoilNumber: {recoilNumber}</h4>
            <button onClick={() => setNumber(number+3)}>증가</button>
            <button onClick={() => setNumber(number-2)}>감소</button>
        </div>
    )
}

export default App;