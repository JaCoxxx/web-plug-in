// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//  

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

var levelOrder = function (root) {
	let rootArr = []
	let arr = []
	let i = 0
	rootArr.push([root])
	function treeLoop(nodeArr) {
		if (!nodeArr[i + 1]) nodeArr[i + 1] = []
		if (!arr[i]) arr[i] = []
		nodeArr[i].map(item => {
			if (item) {
				nodeArr[i + 1].push(item.left)
				nodeArr[i + 1].push(item.right)
				arr[i].push(item.val)
			}
		})
		if (nodeArr[i + 1].filter(item => item).length) {
			i++
			treeLoop(nodeArr)
		}
	}
	treeLoop(rootArr)
	return arr
};

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var twoSum = function (nums, target) {
// 	let answerArr = []
// 	let indexArr = []
// 	const numsObj = { ...nums }
// 	nums.sort((pre, next) => +pre - +next)
// 	const length = nums.length
// 	let flag = false
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = nums.length - 1; j >= 0; j--) {
// 			if (nums[i] + nums[j] < target) break
// 			else if (nums[i] + nums[j] === target) {
// 				console.log(i, j)
// 				answerArr.push(nums[i], nums[j])
// 				flag = true
// 				break
// 			}
// 		}
// 		if (flag) break
// 	}
// 	Object.keys(numsObj).forEach(item => {
// 		if (answerArr.includes(numsObj[item])) {
// 			indexArr.push(+item)
// 		}
// 	})
// 	return indexArr
// };

var twoSum = function (nums, target) {
	let indexArr = []
	const length = nums.length
	for (let i = 0; i < nums.length; i++) {
		const temp = target - nums[i]
		const index = nums.findIndex(item => item === temp)
		if (index !== -1) {
			indexArr.push(i, index)
			return indexArr
		}
	}
};

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

// let listNode1 = new ListNode(1)
// listNode1.next = new ListNode(0)
// listNode1.next.next = new ListNode(0)
// listNode1.next.next.next = new ListNode(0)
// listNode1.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0)
// listNode1.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(1)
let listNode1 = new ListNode(2)
listNode1.next = new ListNode(4)
listNode1.next.next = new ListNode(3)
let listNode2 = new ListNode(5)
listNode2.next = new ListNode(6)
listNode2.next.next = new ListNode(4)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
// 	let nodes = null
// 	function getNumber(num1, num2, index, residue, sum) {
// 		let indexSum = (+num1.val || 0) + (+num2.val || 0) + residue
// 		if (indexSum > 9) {
// 			residue = +`${indexSum}`.split('')[0]
// 			indexSum = `${indexSum}`.split('')[1]
// 		} else {
// 			residue = 0
// 		}
// 		sum = `${indexSum}${sum}`
// 		if (num1.next || num2.next){
// 			sum = getNumber(num1.next || {}, num2.next || {}, index + 1, residue, sum)
// 		} else if (residue > 0){
// 			return `${residue}${sum}`
// 		}
// 		return sum
// 	}
// 	function ListNode(val, next) {
// 		this.val = val;
// 		this.next = next;
// 	}
// 	function getListNode(num, index, node) {
// 		let indexNum = num.split('')[index]
// 		if (index < num.length) {
// 			let temNode = new ListNode(indexNum)
// 			if (node) {
// 				nodes = new ListNode(indexNum, nodes)
// 			} else {
// 				nodes = new ListNode(indexNum, null)
// 			}
// 			getListNode(num, index + 1, nodes)
// 		} else {
// 			return node
// 		}
// 	}
// 	getListNode(getNumber(l1, l2, 0, 0, ''), 0, nodes)
// 	return nodes
// };

var addTwoNumbers = function(l1, l2) {
	let node = new ListNode(0)
	let tempNode = node
	let intoNum = 0
	while(l1 || l2 || intoNum) {
		let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + intoNum
		let residue = num % 10
		intoNum = num > 9 ? 1 : 0
		tempNode.next = new ListNode(residue)
		tempNode = tempNode.next
		l1 = l1 && l1.next
		l2 = l2 && l2.next
	}
	return node.next
};


// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//  

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-search
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

var exist = function(board, word) {
	// 计算word每个字母的所有可能坐标
	function getWordPosition(word) {
		const wordArr = word.split('')
		return wordArr.map(item => {
			let arr = []
			for(let i = 0; i < board.length; i ++) {
				if (board[i].includes(item)) {
					for(let j = 0; j < board[i].length; j ++) {
						if (board[i][j] === item) arr.push([i, j])
					}
				}
				
			}
			return arr
		})
	}
	/**
	 * 判断一个坐标是否是另一个坐标的邻近坐标
	 * @param {*} list1 坐标集1
	 * @param {*} list2 坐标集2
	 */
	function judgePos(list1, list2) {
		return (Math.abs(list2[0] - list1[0]) + Math.abs(list2[1] - list1[1])) === 1
	}
	let wordPos = getWordPosition(word)
	const pathArr = []
	// 如果有某个字母不在board中，则返回false
	if (wordPos.some(item => !item.length)) return false
	wordPos.forEach((item, index) => {
		if(index === 0) {
			pathArr.push(...item.map(ele => [ele]))
		} else {
			item.forEach(itemEle => {
				pathArr.forEach((ele, eleInd) => {
					if (ele[index - 1] && judgePos(ele[index - 1], itemEle)) ele.push()
					// TODO
				})
			})
			
		}
	});

	console.log(wordPos, pathArr)
};

// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-palindrome-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	function judgeSize (s, left, right) {
		while(left < right) {
			if (s[left] !== s[right]) {
				return false
			}
			left ++
			right --
		}
		return true
	}
	let left = 0, right = s.length - 1
	while(left < right) {
		if (s[left] !== s[right]) {
			return judgeSize(s, left + 1, right) || judgeSize(s, left, right - 1)
		}
		left ++
		right --
	}
	return true
};


