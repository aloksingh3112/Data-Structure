class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
        
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=null;
    }

    push(val){
        var node= new Node(val);
        if(this.size==0){
            this.first=node;
            this.last=node;
            return this.size++;
        }
        else{
            var current=this.first;
            this.first=node;
            this.first.next=current;
            return this.size++;
        }

    }
}