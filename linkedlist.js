class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  printNode() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverseNode() {
    let current = this.head;
    let prevNode = null;
    let nextNode = null;

    while (current) {
      nextNode = current.next;
      current.next = prevNode;

      prevNode = current;
      current = nextNode;
    }

    console.log('*******');
    this.head = prevNode;
    this.printNode();
  }
}

const ll = new LinkedList();

ll.insertNode(200);
ll.insertNode(400);
ll.insertNode(600);

console.log(ll);

ll.printNode();
ll.reverseNode();
