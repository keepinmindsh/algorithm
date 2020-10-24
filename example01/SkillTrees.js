function solution(skill, skill_trees) {
    let answer = 0;
    
    // 자리수 
    let wordLength = skill.length;
    
    // Skill Tree 행의 수 
    let skillTreeRows = skill_trees.length;

    for( let i = 0; i < skillTreeRows ; i ++){

        let isPass = false;
        
        if(wordLength == 1){
            answer++;
        }else{
            for (let j = 0; j < wordLength - 1; j ++ ){
                
                let stringValue = skill_trees[i];
        
                let preWordIndexOf = stringValue.indexOf(skill.substring(j, j + 1));
                let nextWordIndexOf = stringValue.indexOf(skill.substring(j + 1, j + 2));

                if(preWordIndexOf > -1 && nextWordIndexOf == -1){
                    isPass = true;
                }else if(preWordIndexOf == -1 && nextWordIndexOf > -1){
                    isPass = false;
                    break;
                }else if(preWordIndexOf < nextWordIndexOf ){
                    isPass = true;
                }else if(preWordIndexOf == nextWordIndexOf){
                    isPass = true;
                }else {
                    isPass = false;
                    break;
                }
            } 
            
            if(isPass){
                answer++;
            }
        }    
    }
  
    return answer;
}