#include<graphics.h>
#include<conio.h>
#include<stdio.h>
#include<stdlib.h>
void main()
{
	int gdriver=DETECT,gmode;
	initgraph(&gdriver,&gmode,"c:/turboc3/bgi");
	putpixel(100,100,WHITE);
	setcolor(YELLOW);
	line(10,10,50,50);
	setcolor(RED);
	circle(200,200,100);
	getch();
	closegraph();
}