// 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

// 示例：

// 输入：A = [4,5,0,-2,-3,1], K = 5
// 输出：7
// 解释：
// 有 7 个子数组满足其元素之和可被 K = 5 整除：
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}fg
 */
var subarraysDivByK = function(A, K) {
	// 前缀和
	let preNumArr = []
	A.forEach((item, index) => {
		if (index === 0) {
			preNumArr[index] = item
		} else {
			preNumArr[index] = item + preNumArr[index - 1]
		}
	})
	console.log(preNumArr)
	// A[0] + ... + A[i] = preNumArr[i]
	// A[i] + ... + A[j] = preNumArr[j] - preNumArr[i - 1]
	// (A[i] + ... + A[j]) % 5 = (preNumArr[j] - preNumArr[i - 1]) % 5 = 0
	// preNumArr[j] % 5 = preNumArr[i - 1] % 5
	// 前缀和求余
	preNumArr = preNumArr.map(item => item % 5)
	console.log(preNumArr)
	// 若某两个相等则代表其期间元素之和可被整除
	// 若某个为0则代表 0 到其下标之和可被整除
	let remainderObj = { 0: 1 }
	preNumArr.forEach(item => {
		if (remainderObj[item]) {
			remainderObj[item] += 1
		} else {
			remainderObj[item] = 1
		}
	})
	console.log(remainderObj)
	//  得到余数出现的次数集合，每项 - 1 可得到子数组的数目
	let count = 0
	Object.keys(remainderObj).forEach(item => {
		count += (remainderObj[item] - 1)
	})
	return count
};

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

const s1 = 'abcabcbb'
const s2 = 'bbbbb'
const s3 = 'pwwkew'

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let temp = ''
	let max = 0
	s.split('').forEach((item, index) => {
		if (temp.includes(item)) {
			temp = temp.split('').splice(temp.split('').findIndex(ele => ele === item) + 1).join('') + item
		} else {
			temp += item
		}
		max = max > temp.length ? max : temp.length
	})
	return max
};

