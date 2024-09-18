## Next.js router pathname type-safe하게 개발하기

회사에서 Next.js 15를 사용하고 있는데, `router.push()` 부분에 매번 일일이 pathname 입력해주는게 처음엔 참을만 했는데, 점점 router가 깊어질수록 귀찮아졌다.

방법이 없을까 하다가 typedRoutes 옵션을 사용하는 방법이 있었다.

```js
// next.config.js
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
```

위와 같이 간단하게 설정해주면 되는데 experimental 설정이라서 그런가 turbopack 옵션으로 실행하는 dev에서는 구동이 되지 않았다.

다이나믹 라우팅에서도 구동이 되지 않는다고 하는데 랜딩 페이지 개발에서 다이나믹 라우팅을 사용할 것 같지는 않고, path를 type recommend해주는 기능만 있으면 되는거라서 앞으로 애용하는 옵션이 될 것 같다.

https://nextjs.org/docs/app/api-reference/next-config-js/typedRoutes
