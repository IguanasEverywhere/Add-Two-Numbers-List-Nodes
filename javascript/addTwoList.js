class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

function getValString(node) {
  let str = "";
  let currentNode = node;
  str += currentNode.val;

  while (currentNode.next) {
    currentNode = currentNode.next;
    str += currentNode.val;
  }
  let strReversed = str.split('').reverse().join('');
  return strReversed;
}

function addTwoList(l1, l2) {

  let l1String = getValString(l1);
  let l2String = getValString(l2);
  let addedStrings = parseInt(l1String) + parseInt(l2String);
  let addedStringsAsStr = String(addedStrings);

  let nodeToReturn = new Node(parseInt(addedStringsAsStr[addedStringsAsStr.length - 1]));

  let currentNode = nodeToReturn;

  for (let i = addedStringsAsStr.length - 2; i >=0; i--) {
    currentNode.next = new Node(parseInt(addedStringsAsStr[i]));
    currentNode = currentNode.next;
  }
  return nodeToReturn;
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: { val: 0, next: null }");
console.log("=>", addTwoList({ val: 0, next: null }, { val: 0, next: null }));

const n1 = new Node(3)
const n2 = new Node(4, n1)
const l1 = new Node(2, n2)

const n3 = new Node(4)
const n4 = new Node(6, n3)
const l2 = new Node(5, n4)

console.log("l1 = [2,4,3] & l2 = [5,6,4], Output: [7,0,8]")
//Expecting: {"next": {"next": {"next": null, "val": 8}, "val": 0}, "val": 7}
console.log(addTwoList(l1, l2))

}

module.exports = {
    Node,
    addTwoList
};

// Please add your pseudocode to this file
// And a written explanation of your solution