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
            
            while(true){
                if(current.value==value){
                    return undefined;
                }
               else if(value<current.value){
                   if(current.left==null){
                       current.left=newNode;
                       return this;
                   }
                   else{
                       current=current.left;
                   }
               }
               else{
                   if(current.right==null){
                       current.right=newNode;
                       return this;
                   }else{
                       current=current.right;
                   }
               }




            }
            
             

        }
    }
}

var bst=new BinarySearchTree();
bst.insert(10);
// console.log(bst);
bst.insert(6);
// console.log(bst);
bst.insert(7);
console.log(bst);