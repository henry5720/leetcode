/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy=new ListNode();
    let prev=dummy; //[記錄]前一個node
    console.log({prev});
    while(list1 && list2){
        if(list1.val<=list2.val){
            prev.next=list1;
            prev=list1;
            list1=list1.next;
            console.log({prev, list1});
        }else {
            prev.next=list2;
            prev=list2;
            list2=list2.next;
        }
    }
    if (!list1) {
        prev.next=list2;
    }
    if (!list2) {
        prev.next=list1;
    }
    return dummy.next;
};
// 創建兩個已排序的鏈表
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(2, new ListNode(3, new ListNode(4)));
const result=mergeTwoLists(list1, list2);
console.log({result});