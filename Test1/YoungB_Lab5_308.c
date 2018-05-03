#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

#define Round(x) ( (int)( x + (abs(x) / x) * .5))
typedef struct person
{
	char name[30];
	int age;
	 union 
	{
		 struct 
		{
			char school[30];
		} Child;
		 struct 
		{
			char school[30];
			double GPA;
		} collegeStudent;
		 struct adult
		{
			char company[30];
			double salary;
		} Adult;
	} Kind;
	enum 
	{
		kid, Student, Adult
		
	} KindOfPerson;
	
	
} Person;

void printPerson(Person*);

void main()
{
	Person P1;
	strcpy(P1.name, "Bob");
	P1.age = 20;
	strcpy(P1.Kind.collegeStudent.school, "K-State");
	P1.Kind.collegeStudent.GPA = 3.5;
	P1.KindOfPerson = Student;
	printPerson(&P1);
	printf("\n");
	Person* P2 = malloc(sizeof(Person));
	strcpy((*P2).name, "Alison");// bd
	(*P2).age = 10;   //gsdgsdf
	strcpy((*P2).Kind.Child.school, "Amanda Arnold Elementary");
	(*P2).KindOfPerson = kid;
	printPerson(P2);  
	free(P2);
	
	printf("\n2.2 -> %d\n", Round(2.2));
	printf("\n2.7 -> %d\n", Round(2.7));
	printf("\n-2.2 -> %d\n", Round(-2.2));
	printf("\n-2.7 -> %d\n", Round(-2.7));

}

void printPerson(Person* p)
{
	printf("Name is %s\n", (*p).name);
	printf("Age is %d\n", (*p).age);
	if ((*p).KindOfPerson == kid)
	{
		printf("School is %s\n", (*p).Kind.Child.school);
	}
	else if ((*p).KindOfPerson == Student)
	{
		printf("School is %s\n", (*p).Kind.collegeStudent.school);
		printf("GPA is %e\n", (*p).Kind.collegeStudent.GPA);
	}
	else if ((*p).KindOfPerson == Adult)
	{
		printf("Company is %s\n", (*p).Kind.Adult.company);
		printf("Salray is %e\n", (*p).Kind.Adult.salary); ////gvsdfg
	}
	
}