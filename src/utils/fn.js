export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > 17){
        title.split("").reduce((acc, cur) => {
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join("")}...`;
    }
    return title;
}