gulp.js 

parcel

webpack /backpack

# GULP.js

-gulp를 사용할려면 javascript를 알아야한다.

#### terminal

$yarn global add gulp-cli

$yarn add gulp  //웹서버 구축&서버 도움

$gulf --version //gulp 버전 설치 두군데 (전체, 폴더)

package.json  //기능세팅해서 사용 (핸드폰 바꿔서 어플 연동)

$npm init   //이름 / 버전 / 버전확인 / 설명 / 추가파일(index.js / index.html) / 등등등 (package.json내용) 



//현재폴더에다가 설치

$yarn add node-sass   //현재폴더에 node-sass를 사용하겠다.

$yarn add browser-sync



#### gulpfile.js

const gulp = require('gulp');         // nodemodule 안에있는  gulp 기능

const sass = require('node-sass')

const brSync = require('browser-sync')

let nowBrowser = function(){
brSync.task(
	)
}