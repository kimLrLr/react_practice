# 1. JSX 문법 규칙

### 1. 반드시 부모로 묶여 있어야 된다

### 2. 태그가 비어있을 때 `<></>`(fragment태그)

### 3. 태그는 반드시 닫혀있어야 함

<br/>

# 2. 컴포넌트 사용 규칙

### 1. 파일명 첫글자는 대문자

### 2. 내보내기(export)

### 3. 필요로 하는 컴포넌트에서 불러오기(import)를 해야함

<br/>

# 3. 내보내기(export)

### 내보내기에는 두 가지 방법이 있음.

> 1. 함수 밑에 `export default 함수명` > <br/>
>    => 모듈은 기본 내보내기 딱 하나만 가능
> 2. 함수명 앞에 `export` 입력

<br/>

# 4. 불러오기(import)

### 1. 최상단에 `import 함수명 from "경로";`

=> export default로 기본 내보내기를 한 경우

### 2. 최상단에 `import {함수명} from "경로";`

=> 함수명 앞에 export를 사용한 경우
<br/>
=> 두 개 이상의 함수를 가져오는 경우 `,`을 사용하여 함수명 입력 <br/>
ex) `import {Text, Text2} from "./components/Text";`

---

<br/>

---

<br/>

# 1. map함수 사용 규칙

### 1. map함수를 사용할 때 반드시 key값을 넣어줘야 함

### 2. key값은 유니크(고유값)으로 처리할 것

<br/>
