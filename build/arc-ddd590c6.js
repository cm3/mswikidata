import{$ as n,a0 as t,a1 as a,a2 as r,a3 as c,a4 as e,a5 as u,a6 as i,a7 as o,a8 as y,a9 as l,aa as f,ab as s,ac as x,ad as p}from"./main-77371978.js";function h(n){return n.innerRadius}function v(n){return n.outerRadius}function d(n){return n.startAngle}function g(n){return n.endAngle}function m(n){return n&&n.padAngle}function T(n,t,a,r,c,e,u){var i=n-a,o=t-r,l=(u?e:-e)/y(i*i+o*o),f=l*o,s=-l*i,x=n+f,h=t+s,v=a+f,d=r+s,g=(x+v)/2,m=(h+d)/2,T=v-x,A=d-h,R=T*T+A*A,b=c-e,j=x*d-v*h,P=(A<0?-1:1)*y(p(0,b*b*R-j*j)),$=(j*A-T*P)/R,k=(-j*T-A*P)/R,q=(j*A+T*P)/R,w=(-j*T+A*P)/R,z=$-g,B=k-m,C=q-g,D=w-m;return z*z+B*B>C*C+D*D&&($=q,k=w),{cx:$,cy:k,x01:-f,y01:-s,x11:$*(c/b-1),y11:k*(c/b-1)}}function A(){var p=h,A=v,R=f(0),b=null,j=d,P=g,$=m,k=null,q=n(w);function w(){var n,f,h=+p.apply(this,arguments),v=+A.apply(this,arguments),d=j.apply(this,arguments)-t,g=P.apply(this,arguments)-t,m=i(g-d),w=g>d;if(k||(k=n=q()),v<h&&(f=v,v=h,h=f),v>a)if(m>r-a)k.moveTo(v*c(d),v*e(d)),k.arc(0,0,v,d,g,!w),h>a&&(k.moveTo(h*c(g),h*e(g)),k.arc(0,0,h,g,d,w));else{var z,B,C=d,D=g,E=d,F=g,G=m,H=m,I=$.apply(this,arguments)/2,J=I>a&&(b?+b.apply(this,arguments):y(h*h+v*v)),K=u(i(v-h)/2,+R.apply(this,arguments)),L=K,M=K;if(J>a){var N=s(J/h*e(I)),O=s(J/v*e(I));(G-=2*N)>a?(E+=N*=w?1:-1,F-=N):(G=0,E=F=(d+g)/2),(H-=2*O)>a?(C+=O*=w?1:-1,D-=O):(H=0,C=D=(d+g)/2)}var Q=v*c(C),S=v*e(C),U=h*c(F),V=h*e(F);if(K>a){var W,X=v*c(D),Y=v*e(D),Z=h*c(E),_=h*e(E);if(m<o)if(W=function(n,t,r,c,e,u,i,o){var y=r-n,l=c-t,f=i-e,s=o-u,x=s*y-f*l;if(!(x*x<a))return[n+(x=(f*(t-u)-s*(n-e))/x)*y,t+x*l]}(Q,S,Z,_,X,Y,U,V)){var nn=Q-W[0],tn=S-W[1],an=X-W[0],rn=Y-W[1],cn=1/e(x((nn*an+tn*rn)/(y(nn*nn+tn*tn)*y(an*an+rn*rn)))/2),en=y(W[0]*W[0]+W[1]*W[1]);L=u(K,(h-en)/(cn-1)),M=u(K,(v-en)/(cn+1))}else L=M=0}H>a?M>a?(z=T(Z,_,Q,S,v,M,w),B=T(X,Y,U,V,v,M,w),k.moveTo(z.cx+z.x01,z.cy+z.y01),M<K?k.arc(z.cx,z.cy,M,l(z.y01,z.x01),l(B.y01,B.x01),!w):(k.arc(z.cx,z.cy,M,l(z.y01,z.x01),l(z.y11,z.x11),!w),k.arc(0,0,v,l(z.cy+z.y11,z.cx+z.x11),l(B.cy+B.y11,B.cx+B.x11),!w),k.arc(B.cx,B.cy,M,l(B.y11,B.x11),l(B.y01,B.x01),!w))):(k.moveTo(Q,S),k.arc(0,0,v,C,D,!w)):k.moveTo(Q,S),h>a&&G>a?L>a?(z=T(U,V,X,Y,h,-L,w),B=T(Q,S,Z,_,h,-L,w),k.lineTo(z.cx+z.x01,z.cy+z.y01),L<K?k.arc(z.cx,z.cy,L,l(z.y01,z.x01),l(B.y01,B.x01),!w):(k.arc(z.cx,z.cy,L,l(z.y01,z.x01),l(z.y11,z.x11),!w),k.arc(0,0,h,l(z.cy+z.y11,z.cx+z.x11),l(B.cy+B.y11,B.cx+B.x11),w),k.arc(B.cx,B.cy,L,l(B.y11,B.x11),l(B.y01,B.x01),!w))):k.arc(0,0,h,F,E,w):k.lineTo(U,V)}else k.moveTo(0,0);if(k.closePath(),n)return k=null,n+""||null}return w.centroid=function(){var n=(+p.apply(this,arguments)+ +A.apply(this,arguments))/2,t=(+j.apply(this,arguments)+ +P.apply(this,arguments))/2-o/2;return[c(t)*n,e(t)*n]},w.innerRadius=function(n){return arguments.length?(p="function"==typeof n?n:f(+n),w):p},w.outerRadius=function(n){return arguments.length?(A="function"==typeof n?n:f(+n),w):A},w.cornerRadius=function(n){return arguments.length?(R="function"==typeof n?n:f(+n),w):R},w.padRadius=function(n){return arguments.length?(b=null==n?null:"function"==typeof n?n:f(+n),w):b},w.startAngle=function(n){return arguments.length?(j="function"==typeof n?n:f(+n),w):j},w.endAngle=function(n){return arguments.length?(P="function"==typeof n?n:f(+n),w):P},w.padAngle=function(n){return arguments.length?($="function"==typeof n?n:f(+n),w):$},w.context=function(n){return arguments.length?(k=null==n?null:n,w):k},w}export{A as d};
