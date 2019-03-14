(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("1d50")},"1d50":function(e,t,s){"use strict";s.r(t);s("20b9"),s("a577"),s("67af"),s("e601");var n=s("e832"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("questions-vue")],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"test row align-items-center justify-content-between"},[e._m(0),s("div",{staticClass:"col-4 d-flex justify-content-end"},[s("button",{staticClass:"btn btn-outline-danger cancel-test",attrs:{type:"button",disabled:null==e.questionStep},on:{click:e.resetTest}},[e._v("Cancel the Test")])])])]),s("progressbar-vue",{attrs:{questions:e.allQuestions,questionIndex:e.questionStep}}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[0==e.step?s("div",{key:"0",staticClass:"container p-0"},[s("form",{staticClass:"welcome-form",on:{submit:function(t){return t.preventDefault(),e.startTest(t)}}},[s("h2",{staticClass:"text-center"},[e._v("Welcome to the English test")]),s("p",{staticClass:"text-center welcome-form__paragraph m-auto"},[e._v("This test may take n minutes to complete. Time to complete each question is limited. To complete the test you have to answer all the questions. To start the test press the start button.")]),s("div",{staticClass:"row mb-2"},[s("div",{staticClass:"col-12 d-flex justify-content-center mt-3"},[s("button",{staticClass:"btn btn-outline-success btn-next",attrs:{type:"submit"}},[e._v("Start")])])])])]):e._e(),1==e.step?s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("question",{attrs:{question:e.currentAnswer,questionIndex:e.questionStep+1},on:{userAnswers:e.nextQuestion}})],1):e._e(),2==e.step?s("div",{key:"1",staticClass:"container p-0"},[s("div",{staticClass:"result-form d-flex justify-content-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 row justify-content-center"},[s("h2",{staticClass:"result__title m-0"},[e._v("Your Score:")])]),s("div",{staticClass:"col-12 row justify-content-center"},[s("p",{staticClass:"test-result m-0"},[s("span",{staticClass:"test-result__number"},[e._v(e._s(e.totalGrade))]),e._v(" out of 5")])]),s("div",{staticClass:"col-12 row justify-content-center align-items-end"},[s("button",{staticClass:"btn btn-outline-success btn-next btn-finish",attrs:{type:"button"},on:{click:e.doneTest}},[e._v("Done")])])])])]):e._e()],1)],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-4 mb-2 mb-lg-0"},[s("h1",{staticClass:"test__title"},[e._v("English Test")])])}],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container p-0"},[s("form",{staticClass:"test-form",on:{submit:function(t){return t.preventDefault(),e.nextQuestion(t)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 col-lg-11"},[s("p",{staticClass:"test-form__paragraph m-0"},[e._v("Question "+e._s(e.dataIndex))]),s("h2",{staticClass:"test-form__title m-0"},[e._v(e._s(e.data.text))])]),"openTest"==e.data.type?s("div",{staticClass:"col-2 col-lg-1 d-flex justify-content-start justify-content-sm-center align-items-center"},[s("timer",{attrs:{autoStart:e.isStart,minute:1},on:{"next-step":e.nextQuestion}})],1):e._e(),"closeTest"==e.data.type?s("div",{staticClass:"col-2 col-lg-1 d-flex justify-content-start justify-content-sm-center align-items-center"},[s("timer",{attrs:{autoStart:e.isStart,minute:10},on:{"next-step":e.nextQuestion}})],1):e._e(),"choiceTest"==e.data.type?s("div",{staticClass:"col-2 col-lg-1 d-flex justify-content-start justify-content-sm-center align-items-center"},[s("timer",{attrs:{autoStart:e.isStart,minute:10},on:{"next-step":e.nextQuestion}})],1):e._e()]),"openTest"==e.data.type?s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-12 row justify-content-center"},e._l(e.data.answers,function(t,n){return s("div",{key:n,staticClass:"col-12 col-md-6 row justify-content-center form-check mb-3"},[s("div",{staticClass:"col-12 col-md-6 m-auto"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.openAnswers,expression:"openAnswers"}],staticClass:"form-check-input",attrs:{type:"radio",id:n,name:"materialExampleRadios"},domProps:{value:t,checked:e._q(e.openAnswers,t)},on:{change:function(s){e.openAnswers=t}}}),s("label",{staticClass:"form-check-label",attrs:{for:n}},[e._v(e._s(t))])])])}),0)]):e._e(),"closeTest"==e.data.type?s("div",{staticClass:"row mt-4 justify-content-center"},[s("div",{staticClass:"col-12"},[s("p",{staticClass:"antonym-list text-center"},[e._v(e._s(e.data.words))])]),e._l(e.data.answers,function(t,n){return s("div",{key:n,staticClass:"col-12 d-flex justify-content-center"},[s("p",{staticClass:"text-center"},[s("span",[e._v(e._s(t[0]))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.closeAnswers[n],expression:"closeAnswers[index]"}],staticClass:"input-question text-center",attrs:{type:"text"},domProps:{value:e.closeAnswers[n]},on:{input:function(t){t.target.composing||e.$set(e.closeAnswers,n,t.target.value)}}}),s("span",[e._v(e._s(t[1]))]),e._v(".")])])})],2):e._e(),"choiceTest"==e.data.type?s("div",{staticClass:"row mt-4 justify-content-center"},[s("div",{staticClass:"col-12"},[s("p",{staticClass:"antonym-list text-center"},[e._v(e._s(e.data.words))])]),e._l(e.data.answers,function(t,n){return s("div",{key:n,staticClass:"col-12 col-lg-6 row justify-content-center"},[s("p",e._l(t,function(t,n){return s("span",{key:n},[e._v(e._s(t)+", ")])}),0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.closeAnswers[n],expression:"closeAnswers[index]"}],staticClass:"input-question text-center mb-2",attrs:{type:"text"},domProps:{value:e.closeAnswers[n]},on:{input:function(t){t.target.composing||e.$set(e.closeAnswers,n,t.target.value)}}})])})],2):e._e(),e._m(0)])])},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row mb-2"},[s("div",{staticClass:"col-12 d-flex justify-content-end"},[s("button",{staticClass:"btn btn-outline-success btn-next",attrs:{type:"submit"}},[e._v("Next Question")])])])}],u=(s("0464"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-2 col-lg-1 d-flex justify-content-start align-items-center"},[s("div",{staticClass:"timer"},[e._v(e._s(e.timerStr))]),s("svg",{staticClass:"timer-svg"},[s("circle",{staticClass:"timer-svg__circle",attrs:{r:"23",cx:"30",cy:"30"}})])])}),d=[],p=s("1822"),m=s.n(p),w={data:function(){return{timeToTest:60*this.minute,timerId:""}},computed:{timerStr:function(){var e=m()(this.timeToTest/60,10),t=m()(this.timeToTest%60,10);e=e<10?"0"+e:e,t=t<10?"0"+t:t;var s=e+":"+t;return s}},props:{minute:{type:Number,default:1},autoStart:{type:Boolean,default:!1}},methods:{startTimer:function(){var e=this;this.timeToTest=60*this.minute;var t=document.querySelector(".timer"),s=document.querySelector(".timer-svg__circle");this.timerId=setInterval(function(){e.timeToTest--,e.timeToTest<11&&(t.style.color="#dc3545",s.style.stroke="#dc3545"),0===e.timeToTest&&(clearInterval(e.timerId),setTimeout(function(){e.nextStep()},1e3))},1e3)},stopTimer:function(){clearInterval(this.timerId)},nextStep:function(){this.$emit("next-step")}},mounted:function(){this.autoStart&&(this.startTimer(),document.querySelector(".timer-svg__circle").style.animation="countdown "+this.timeToTest+"s linear forwards")}},h=w,f=(s("df74"),s("a6c2")),v=Object(f["a"])(h,u,d,!1,null,null,null),y=v.exports,g={data:function(){return{data:this.question,dataIndex:this.questionIndex,openAnswers:"",closeAnswers:{answer1:"",answer2:"",answer3:"",answer4:"",answer5:"",answer6:"",answer7:"",answer8:"",answer9:"",answer10:"",answer11:"",answer12:"",answer13:"",answer14:"",answer15:"",answer16:"",answer17:"",answer18:"",answer19:"",answer20:""},isStart:!0,answerGrade:0}},components:{Timer:y},computed:{isConfirmQuestion:function(){var e=this;if("openTest"===this.data.type&&this.data.rightAnswers.toLowerCase()===this.openAnswers.toLowerCase()&&(e.answerGrade=1),"choiceTest"===this.data.type||"closeTest"===this.data.type)for(var t in this.closeAnswers)this.closeAnswers[t].toLowerCase()===this.data.rightAnswers[t].toLowerCase()&&(e.answerGrade=e.answerGrade+1);return this.answerGrade}},props:{question:{},questionIndex:{type:Number,default:1}},methods:{nextQuestion:function(){this.isConfirmQuestion,this.$emit("userAnswers",{isGrade:this.answerGrade})}}},b=g,_=(s("4f53"),Object(f["a"])(b,l,c,!1,null,null,null)),x=_.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container mt-2"},[s("div",{staticClass:"row justify-content-center"},e._l(e.data,function(t,n){return s("div",{key:n,staticClass:"progress-block col-2 col-md-1 p-0 mb-2"},[s("h3",{staticClass:"progress-block__title text-center"},[e._v(e._s(n+1))]),s("div",{staticClass:"progress-block__square m-auto d-flex justify-content-center align-items-center",class:{"progress-block__square-active":e.questionNow==n,"progress-block__square-done":e.questionNow>n}},[s("p",{staticClass:"progress-block__square-paragpaph"},[e._v("?")])])])}),0)])},T=[],k={data:function(){return{data:this.questions,activeQuestion:!1,lastQuestion:!1}},computed:{questionNow:function(){return this.questionIndex}},props:{questions:{},questionIndex:{type:Number,default:0}}},q=k,A=(s("9c88"),Object(f["a"])(q,C,T,!1,null,null,null)),S=A.exports,j=[{text:"Stern, sinister, ghastly",answers:["dormant","grim","haven","rouse","bland"],rightAnswers:"grim",type:"openTest"},{text:"A longing for that which is gone",answers:["sparse","unwieldy","steadfast","meddle","nostalgia"],rightAnswers:"nostalgia",type:"openTest"},{text:"No longer in use, not using the most recent technology",answers:["revive","obsolete","cask","morsel","principle"],rightAnswers:"obsolete",type:"openTest"},{text:"Stuff, unyielding",answers:["premature","rigid","document","stall","meager"],rightAnswers:"rigid",type:"openTest"},{text:"To intimidate or impress by a false display of confidence",answers:["foolhardy","bluff","frigid","prelude","alibi"],rightAnswers:"bluff",type:"openTest"},{text:"Serious mistake caused by ignorance or confusion",answers:["refuge","agony","capacity","portait","blunder"],rightAnswers:"blunder",type:"openTest"},{text:"Straightforward, open and since",answers:["frank","somber","taunt","mutiny","nomad"],rightAnswers:"frank",type:"openTest"},{text:"Extremely careful and diligent",answers:["boisterous","revert","painstaking","span","nonchalant"],rightAnswers:"painstaking",type:"openTest"},{text:"Choose the antonym",words:"amiable attire bungle commend contemporary dilegent dumbfounded epic flammable glum inept irk mediocre ovation relinquish reverie squalor strident underscore vagabond",answers:{answer1:["hard-working","persistent","busy"],answer2:["average","ordinary","inferior"],answer3:["abandon","forgo","surrener"],answer4:["approve","praise","entrust"],answer5:["legendary","heroic","larger-than-life"],answer6:["modern","simultaneos","current"],answer7:["burnable","combustible","ignitable"],answer8:["irritate","annoy","botner"],answer9:["applause","acclaim","praise"],answer10:["filth","wretchedness","dirtiness"],answer11:["astonished","amazed","confused"],answer12:["harsh","shrill","noisy"],answer13:["daydream","contemplation","fantasy"],answer14:["pleasant","friendly","agreeable"],answer15:["botch","mismanage","ruin"],answer16:["clothes","apparel","dress"],answer17:["underline","emphasize","highlight"],answer18:["gloomy","sad","melancholy"],answer19:["nomad","vagant","wanderer"],answer20:["clumsy","unskilled","incompetent"]},rightAnswers:{answer1:"diligent",answer2:"mediocre",answer3:"relinquish",answer4:"commend",answer5:"epic",answer6:"contemporary",answer7:"flammable",answer8:"irk",answer9:"ovation",answer10:"squalor",answer11:"dumbfounded",answer12:"strident",answer13:"reverie",answer14:"amiable",answer15:"inept",answer16:"attire",answer17:"underscore",answer18:"glum",answer19:"vagabond",answer20:"bungle"},type:"choiceTest"},{text:"Choose the antonym",words:"amiable attire bungle commend contemporary dilegent dumbfounded epic flammable glum inept irk mediocre ovation relinquish reverie squalor strident underscore vagabond",answers:{answer1:["smallness","tiny space","absence"],answer2:["sad","unhappy","depressive","gloomy by nature"],answer3:["destroy","ruin","deconstruct"],answer4:["biased","involved","passionate","prejudiced"],answer5:["to separate","depart from one another"],answer6:["individual","pair","small group"],answer7:["go back for","return","remember"],answer8:["hobby","drudge","accidental career"],answer9:["big","giant","gigantic","huge","large"],answer10:["blocked view","obscured view","limited view"],answer11:["sad","sorrowful","in temporary poor spirits"],answer12:["law","police","bystander"],answer13:["seriousness","inactivity"],answer14:["out in the open","public"],answer15:["avoidable","likely","preventable","certain to happen"],answer16:["greedy","mean","evil","unkind","selfish"],answer17:["urban","suburban","metropolitain"],answer18:["earthly","mortal","terrestrial"],answer19:["invisible","obscured","hidden","not well known"],answer20:["called-for","justifed","proven","reasonable"]},rightAnswers:{answer1:"diligent",answer2:"mediocre",answer3:"relinquish",answer4:"commend",answer5:"epic",answer6:"contemporary",answer7:"flammable",answer8:"irk",answer9:"ovation",answer10:"squalor",answer11:"dumbfounded",answer12:"strident",answer13:"reverie",answer14:"amiable",answer15:"inept",answer16:"attire",answer17:"underscore",answer18:"glum",answer19:"vagabond",answer20:"bungle"},type:"choiceTest"},{text:"Sentence Completions",words:"adequate astute bystander concur despot docile era gala hovel infamous lavish medley naive parch ponder radiant revere sovereign throng vindictive",answers:{answer1:["During the Queen's Jubilee a","of people gathered in front of Buckingham Palace for a glimpse of the royal family"],answer2:["In honor of her Jubilee, the Queen threw a","party at the palace for 3,000 of her closest friends"],answer3:["The Queen's","featured a formal dinner and performance by many famous musicians"],answer4:["All the Queen's admirers greatly respect her role as a",""],answer5:["Country Z is run by a terrible","who rules with an iron fist"],answer6:["The","puppy didn't mind when people tried to pick him up"],answer7:["I am not so","as to think that everything I read on the interent is true"],answer8:["The band covered a","of songs that included many all-time greatest hits"],answer9:["The hits spanned every important contemporary musical",", from 1920s jazz to 1970s glam rock"],answer10:["The","understudy tried to ruin the show because he resented not being cast in the play"],answer11:["Many Americans","Paul Revere for the important role he played in the Revolutionary War"],answer12:["The","child learned to read when she was just a toddler"],answer13:["Nancy's defense team proved that she was just an innocent","watching the crime take place"],answer14:["I have a fine house, but it looks like a","next to Bill Gates's elaborate mansion"],answer15:["The small kitchen is","for my needs, but it certainly wouldn't satisfy a gourmet chef"],answer16:["Some celebrities are","for their irresponsible decisions and wasteful spending"],answer17:["Rick made sure to drink enough water in the desert so that the hot climate would not","his throat"],answer18:["Whether the chicken or the egg came first is an important question to",""],answer19:["I","with Dr.Simpson's assessment: you definitely have the measles"],answer20:["The movie star looked","as she stepped onto the red carpet for her film's premiere"]},rightAnswers:{answer1:"throng",answer2:"lavish",answer3:"gala",answer4:"sovereign",answer5:"despot",answer6:"docile",answer7:"naive",answer8:"medley",answer9:"era",answer10:"vindictive",answer11:"revere",answer12:"astute",answer13:"bystander",answer14:"hovel",answer15:"adequate",answer16:"infamous",answer17:"parch",answer18:"ponder",answer19:"concur",answer20:"radiant"},type:"closeTest"}],Q={data:function(){return{step:0,questionStep:null,allQuestions:j,userAnswers:[],totalGrade:0}},components:{Question:x,ProgressbarVue:S},methods:{startTest:function(){this.step=1,this.questionStep=0},nextQuestion:function(e){this.userAnswers.push(e.isGrade),this.questionStep===this.allQuestions.length-1&&(this.finishTest(),this.step=2),this.questionStep++},finishTest:function(){for(var e=68,t=0,s=0;s<this.userAnswers.length;s++)t+=this.userAnswers[s];var n=100/(e/t)/5/4;this.totalGrade=n.toFixed(1)},resetTest:function(){null!=this.questionStep&&confirm("Canceling the test resets the current result")&&(this.step=0,this.questionStep=null,this.userAnswers=[],this.totalGrade=null)},doneTest:function(){this.step=0,this.questionStep=null,this.userAnswers=[],this.totalGrade=null}},computed:{currentAnswer:function(){return this.allQuestions[this.questionStep]}}},I=Q,G=(s("74e8"),Object(f["a"])(I,i,o,!1,null,null,null)),O=G.exports,N={data:function(){return{}},components:{QuestionsVue:O}},P=N,$=Object(f["a"])(P,r,a,!1,null,null,null),E=$.exports,D=s("94ea");n["a"].use(D["a"]);var M=new D["a"].Store({state:{},mutations:{},actions:{}}),z=s("1ea0"),J=s.n(z);s("5b3d"),s("7db1");n["a"].use(J.a),n["a"].config.productionTip=!1,new n["a"]({store:M,render:function(e){return e(E)}}).$mount("#app"),n["a"].directive("focus",{inserted:function(e){e.focus()}})},3331:function(e,t,s){},4154:function(e,t,s){},"455f":function(e,t,s){},"4f53":function(e,t,s){"use strict";var n=s("455f"),r=s.n(n);r.a},"74e8":function(e,t,s){"use strict";var n=s("f122"),r=s.n(n);r.a},"9c88":function(e,t,s){"use strict";var n=s("4154"),r=s.n(n);r.a},df74:function(e,t,s){"use strict";var n=s("3331"),r=s.n(n);r.a},f122:function(e,t,s){}});
//# sourceMappingURL=app.0de93a0e.js.map