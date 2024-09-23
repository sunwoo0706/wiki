## flex-box에서 n번째 줄부터 ellipsis 처리하기

우선 일반적인 n번째 줄부터의 ellipsis 는 아래의 css 코드를 사용하여 처리할 수 있다.

```css
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
-webkit-box-orient: vertical;
-webkit-line-clamp: {n};
```

하지만 이 방식은 flex-box 내에서는 동작하지 않는다.

방법을 찾던 중 https://css-tricks.com/flexbox-truncated-text/ 에서 힌트를 얻어 `word-wrap: break-word` 를 추가하여 해결하였다.
