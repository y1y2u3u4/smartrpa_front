

// inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;


// const xpathResult = document.evaluate(inputSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
// console.log('xpathResult:', xpathResult);
// const element_0 = xpathResult.singleNodeValue;
// const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// element = element_1.children[1].children[0].children[0].children[0].children[1].children[0]
// console.log('element:', element);

// const inputEvent = new Event('input', { bubbles: true });
// const blurEvent = new Event('blur', { bubbles: true });
// const changeEvent = new Event('change', { bubbles: true });

// // 检查元素是否是 contenteditable
// if (element.contentEditable === 'true') {
//     // 清空输入框并输入新的值
//     element.innerText = '';
//     element.dispatchEvent(inputEvent);

//     for (let i = 0; i < value.length; i++) {
//         element.innerText += value[i];
//         element.dispatchEvent(inputEvent);
//         await new Promise(resolve => setTimeout(resolve, 20)); // 模拟用户输入间隔
//     }

//     element.dispatchEvent(blurEvent);
// } else {
//     // 清空输入框并输入新的值
//     element.value = '';
//     element.dispatchEvent(inputEvent);

//     for (let i = 0; i < value.length; i++) {
//         element.value += value[i];
//         element.dispatchEvent(inputEvent);
//         await new Promise(resolve => setTimeout(resolve, 20)); // 模拟用户输入间隔
//     }

//     element.dispatchEvent(changeEvent);
// }