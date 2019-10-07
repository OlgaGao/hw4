# hw4
How many lines are drawn each frame? In other words, how often does the for loop run?
one line draws in each frame and left and right sides are removed, therefore, 400-20=380. so in the distance of 380,each line draws 10 pixels per time, therefore there are 38 lines which means 38 times total.


What do the first, second, and third appearances of the number 10 do in the code?
for the initial X=10 means the horizontal start point of X will start from the left side at the 10 pixels;for the condition x<width-10 it means the horizontal X end point will be from the right side at 390 pixels, which is 400 width - 10 pixels width; for the increment x=x+10,it means the distance between two lines is 10,each distance between two lines are 10 pixels.


part#2
How many times does the loop body run each frame, once the x and y arrays are full?
six times


What are two ways of increasing the spacing between rings?
i=i+10, change the number of 10,more than 10,it will increasing the spacing between rings;


How can you make the ellipse trail longer?
inside the ellipse 1+ (x.length - i),change the number of 1 before the +, it will help make the ellipse trail longer but it also changed the circle size and number; and also if changed the  x = x.slice(-50);y = y.slice(-50) the number after slice, it will make the ellipse trail longer.
