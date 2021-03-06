import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*const source$ = new Rx.Observable(observer => {
  console.log('Creating Observable');
  observer.next('Hello World');
  observer.next('Another value');
  observer.error(new Error('Error: Something went wrong'));

  setTimeout(() => {
    observer.next('Yet another value');
    observer.complete();
  }, 3000);
});*/

/*source$
.catch(err => Rx.Observable.of(err))
.subscribe(
  x => {
      console.log(x);
    },
err => {
  console.log(err);
},
complete => {
  console.log('completed');
}
);
*/
const MyPromise = new Promise((resolve,reject) => {
  console.log('Creating Promise');
  setTimeout(() => {
        resolve('Hello from promise');
      }, 3000);
});

function getUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'jsonp'
  })
  .promise();
}

/*MyPromise.then(x => {
  console.log(x);
});*/
Rx.Observable.fromPromise(getUser('bradtraversy'))
  .subscribe(x => {
    let x = x.data;
    console.log(x.bio);
  });
