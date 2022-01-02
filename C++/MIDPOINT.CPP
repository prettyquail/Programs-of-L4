#include<iostream.h>
#include<conio.h>
#include<graphics.h>
#include<dos.h>
void circlemidpoint(int, int,int);
void drawcircle(int,int,int,int);
int main()
{
	int xc,yc,r;
	int gd=DETECT,gm;
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	cout<<"Enter center coordinates of circle:";
	cin>>xc>>yc;
	cout<<"Enter radius of circle:";
	cin>>r;
	circlemidpoint(xc,yc,r);
	getch();
	closegraph();
	return 0;
}
void circlemidpoint(int xc,int yc,int r)
{
	int x=0;
	int y=r;
	int p=5/4-r;
	while(x<y)
	{
		drawcircle(xc,yc,x,y);
		x++;
		if(p<0)
		{
			p=p+2*x+3;
		}
		else
		{
			y--;
			p=p+2*(x-y)+5;
		}
		drawcircle(xc,yc,x,y);
		delay(100);
	}
}
void drawcircle(int xc,int yc,int x,int y)
{
	putpixel(xc+x,yc+y,GREEN);
	putpixel(xc-x,yc+y,RED);
	putpixel(xc+x,yc-y,YELLOW);
	putpixel(xc-x,yc-y,BLUE);
	putpixel(xc+y,yc+x,WHITE);
	putpixel(xc-y,yc+x,RED);
	putpixel(xc+y,yc-x,GREEN);
	putpixel(xc-y,yc-x,RED);
}