/**
 * @author yu
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */
'use strict';

class Queue {
    
    /**
     * 遍历队列
     *
     * @return {Object | null}
     */
    iterator() {}
    
    /**
     * 列表添加元素
     *
     * @param {Object} data 数据
     */
    add(data) {}
    
    /**
     * 移除并返回第一个元素
     *
     * @return {Object | null}
     */
    take() {}
    
    /**
     * 删除一个元素
     *
     * @param {Object} data 要删除的元素
     */
    remove(data) {}
    
    /**
     * 清空列表
     */
    clear() {}
    
    /**
     * toString
     */
    toString() {}
    
}

module.exports = Queue;
