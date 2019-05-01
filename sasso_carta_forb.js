var opzioni = ['carta', 'sasso', 'forbici']

var giocatore1 = opzioni[Math.floor(Math.random() * opzioni.length)];
var giocatore2 = opzioni[Math.floor(Math.random() * opzioni.length)];

document.writeln('Il giocatore 1 ha scelto ' + giocatore1 + '<br>');
document.writeln('Il giocatore 2 ha scelto ' + giocatore2 + '<br>');


if (giocatore1 === giocatore2) {
  document.writeln('Parità!');
}

if (giocatore1 === 'carta') {
  if (giocatore2 === 'sasso') {
    document.writeln('Il giocatore 1 vince!');
  } else if (giocatore2 === 'forbici') {
    document.writeln('Il giocatore 2 vince!')
  }
}

if (giocatore1 === 'sasso') {
  if (giocatore2 === 'forbici') {
    document.writeln('Il giocatore 1 vince!');
  } else if (giocatore2 === 'carta')  {
    document.writeln('Il giocatore 2 vince!')
  }
}

if (giocatore1 === 'forbici') {
  if (giocatore2 === 'carta') {
    document.writeln('Il giocatore 1 vince!');
  } else if (giocatore2 === 'sasso') {
    document.writeln('Il giocatore 2 vince!')
  }
}
