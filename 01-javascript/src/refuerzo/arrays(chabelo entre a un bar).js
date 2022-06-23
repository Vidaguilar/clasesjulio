const personajes =['Luffy','chabelo','Dr.chapatin','Tim Drake','jhon whick']

const [a,b]=personajes
const [,,c,,e]=personajes

console.log(a);
console.log(b);
console.log(c);
console.log(e);

const ra = () =>['ABC',123];
const ar =ra();
console.log(ar)

const [letras,numeros]= ra()
console.log(letras)