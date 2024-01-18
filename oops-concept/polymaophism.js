polymorphism allows you to use a single function or method name to perform different actions 
    based on the types of arguments or objects involve



class shape(){
    draw(){
        return "im genric shape"
    }
}

class square extends shape{
    draw(){
        return "im square"
    }
}


class circle extends shape{
    draw(){
        return "im circle"
    }
}

ob= new shape()



