//Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.

//declar a function called imAboutToExplodeWithExcitement;
//using while loop, it's like fizzbuzz but with while loop...

function imAboutToExplodeWithExcitement(num) {
  while (num--) {
    if (num === 5) {
      console.log(`Oh wow, I can't handle the anticipation!`);
    } else if (num === 3) {
      console.log(`I'm about to explode with excitement!`);
    } else if (num === 0) {
      console.log(`That was kind of a let down`);
    }
  }
}

imAboutToExplodeWithExcitement(10);
