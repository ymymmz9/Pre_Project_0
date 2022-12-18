import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
// import styles from './Counter.module.css';
import styled from 'styled-components';

const Button = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: skyblue;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const CountValue = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;
const ButtonWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <ButtonWrapper>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <CountValue>{count}</CountValue>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </ButtonWrapper>
    </div>
  );
}