// 根据每日 气温 列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
	const length = T.length
	let arr = new Array(length).fill(0)
	T.forEach((item, index) => {
		arr[index] = T[index + 1] ? T[index + 1] - item : 0
	})
	console.log([...arr])
	arr = arr.map((item, index) => {
		if (item > 0) {
			return 1
		} else if (index === length - 1) {
			return 0
		} else {
			let flag = item
			for(let i = index + 1; i < length; i ++) {
				flag += arr[i]
				console.log(flag)
				if (flag > 0) {
					flag = i
					break
				}
			}
			return flag > 0 ? flag - index + 1 : 0
		}
	})
	console.log(arr)
};

var dailyTemperatures2 = function(T) {
    const length = T.length
	return T.map((item, index) => {
		let flag = item
		let num = 0
		for (let i = index + 1; i < length; i ++) {
			num += 1
			if (T[i] > flag) {
				break
			} else if (i === length - 1) {
				num = 0
			}
		}
		return num
	})
};

// 计算大数

/**
 * 计算大数
 * @param {String} a 
 * @param {String} b 
 * @param {String} mthood 运算方式 
 */
const addLargeNumber = (a = '', b = '', methood = '+') => {
	// 传小数进行计算在toString的时候就会丢失精度，太大的时候一拿到就已经没有精度了。。
	if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) return a + b
	if (methood === '-') {
		b = b.includes('-') ? b.split('-')[1] : `-${b}`
	}
	let calMethood = true // 运算方式,true为加法运算,false为减法运算
	let allAegative = false // 是否需要加负号
	let subtracted = a // 被减数,默认为a
	let minus = b // 减数,默认为b

	if (a.includes('-') && b.includes('-')) { // 全是负数时，计算方法同全正数计算，只需要在最后的结果将负号加上即可，所以在此处将负号删去
		allAegative = true
		calMethood = true
		subtracted = a.split('-')[1]
		minus = b.split('-')[1]
	} else if (a.includes('-') || b.includes('-')) { // a为负数或b为负数时,执行减法运算,绝对值小的为减数
		// 减法运算总是大的减小的
		calMethood = false
		let tempX = a.split('-')[0] ? a.split('-')[0] : a.split('-')[1]
		let tempY = b.split('-')[0] ? b.split('-')[0] : b.split('-')[1]
		console.log(+tempX, +tempY, +tempX > +tempY)
		if (+tempX > +tempY) {
			subtracted = tempX
			minus = tempY
            allAegative = a.includes('-')
		} else { // 默认为x - y，如果改为y - x需要给结果添加负号
			subtracted = tempY
			minus = tempX
            allAegative = b.includes('-')
		}
		
	}
    let integerA = subtracted.split('.')[0].split('').reverse() // 被减数的整数部分的反转数组，方便遍历时从个位开始计算
    let decimalA = [] // 被减数的小数部分的反转数组
    let integerB = minus.split('.')[0].split('').reverse() // 减数的整数部分的反转数组
	let decimalB = [] // 减数的小数部分的反转数组


	let flag = 0 // 进位标志，当当前位计算大于9时，需要进位，加法进位只可能为0或1
	let sum = '' // 和


	if (a.includes('.')) { // 是小数再去计算小数部分的数组
		decimalA = subtracted.split('.')[1].split('')
	}
	if (b.includes('.')) {
		decimalB = minus.split('.')[1].split('')
	}


	// 根据小数的特殊性，需要根据两个数字的最长长度去给另一个填充0
	for(let i = 0; i < Math.max(decimalA.length, decimalB.length); i ++) {
		decimalA[i] = +decimalA[i] || 0
		decimalB[i] = +decimalB[i] || 0
	}
	decimalA = decimalA.reverse()
	decimalB = decimalB.reverse()
	const decimalAns = arrSum(decimalA, decimalB, sum, flag)
	sum = decimalAns.sum.replace(/0*$/, '') // 去除小数部分末尾的0
	flag = decimalAns.flag
	// 小数部分计算不为空,则添加小数点
	if (sum !== '') sum = `.${sum}`
	const integerAns = arrSum(integerA, integerB, sum, flag)
	sum = integerAns.sum
	flag = integerAns.flag
	if (flag !== 0) {
		sum = `${flag}${sum}`
	}
	sum = sum.replace(/^0*/, '') || '0' // 去除最左侧的0，同时避免因结果是0而产生空串
	/**
	 * 
	 * @param {Array} arr1 被减数转换的数组
	 * @param {Array} arr2 减数转换的数组
	 * @param {String} sum 和
	 * @param {Number} flag 进位标志
	 */
	function arrSum(arr1, arr2, sum, flag) {
		for(let i = 0; i < Math.max(arr1.length, arr2.length); i ++) {
			if (calMethood) { // 加法
				const temp = (+arr1[i] || 0) + (+arr2[i] || 0) + flag
				if (temp < 10) {
					sum = `${temp}${sum}`
					flag = 0
				} else {
					sum = `${temp - 10}${sum}`
					flag = 1
				}
			} else { // 减法
				let temp = (+arr1[i] || 0) - (+arr2[i] || 0) + flag
				if ((arr1[i] || 0) < (arr2[i] || 0)) { // 被减数太小,需要借位
					temp += 10
					flag = -1
				} else {
					flag = 0
				}
				sum = `${temp}${sum}`
			}
		}
		return {
			sum,
			flag,
		}
	}
	return allAegative ? `-${sum}` : sum
}

