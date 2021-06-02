(this.webpackJsonporiganum=this.webpackJsonporiganum||[]).push([[0],{28:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,l,d,j,x,u,b,h,p,O,m,f,g,v,w,C,y,S,k,z,P=t(0),D=t.n(P),G=t(20),E=t.n(G),T=(t(28),t(2)),A=t(3),F=t(10),I=t(4),B="/origanum",U=500,Y=3500,Z=2e3,L=1500,N=700,R={letters:["A","C","D","Z","D","Z","C","D","A","Z","C","A","C","D","C"],answers:[!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!0,!1,!0]},K={letters:["B","X","B","K","D","K","B","D","B","X","K","X","D","D","D"],answers:[!1,!1,!0,!1,!1,!0,!1,!1,!0,!1,!1,!0,!1,!1,!0]},V={letters:["Z","O","P","Z","O","Z","P","O","Y","P","O","P","F","P","O"],answers:[!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!0,!1]},X="#fabb77",J=X,M="#806ad8",W="#eeefff",H=M,q="#454646",Q=q,$="#f59a96",_="#6ce1c9",ee=t(9),ne=t(1),te={username:"user",gameConfig:R,pace:Y,totalPointsToGet:0,score:{errors:0,points:0},currentLetter:"",currentIndex:0,gameStarted:!1,gameEnded:!1,setUsername:function(){return""},setGameConfig:function(){return R},handleGameStart:function(){return null},handleUserAnswer:function(){return null},handleReplay:function(){return null},setPace:function(){return Y}},ce=Object(P.createContext)(te),ie=function(e){var n=e.children,t=Object(P.useState)(""),c=Object(ee.a)(t,2),i=c[0],r=c[1],a=Object(P.useState)(R),o=Object(ee.a)(a,2),s=o[0],l=o[1],d=Object(P.useState)(0),j=Object(ee.a)(d,2),x=j[0],u=j[1],b=Object(P.useState)(0),h=Object(ee.a)(b,2),p=h[0],O=h[1],m=Object(P.useState)(s.answers.filter((function(e){return e})).length),f=Object(ee.a)(m,2),g=f[0],v=f[1],w=Object(P.useState)(s.letters[0]),C=Object(ee.a)(w,2),y=C[0],S=C[1],k=Object(P.useState)(0),z=Object(ee.a)(k,2),D=z[0],G=z[1],E=Object(P.useState)(!1),T=Object(ee.a)(E,2),A=T[0],F=T[1],I=Object(P.useState)(!1),B=Object(ee.a)(I,2),U=B[0],Z=B[1],L=Object(P.useState)(Y),N=Object(ee.a)(L,2),K=N[0],V=N[1],X=function(){!function(){var e=window.setTimeout((function(){for(var n=e;n>=0;n--)window.clearInterval(n)}),0);console.log("Cleared timeouts")}(),u(0),O(0),F(!1),Z(!1)};Object(P.useEffect)((function(){x>=2&&Z(!0)}),[x]),Object(P.useEffect)((function(){X(),v(s.answers.filter((function(e){return e})).length)}),[s]),Object(P.useEffect)((function(){X()}),[K]);var J={username:i,gameConfig:s,pace:K,totalPointsToGet:g,score:{errors:x,points:p},currentLetter:y,currentIndex:D,gameStarted:A,gameEnded:U,setUsername:r,setGameConfig:l,handleGameStart:function(){F(!0),console.log("Game started"),s.letters.forEach((function(e,n){setTimeout((function(){S(e),G(n),console.log(e)}),n*K)})),setTimeout((function(){Z(!0),console.log("Game ended")}),s.letters.length*K)},handleUserAnswer:function(e){s.answers[e]?O((function(e){return e+1})):u((function(e){return e+1}))},handleReplay:X,setPace:V};return Object(ne.jsx)(ce.Provider,{value:J,children:n})},re=function(){return Object(P.useContext)(ce)},ae=A.a.div(c||(c=Object(T.a)(["\n  width: 100%;\n  height: ","px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: -0px -0px 10px #eee;\n  a {\n    color: ",";\n    :hover {\n      color: ",";\n    }\n  }\n  .active {\n    color: ",";\n  }\n"])),70,Q,H,H),oe=function(){return Object(ne.jsxs)(ae,{children:[Object(ne.jsx)(F.c,{activeClassName:"active",to:"".concat(B,"/"),children:"Game"}),Object(ne.jsx)(F.c,{activeClassName:"active",to:"".concat(B,"/settings"),children:"Settings"}),Object(ne.jsx)(F.c,{activeClassName:"active",to:"".concat(B,"/about"),children:"About"})]})},se=A.a.button(i||(i=Object(T.a)(["\n  height: 50px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  margin: 10px;\n  min-width: 200px;\n  max-width: 300px;\n  color: ",";\n  background-color: ",";\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  :hover {\n    opacity: 0.9;\n  }\n  :active {\n    background-color: ",";\n    opacity: 0.8;\n  }\n"])),Q,J,W),le=A.a.form(r||(r=Object(T.a)(["\n  display: flex;\n  @media (max-width: ","px){\n    flex-direction: column;\n  }\n"])),U),de=A.a.input(a||(a=Object(T.a)(["\n  border-radius: 5px;\n  border: 1px solid #aaa;\n  padding: 10px;\n  margin: 10px;\n  height: 50px;\n  min-width: 200px;\n  max-width: 300px;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n"]))),je=Object(A.a)(se)(o||(o=Object(T.a)([""]))),xe=function(){var e=re().setUsername;return Object(ne.jsxs)(le,{onSubmit:function(n){return function(n){n.preventDefault();var t=n.target.username.value;t&&(e(t),console.log("Setting username to ".concat(t)))}(n)},children:[Object(ne.jsx)(de,{name:"username",type:"text",placeholder:"Your username"}),Object(ne.jsx)(je,{children:"Submit"})]})},ue=A.a.div(s||(s=Object(T.a)(["\n  width: 90%;\n"]))),be=A.a.div(l||(l=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: 500;\n  color: ",";\n  @media (max-width: ","px) {\n    font-size: 18px;\n  }\n"])),(function(e){return e.color}),U),he=A.a.div(d||(d=Object(T.a)(["\n  margin-top: 60px;\n  text-align: center;\n  font-size: 26px;\n  font-weight: 500;\n  color: ",";\n"])),X),pe=Object(A.a)(he)(j||(j=Object(T.a)(["\n  color: ",";\n"])),q),Oe=function(){var e=re(),n=e.score,t=n.errors,c=n.points,i=e.totalPointsToGet;return Object(ne.jsxs)(ue,{children:[Object(ne.jsxs)(be,{color:$,children:[Object(ne.jsx)("span",{children:"Errors:"}),Object(ne.jsx)("span",{children:t})]}),Object(ne.jsxs)(be,{color:_,children:[Object(ne.jsx)("span",{children:"Points"}),Object(ne.jsx)("span",{children:c})]}),Object(ne.jsxs)(be,{color:M,children:[Object(ne.jsx)("span",{children:"Total points to get"}),Object(ne.jsx)("span",{children:i})]}),c===i&&Object(ne.jsx)(he,{children:"You got all the points!"}),t>=2&&Object(ne.jsxs)(pe,{children:["You got ",2," errors"]})]})},me=A.a.div(x||(x=Object(T.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: ","px) {\n  }\n"])),U),fe=A.a.div(u||(u=Object(T.a)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  width: 400px;\n  height: 400px;\n  border-radius: 10px;\n  border: 3px solid ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: ","px) {\n    width: 250px;\n    height: 250px;\n  }\n"])),W,U),ge=A.a.div(b||(b=Object(T.a)(["\n  font-size: 40px;\n  color: ",";\n"])),_),ve=function(){var e=re(),n=e.currentLetter,t=e.currentIndex,c=e.gameStarted,i=e.gameEnded,r=e.handleGameStart,a=e.handleUserAnswer,o=e.handleReplay;return Object(ne.jsxs)(me,{children:[Object(ne.jsxs)(fe,{onClick:c||i?void 0:r,children:[!c&&"Click to start",c&&!i&&Object(ne.jsx)(ge,{children:n}),i&&Object(ne.jsx)(Oe,{})]}),c&&!i&&Object(ne.jsx)(se,{onClick:function(){return a(t)},children:"2nd back!"}),i&&Object(ne.jsx)(se,{onClick:o,children:"Replay"})]})},we=A.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ce=A.a.div(p||(p=Object(T.a)(["\n  font-size: 28px;\n  margin-bottom: 15px;\n  span {\n    color: ",";\n  }\n  @media (max-width: ","px) {\n    font-size: 24px;\n  }\n"])),H,U),ye=A.a.div(O||(O=Object(T.a)(["\n  font-size: 22px;\n  margin-bottom: 10px;\n  text-align: center;\n  @media (max-width: ","px) {\n    font-size: 18px;\n  }\n"])),U),Se=function(){var e=re().username;return Object(ne.jsxs)(we,{children:[Object(ne.jsxs)(Ce,{children:["Hello ",Object(ne.jsx)("span",{children:e})]}),e?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ye,{children:"Nice to meet you! You can now start the game"}),Object(ne.jsx)(ve,{})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ye,{children:"To play the game, first set your username"}),Object(ne.jsx)(xe,{})]})]})},ke=A.a.div(m||(m=Object(T.a)(["\n"]))),ze=A.a.div(f||(f=Object(T.a)(["\n  font-size: 24px;\n  margin-bottom: 40px;\n  text-align: center;\n  @media(max-width: ","px) {\n    font-size: 20px;\n  \n    margin-bottom: 20px;\n  }\n"])),U),Pe=A.a.div(g||(g=Object(T.a)(["\n  margin-top: 40px;\n"]))),De=A.a.div(v||(v=Object(T.a)(["\n font-size: 20px;\n margin-bottom: 20px;\n color: ",";\n @media(max-width: ","px) {\n  text-align: center;\n }\n"])),(function(e){return e.color}),U),Ge=A.a.div(w||(w=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: row;\n  width: 100%;\n  max-width: 500px;\n  @media (max-width: ","px) {\n    flex-direction: column;\n  }\n"])),U),Ee=A.a.div(C||(C=Object(T.a)(["\n  border-radius: 30px;\n  border: ",";\n  width: 130px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n"])),(function(e){return e.selected?"2px solid ".concat(e.color):"none"})),Te=function(){var e=re(),n=e.gameConfig,t=e.setGameConfig,c=e.pace,i=e.setPace;return Object(ne.jsxs)(ke,{children:[Object(ne.jsx)(ze,{children:"You can experiment with the game settings as you like!"}),Object(ne.jsxs)(Pe,{children:[Object(ne.jsx)(De,{color:J,children:"Choose from these letter configurations"}),Object(ne.jsxs)(Ge,{children:[Object(ne.jsx)(Ee,{selected:n===R,onClick:function(){return t(R)},color:J,children:"Morning Walk"}),Object(ne.jsx)(Ee,{selected:n===K,onClick:function(){return t(K)},color:J,children:"Winter Fire"}),Object(ne.jsx)(Ee,{selected:n===V,onClick:function(){return t(V)},color:J,children:"Dreamy Evening"})]})]}),Object(ne.jsxs)(Pe,{children:[Object(ne.jsx)(De,{color:_,children:"Select your prefered pace"}),Object(ne.jsxs)(Ge,{children:[Object(ne.jsx)(Ee,{selected:c===Y,onClick:function(){return i(Y)},color:_,children:"Very calm"}),Object(ne.jsx)(Ee,{selected:c===Z,onClick:function(){return i(Z)},color:_,children:"Calm"}),Object(ne.jsx)(Ee,{selected:c===L,onClick:function(){return i(L)},color:_,children:"Vivid"}),Object(ne.jsx)(Ee,{selected:c===N,onClick:function(){return i(N)},color:_,children:"Very vivid"})]})]})]})},Ae=A.a.div(y||(y=Object(T.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 50px;\n  @media (max-width: ","px) {\n    padding: 0;\n  }\n  "])),U),Fe=A.a.div(S||(S=Object(T.a)(["\n  color: ",";\n  font-size: 34px;\n  padding-bottom: 20px;\n  @media (max-width: ","px) {\n    font-size: 30px;\n  }\n"])),$,U),Ie=A.a.div(k||(k=Object(T.a)(["\n  color: ",";\n  font-size: 28px;\n  a {\n    color: ",";\n  }\n  @media (max-width: ","px) {\n    font-size: 22px;\n  }\n"])),$,J,U),Be=function(){return Object(ne.jsxs)(Ae,{children:[Object(ne.jsx)(Fe,{children:"Oops..!"}),Object(ne.jsxs)(Ie,{children:["It seems this site doesn't exist. Did you want to play the ",Object(ne.jsx)(F.b,{to:"".concat(B,"/home"),children:"game"}),"?"]})]})},Ue=A.a.div(z||(z=Object(T.a)(["\n  color: ",";\n  height: calc(100% - ","px);\n  padding: 40px;\n  @media (max-width: ","px) {\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n"])),Q,70,U,18,18);var Ye=function(){return Object(ne.jsx)(ie,{children:Object(ne.jsxs)(F.a,{children:[Object(ne.jsx)(oe,{}),Object(ne.jsx)(Ue,{children:Object(ne.jsxs)(I.c,{children:[Object(ne.jsx)(I.a,{exact:!0,path:"".concat(B,"/"),children:Object(ne.jsx)(Se,{})}),Object(ne.jsx)(I.a,{exact:!0,path:"".concat(B,"/about"),children:Object(ne.jsx)("div",{children:"About"})}),Object(ne.jsx)(I.a,{exact:!0,path:"".concat(B,"/settings"),children:Object(ne.jsx)(Te,{})}),Object(ne.jsx)(I.a,{children:Object(ne.jsx)(Be,{})})]})})]})})},Ze=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};E.a.render(Object(ne.jsx)(D.a.StrictMode,{children:Object(ne.jsx)(Ye,{})}),document.getElementById("root")),Ze()}},[[40,1,2]]]);
//# sourceMappingURL=main.f9bd3183.chunk.js.map