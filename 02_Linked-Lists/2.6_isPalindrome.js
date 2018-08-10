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

  reverseAndCopyList() {
    let toCopy = this.head;
    const copiedList = new LinkedList();
    while(toCopy) {
      copiedList.insert(toCopy.value);
      toCopy = toCopy.next;  
    }
    let prev = null;
    let curr = copiedList.head;
    let next = null;
    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    copiedList.head = prev;
    return copiedList;
  }

  checkEquality(list1, list2) {
    let head1 = list1;
    let head2 = list2;
    while(head1 && head2) {
      if(head1.value === head2.value) {
        head1 = head1.next;
        head2 = head2.next;
      } else {
        return false;
      }
    }
    return true;
  }

  isPalindrome() {
    let newList = this.reverseAndCopyList();
    return this.checkEquality(this.head, newList.head);
  }

}

const list = new LinkedList();

// console.log(list);

const values = [1, 2, 3, 2, 1];
values.forEach(value => {
  list.insert(value);
})


// console.log(list);
console.log(list.isPalindrome());