// import 구문을 사용해 지정된 파일(MyModule.js) 의
// 기본( default )으로 공유하는 모듈
import MyModule from "./MyModule.js";
// 이름을 맞춰 모듈 안의 특정 함수 혹은 변수를 참조 가능
import { ModuleName } from "./MyModule.js";
// 객체 구조할당과 유사하게 특정 모듈을 가져올 때 이름이 충돌할 경우 다른 이름으로.
import { ModuleName as RenameModuleName } from "./MyModule.js";

function Func() {
  MyModule();
}

// 변수나 클래스의 이름을 다른 파일에서 따로 참조 가능
export const CONST_VALUE = 0;
export class MyClass {}
// 현재 파일이 다른 파일에서 기본 (default)으로 참조하게 되는 항목 정의
export default new Func();
