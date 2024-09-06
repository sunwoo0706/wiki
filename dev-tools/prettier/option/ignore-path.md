## --ignore-path

prettier에서 format 대상에서 제외할 **설정 파일**의 경로를 지정할 수 있는 옵션이다.

예시 :

```json
{
  "scripts": {
    "format:fix": "prettier --write --ignore-path .gitignore ."
  }
}
```
