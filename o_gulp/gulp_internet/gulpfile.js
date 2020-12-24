var gulp = require('gulp');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); 
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// 소스 파일 경로 
var PATH = {
  HTML: './workspace/html',
  ASSETS: { 
    FONTS: './workspace/assets/fonts' , 
    IMAGES: './workspace/assets/images' , 
    STYLE: './workspace/assets/style' ,
    SCRIPT: './workspace/assets/script' 
  } 
}, 

// 산출물 경로 
DEST_PATH = { 
  HTML: './dist',
  ASSETS: { 
    FONTS: './dist/assets/fonts' , 
    IMAGES: './dist/assets/images' , 
    STYLE: './dist/assets/style' ,
    SCRIPT: './dist/assets/script' 
  } 
}; 

gulp.task( 'scss:compile', () => { 
  return new Promise( resolve => { 
    var options = { 
      outputStyle: "nested", // nested, expanded, compact, compressed ,
      indentType: "space", // space, tab  
      indentWidth: 2, //  
      precision: 8, 
      sourceComments: true // 코멘트 제거 여부 
    }; 
    
    gulp.src( PATH.ASSETS.STYLE + '/*.scss' ) 
      .pipe( sourcemaps.init() ) 
      .pipe( scss(options) )
      .pipe( sourcemaps.write() ) 
      .pipe( gulp.dest( DEST_PATH.ASSETS.STYLE ) )
      .pipe( browserSync.reload({stream: true}) ); 
    resolve(); 
  }); 
}); 
  
gulp.task( 'html', () => { 
  return new Promise( resolve => { 
    gulp.src( PATH.HTML + '/*.html' ) 
      .pipe( gulp.dest( DEST_PATH.HTML ) ) 
      .pipe( browserSync.reload({stream: true}) ); 
    resolve(); 
  }); 
});

// gulp.task( 'default', gulp.series(['scss:compile']));
gulp.task( 'nodemon:start', () => { 
  return new Promise( resolve => { 
    nodemon({ 
      script: 'app.js', 
      watch: DEST_PATH.HTML 
    }); 
    resolve(); 
  });
}); 

gulp.task( 'script:build', () => { 
  return new Promise( resolve => { 
    gulp.src( PATH.ASSETS.SCRIPT + '/*.js' ) 
    // src 경로에 있는 모든 js 파일을 common.js 라는 이름의 파일로 합친다. 
      .pipe( concat('common.js') ) 
      .pipe( gulp.dest( DEST_PATH.ASSETS.SCRIPT ) ) 
      .pipe( uglify({ 
        mangle: true // 알파벳 한글자 압축 
      })) 
      .pipe( rename('common.min.js') ) 
      .pipe( gulp.dest( DEST_PATH.ASSETS.SCRIPT ) )
      .pipe( browserSync.reload({stream: true}) ); 
    resolve(); 
  }); 
});


gulp.task('watch', () => { 
  return new Promise( resolve => { 
    gulp.watch(
      PATH.HTML + "/**/*.html", 
      gulp.series(['html'])
    ); 
    gulp.watch(
      PATH.ASSETS.STYLE + "/**/*.scss", 
      gulp.series(['scss:compile'])
    ); 
    gulp.watch(
      PATH.ASSETS.SCRIPT + "/**/*.js", 
      gulp.series(['script:build'])
    ); 
    resolve(); 
  }); 
}); 

gulp.task('browserSync', () => { 
  return new Promise( resolve => { 
    browserSync.init( null, { 
      proxy: 'http://localhost:8005' , 
      port: 8006 
    }); 
  resolve(); 
  }); 
});


// gulp-concat 파일을 하나의 파일로 압축해준다. 
// gulp-uglify 자바스크립트 코드를 압축해 용량을 줄여준다. 
// gulp-rename 파일의 이름을 바꿔준다.

gulp.task( 'default', gulp.series([
  'scss:compile', 
  'html', 
  'script:build',
  'nodemon:start', 
  'browserSync', 
  'watch'
]));

// https://blog.thereis.xyz/85?category=660023