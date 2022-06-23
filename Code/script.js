window.addEventListener('load',()=>{
    const form= document.querySelector('#task-form');
    const newTaskTitle=document.querySelector('#task-input-title');
    const newTaskDescrip=document.querySelector('#task-input-descrip');
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const tasktitel= newTaskTitle.value;
        const taskdescrip= newTaskDescrip.value;
        const modify= new Date();
        const taskDT=modify.getHours() + ":" + modify.getMinutes() + ":" + modify.getSeconds() +","+ modify.getFullYear()+'-'+(modify.getMonth()+1)+'-'+modify.getDate();
        //console.log(taskDT);
        if(!tasktitel || !taskdescrip || (!tasktitel && !taskdescrip))
        {
            alert("Please ! Fill the Task title and description..");
            return;
        }

        const task_element=document.createElement("tr");
        task_element.classList.add("task-content");

        const penddingTable=document.getElementById("pendding-task-table");
        const complateTable=document.getElementById("complate-task-table");

        const new_task_status=document.createElement("input");
        new_task_status.classList.add("task-status");
        new_task_status.type="checkbox";
        new_task_status.checked=false;

        task_element.appendChild(new_task_status);

        const new_task_title=document.createElement("td");
        new_task_title.classList.add("title-data");

        const new_task_titleinput=document.createElement("input");
        new_task_titleinput.classList.add("title-input-data");
        new_task_titleinput.type="text";
        new_task_titleinput.value=tasktitel;
        new_task_titleinput.setAttribute("readonly","readonly");

        new_task_title.appendChild(new_task_titleinput);

        task_element.appendChild(new_task_title);

        const new_task_descrip=document.createElement("td");
        new_task_descrip.classList.add("descrip-data");

        const new_task_descripinput=document.createElement("input");
        new_task_descripinput.classList.add("descrip-input-data");
        new_task_descripinput.type="text";
        new_task_descripinput.value=taskdescrip;
        new_task_descripinput.setAttribute("readonly","readonly");

        new_task_descrip.appendChild(new_task_descripinput);
        task_element.appendChild(new_task_descrip);

        const new_task_DT=document.createElement("td");
        new_task_DT.classList.add("DT-data");
        new_task_DT.innerHTML=taskDT;
        
        task_element.appendChild(new_task_DT);

        const new_task_edit=document.createElement("td");
        new_task_edit.classList.add("edit-data");

        const new_task_editBtn=document.createElement("button");
        new_task_editBtn.classList.add("edit-btn");
        new_task_editBtn.innerHTML="Edit";

        const new_task_delete=document.createElement("td");
        new_task_delete.classList.add("delete-data");

        const new_task_deleteBtn=document.createElement("button");
        new_task_deleteBtn.classList.add("detele-btn");
        new_task_deleteBtn.innerHTML="Delete";

        new_task_edit.appendChild(new_task_editBtn);
        task_element.appendChild(new_task_edit);
        new_task_delete.appendChild(new_task_deleteBtn);
        task_element.appendChild(new_task_delete);

        penddingTable.appendChild(task_element);
        newTaskTitle.value="";
        newTaskDescrip.value="";

        new_task_editBtn.addEventListener('click',()=>{
            if(new_task_editBtn.innerHTML=="Edit")
            {
                new_task_titleinput.removeAttribute("readonly");
                new_task_titleinput.focus();
                new_task_descripinput.removeAttribute("readonly");
                new_task_titleinput.focus();
                new_task_editBtn.innerText="Save";
            }
            else{
                new_task_titleinput.setAttribute("readonly","readonly");
                new_task_descripinput.setAttribute("readonly","readonly");
                new_task_editBtn.innerText="Edit";
                const modify_edit= new Date();
                const taskDT_edit=modify_edit.getHours() + ":" + modify_edit.getMinutes() + ":" + modify_edit.getSeconds() +","+ modify_edit.getFullYear()+'-'+(modify_edit.getMonth()+1)+'-'+modify_edit.getDate();
                new_task_DT.innerHTML=taskDT_edit;
            }
        })

        new_task_deleteBtn.addEventListener('click',()=>{
            if(window.confirm("Are you sure want to delete this task ?"))
            {
            if(task_element.parentElement == penddingTable)
            {
                penddingTable.removeChild(task_element);
            }
            else
            {
                complateTable.removeChild(task_element);
            }
            }
        })

        new_task_status.addEventListener('click',()=>{
        if(window.confirm("Are you sure complated this task ?"))
        {
        if(new_task_status.checked==true)
        {
            penddingTable.removeChild(task_element);
            task_element.removeChild(new_task_status);
            const modify_compt= new Date();
            const taskDT_compt=modify_compt.getHours() + ":" + modify_compt.getMinutes() + ":" + modify_compt.getSeconds() +","+ modify_compt.getFullYear()+'-'+(modify_compt.getMonth()+1)+'-'+modify_compt.getDate();
            new_task_DT.innerHTML=taskDT_compt;
            const complate_icon=document.createElement("td");
            complate_icon.classList.add("complate-icon");
            complate_icon.innerHTML="&#x2705;";
            task_element.prepend(complate_icon);
            complateTable.appendChild(task_element);
        }
        }
        else
        {
            new_task_status.checked=false;
        }
        })
    })
})