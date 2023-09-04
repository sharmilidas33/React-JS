public class Rectangle {
    int length;
    int breadth;

    void calculateArea(int length, int breadth){
        this.length = length;
        this.breadth= breadth;
        double area= length*breadth;
        System.out.println("Area is: "+area);
    }

    public static void main(String[] args) {
        Rectangle obj1= new Rectangle();
        obj1.calculateArea(2, 3);
    }
}

