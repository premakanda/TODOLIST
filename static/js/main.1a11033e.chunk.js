(this["webpackJsonpit-kamasutra-typescript"]=this["webpackJsonpit-kamasutra-typescript"]||[]).push([[0],{18:function(t,e,n){},30:function(t,e,n){t.exports=n(58)},35:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(12),r=n.n(i),s=(n(35),n(2)),c=n(9),l=n(4),d=n(3),u=n(5),p=(n(18),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={error:!1,title:""},n.onAddItemClick=function(){var t=n.state.title;n.setState({title:""}),""===t?n.setState({error:!0}):(n.setState({error:!1}),n.props.addItem(t))},n.onTitleChanged=function(t){n.props.setText&&n.props.setText(t.currentTarget.value),n.setState({error:!1,title:t.currentTarget.value})},n.onKeyPress=function(t){"Enter"===t.currentTarget.value&&n.onAddItemClick()},n.render=function(){var t=n.state.error?"error":"";return o.a.createElement("div",{className:"todoList-newTaskForm titile-newTaskForm"},o.a.createElement("input",{type:"text",onKeyPress:n.onKeyPress,placeholder:"New task name",onChange:n.onTitleChanged,className:t,value:n.state.title}),o.a.createElement("button",{onClick:n.onAddItemClick,className:"btnNewTaskForm"},"Add"))},n}return Object(u.a)(e,t),e}(o.a.Component)),f=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={isHidden:!1},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onCompletedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n.onShowFiltersClick=function(){n.setState({isHidden:!1})},n.onHideFiltersClick=function(){n.setState({isHidden:!0})},n.render=function(){var t="All"===n.props.filterValue?"filter-active":"",e="Completed"===n.props.filterValue?"filter-active":"",a="Active"===n.props.filterValue?"filter-active":"";return o.a.createElement("div",{className:"todoList-footer"},!n.state.isHidden&&o.a.createElement("div",{className:"todoList-footer-block"},o.a.createElement("button",{onClick:n.onAllFilterClick,className:t},"All"),o.a.createElement("button",{onClick:n.onCompletedFilterClick,className:e},"Completed"),o.a.createElement("button",{onClick:n.onActiveFilterClick,className:a},"Active")),!n.state.isHidden&&o.a.createElement("button",{onClick:n.onHideFiltersClick},"hide"),n.state.isHidden&&o.a.createElement("button",{onClick:n.onShowFiltersClick},"show"))},n}return Object(u.a)(e,t),e}(o.a.Component),T=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={editMode:!1,title:n.props.task.title},n.activatedEditMode=function(){n.setState({editMode:!0})},n.deActivatedEditMode=function(){n.props.changeTitle(n.props.task.id,n.state.title),n.setState({editMode:!1})},n.onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0;n.props.changeStatus(n.props.task.id,e)},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.deleteTask=function(){n.props.deleteTask(n.props.task.id)},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.task.isDone?"todoList-task done":"todoList-task";return o.a.createElement("div",{className:t},o.a.createElement("input",{type:"checkbox",checked:this.props.task.isDone,onChange:this.onIsDoneChanged}),this.state.editMode?o.a.createElement("input",{autoFocus:!0,value:this.state.title,onBlur:this.deActivatedEditMode,onChange:this.onTitleChanged}):o.a.createElement("span",{onClick:this.activatedEditMode}," ",this.state.title,", priority: ",this.props.task.priority),o.a.createElement("button",{className:"buttonClose",type:"button",onClick:this.deleteTask},"x"))}}]),e}(o.a.Component),h=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).render=function(){var t=n.props.tasks.map((function(t){return o.a.createElement(T,{task:t,changeStatus:n.props.changeStatus,changeTitle:n.props.changeTitle,deleteTask:n.props.deleteTask,key:t.id})}));return o.a.createElement("div",{className:"todoList-tasks"},t)},n}return Object(u.a)(e,t),e}(o.a.Component),k=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={editTitle:!1,title:n.props.title},n.deActivatedEdit=function(){n.setState({editTitle:!1}),n.props.updateTodoTitle(n.state.title)},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.activatedEdit=function(){n.setState({editTitle:!0})},n.render=function(){return o.a.createElement("div",{className:"todoList-header__wrapper"},o.a.createElement("h1",null,n.state.editTitle?o.a.createElement("input",{autoFocus:!0,value:n.state.title,onBlur:n.deActivatedEdit,onChange:n.onTitleChanged}):o.a.createElement("span",{onClick:n.activatedEdit},n.state.title)),o.a.createElement("button",{className:"btnClose",type:"button",onClick:n.props.deleteTodolist},"x"))},n}return Object(u.a)(e,t),e}(o.a.Component),m=n(10),v=n(16),b=n(1),C=n(28),g=n.n(C).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"a5358ace-4ecb-440c-9225-23342cbb6a67"}}),O=function(t,e){return g.post("/".concat(e,"/tasks"),{title:t})},E=function(t){return g.post("",{title:t})},j=function(t){return g.put("/".concat(t.todoListId,"/tasks/").concat(t.id),t)},y=function(t){return g.delete("/".concat(t))},S=function(t,e){return g.delete("/".concat(e,"/tasks/").concat(t))},A=function(){return g.get("")},w=function(t){return g.get("/".concat(t,"/tasks"))},I=function(t,e){return g.put("/".concat(e),{title:t})},L="TodoList/Reducer/SET_TODOLISTS",F="TodoList/Reducer/ADD-TODOLIST",N="TodoList/Reducer/DELETE-TODOLIST",D="TodoList/Reducer/DELETE-TASK",M="TodoList/Reducer/ADD-TASK",K="TodoList/Reducer/SET_TASKS",R="TodoList/Reducer/UPDATE-TASK",H={todolists:[]},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K:return Object(b.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(b.a)({},t,{tasks:e.tasks}):t}))});case L:var n=e.todolists.map((function(t){return Object(b.a)({},t,{tasks:[]})}));return Object(b.a)({},t,{todolists:n});case F:var a=Object(b.a)({},e.newTodolist,{tasks:[]});return Object(b.a)({},t,{todolists:[a].concat(Object(v.a)(t.todolists))});case N:return Object(b.a)({},t,{todolists:t.todolists.filter((function(t){return t.id!==e.todolistId}))});case D:return Object(b.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(b.a)({},t,{tasks:t.tasks.filter((function(t){return t.id!==e.taskId}))}):t}))});case M:return Object(b.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(b.a)({},t,{tasks:[].concat(Object(v.a)(t.tasks),[e.newTask])}):t}))});case R:return Object(b.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(b.a)({},t,{tasks:t.tasks.map((function(t){return t.id!==e.taskId?t:Object(b.a)({},t,{},e.obj)}))}):t}))})}return console.log("reducer: ",e),t},x=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={tasks:[],filterValue:"All"},n.saveState=function(){var t=JSON.stringify(n.state);localStorage.setItem("our-state-"+n.props.id,t)},n.restoreState=function(){n.props.getTasksTC(n.props.id)},n.addTask=function(t){n.props.addTaskTC(t,n.props.id)},n.changeFilter=function(t){n.setState({filterValue:t},(function(){n.saveState()}))},n.changeTask=function(t,e){n.props.updateTaskTC(t,e,n.props.id)},n.deleteTodolist=function(){n.props.deleteTodolistTC(n.props.id)},n.deleteTask=function(t){n.props.deleteTaskTC(t,n.props.id)},n.changeStatus=function(t,e){n.changeTask(t,{status:e})},n.changeTitle=function(t,e){n.changeTask(t,e)},n.updateTodoTitle=function(t){n.props.updateTodolistTitleTC(t,n.props.id)},n.render=function(){n.props.tasks;return o.a.createElement("div",{className:"App-wrapper"},o.a.createElement("div",{className:"todoList"},o.a.createElement("div",{className:"todoList-header"},o.a.createElement(k,{title:n.props.title,deleteTodolist:n.deleteTodolist,updateTodoTitle:n.updateTodoTitle}),o.a.createElement(p,{addItem:n.addTask,deleteTask:n.deleteTask})),o.a.createElement(h,{tasks:function(t,e){return t.filter((function(t){switch(e){case"All":return!0;case"Completed":return t.isDone;case"Active":return!t.isDone;default:return!0}}))}(n.props.tasks,n.state.filterValue),changeStatus:n.changeStatus,changeTitle:n.changeTitle,deleteTask:n.deleteTask}),o.a.createElement(f,{filterValue:n.state.filterValue,changeFilter:n.changeFilter})))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(o.a.Component),P=Object(m.b)(null,{addTaskTC:function(t,e){return function(n){O(t,e).then((function(t){var a=t.data.data.item;n(function(t,e){return{type:M,newTask:t,todolistId:e}}(a,e))}))}},getTasksTC:function(t){return function(e){w(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:K,tasks:t,todolistId:e}}(a,t))}))}},updateTaskTC:function(t,e,n){return function(a,o){o().reducer.todolists.find((function(t){return t.id===n})).tasks.forEach((function(n){n.id===t&&j(Object(b.a)({},n,{},e)).then((function(t){var e=t.data.data.item;0===t.data.resultCode&&a(function(t,e,n){return{type:R,taskId:t,obj:e,todolistId:n}}(e.id,e,e.todolistId))}))}))}},deleteTodolistTC:function(t){return function(e){y(t).then((function(n){0===n.data.resultCode&&e(function(t){return{type:N,todolistId:t}}(t))}))}},deleteTaskTC:function(t,e){return function(n){S(t,e).then((function(a){n(function(t,e){return{type:D,taskId:t,todolistId:e}}(t,e))}))}},updateTodolistTitleTC:function(t,e){return function(n){I(t,e).then((function(a){0===a.data.resultCode&&n(function(t,e){return{type:"TodoList/Reducer/UPDATE-TASK",newTodolistTitle:t,todolistId:e}}(t,e))}))}}})(x),B=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={todolists:[]},n.restoreState=function(){n.props.getTodolistTC()},n.addTodoList=function(t){n.props.createTodolistTC(t)},n.render=function(){var t=n.props.todolists.map((function(t){return o.a.createElement(P,{id:t.id,title:t.title,tasks:t.tasks,key:t.id})}));return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement(p,{addItem:n.addTodoList})),o.a.createElement("div",{className:"appWrapper"},t))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(o.a.Component),_=Object(m.b)((function(t){return{todolists:t.reducer.todolists}}),{getTodolistTC:function(){return function(t){A().then((function(e){var n;t((n=e.data,{type:L,todolists:n}))}))}},createTodolistTC:function(t){return function(e){E(t).then((function(t){var n=t.data.data.item;e({type:F,newTodolist:n})}))}}})(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(11),U=n(29),W=Object(J.c)({reducer:V}),Y=Object(J.d)(W,Object(J.a)(U.a));r.a.render(o.a.createElement(m.a,{store:Y},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1a11033e.chunk.js.map