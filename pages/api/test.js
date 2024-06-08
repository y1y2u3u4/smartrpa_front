// // // 选择并点击“刊登管理”菜单项
// // const menuTitle = document.querySelector('.ivu-select-input');
// // console.log(menuTitle);

// // const element = document.querySelector('ivu-input');
// // console.log('element:', element);


// // console.log('Next sibling element at the same level:', element.parentNode.parentNode.parentNode.nextElementSibling);
// // console.log('Next sibling element at the same level_check:', element.parentNode.parentNode.parentNode.nextElementSibling.children[0].children[0].children[0]);


// //     const xpathResult = document.evaluate("//label[normalize-space(text())='要点说明']/following-sibling::div//textarea", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
// //     console.log('xpathResult:', xpathResult);
// //     const element_0 = xpathResult.singleNodeValue;
// //     const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// //     element = element_1.children[1].children[0].children[0].children[0].children[1]
// //     console.log('element:', element);

    
// // // 模拟用户输入
// // const inputEvent = new Event('input', { bubbles: true });
// // const changeEvent = new Event('change', { bubbles: true });


// // const value = '这是一个测试';
// // const xpathResult = document.evaluate("//*[@placeholder='SKU']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
// // console.log('xpathResult:', xpathResult);
// // const element = xpathResult.singleNodeValue;
// // console.log('element:', element);

// // const inputEvent = new Event('input', { bubbles: true });
// // const changeEvent = new Event('change', { bubbles: true });

// // // 清空输入框并输入新的值
// // element.value = '';
// // element.dispatchEvent(inputEvent);

// // for (let i = 0; i < value.length; i++) {
// //     element.value += value[i];
// //     element.dispatchEvent(inputEvent);
// //     await new Promise(resolve => setTimeout(resolve, 20)); // 模拟用户输入间隔
// // }

// // element.dispatchEvent(changeEvent);



// const buttonText = '确定';
// // 构建XPath选择器，结合父级元素和文本内容
// const clickSelector = `//div[@data-v-3e50dd5e]//button[contains(@class, 'ivu-btn-primary') and span[text() ='${event.element.innerText}']]`;

// // 使用ORDERED_NODE_SNAPSHOT_TYPE找到所有匹配的元素
// const xpathResult = document.evaluate(clickSelector, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// // 检查是否存在至少三个匹配的元素
// if (xpathResult.snapshotLength >= 3) {
//     const thirdElement = xpathResult.snapshotItem(2); // 索引从0开始，2表示第三个元素
//     thirdElement.click(); // 点击第三个元素
//     console.log('第三个按钮已点击:', thirdElement);
// } else {
//     console.log('未找到足够的匹配元素');
// }


// // clickSelector = `//button[contains(., '${event.element.innerText}')]`;


// const buttonText = '确定';
// // 构建XPath选择器，结合父级元素和文本内容
// const clickSelector = `//div[@data-v-3e50dd5e]//button[contains(@class, 'ivu-btn-primary') and span[text() = '${buttonText}']]`;

// // 使用ORDERED_NODE_SNAPSHOT_TYPE找到所有匹配的元素
// const xpathResult = document.evaluate(clickSelector, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// // 创建一个数组来存储所有匹配的元素信息
// const elements = [];
// for (let i = 0; i < xpathResult.snapshotLength; i++) {
//     const element = xpathResult.snapshotItem(i);
//     elements.push({
//         outerHTML: element.outerHTML,
//         innerText: element.innerText,
//         className: element.className,
//     });
// }

// // 打印所有匹配的元素信息
// console.log('找到的按钮元素:', elements);



// const buttonText = '确定';
// // 构建XPath选择器，结合父级元素和文本内容
// const clickSelector = `//div[@data-v-3e50dd5e]//button[contains(@class, 'ivu-btn-primary') and span[text() = '${buttonText}']]`;

// // 使用ORDERED_NODE_SNAPSHOT_TYPE找到所有匹配的元素
// const xpathResult = document.evaluate(clickSelector, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// // 检查是否存在至少三个匹配的元素
// if (xpathResult.snapshotLength >= 3) {
//     const thirdElement = xpathResult.snapshotItem(2); // 索引从0开始，2表示第三个元素
//     thirdElement.click(); // 点击第三个元素
//     console.log('第三个按钮已点击:', thirdElement);
// } else {
//     console.log('未找到足够的匹配元素');
// }


// Chevrolet modern Volvo Nissan lucky Haver Toyota Ferrari Dodger BYD Buick handsome Honda gallop Porsche An Aston Martin Audi 