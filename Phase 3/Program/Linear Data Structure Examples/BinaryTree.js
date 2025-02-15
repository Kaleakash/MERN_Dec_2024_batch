class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        console.log("Binary Tree Created");
        this.root = null;
    }
    //add Node in tree 
    add(data) {
        let newNode = new Node(data);
        if(this.root==null){
            this.root = newNode;
            console.log("Root Node Created "+data);
        }else {
            this.insertNode(this.root,newNode);
            //console.log("Right logic to add node may be left side or right side")
        }
    }
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            //left side
            // node.left = newNode;
            // console.log("Left Node Created");
            if(node.left==null){
                node.left = newNode;
                console.log("Left Node Created link to root root "+node.data+", value of left node "+newNode.data);
            }else {
                this.insertNode(node.left,newNode); // node.left is root for next left node to add
            }
        }else {
            //right side
            // node.right = newNode;
            // console.log("Right Node Created")
            if(node.right==null){
                node.right = newNode;
                console.log("Right Node Created link to root root "+node.data+", value of right node "+newNode.data)
            }else {
                this.insertNode(node.right,newNode); // node.right is root for next left node to add
            }
        }
    }
}
let root = new BinaryTree();
root.add(50);
root.add(40);
root.add(30);
root.add(35);
root.add(60);


