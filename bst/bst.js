class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null

    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }
        else
        {
            var current=this.root;
            if(current.value===value){
                return undefined;
            }
            else if(value<current.value){
                while(true){
                    if(current.left==null){
                        current.left=newNode;
                        return this;
                    }
                    else{
                        current=current.left;
                    }
                }

            }

        }
    }
}

var bst=new BinarySearchTree();
bst.insert(10);
console.log(bst);