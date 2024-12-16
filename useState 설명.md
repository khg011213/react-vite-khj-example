### useState 훅 :

#### 1. useState란 ?

    화면 갱신을 위해리액트 내부에서 관리하는 변수(값)

### 2. useState 사용법

    const [number, setNumber] = useState(0);

    //위의 소스코드를 아래와 같이 변경하여 react가 해당변수를 관리
    //
    ////////
    let number = 0;
    function setNumber(num){
        number=num
    }
