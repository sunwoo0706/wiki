## transitent props

`transient props` 일시적인 props 이라는 뜻이다.

`styled-components` 에서 만든 개념인데, 간단하게 말하면 "조건부 스타일링이 필요할때, 일시적으로 쓰이기 위한 Props" 라고 할 수 있겠다.

왜 일시적인 Props가 필요한지 아래 예시와 함께 설명하겠다.

React에서 컴포넌트에 전달되는 모든 Props는 기본적으로 해당 컴포넌트의 최상위 DOM 요소로 전달된다. 이는 대부분의 경우 문제가 되지 않지만, 때로는 의도하지 않은 결과를 초래할 수 있다.

```jsx
const StyledButton = styled.button`
  background-color: ${(props) => (props.isActive ? "blue" : "gray")};
`;

<StyledButton isActive={true}>Click me</StyledButton>;
```

이 경우, `isActive` prop은 스타일링을 위해 사용되지만, React는 이 prop을 실제 DOM 요소인 `<button />` 에도 전달하려고 한다. 그러나 `isActive` 는 HTML `button` 요소의 유효한 속성이 아니기 때문에 React는 다음과 같은 경고를 발생시킨다.

```sh
Warning: Received `true` for a non-boolean attribute `isActive`.
If you want to write it to the DOM, pass a string instead: isActive="true" or isActive={value.toString()}.
```

이러한 경고는 코드가 예상대로 작동하지 않을 수 있음을 나타내며, DOM에 불필요한 속성이 추가되는 것을 의미한다.

아래는 해결을 위해 transient props를 사용하는 예시이다.

```jsx
const StyledButton = styled.button`
  background-color: ${(props) => (props.$isActive ? "blue" : "gray")};
`;

<StyledButton $isActive={true}>Click me</StyledButton>;
```

이렇게 transiten props를 사용하면 불필요한 DOM 속성을 방지하고, React가 알 수 없는 props에 대해 경고하는 것을 막을 수 있다. 일반적인 attribute와 형태를 달리함으로서 의미적으로도 도움이 될 것 같다.