// 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

// 注意：本题相对原题稍作改动，只需返回未识别的字符数

//  

// 示例：

// 输入：
// dictionary = ["looked","just","like","her","brother"]
// sentence = "jesslookedjustliketimherbrother"
// 输出： 7
// 解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
// 提示：

// 0 <= len(sentence) <= 1000
// dictionary中总字符数不超过 150000。
// 你可以认为dictionary和sentence中只包含小写字母。

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
	// 生成字典树
	let trie = {}
	for (let i = 0; i < dictionary.length; i ++) {
		const char = dictionary[i]
		let node = trie
		for (let j = 0; j < char.length; j ++) {
			node = node[char[j]] ? node[char[j]] : node[char[j]] = {}
			// 字符串结尾，添加结尾标识
			if (j === char.length - 1) {
				node['end'] = true
			}
		}
	}
	console.log(trie)
};


// 栈

class Stack {
	// 私有属性
	#stack
	constructor() {
		this.#stack = []
	}

	get size() {
		return this.#stack.length
	}

	empty = () => !this.#stack.length

	pop = () => this.#stack.pop()

	push = item => this.#stack.push(item)

	peek = () => this.#stack[this.#stack.length - 1]

	search = item => this.#stack.findIndex(ele => ele === item)

	// 展示栈的内容
	print = () => this.#stack
}

// 队列

class Queue {
	#queue
	constructor() {
		this.#queue = []
	}

	get size() {
		return this.#queue.length
	}

	push = item => this.#queue.push(item)

	pop = () => this.#queue.shift()

	peek = () => this.#queue[0]

	empty = () => !this.#queue.length

	print = () => this.#queue
}

// 栈实现队列

class Queue2 {
	constructor() {
		this.stack = new Stack()
		this.aidStack = new Stack()
	}

	get size() {
		return this.stack.size
	}

	push = item => this.stack.push(item)

	pop = () => {
		if (this.aidStack.size < 1) {
			while(this.stack.size) {
				this.aidStack.push(this.stack.pop())
			}
		}
		let popItem = this.aidStack.pop()
		while(this.aidStack.size) {
			this.stack.push(this.aidStack.pop())
		}
		return popItem
	}

	peek = () => {
		if (this.aidStack.size < 1) {
			while(this.stack.size) {
				this.aidStack.push(this.stack.pop())
			}
		}
		let peekItem = this.aidStack.peek()
		while(this.aidStack.size) {
			this.stack.push(this.aidStack.pop())
		}
		return peekItem
	}

	empty = () => this.stack1.empty()
}

/**
 * 
 * @param {*} number 
 * @param {*} hex 
 */
const hexConversion = (number, hex) => {
    
}
