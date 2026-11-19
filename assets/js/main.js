(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var Q=[['What is the main reason you want help?',[['Catching up on gaps',{gap:2}],['A specific exam is coming',{exam:2}],['Confidence and motivation',{coach:2}],['Going further than class',{stretch:2}]]],
['How soon do you need results?',[['Within a month',{exam:2}],['This school year',{gap:1,coach:1}],['No fixed deadline',{stretch:1,coach:1}]]],
['How do you prefer to learn?',[['Step by step, lots of practice',{gap:2}],['Past papers and timed questions',{exam:2}],['Talking ideas through',{coach:1,stretch:1}],['Challenging problems',{stretch:2}]]],
['How often could sessions happen?',[['Twice a week',{exam:1,gap:1}],['Once a week',{gap:1,coach:1}],['Every other week',{stretch:1,coach:1}]]]];
var R={gap:['A patient subject specialist','Look for someone who diagnoses before teaching, works step by step and sets short regular practice. Weekly sessions over a term usually work best.'],exam:['An exam-focused tutor','Look for someone who knows your exact exam, works from past papers and builds timing and technique. Plan a fixed number of sessions before the date.'],coach:['A study coach','Look for someone who helps with organisation, planning and confidence as much as content. The aim is routines you keep after tutoring ends.'],stretch:['An enrichment tutor','Look for a subject enthusiast who sets problems beyond the syllabus and lets you lead. Less frequent, longer sessions can work well.']};
var qz=$('qz');if(qz){var i=0,sc;function start(){i=0;sc={gap:0,exam:0,coach:0,stretch:0};$('qz-r').innerHTML='';show();}
 function show(){if(i>=Q.length){var best='gap';for(var k in sc)if(sc[k]>sc[best])best=k;$('qz-n').textContent='Done!';$('qz-bar').style.width='100%';$('qz-q').textContent='';$('qz-o').innerHTML='';$('qz-r').innerHTML='<strong>'+R[best][0]+'</strong><p>'+R[best][1]+'</p><button type="button" id="qz-x">Start again</button>';$('qz-x').addEventListener('click',start);return;}
  $('qz-n').textContent='Question '+(i+1)+' of '+Q.length;$('qz-bar').style.width=((i+1)/Q.length*100)+'%';$('qz-q').textContent=Q[i][0];var o=$('qz-o');o.innerHTML='';
  Q[i][1].forEach(function(a){var b=document.createElement('button');b.type='button';b.textContent=a[0];b.addEventListener('click',function(){for(var k in a[1])sc[k]+=a[1][k];i++;show();});o.appendChild(b);});}
 start();}
var ck=$('ck');if(ck){var bx=[].slice.call(ck.querySelectorAll('input'));function up(){var n=0;bx.forEach(function(b){b.closest('li').classList.toggle('done',b.checked);if(b.checked)n++;});$('ck-bar').style.width=(n/bx.length*100)+'%';$('ck-o').textContent=n===bx.length?'all set!':n+' of '+bx.length+' ready';}bx.forEach(function(b){b.addEventListener('change',up);});up();}
var pd=$('pl-d');if(pd){var pm=$('pl-m'),D=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];function plan(){var s=D.indexOf(pd.value),m=parseInt(pm.value,10),h='',tot=0;
 for(var k=0;k<7;k++){var d=(k-s+7)%7,c='',t='';if(d===0){c='ses';t='Tutoring session<em>bring questions</em>';}else if(d===1){t='Redo 2 examples from the session<em>'+m+' min</em>';tot+=m;}else if(d===6){t='Homework check and list questions<em>'+m+' min</em>';tot+=m;}else if(d===4){c='rest';t='Rest day';}else{t=(d%2?'Practice set from tutor':'Quick review of notes')+'<em>'+m+' min</em>';tot+=m;}
  h+='<div class="'+c+'"><b>'+D[k]+'</b><span>'+t+'</span></div>';}
 $('pl-w').innerHTML=h;$('pl-n').textContent='About '+(tot>=60?(Math.round(tot/6)/10)+' hours':tot+' minutes')+' of practice across the week, with one rest day.';}
 pd.addEventListener('change',plan);pm.addEventListener('change',plan);plan();}
})();
