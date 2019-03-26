class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    enqueue(val){
        var node=new Node(val);
        if(!this.first){
            this.first=this.last=node;
            return this.size++;
        }
        this.last.next=node;
        this.last=node;
        return this.size++;

    }

    dqueue(){
        if(!this.first){
            return null;
        }
        else if(this.first==this.last){
            var temp=this.first;
            this.first=this.last=null;
            return temp;
        }
        else{
            var temp=this.first;
            this.first=temp.next;
            return temp;
        }
    }
}

var q=new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
q.dqueue();
console.log("1",q);
q.dqueue();
console.log("2",q);
q.dqueue();
console.log("3",q);