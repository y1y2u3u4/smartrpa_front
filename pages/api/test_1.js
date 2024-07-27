const matchAndReplace = (arr1, arr2) => {
    let isNavigationAfterEnterOrClick = false;
    const filteredData = [];

    for (const item of arr1) {
        const { type, key, value, label, element, url } = item;

        // console.log('Processing item:', item);

        if ((type === 'keydown' && key === 'Enter')) {
            isNavigationAfterEnterOrClick = true;
            filteredData.push(item);
            // console.log('Trigger event detected, adding to filteredData:', item);
        } else if (isNavigationAfterEnterOrClick && type !== 'navigation') {
            if (type === 'input' && arr2.hasOwnProperty(value)) {
                filteredData.push({ ...item, value: arr2[value] });
                // console.log('Input after trigger event, replacing value and adding to filteredData:', { ...item, value: arr2[value] });
            } else if (type === 'click' && element && element.innerText && arr2.hasOwnProperty(value)) {
                // console.log('check_111:', element);
                filteredData.push({ ...item, element: { ...element, innerText: arr2[value] } });
                // console.log('Click after trigger event, replacing innerText and adding to filteredData:', { ...item, element: { ...element, innerText: arr2[value] } });
            } else if (type === 'click' && arr2.hasOwnProperty(label)) {
                filteredData.push({ ...item, label: arr2[label] });
                // console.log('Click after trigger event, replacing label and adding to filteredData:', { ...item, label: arr2[label] });
            } else {
                filteredData.push(item);
                // console.log('After trigger event, adding to filteredData without changes:', item);
            }
        } else if (isNavigationAfterEnterOrClick && type === 'navigation') {
            // 不添加 navigation 事件到 filteredData
            isNavigationAfterEnterOrClick = false;
            // console.log('Navigation event after trigger, reset isNavigationAfterEnterOrClick.');
        } else if (!isNavigationAfterEnterOrClick) {
            if (type === 'navigation' && arr2.hasOwnProperty(url)) {
                filteredData.push({ ...item, url: arr2[url] });
                // console.log('Navigation event, replacing url and adding to filteredData:', { ...item, url: arr2[url] });
            } else if (type === 'input' && arr2.hasOwnProperty(value)) {
                filteredData.push({ ...item, value: arr2[value] });
                // console.log('Input event, replacing value and adding to filteredData:', { ...item, value: arr2[value] });
            } else if (type === 'click' && element && arr2.hasOwnProperty(value)) {
                filteredData.push({ ...item, element: { ...element, innerText: arr2[value] } });
                // console.log('Click event, replacing innerText and adding to filteredData:', { ...item, element: { ...element, innerText: arr2[value] } });
            } else {
                filteredData.push(item);
                // console.log('Adding to filteredData without changes:', item);
            }
        }
    }

    return filteredData;
};



const sortedData = [
    {
        element: { tagName: 'A', id: '', className: 'link onecity', name: '', innerText: '1111' },
        value: 'cityname',
        time: '2024-06-16T03:08:55.448Z',
        type: 'click'
    }
];

const row = { cityname: '北京市', keyword: '体适能' };
const sortedData_new = matchAndReplace(sortedData, row);
console.log(sortedData_new);