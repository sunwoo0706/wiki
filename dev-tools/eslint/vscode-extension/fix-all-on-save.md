## vscode에서 코드 저장 시 마다 eslint fixAll 실행하기

vscode에서 코드 저장 시 마다 eslint fixAll을 실행하기 위해서는 아래와 같이 설정해야 한다.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

이렇게 설정하면 vscode에서 코드 저장 시 마다 eslint fixAll을 실행하게 된다.

이전에는 `source.fixAll.eslint`에 값으로 `true`를 넣어주면 되었지만, 아래와 같이 현재는 사용하지 않는다.

> true: 명시적으로 저장된 경우에만 코드 동작을 트리거합니다. 이 값은 "explicit"에 대해 더 이상 사용되지 않습니다.
