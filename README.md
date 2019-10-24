# 简单的blog系统
个人学习用...

原文教程：https://www.djamware.com/post/5d88cb43e7939eec17dc4c89/mean-stack-angular-8-tutorial-build-a-simple-blog-cms

## Main Issues
+ 'mat-grid-tile' is not a known element
resolve: import MatGridListModule in app.module.ts file

+ Can't bind to 'errorStateMatcher' since it isn't a known property of 'mat-select'
resolve: import MatSelectModule in app.module.ts file

+ 登陆时的跨域问题（localhost:3000和localhost:4200）
