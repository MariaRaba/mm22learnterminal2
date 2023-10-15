import chalk from 'chalk';
import boxen from 'boxen';


//1 
console.log(boxen('1st BOX!', {padding: 2,  margin: 0, borderStyle: 'double', backgroundColor: 'magenta', borderColor: 'whiteBright'}));

//2
console.log(boxen('*•̩̩͙✩•̩̩͙*˚Red Cap Mushrooms˚*•̩̩͙✩•̩̩͙*˚＊', {title: 'box-2-title', titleAlignment: 'left', padding:2, margin: 2, borderStyle: 'bold'})); 

//3
console.log(boxen(chalk.bgWhite.blue('Hello world'), {borderStyle: 'arrow', borderColor: 'blue', padding:2}))

//4
console.log(boxen(chalk.red(':3c'), {padding: 1,  margin: 5, borderStyle: 'round', borderColor: 'redBright'}));

//5
console.log(boxen('Neco arc?!', {padding: 1,  margin: 7, borderStyle: 'classic', borderColor: 'magenta', height: 10, width: 15}));

//6
console.log(boxen(chalk.cyan('˚｡⋆P03⋆⭒'), {padding: 2, margin: 0, borderStyle: 'round', borderColor: 'green', backgroundColor: 'blue'}));
