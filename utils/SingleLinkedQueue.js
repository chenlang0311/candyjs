"use strict";
class SingleLinkedQueueNode {
    /**
     * constructor
     */
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
/**
 * 队列
 */
class SingleLinkedQueue {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.size = 0;
    }
    [Symbol.iterator]() {
        let node = this.headNode;
        return {
            next: () => {
                if (null !== node) {
                    let ret = { value: node.data, done: false };
                    node = node.next;
                    return ret;
                }
                return { value: undefined, done: true };
            }
        };
    }
    /**
     * 遍历队列 callback 返回值为 false 可结束循环
     *
     * @param {Function} callback
     */
    each(callback) {
        for (let current = this.headNode; null !== current; current = current.next) {
            if (false === callback(current.data)) {
                break;
            }
        }
    }
    /**
     * 添加元素
     *
     * @param {any} item 数据
     */
    add(data) {
        let node = new SingleLinkedQueueNode(data, null);
        if (0 === this.size) {
            this.headNode = node;
        }
        else {
            this.tailNode.next = node;
        }
        this.tailNode = node;
        this.size++;
    }
    /**
     * 移除并返回队首元素
     *
     * @return {any | null}
     */
    take() {
        // 为空直接返回
        if (0 === this.size) {
            return null;
        }
        let data = this.headNode.data;
        let tmpHeadNode = this.headNode;
        // 从队列去除头节点
        this.headNode = tmpHeadNode.next;
        tmpHeadNode.next = null;
        tmpHeadNode = null;
        // 没节点了
        if (null === this.headNode) {
            this.headNode = this.tailNode = null;
        }
        this.size--;
        return data;
    }
    /**
     * 删除一个元素
     *
     * @param {any} item 要删除的元素
     */
    remove(data) {
        let current = this.headNode;
        let previous = null;
        for (; null !== current; previous = current, current = current.next) {
            if (data !== current.data) {
                continue;
            }
            // 删除头结点
            if (null === previous) {
                this.headNode = current.next;
            }
            // 非头结点需要移动 previous
            if (null !== previous) {
                previous.next = current.next;
            }
            // 尾节点
            if (null === current.next) {
                this.tailNode = previous;
            }
            // 清除当前节点
            current.next = null;
            current = null;
            this.size--;
            break;
        }
    }
    /**
     * 清空队列
     */
    clear() {
        while (0 !== this.size) {
            this.take();
        }
    }
    /**
     * toString
     */
    toString() {
        let ret = '[ ';
        for (let current = this.headNode; null !== current; current = current.next) {
            ret += current.data + ', ';
        }
        ret = ret.substring(0, ret.lastIndexOf(', '));
        return ret + ' ]';
    }
}
module.exports = SingleLinkedQueue;