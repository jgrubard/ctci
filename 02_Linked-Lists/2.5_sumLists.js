class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(input) {
    const node = new Node(input);
    if(!this.head) {
      this.head = node;
    } else {
      let head = this.head;
      while(head.next) {
        head = head.next;
      }
      head.next = node;
    }
  }
}

// const sumList = new LinkedList();
const list1 = new LinkedList();
const list2 = new LinkedList();

const values1 = [7, 1, 6];
values1.forEach(value => {
  list1.insert(value);
});

const values2 = [5, 9, 2];
values2.forEach(value => {
  list2.insert(value);
});

function printList(list) {
  let head = list.head;
  const result = [];
  while(head) {
    result.push(head.value);
    head = head.next;
  }
  return result;
}

function sumLists(list1, list2) {
  // console.log(printList(list1));
  // console.log(printList(list2));
  let str1 = [];
  let str2 = [];
  let head1 = list1.head;
  let head2 = list2.head;
  while(head1 && head2) {
    str1.unshift(head1.value);
    str2.unshift(head2.value);
    head1 = head1.next;
    head2 = head2.next;
  }
  str1 = str1.join('');
  str2 = str2.join('');
  // console.log((str1*1 + str2*1).toString())
  const stringTotal = ((str1 * 1) + (str2 * 1)).toString();
  const finalList = new LinkedList();
  for(let i = stringTotal.length - 1; i >= 0; i--) {
    const num = stringTotal[i] * 1;
    // console.log(num)
    finalList.insert(num);
  }
  return finalList;
}

// console.log(sumLists(list1, list2))

// console.log(list);
// console.log(printList(list1), printList(list2));
console.log(printList(sumLists(list1, list2)));