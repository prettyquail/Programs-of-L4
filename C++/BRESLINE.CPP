#include<iostream.h>
#include<conio.h>
#include<stdio.h>
#include<graphics.h>
void main()
{
	int gd=DETECT,gm;
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	int x,y,x1,y1,x2,y2,p,dx,dy;
	cout<<"Enter first and point of line:";
	cin>>x1>>y1;
	cout<<"Enter second and point of line:";
	cin>>x2>>y2;
	dx=x2-x1;
	dy=y2-y1;
	p=2*dy-dx;
	x=x1;
	y=y1;
	putpixel(x,y,WHITE);

	while(x<=x2)
	{
		if(p<0)
		{
			x=x+1;
			p=p+2*dy;
		}
		else
		{
			x=x+1;
			y=y+1;
			p=p+2*dy-dx;
		}
		putpixel(x,y,WHITE);
	}
	getch();
	closegraph();
}
