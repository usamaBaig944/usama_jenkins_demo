var addTwoNumbers = function (l1, l2) {
    var firstReverseNumber = ""
    var secondReverseNumber = "";
    for (let index = l1.length - 1; index >= 0; index--) {
        firstReverseNumber += l1[index]
    }
    for (let index = l2.length - 1; index >= 0; index--) {
        secondReverseNumber += l2[index]
    }
    var total = parseInt(firstReverseNumber) + parseInt(secondReverseNumber)
    var total = total.toString();
    var reverseList = []
    for (let index = 0; index < total.length; index++) {
        reverseList.unshift(parseInt(total[index]))
    }
    console.log(reverseList)
};
var lengthOfLongestSubstring = function (s) {
    if (s[0] === " " || s.length == 1) return 1
    var wordCount = {};
    var longestCountTemp = 0;
    var actualCount = 0;
    for (let index = 0; index < s.length; index++) {
        if (`${s[index]}` in wordCount) {
            //key exist mean do some code
            if (longestCountTemp > actualCount)
                actualCount = longestCountTemp;
            //to Manage new record
            delete wordCount[s[index]]
            longestCountTemp = 0;

            //resseting the condition here
            wordCount[s[index]] = 1
            longestCountTemp += 1;
        } else {
            wordCount[s[index]] = 1;
            longestCountTemp += 1;
        }
    }
    console.log(wordCount, actualCount, longestCountTemp)
    return actualCount > longestCountTemp ? actualCount : longestCountTemp;
};

lengthOfLongestSubstring("dvdf")
//addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])