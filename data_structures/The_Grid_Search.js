//https://www.hackerrank.com/challenges/the-grid-search/problem?isFullScreen=true
function gridSearch(G, P) {
    
    if(G.length < P.length || G[0].length < P[0].length) return "NO" 
    for(let i = 0; i<G.length;i++){ 
        if(G[i].indexOf(P[0]) !== -1 && (G.length-P.length>=i)){
            for(let j = 0; j<G[0].length; j++){
                let is = true
                for(let k = 0; k<P[0].length;k++){
                    for(let l = 0; l<P.length;l++){
                        if(G[i+l][j+k] === P[l][k]){
                            continue
                        }
                        is = false
                    }
                }
                if(is)return "YES"
            }
        }
    }
    return "NO"
    
}