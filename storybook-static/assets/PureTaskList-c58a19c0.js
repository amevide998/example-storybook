import{T as p}from"./Task-ddff5ec8.js";import{r as _,b as c,d as f,e as r,F as l,f as k,o as t,g as e,j as h,k as d}from"./vue.esm-bundler-00a9792d.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"PureTaskList",components:{Task:p},props:{tasks:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["archive-task","pin-task"],setup(a,{emit:i}){return a=_(a),{isEmpty:c(()=>a.tasks.length===0),tasksInOrder:c(()=>[...a.tasks.filter(s=>s.state==="TASK_PINNED"),...a.tasks.filter(s=>s.state!=="TASK_PINNED")]),onArchiveTask(s){i("archive-task",s)},onPinTask(s){i("pin-task",s)}}}},T={class:"list-items"},g=e("span",{class:"glow-checkbox"},null,-1),y=e("span",{class:"glow-text"},[e("span",null,"Loading"),d(),e("span",null,"cool"),d(),e("span",null,"state")],-1),P=[g,y],x={key:1,class:"list-items"},N=e("div",{class:"wrapper-message"},[e("span",{class:"icon-check"}),e("p",{class:"title-message"},"You have no tasks"),e("p",{class:"subtitle-message"},"Sit back and relax")],-1),A=[N];function b(a,i,s,n,L,B){const m=f("Task");return t(),r("div",T,[s.loading?(t(),r(l,{key:0},k(6,o=>e("div",{key:o,class:"loading-item"},P)),64)):n.isEmpty?(t(),r("div",x,A)):(t(!0),r(l,{key:2},k(n.tasksInOrder,o=>(t(),h(m,{key:o.id,task:o,onArchiveTask:n.onArchiveTask,onPinTask:n.onPinTask},null,8,["task","onArchiveTask","onPinTask"]))),128))])}const w=v(u,[["render",b]]);u.__docgenInfo={displayName:"PureTaskList",exportName:"default",description:"",tags:{},props:[{name:"tasks",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/home/vidi/Documents/storybook/example/src/components/task/PureTaskList.vue"]};export{w as P};
