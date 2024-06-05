// 选择并点击“刊登管理”菜单项
const menuTitle = document.querySelector('.ivu-select-input');
console.log(menuTitle);



console.log('Next sibling element at the same level:', element.parentNode.parentNode.parentNode.nextElementSibling);
console.log('Next sibling element at the same level_check:', element.parentNode.parentNode.parentNode.nextElementSibling.children[0].children[0].children[0]);


    const xpathResult = document.evaluate("//label[normalize-space(text())='要点说明']/following-sibling::div//textarea", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    console.log('xpathResult:', xpathResult);
    const element_0 = xpathResult.singleNodeValue;
    const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    element = element_1.children[1].children[0].children[0].children[0].children[1]
    console.log('element:', element);

    
// 模拟用户输入
const inputEvent = new Event('input', { bubbles: true });
const changeEvent = new Event('change', { bubbles: true });


