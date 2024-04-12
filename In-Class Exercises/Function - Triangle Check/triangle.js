function isTriangle(x,y,z){
    if (x<=0 || y<=0 || z<=0){
        return 'none'
    } else if (x>=y+z || y>=x+z || z>=x+y){
        return 'none'
    }
    if (x==y && y==z){
        return 'equilateral'
    } else if (x==y || y==z || x==z){
        return 'isosceles'
    } else if (x!==y && y!==z && x!==z){
        return 'scalene'
    }
}