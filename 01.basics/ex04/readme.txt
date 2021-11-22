ex04: 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js, css, images, font)들의 의존성을 분석해서 하나의 js파일로 묶은 도구
2. 하나의 JS 파일을 번들(bundle)이라하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미 하지 않는다. -> 빌드작업도 한다.
4. 빌드 작업
   1) linting(ESLint, 문법체크) 작업
   2) document 작업(JDoc) 작업
   3) test(Mocha, Jest) 작업
   4) 난독화/압축(Uglyfy)  작업
   5) 번들링
5.  자바스ㅡ립트 뿐만 아니라 다양한 에셋(image, css, font)들로 모듈로 취급 한다. 