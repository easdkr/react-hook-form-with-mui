# react-hook-form, mui 그리고 typescript 함께 사용하기

##### tsx 에서 mui의 component 들을 react-hook-form의 useController hook을 사용해 form 형태로 다루기 위한 예시를 담은 데모 프로젝트

&nbsp;

### 이 프로젝트에서 사용하는 react-hook-form api

- useForm : form을 쉽게 다루기 위한 custom hook,

- Control : React Hook Form 안에 컴포넌트를 등록하기 위한 method를 가지고 있는 객체

- useController : Controller를 작동시키는 custom hook. Controller와 같은 props와 method를 공유한다.

&nbsp;

### Component

- FormInput : TextField(MUI) + useController(react-hook-form)
- FormTagInput : Autocomplete(MUI) + useController(react-hook-form)

&nbsp;

### 사용법

```shell
git clone https://github.com/easdkr/react-hook-form-with-mui.git
cd react-hook-form-with-mui
yarn install
yarn start
```

&nbsp;

### 참고

- react-hook-form official : https://react-hook-form.com
- mui official : https://mui.com
