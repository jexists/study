# PARCEL 세팅 및 사용법 익히기

https://parceljs.org/ 웹사이트

**번들러**: 컴퓨터에게는 하나의 파일이든 큰 속도 차이없이 인식을 하지만,
개발자 입장에서는 몇천줄의 파일을 작성하고 관리해야한다면 매우 어려운 일입니다.
이러한 것들을 필요한 기능별로 분리하고 가독성을 위해 추가로 나누기 위해 처리하는 기능을 가진 기능이 번들러라고 한다.

대표적인 예) parcel / webpack

Parcel 장점:

1.접근이 매우쉽다. = 별도의 설정없이 시작파일(Entry File)만 지정하면 바로 빌드 처리한다.
2.번들속도가 빠르다 = 멀티코어 컴파일 가능
3.Assets 기반 번들리 = html, css, javascript같은 유형의 에셋기술 지원
4.자동변환 = babel, postCss 지원
5.모듈자동 업데이트 
6.압축화, 난독화
7.코드불활

서버아이디를 확인할수없다. 

사용전 필요한 준비물: node.js+yarn(npm)

$touch .gitignore (이름이 존재하지않는 .gitignore)

 .gitignore 문서: #주석

```gitignore
**/node_modules/
node_modules "노드 모듀얼스올리지않겟다."
올리지않겠다. : **/

**/node_modules/
**/.DS_store
**/*.lock
**/*.config
**/*.log

깃에 다 올리는것이 아니라 몇개를 제외하고 올리겠다. 
```



#### 미리 세팅

farcel_test 폴더: $mkdir src/css src/js -p && touch index.html



#### parcel 설치

$parcel --version "버전체크"

$npm install --global parcel-bundler (npm으로 설치)
$npm init -y

$yarn global add parcel-bundler (yarn으로 설치)
$yarn init -y (질문을 다 yes로 답해주세요) => package.json 폴더 생김.

package.json

> license: MOT (무료 라이센스)



$parcel index.html --open => .cache / dist 폴더 생김

$yarn add node-sass =>node_modules

> $yarn add node-sass -D  //개발자용

$parcel index.html --open



$yarn add autoprefixer

$yarn add babel-preset-env