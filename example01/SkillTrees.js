function solution(skill, skill_trees) {
    let answer = 0;
    
    // 자리수 
    let wordLength = skill.length;
    
    // Skill Tree 행의 수 
    let skillTreeRows = skill_trees.length;

    for( let i = 0; i < skillTreeRows ; i ++){

        let isPass = false;
        for (let j = 0; j < wordLength - 1; j ++ ){
        
            let preWordIndexOf = skill_trees[i].indexOf(skill.substring(j, j + 1));
            let nextWordIndexOf = skill_trees[i].indexOf(skill.substring(j + 1, j + 2));

            if(preWordIndexOf == -1 && nextWordIndexOf > -1){
                isPass = false;
                break;
            }else if(preWordIndexOf > -1 && nextWordIndexOf > -1 && preWordIndexOf < nextWordIndexOf ){
                isPass = true;
            }else if(preWordIndexOf == nextWordIndexOf){
                isPass = true;
            }else if(preWordIndexOf > -1 && nextWordIndexOf == -1){
                isPass = true;
            }else {
                isPass = false;
                break;
            }
        }

        if(isPass){
            answer++;
            console.log(skill_trees[i]);
        }
    }
  
    return answer;
}