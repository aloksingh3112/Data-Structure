class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null

    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;

            while (true) {
                if (current.value == value) {
                    return undefined;
                } else if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }


    find(value){
        if(!this.root){
            return false;
        }
        else
        {
            var current=this.root;
            while(current){
                if(current.value==value){
                    return current;
                }
             else if (value<current.value)
                {
                   current=current.left;
                }
                else if(value>current.value){
                     current=current.right;
                }
                else{
                    return false;
                }
                

            }

        }
    }
}

var bst = new BinarySearchTree();
bst.insert(10);
// console.log(bst);
bst.insert(6);
// console.log(bst);
bst.insert(7);
bst.insert(12);
bst.insert(15);
bst.insert(17);
bst.insert(11);
bst.insert(9);
console.log(bst);
console.log(bst.find(9));