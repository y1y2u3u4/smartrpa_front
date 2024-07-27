import { inserttask, findTaskList } from "./notes.js";


export default async function handler(req, res) {
    //
    const cityname = req.body.cityname;
    const keyword = req.body.keyword;
    const task_name=cityname + "_" + keyword
    console.log('task_name', task_name)
    const TaskList = await findTaskList(task_name);
    const filteredTaskList = TaskList.filter(task => !task.run_output.includes('test'));
    // console.log('FilteredTaskList', filteredTaskList);

    const runoutResults = filteredTaskList.map(task => task.run_output);


    // 
    // TaskList.sort((a, b) => b.id - a.id);
    // const latestTask = TaskList[0];
    res.json({ message: 'tasklist get successfully', runoutResults: runoutResults });
};
