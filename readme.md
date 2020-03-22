# TS는 개발자로 하여금 좀 더 구조화된 코드를 볼 수 있게 한다.

TS 편해지면 그 다음부턴 JS로 돌아가지 않는다.
개발과정에서 편의성을 증가시켜줌. TYPE의 설정.

- Using Type annotations to analyze our code.
- Only actice during development.

## 3. Environment setup.

2가지 module.

    npm i install -g typescript ts-node

    tsc --help

프리티어 사용 하기.  
prettier.

1. run prettier when saving file
   vs code setting > search > format on save > check.
2. use single quotes.
3. two space for indentations.
4. themes.

## 4. Frist app.

어쨋든 package.json 을 사용한다.

## 5. Executing Typescript code.

tsc meaning is ts compiler.

    tsc index.ts
    node index.js

    ts-node index.ts

    complie하고 실행까지 하는 것.

## 6. One Quick Change.

실행해보고 찍어보기 전까지는 그 object에
내가 바라는 attribute가 있는지 모른다.
jupyter에서는 가능하지만!

## 7. Catching Errors with TS.

    interface Todo {
        id : number
        title : string
        completed : boolean
    }

interface in ts are used to define the structure of an object

## 8. Catching More Errors.

## 9. Course Overview.

- syntax + features

- design patterns with ts.
