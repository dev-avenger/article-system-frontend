const filterFields = [
    {
        categoryName: "Category",
        listofSubCategories:[
            {   
                id:"sports",
                label:"Sports",
                name:"sports",
                type:"checkbox",                
            },
            {
                id:"news",
                label:"News",
                name:"news",
                type:"checkbox",   
            },
            {
                id:"travel",
                label:"Travel",
                name:"travel",
                type:"checkbox",   
            },
        ]   
    },
    {
        categoryName: "Sources",
        listofSubCategories:[
            {   
                id:"newyorktimes",
                label:"NewYork Times",
                name:"newyorktimes",
                type:"checkbox",                
            },
            {
                id:"guardian",
                label:"Guardian",
                name:"guardian",
                type:"checkbox",   
            },
            {
                id:"newsapi",
                label:"News Api",
                name:"newsapi",
                type:"checkbox",   
            },
        ]   
    },
];
export default filterFields;